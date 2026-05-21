import { Link } from 'react-router-dom';
import { modules } from '../data/courses';
import { quizzes } from '../data/quizzes';

function getProgress(moduleId) {
  const completed = JSON.parse(localStorage.getItem(`completed_${moduleId}`) || '[]');
  const quizPassed = localStorage.getItem(`quiz_passed_${moduleId}`) === 'true';
  return { completed, quizPassed };
}

function filterLessons(mod, channels) {
  if (mod.id !== 'foodapps') return mod.lessons;
  return mod.lessons.filter(l => !l.channel || channels.includes(l.channel));
}

const CHANNEL_QUESTION_MAP = {
  shopeefood: [0, 1, 2],
  grabfood: [3, 4, 5],
  vill: [6],
  goka: [],
  iloka: [],
};

function getFilteredQuiz(moduleId, channels) {
  const quiz = quizzes[moduleId];
  if (!quiz || moduleId !== 'foodapps') return quiz;
  const keep = new Set([7]);
  channels.forEach(ch => (CHANNEL_QUESTION_MAP[ch] || []).forEach(i => keep.add(i)));
  return { ...quiz, questions: quiz.questions.filter((_, i) => keep.has(i)) };
}

// Banner hiển thị trạng thái tổng kết và lời cảm ơn
function SummaryBanner({ modules, channels }) {
  const partnerName = localStorage.getItem('partner_name') || 'bạn';
  const results = modules.map(mod => {
    const { quizPassed } = getProgress(mod.id);
    const quiz = getFilteredQuiz(mod.id, channels);
    const hasQuiz = quiz && quiz.questions.length > 0;
    return { mod, quizPassed, hasQuiz };
  });

  const quizModules = results.filter(r => r.hasQuiz);
  const allPassed = quizModules.length > 0 && quizModules.every(r => r.quizPassed);
  const anyAttempted = quizModules.some(r => r.quizPassed);
  const failedModules = quizModules.filter(r => !r.quizPassed);

  if (!anyAttempted) return null;

  if (allPassed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white mb-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-5xl">🎉</div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold mb-1">
              Chúc mừng {partnerName}! Bạn đã hoàn thành toàn bộ chương trình đào tạo.
            </h2>
            <p className="text-white/85 text-sm">
              Cảm ơn bạn đã dành thời gian học tập. Chúc bạn vận hành cửa hàng thật tốt! 🍵
            </p>
          </div>
        </div>
        {/* Kết quả từng module */}
        <div className="mt-4 grid sm:grid-cols-3 gap-2">
          {quizModules.map(({ mod }) => (
            <div key={mod.id} className="bg-white/20 rounded-xl px-4 py-2 flex items-center gap-2 text-sm font-medium">
              <span>{mod.icon}</span>
              <span className="flex-1 truncate">{mod.title}</span>
              <span>✅</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Có module chưa đạt
  return (
    <div className="space-y-3 mb-8">
      {/* Modules đã đạt */}
      {quizModules.filter(r => r.quizPassed).map(({ mod }) => (
        <div key={mod.id} className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="text-xl">{mod.icon}</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-green-800">{mod.title}</p>
            <p className="text-xs text-green-600">Bạn đã hoàn thành và đạt bài kiểm tra ✅</p>
          </div>
        </div>
      ))}

      {/* Modules chưa đạt */}
      {failedModules.map(({ mod }) => {
        const filteredLessons = filterLessons(mod, channels);
        const { completed } = getProgress(mod.id);
        const firstLesson = filteredLessons[0];
        return (
          <div key={mod.id} className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">{mod.icon}</span>
              <div>
                <p className="font-semibold text-red-800 text-sm">{mod.title}</p>
                <p className="text-xs text-red-600 mt-0.5">
                  Bạn chưa đạt bài kiểm tra module này. Hãy ôn lại bài học và thử lại nhé!
                </p>
              </div>
              <span className="ml-auto text-xl flex-shrink-0">❌</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              {firstLesson && (
                <Link
                  to={`/module/${mod.id}/lesson/${firstLesson.id}`}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r ${mod.color} text-white hover:opacity-90 transition-all`}
                >
                  📖 Ôn lại bài học
                </Link>
              )}
              <Link
                to={`/module/${mod.id}/quiz`}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-semibold bg-red-100 text-red-700 border border-red-300 hover:bg-red-200 transition-all"
              >
                🔄 Làm lại bài kiểm tra
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home({ channels = [] }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🍵</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          FoodApps Partner Training
        </h1>
        <p className="text-gray-500 text-sm">
          Chương trình đào tạo dành riêng cho các kênh:{' '}
          <span className="font-medium text-orange-600">
            {channels.length > 0
              ? ['ShopeeFood', 'GrabFood', 'VILL', 'Goka', 'ILOKA']
                  .filter((_, i) => channels.includes(['shopeefood', 'grabfood', 'vill', 'goka', 'iloka'][i]))
                  .join(', ')
              : 'Tất cả'} + CRM
          </span>
        </p>
      </div>

      {/* Summary banner */}
      <SummaryBanner modules={modules} channels={channels} />

      {/* Module Cards */}
      <div className="grid gap-6">
        {modules.map((mod) => {
          const filteredLessons = filterLessons(mod, channels);
          const filteredQuiz = getFilteredQuiz(mod.id, channels);
          const { completed, quizPassed } = getProgress(mod.id);
          const completedCount = completed.filter(id =>
            filteredLessons.some(l => l.id === id)
          ).length;

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
                      {completedCount}/{filteredLessons.length} bài học
                    </span>
                    {quizPassed && (
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        ✅ Đã qua kiểm tra
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-500"
                      style={{ width: `${filteredLessons.length > 0 ? (completedCount / filteredLessons.length) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Lessons list */}
              <div className="p-4">
                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                  {filteredLessons.map((lesson) => {
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
                {filteredQuiz && filteredQuiz.questions.length > 0 && (
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
                        <p className="font-semibold">{filteredQuiz.title}</p>
                        <p className="text-xs opacity-70">
                          {filteredQuiz.questions.length} câu hỏi • Đạt từ {filteredQuiz.passingScore}%
                        </p>
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
