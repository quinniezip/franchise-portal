import { useState } from 'react';

export const CHANNELS = [
  {
    id: 'shopeefood',
    name: 'ShopeeFood',
    icon: '🍊',
    desc: 'Shopee Partner App',
    bg: 'bg-orange-50',
    border: 'border-orange-300',
    selectedBg: 'bg-orange-100',
    ring: 'ring-orange-400',
  },
  {
    id: 'grabfood',
    name: 'GrabFood',
    icon: '🟢',
    desc: 'GrabMerchant App',
    bg: 'bg-green-50',
    border: 'border-green-300',
    selectedBg: 'bg-green-100',
    ring: 'ring-green-400',
  },
  {
    id: 'vill',
    name: 'VILL',
    icon: '🔵',
    desc: 'Vill Merchant App',
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    selectedBg: 'bg-blue-100',
    ring: 'ring-blue-400',
  },
  {
    id: 'goka',
    name: 'Goka',
    icon: '🟣',
    desc: 'Goka Merchant App',
    bg: 'bg-purple-50',
    border: 'border-purple-300',
    selectedBg: 'bg-purple-100',
    ring: 'ring-purple-400',
  },
  {
    id: 'iloka',
    name: 'ILOKA',
    icon: '🔴',
    desc: 'ILOKA Partner App',
    bg: 'bg-red-50',
    border: 'border-red-300',
    selectedBg: 'bg-red-100',
    ring: 'ring-red-400',
  },
];

export default function ChannelSetup({ onComplete, initial = [] }) {
  const [selected, setSelected] = useState(initial);

  function toggle(id) {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }

  function handleSubmit() {
    if (selected.length === 0) return;
    localStorage.setItem('selected_channels', JSON.stringify(selected));
    onComplete(selected);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg max-w-xl w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🍵</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Chào mừng đến FoodApps Training!
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Vui lòng chọn <strong>các kênh FoodApps</strong> mà cửa hàng bạn đang triển khai.
            <br />Chương trình đào tạo sẽ được cá nhân hóa theo lựa chọn của bạn.
          </p>
        </div>

        {/* Channel grid – 2 cols, last item centred if odd */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {CHANNELS.map((ch, idx) => {
            const isSelected = selected.includes(ch.id);
            const isLast = idx === CHANNELS.length - 1 && CHANNELS.length % 2 !== 0;
            return (
              <button
                key={ch.id}
                onClick={() => toggle(ch.id)}
                className={`relative flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all text-center ${
                  isLast ? 'col-span-2 sm:col-span-1 sm:col-start-1 mx-auto w-full sm:w-48' : ''
                } ${
                  isSelected
                    ? `${ch.selectedBg} ${ch.border} shadow-md ring-2 ${ch.ring}`
                    : `${ch.bg} border-gray-200 hover:border-gray-300`
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                )}
                <span className="text-3xl">{ch.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{ch.name}</p>
                  <p className="text-xs text-gray-500">{ch.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Always-included notice */}
        <div className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-xl p-3 mb-6">
          <span className="text-xl">🎁</span>
          <div>
            <p className="text-sm font-medium text-purple-800">CRM & Tích – Đổi Điểm</p>
            <p className="text-xs text-purple-600">Luôn được bao gồm trong chương trình đào tạo</p>
          </div>
          <span className="ml-auto text-green-500 text-lg">✅</span>
        </div>

        {selected.length > 0 && (
          <p className="text-center text-xs text-gray-500 mb-3">
            Đã chọn <strong>{selected.length}</strong> kênh:{' '}
            {CHANNELS.filter(c => selected.includes(c.id)).map(c => c.name).join(', ')}
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={selected.length === 0}
          className={`w-full py-3 rounded-xl font-semibold text-white text-sm transition-all ${
            selected.length > 0
              ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 shadow-md'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {selected.length > 0
            ? `Bắt đầu học với ${selected.length} kênh →`
            : 'Vui lòng chọn ít nhất 1 kênh'}
        </button>
      </div>
    </div>
  );
}
