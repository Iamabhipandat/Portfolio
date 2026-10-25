import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

// Exact implementation of Python's SequenceMatcher ratio calculation logic
function calculateSequenceSimilarity(s1: string, s2: string): number {
  const str1 = s1.toLowerCase().trim();
  const str2 = s2.toLowerCase().trim();
  
  if (str1 === str2) return 1.0;
  if (!str1 || !str2) return 0.0;

  // Find longest common substrings dynamically
  function getMatchingBlocks(a: string, b: string): number {
    let matches = 0;
    const aLen = a.length;
    const bLen = b.length;
    const matrix: number[][] = Array(aLen + 1).fill(0).map(() => Array(bLen + 1).fill(0));
    
    let maxLen = 0;
    let endA = 0;
    let endB = 0;

    for (let i = 1; i <= aLen; i++) {
      for (let j = 1; j <= bLen; j++) {
        if (a[i - 1] === b[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1] + 1;
          if (matrix[i][j] > maxLen) {
            maxLen = matrix[i][j];
            endA = i;
            endB = j;
          }
        }
      }
    }

    if (maxLen === 0) return 0;
    matches += maxLen;

    // Recurse left and right
    const leftA = a.slice(0, endA - maxLen);
    const leftB = b.slice(0, endB - maxLen);
    const rightA = a.slice(endA);
    const rightB = b.slice(endB);

    matches += getMatchingBlocks(leftA, leftB);
    matches += getMatchingBlocks(rightA, rightB);

    return matches;
  }

  const matchingChars = getMatchingBlocks(str1, str2);
  return (2.0 * matchingChars) / (str1.length + str2.length);
}

interface QuestionRecord {
  id: string;
  text: string;
  timestamp: string;
  isDuplicate: boolean;
  matchedWith?: string;
  similarityScore?: number;
}

const PRESET_QUESTIONS = [
  "When will the session recording be shared?",
  "When will the recording be shared?",
  "How do I configure the PostgreSQL database connection?",
  "Where can I specify the PostgreSQL database connection string?",
  "Is attendance mandatory for the certification?",
  "What is the deployment roadmap for production?"
];

