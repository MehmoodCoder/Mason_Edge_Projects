import { ArrowDownRight, ArrowRight } from "lucide-react";
import Button from "./Button";

function Hero({
  badge,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  compact = false,
}) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-slate-950 text-white ${compact ? "min-h-[50vh] pt-32 pb-20" : "min-h-[85vh] pt-36 pb-28"}`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/60" />
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md text-xs font-bold tracking-widest text-slate-300 uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
            {badge}
          </div>
        )}

        <h1 className="max-w-4xl text-4xl font-black leading-none tracking-tight text-slate-100 [&_span]:text-slate-300 sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-4 pt-4">
          {primaryCta && (
            <Button to={primaryCta.to} variant="primary" size="large">
              {primaryCta.label} <ArrowRight size={18} aria-hidden="true" />
            </Button>
          )}
          {secondaryCta && (
            <Button to={secondaryCta.to} variant="outlineLight" size="large">
              {secondaryCta.label}{" "}
              <ArrowDownRight size={18} aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>

      {!compact && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center gap-3 text-xs tracking-widest text-slate-400 uppercase font-bold bg-slate-900/80 px-6 py-2.5 rounded-full backdrop-blur-md border border-slate-800 shadow-md">
          BUILDING WITH PURPOSE <span className="text-slate-500">·</span>{" "}
          MELBOURNE, AUSTRALIA
        </div>
      )}
    </section>
  );
}

export default Hero;
