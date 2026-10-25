import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.services.dedup_service import DeduplicationService

def test_identical_questions_dedup():
    q1 = "When will the session recording be shared?"
    q2 = "When will the session recording be shared?"
    ratio = DeduplicationService.calculate_similarity(q1, q2)
    assert ratio == 1.0

def test_similar_questions_flagged_duplicate():
    q1 = "When will the session recording be shared?"
    q2 = "When will the recording be shared?"
    is_dup, match, score = DeduplicationService.evaluate(q2, [q1], threshold=0.75)
    assert is_dup is True
    assert match == q1
    assert score >= 0.75

def test_distinct_questions_flagged_unique():
    q1 = "How do I configure the PostgreSQL database connection?"
    q2 = "When is the project submission deadline?"
    is_dup, match, score = DeduplicationService.evaluate(q2, [q1], threshold=0.72)
    assert is_dup is False
    assert match is None
    assert score < 0.72

if __name__ == "__main__":
    test_identical_questions_dedup()
    test_similar_questions_flagged_duplicate()
    test_distinct_questions_flagged_unique()
    print("All deduplication unit tests passed successfully!")
