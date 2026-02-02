import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactData = [
  {
    title: "Office Address",
    desc: "25/B Milford, New York, USA",
    icon: MapPin,
  },
  {
    title: "Call Us",
    desc: "+2 123 4565 789",
    icon: Phone,
  },
  {
    title: "Email Us",
    desc: "info@example.com",
    icon: Mail,
  },
  {
    title: "Open Time",
    desc: "Mon - Sat (10.00AM - 05.30PM)",
    icon: Clock,
  },
];

const Contact01 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contactData.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 text-center
              transition-all duration-500 ease-out
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              hover:scale-[1.05]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              {/* CORNER BORDER */}
              <span
                className="absolute top-0 right-0 w-16 h-16
                border-t-2 border-r-2 border-[#F7A600]
                rounded-tr-2xl
                transition-all duration-500
 group-hover:w-[80%]
    group-hover:h-[80%] " 
              />

              {/* ICON */}
              <div
                className="mx-auto mb-6 w-16 h-16 rounded-full bg-[#F7A600]
                flex items-center justify-center
                transition-transform duration-500
                group-hover:scale-110"
              >
                <Icon className="text-white w-7 h-7" />
              </div>

              {/* TEXT */}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact01;