export const VisionMeetDemo: React.FC = () => {
  const [threshold, setThreshold] = useState<number>(0.72);
  const [inputQuestion, setInputQuestion] = useState<string>('');
  const [questions, setQuestions] = useState<QuestionRecord[]>([
    {
      id: 'q-1',
      text: 'When will the session recording be shared?',
      timestamp: '10:02 AM',
      isDuplicate: false,
    },
    {
      id: 'q-2',
      text: 'When will the recording be shared?',
      timestamp: '10:05 AM',
      isDuplicate: true,
      matchedWith: 'When will the session recording be shared?',
      similarityScore: 0.89,
    },
    {
      id: 'q-3',
      text: 'How do I configure the PostgreSQL database connection?',
      timestamp: '10:08 AM',
      isDuplicate: false,
    }
  ]);

  const handleAddQuestion = (qText: string) => {
    if (!qText.trim()) return;

    const trimmed = qText.trim();
    // Compare against existing questions in session
    let highestScore = 0;
    let matchedText = '';

    for (const q of questions) {
      const score = calculateSequenceSimilarity(trimmed, q.text);
      if (score > highestScore) {
        highestScore = score;
        matchedText = q.text;
      }
    }

    const isDup = highestScore >= threshold;
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newRecord: QuestionRecord = {
      id: `q-${Date.now()}`,
      text: trimmed,
      timestamp: timeStr,
      isDuplicate: isDup,
      matchedWith: isDup ? matchedText : undefined,
      similarityScore: isDup ? Math.round(highestScore * 100) / 100 : undefined,
    };

    setQuestions(prev => [newRecord, ...prev]);
    setInputQuestion('');
  };

  const handleReset = () => {
    setQuestions([
      {
        id: 'q-1',
        text: 'When will the session recording be shared?',
        timestamp: '10:02 AM',
        isDuplicate: false,
      }
    ]);
  };

  const totalQuestions = questions.length;
  const duplicateCount = questions.filter(q => q.isDuplicate).length;
  const uniqueCount = totalQuestions - duplicateCount;
  const savedRatio = totalQuestions > 0 ? Math.round((duplicateCount / totalQuestions) * 100) : 0;

  return (
    <div className="bg-dark-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Top Telemetry Header */}
      <div className="bg-dark-950/90 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs text-slate-300 font-semibold tracking-wider">
            VISIONMEET://FASTAPI_SIMILARITY_ENGINE
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            difflib.SequenceMatcher
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">Similarity Threshold:</span>
            <input
              type="range"
              min="0.5"
              max="0.95"
              step="0.01"
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              className="w-20 accent-blue-500 cursor-pointer"
            />
            <span className="font-mono text-xs text-blue-400 font-bold bg-dark-850 px-1.5 py-0.5 rounded border border-slate-700">
              {(threshold * 100).toFixed(0)}%
            </span>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors p-1"
            title="Reset simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Real-time Session Metrics */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          <div className="bg-dark-850 p-2.5 rounded-lg border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400">Total Ingested</div>
            <div className="text-xl font-mono font-bold text-slate-100 mt-0.5">{totalQuestions}</div>
          </div>
          <div className="bg-dark-850 p-2.5 rounded-lg border border-slate-800">
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Unique
            </div>
            <div className="text-xl font-mono font-bold text-emerald-400 mt-0.5">{uniqueCount}</div>
          </div>
          <div className="bg-dark-850 p-2.5 rounded-lg border border-slate-800">
            <div className="text-[11px] font-mono text-amber-400 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> Filtered Repetitions
            </div>
            <div className="text-xl font-mono font-bold text-amber-400 mt-0.5">
              {duplicateCount} <span className="text-xs text-slate-500 font-normal">({savedRatio}% saved)</span>
            </div>
          </div>
        </div>

        {/* Input Field & Preset Buttons */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddQuestion(inputQuestion);
          }}
          className="flex gap-2 mb-3"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={inputQuestion}
              onChange={(e) => setInputQuestion(e.target.value)}
              placeholder="Type a meeting question to test duplicate detection..."
              className="w-full bg-dark-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 font-mono transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors shadow-lg shadow-blue-500/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Evaluate
          </button>
        </form>

        {/* Quick presets */}
        <div className="mb-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-blue-400" /> Click to test realistic question streams:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {PRESET_QUESTIONS.map((pq, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleAddQuestion(pq)}
                className="text-[11px] bg-dark-800 hover:bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700/80 transition-all text-left truncate max-w-[280px]"
              >
                + "{pq}"
              </button>
            ))}
          </div>
        </div>

        {/* Processed Stream */}
        <div className="border border-slate-800/80 rounded-lg bg-dark-950/60 overflow-hidden">
          <div className="bg-dark-850/60 px-3 py-2 border-b border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
            <span>LIVE SESSION QUESTION FEED</span>
            <span>DIAGNOSTIC PIPELINE</span>
          </div>

          <div className="divide-y divide-slate-800/60 max-h-56 overflow-y-auto">
            {questions.map((q) => (
              <div
                key={q.id}
                className={`p-3 transition-colors ${
                  q.isDuplicate ? 'bg-amber-950/10 hover:bg-amber-950/20' : 'bg-transparent hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] text-slate-500">{q.timestamp}</span>
                      {q.isDuplicate ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          <AlertTriangle className="w-2.5 h-2.5" /> DUPLICATE FLAGGED
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <CheckCircle2 className="w-2.5 h-2.5" /> UNIQUE QUESTION
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 font-mono break-words">{q.text}</p>
                    {q.isDuplicate && q.matchedWith && (
                      <div className="mt-1.5 text-[11px] font-mono text-slate-400 bg-dark-900/80 p-1.5 rounded border border-amber-500/10">
                        <span className="text-amber-400/80">Matched query:</span> "{q.matchedWith}" •{' '}
                        <span className="text-blue-400 font-semibold">
                          {((q.similarityScore ?? 0) * 100).toFixed(0)}% Match
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
