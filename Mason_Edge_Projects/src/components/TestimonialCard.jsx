import { Star, Quote } from "lucide-react";

export function TestimonialCard({
  name,
  role,
  company,
  content,
  rating = 5,
  image,
}) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1 relative">
      <div className="space-y-4">
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
          ))}
        </div>

        {/* Testimonial Quote Text */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic relative z-10">
          "{content}"
        </p>
      </div>

      {/* Author Details */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border border-slate-200"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-base shadow-sm">
            {name ? name.charAt(0) : "M"}
          </div>
        )}
        <div>
          <h4 className="font-bold text-slate-900 text-base leading-snug">
            {name}
          </h4>
          <p className="text-xs text-slate-500 font-medium">
            {role}
            {company ? ` · ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
