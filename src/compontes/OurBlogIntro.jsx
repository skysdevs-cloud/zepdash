"use client";

import SpotlightButton from "./SpotlightButton";

const blogs = [
  {
    id: 1,
    image: "/images/blog01.jpg",
    title: "There Are Many Variations Of Passage Available.",
    author: "Alicia Davis",
    date: "February 23, 2023",
  },
  {
    id: 2,
    image: "/images/blog02.jpg",
    title: "There Are Many Variations Of Passage Available.",
    author: "Alicia Davis",
    date: "February 23, 2023",
  },
  {
    id: 3,
    image: "/images/blog03.jpg",
    title: "There Are Many Variations Of Passage Available.",
    author: "Alicia Davis",
    date: "February 23, 2023",
  },
];

export default function OurBlogIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            Our Blog
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Latest News & Blog
          </h2>
          <div className="flex justify-center mt-4">
          <div className="heading-divider mx-auto mt-4"></div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 gap-4 mb-3">
                  <span>👤 {blog.author}</span>
                  <span>📅 {blog.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  {blog.title}
                </h3>
                           <SpotlightButton
                  text="Read More →"
                  // href="/book"
                  bgColor="bg-[#EFA701]"
                  hoverBgColor="hover:bg-black"
                  textColor="text-black"
                  hoverTextColor="hover:text-white"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
