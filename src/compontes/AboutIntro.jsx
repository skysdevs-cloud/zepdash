import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="bg-[#f3f7ff] py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Image */}
        <div className="relative overflow-hidden rounded-3xl group">
          <Image
            src="/image/aboutIntro.jpg"
            alt="about"
            width={550}
            height={500}
            className="rounded-3xl object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Right Content */}
        <div>

          {/* Tag */}
          <p className="text-blue-600 font-semibold uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4 relative group hover:text-blue-600 transition">
            Leading with technology <br />
            delivering with trust.
            <span className="absolute left-0 -bottom-2 w-20 h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>

          <hr className="mb-6" />

          {/* Features */}
          <div className="space-y-4 mb-8">

            <div className="group flex items-start gap-3 p-2 rounded-lg hover:bg-white hover:shadow transition">
              <CheckCircle className="text-blue-600 mt-1 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold group-hover:text-blue-600 transition">
                  Dedicated 24/7 support
                </h4>
                <p className="text-gray-600 text-sm">
                  Duis deserunt mollit leo aute
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-3 p-2 rounded-lg hover:bg-white hover:shadow transition">
              <CheckCircle className="text-blue-600 mt-1 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold group-hover:text-blue-600 transition">
                  Agile & fast working
                </h4>
                <p className="text-gray-600 text-sm">
                  Duis deserunt mollit leo aute
                </p>
              </div>
            </div>

          </div>

          {/* Call Box */}
          <div className="group flex items-center gap-4 bg-white shadow-md rounded-xl p-5 max-w-sm
                          transition-all duration-300
                          hover:shadow-xl hover:-translate-y-1">

            <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center
                            transition-transform duration-300
                            group-hover:rotate-12 group-hover:scale-110">
              <Phone className="text-white" />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Call to ask any question
              </p>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                + 91 6307 764 702
              </h4>
              <p className="text-xs text-gray-500">
                Around-the-clock service available
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
