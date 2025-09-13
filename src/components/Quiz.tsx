import React, { useState } from "react";

interface Question {
  question: string;
  options: string[];
  answer: number; // index của đáp án đúng
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [selected, setSelected] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qIndex: number, optionIndex: number) => {
    if (!submitted) {
      const newSelected = [...selected];
      newSelected[qIndex] = optionIndex;
      setSelected(newSelected);
    }
  };

  const handleSubmit = () => {
    let total = 0;
    questions.forEach((q, i) => {
      if (selected[i] === q.answer) total++;
    });
    setScore(total);
    setSubmitted(true);
  };

  return (
    <div>
      {questions.map((q, qIndex) => (
        <div key={qIndex} style={{ marginBottom: "1.5rem" }}>
          <p>
            Câu {qIndex + 1}: {q.question}
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: "1rem" }}>
            {q.options.map((opt, optIndex) => {
              const isSelected = selected[qIndex] === optIndex;
              let prefix = "";

              if (submitted) {
                if (optIndex === q.answer) {
                  prefix = "✅"; // đáp án đúng
                } else if (isSelected && optIndex !== q.answer) {
                  prefix = "❌"; // chọn sai
                }
              } else if (isSelected) {
                prefix = "👉"; // đánh dấu đang chọn
              }

              return (
                <li key={optIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`q-${qIndex}`}
                      value={optIndex}
                      checked={isSelected}
                      onChange={() => handleSelect(qIndex, optIndex)}
                      disabled={submitted}
                      style={{ marginRight: "0.5rem" }}
                    />
                    {prefix} {opt}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0366d6",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Nộp bài
        </button>
      ) : (
        <p>
          🎉 Kết quả: {score}/{questions.length} câu đúng
        </p>
      )}
    </div>
  );
};

export default Quiz;
