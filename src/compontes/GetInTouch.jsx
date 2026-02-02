import SpotlightButton from "./SpotlightButton";

const GetInTouch = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.06)]
          grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12 items-center"
        >
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            <div
              className="relative w-[320px] h-80 sm:w-95 sm:h-95 lg:w-105 lg:h-105
              rounded-full border-[6px] border-[#F7A600] overflow-hidden"
            >
              <img
                src="/images/clintImgReview.jpg"
                alt="Get in touch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8 max-w-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page randomised words slightly when
              looking at its layout.
            </p>

            <form className="space-y-6">
              {/* ROW 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  focus:outline-none focus:border-[#F7A600]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4
                  focus:outline-none focus:border-[#F7A600]"
                />
              </div>

              {/* SUBJECT */}
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full border border-gray-300 rounded-xl px-5 py-4
                focus:outline-none focus:border-[#F7A600]"
              />

              {/* MESSAGE */}
              <textarea
                rows="5"
                placeholder="Write Your Message"
                className="w-full border border-gray-300 rounded-xl px-5 py-4
                focus:outline-none focus:border-[#F7A600] resize-none"
              />

              {/* BUTTON */}
              {/* <button
                type="submit"
                className="inline-flex items-center gap-2
                bg-[#F7A600] text-black font-semibold
                px-8 py-4 rounded-full
                hover:bg-black hover:text-white
                transition-all duration-300"
              >
                SEND MESSAGE
                <span>➜</span>
              </button> */}
                    <SpotlightButton
                                text=" SEND MESSAGE →"
                                // href="/book"
                                bgColor="bg-[#EFA701]"
                                hoverBgColor="hover:bg-black"
                                textColor="text-black"
                                hoverTextColor="hover:text-white"
                              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
