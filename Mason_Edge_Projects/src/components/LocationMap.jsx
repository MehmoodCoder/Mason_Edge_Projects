import { MapPin, Navigation } from "lucide-react";

export function LocationMap({ address }) {
  const encodedAddress = encodeURIComponent(address);

  const googleMapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const directDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
            <MapPin size={20} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              Office Location
            </h3>
            <p className="text-xs text-slate-500 font-medium">{address}</p>
          </div>
        </div>
        <a
          href={directDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 shrink-0"
        >
          <Navigation size={14} /> Get Directions
        </a>
      </div>

      <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden mt-3 bg-slate-100">
        <iframe
          title="Mason Edge Projects Office Location Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={googleMapEmbedUrl}
        />
      </div>
    </div>
  );
}

export default LocationMap;
