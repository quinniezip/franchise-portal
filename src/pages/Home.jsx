import { Link } from 'react-router-dom';
import { modules } from '../data/courses';
import { quizzes } from '../data/quizzes';

function getProgress(moduleId) {
  const completed = JSON.parse(localStorage.getItem(`completed_${moduleId}`) || '[]');
  const quizPassed = localStorage.getItem(`quiz_passed_${moduleId}`) === 'true';
  const mod = modules.find(m => m.id === moduleId);
  if (!mod) return { completedLessons: 0, total: 0, quizPassed };
  return { completedLessons: completed.length, total: mod.lessons.length, quizPassed };
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🍵</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          FoodApps Partner Training
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Chương trình đào tạo đối tác về vận hành FoodApps và tích – đổi điểm CRM
        </p>
      </div>

      {/* Module Cards */}
      <div className="grid gap-6">
        {modules.map((mod) => {
          const { completedLessons, total, quizPassed } = getProgress(mod.id);
          const quiz = quizzes[mod.id];

          return (
            <div key={mod.id} className={`bg-white rounded-2xl shadow-sm border ${mod.borderColor} overflow-hidden`}>
              {/* Header */}
              <div className={`bg-gradient-to-r ${mod.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{mod.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold">{mod.title}</h2>
                      <p className="text-white/80 text-sm mt-1">{mod.description}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1">
                    <span className="text-white/90 text-sm font-medium">
                      {completedLessons}/{total} bài học
                    </span>
                    {quizPassed && (
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        ✅ Đã qua kiểm tra
                      </span>
                    )}
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-4">
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-500"
                      style={{ width: `${total > 0 ? (completedLessons / total) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Lessons list */}
              <div className="p-4">
                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                  {mod.lessons.map((lesson) => {
                    const completed = JSON.parse(localStorage.getItem(`completed_${mod.id}`) || '[]');
                    const isDone = completed.includes(lesson.id);
                    return (
                      <Link
                        key={lesson.id}
                        to={`/module/${mod.id}/lesson/${lesson.id}`}
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all hover:shadow-md ${
                          isDone
                            ? 'bg-green-50 border-green-200 hover:border-green-300'
                            : `${mod.bgLight} border-gray-100 hover:border-orange-200`
                        }`}
                      >
                        <span className="text-xl">{lesson.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">{lesson.title}</p>
                          <p className="text-xs text-gray-500">{lesson.duration}</p>
                        </div>
                        {isDone ? (
                          <span className="text-green-500 text-lg flex-shrink-0">✅</span>
                        ) : (
                          <span className="text-gray-300 text-lg flex-shrink-0">▶</span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Quiz button */}
                {quiz && (
                  <Link
                    to={`/module/${mod.id}/quiz`}
                    className={`flex items-center justify-between w-full p-4 rounded-xl border-2 transition-all font-medium ${
                      quizPassed
                        ? 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100'
                        : 'bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📝</span>
                      <div>
                        <p className="font-semibold">{quiz.title}</p>
                        <p className="text-xs opacity-70">{quizzes[mod.id]?.questions.length} câu hỏi • Đạt từ {quiz.passingScore}%</p>
                      </div>
                    </div>
                    <span className="text-lg">{quizPassed ? '🏆' : '→'}</span>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
