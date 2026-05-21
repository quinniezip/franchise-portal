import { useParams, useNavigate, Link } from 'react-router-dom';
import { modules } from '../data/courses';
import RichText from '../components/RichText';

function getFilteredLessons(mod) {
  if (mod.id !== 'foodapps') return mod.lessons;
  try {
    const channels = JSON.parse(localStorage.getItem('selected_channels') || '[]');
    return mod.lessons.filter(l => !l.channel || channels.includes(l.channel));
  } catch {
    return mod.lessons;
  }
}

export default function Lesson() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();

  const mod = modules.find(m => m.id === moduleId);
  const lesson = mod?.lessons.find(l => l.id === lessonId);

  if (!mod || !lesson) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">Không tìm thấy bài học.</p>
        <Link to="/" className="text-orange-600 hover:underline mt-4 inline-block">← Quay về</Link>
      </div>
    );
  }

  const filteredLessons = getFilteredLessons(mod);
  const lessonIndex = filteredLessons.findIndex(l => l.id === lessonId);
  const prevLesson = filteredLessons[lessonIndex - 1];
  const nextLesson = filteredLessons[lessonIndex + 1];

  function markComplete() {
    const key = `completed_${moduleId}`;
    const completed = JSON.parse(localStorage.getItem(key) || '[]');
    if (!completed.includes(lessonId)) {
      completed.push(lessonId);
      localStorage.setItem(key, JSON.stringify(completed));
    }
    if (nextLesson) {
      navigate(`/module/${moduleId}/lesson/${nextLesson.id}`);
    } else {
      navigate(`/module/${moduleId}/quiz`);
    }
  }

  const completed = JSON.parse(localStorage.getItem(`completed_${moduleId}`) || '[]');
  const isDone = completed.includes(lessonId);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-orange-600">Trang chủ</Link>
        <span>/</span>
        <span className={`bg-gradient-to-r ${mod.color} bg-clip-text text-transparent font-medium`}>
          {mod.title}
        </span>
        <span>/</span>
        <span className="text-gray-700 font-medium truncate max-w-xs">{lesson.title}</span>
      </nav>

      {/* Lesson header */}
      <div className={`bg-gradient-to-r ${mod.color} rounded-2xl p-6 text-white mb-8`}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{lesson.icon}</span>
          <div>
            <p className="text-white/70 text-sm font-medium uppercase tracking-wide">
              Bài {lessonIndex + 1}/{filteredLessons.length}
            </p>
            <h1 className="text-2xl font-bold mt-1">{lesson.title}</h1>
            <p className="text-white/80 text-sm mt-1">⏱ {lesson.duration}</p>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="space-y-6 mb-10">
        {lesson.sections.map((section, si) => (
          <div key={si} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className={`px-5 py-3 ${mod.bgLight} border-b border-gray-100`}>
              <h2 className="font-bold text-gray-800 text-base">{section.title}</h2>
            </div>
            <div className="p-5 space-y-2">
              {section.content.map((line, li) => {
                if (!line) return <div key={li} className="h-2" />;
                return (
                  <p key={li} className="text-gray-700 leading-relaxed text-sm">
                    <RichText text={line} />
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-3">
        {prevLesson ? (
          <Link
            to={`/module/${moduleId}/lesson/${prevLesson.id}`}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800 transition-colors text-sm font-medium"
          >
            ← {prevLesson.title}
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800 transition-colors text-sm font-medium"
          >
            ← Trang chủ
          </Link>
        )}

        <button
          onClick={markComplete}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
            isDone
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : `bg-gradient-to-r ${mod.color} hover:opacity-90 text-white`
          }`}
        >
          {isDone ? (
            <>✅ Đã học – Bài tiếp theo →</>
          ) : nextLesson ? (
            <>✔ Hoàn thành & Tiếp theo →</>
          ) : (
            <>✔ Hoàn thành & Làm bài kiểm tra →</>
          )}
        </button>
      </div>
    </div>
  );
}
