// components/SubHeader.jsx
import { Mail, MapPin, Phone } from "lucide-react";

export default function SubHeader() {
  return (
    <div className="w-full bg-blue-600 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-5">
          <span className="flex items-center gap-2">
            <Mail size={16} />
            info@example.com
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} />
            8477 Paris Hill St, Falls Church
          </span>

          <span className="flex items-center gap-2">
            <Phone size={16} />
            +1002-123-4567
          </span>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-lime-400 transition">f</a>
          <a href="#" className="hover:text-lime-400 transition">in</a>
          <a href="#" className="hover:text-lime-400 transition">x</a>
          <a href="#" className="hover:text-lime-400 transition">p</a>
        </div>

      </div>
    </div>
  );
}
