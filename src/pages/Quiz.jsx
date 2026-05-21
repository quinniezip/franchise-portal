import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { modules } from '../data/courses';
import ProgressBar from '../components/ProgressBar';

export default function Quiz() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes[moduleId];
  const mod = modules.find(m => m.id === moduleId);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);

  if (!quiz || !mod) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">Không tìm thấy bài kiểm tra.</p>
        <Link to="/" className="text-orange-600 hover:underline mt-4 inline-block">← Quay về</Link>
      </div>
    );
  }

  const question = quiz.questions[current];
  const totalQ = quiz.questions.length;

  function handleSelect(idx) {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
  }

  function handleNext() {
    const newAnswers = [...answers, { selected, correct: question.correct }];
    setAnswers(newAnswers);

    if (current + 1 < totalQ) {
      setCurrent(current + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      const score = newAnswers.filter(a => a.selected === a.correct).length;
      const percent = Math.round((score / totalQ) * 100);
      if (percent >= quiz.passingScore) {
        localStorage.setItem(`quiz_passed_${moduleId}`, 'true');
      }
      setFinished(true);
    }
  }

  if (finished) {
    const score = answers.filter(a => a.selected === a.correct).length;
    const percent = Math.round((score / totalQ) * 100);
    const passed = percent >= quiz.passingScore;

    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className={`rounded-2xl p-8 text-center ${passed ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-200'}`}>
          <div className="text-6xl mb-4">{passed ? '🏆' : '📚'}</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {passed ? 'Chúc mừng! Bạn đã qua bài kiểm tra!' : 'Chưa đạt – Hãy ôn lại và thử lại!'}
          </h1>
          <p className="text-gray-600 mb-6">
            Bạn trả lời đúng <strong>{score}/{totalQ}</strong> câu – Đạt <strong>{percent}%</strong>
            {' '}(Điểm đạt tối thiểu: {quiz.passingScore}%)
          </p>

          {/* Score ring */}
          <div className={`inline-flex items-center justify-center w-28 h-28 rounded-full border-8 mb-6 ${
            passed ? 'border-green-400 text-green-600' : 'border-red-300 text-red-500'
          }`}>
            <span className="text-3xl font-bold">{percent}%</span>
          </div>

          {/* Answer review */}
          <div className="text-left space-y-2 mb-8">
            {quiz.questions.map((q, i) => {
              const ans = answers[i];
              const isRight = ans?.selected === ans?.correct;
              return (
                <div key={i} className={`p-3 rounded-xl text-sm ${isRight ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  <span className="font-medium">{isRight ? '✅' : '❌'} Câu {i + 1}:</span>{' '}
                  {q.question}
                  {!isRight && (
                    <div className="mt-1 text-xs opacity-80">
                      Đáp án đúng: {q.options[q.correct]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                setCurrent(0);
                setSelected(null);
                setAnswers([]);
                setShowExplanation(false);
                setFinished(false);
              }}
              className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              🔄 Làm lại
            </button>
            <Link
              to="/"
              className={`px-6 py-3 rounded-xl font-semibold text-white transition-all bg-gradient-to-r ${mod.color} hover:opacity-90`}
            >
              ← Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-orange-600">Trang chủ</Link>
        <span>/</span>
        <span className={`bg-gradient-to-r ${mod.color} bg-clip-text text-transparent font-medium`}>
          {mod.title}
        </span>
        <span>/</span>
        <span className="text-gray-700 font-medium">Bài kiểm tra</span>
      </nav>

      <div className={`bg-gradient-to-r ${mod.color} rounded-2xl p-5 text-white mb-6`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">📝</span>
          <h1 className="text-lg font-bold">{quiz.title}</h1>
        </div>
        <ProgressBar current={current + (selected !== null ? 1 : 0)} total={totalQ} />
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
          Câu hỏi {current + 1} / {totalQ}
        </p>
        <p className="text-gray-900 font-semibold text-base leading-relaxed mb-5">
          {question.question}
        </p>

        <div className="space-y-2">
          {question.options.map((opt, idx) => {
            let style = 'border-gray-200 text-gray-700 hover:border-orange-300 hover:bg-orange-50 cursor-pointer';
            if (selected !== null) {
              if (idx === question.correct) {
                style = 'border-green-400 bg-green-50 text-green-800';
              } else if (idx === selected && selected !== question.correct) {
                style = 'border-red-400 bg-red-50 text-red-800';
              } else {
                style = 'border-gray-200 text-gray-500';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium flex items-center gap-3 ${style}`}
              >
                <span className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                  selected !== null && idx === question.correct
                    ? 'bg-green-500 border-green-500 text-white'
                    : selected !== null && idx === selected && selected !== question.correct
                    ? 'bg-red-500 border-red-500 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {['A', 'B', 'C', 'D'][idx]}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className={`rounded-xl p-4 mb-4 text-sm ${
          selected === question.correct
            ? 'bg-green-50 border border-green-200 text-green-800'
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          <p className="font-semibold mb-1">
            {selected === question.correct ? '✅ Chính xác!' : '❌ Chưa đúng!'}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {selected !== null && (
        <button
          onClick={handleNext}
          className={`w-full py-3 rounded-xl font-semibold text-white text-sm transition-all bg-gradient-to-r ${mod.color} hover:opacity-90`}
        >
          {current + 1 < totalQ ? 'Câu tiếp theo →' : 'Xem kết quả 🏁'}
        </button>
      )}
    </div>
  );
}
