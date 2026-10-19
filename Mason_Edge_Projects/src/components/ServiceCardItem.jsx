export function ServiceDetailCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between hover:-translate-y-1">
      <div className="space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-slate-900 text-slate-100 flex items-center justify-center shadow-md">
          <Icon size={26} strokeWidth={1.8} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 leading-snug">
          {title}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  )
}

export function ServiceValueBox({ title, text }) {
  return (
    <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-7 space-y-3 backdrop-blur-sm shadow-md">
      <h3 className="text-xl font-bold text-slate-100">{title}</h3>
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{text}</p>
    </div>
  )
}