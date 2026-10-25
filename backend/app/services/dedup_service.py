from difflib import SequenceMatcher

class DeduplicationService:
    @staticmethod
    def calculate_similarity(s1: str, s2: str) -> float:
        """
        Computes pairwise lexical similarity ratio using Python's standard difflib.SequenceMatcher.
        Normalized to [0.0, 1.0].
        """
        clean_s1 = s1.lower().strip()
        clean_s2 = s2.lower().strip()
        if not clean_s1 or not clean_s2:
            return 0.0
        return SequenceMatcher(None, clean_s1, clean_s2).ratio()

    @classmethod
    def evaluate(cls, new_question: str, existing_questions: list[str], threshold: float) -> tuple[bool, str | None, float]:
        """
        Evaluates a new question against the active session question pool.
        Returns: (is_duplicate, matched_question, highest_similarity)
        """
        highest_score = 0.0
        best_match = None

        for existing in existing_questions:
            score = cls.calculate_similarity(new_question, existing)
            if score > highest_score:
                highest_score = score
                best_match = existing

        is_dup = highest_score >= threshold
        return is_dup, (best_match if is_dup else None), round(highest_score, 4)
