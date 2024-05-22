import React from "react";
import insta from "../assets/insta.png";
import facebook from "../assets/fb.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#272727]">
        <div className="pl-4 mt-6 pt-8 text-white font-medium">
          <h1 className="sm:text-4xl text-2xl">Follow Us For Updates</h1>
        </div>
        <div>
          <div class="bg-[#272727] px-6 py-20 font-[sans-serif] text-white">
            <div class="grid sm:grid-cols-4 grid-cols-2 gap-x-6 gap-y-10 max-w-7xl mx-auto">
              <div class="flex items-center gap-6">
                <img src={facebook} alt="" width={50} />
                <div>
                  <h1 class="text-xl font-semibold mt-3">Facebook</h1>
                  <p class="text-gray-300 font-semibold mt-2">Able India</p>
                </div>
              </div>
              <div class="flex items-center gap-6">
                <img src={insta} alt="" width={50} />
                <div>
                  <h3 class="text-xl font-semibold mt-3">Instagram</h3>
                  <p class="text-gray-300 font-semibold mt-2">_.able_</p>
                </div>
              </div>
              <div class="flex items-center gap-6">
                <img
                  src="https://images.freeimages.com/image/large-previews/9fe/x-twitter-light-grey-logo-5694251.png"
                  alt=""
                  width={80}
                />
                <div>
                  <h3 class="text-xl font-semibold mt-3">X</h3>
                  <p class="text-gray-300 font-semibold mt-2">able</p>
                </div>
              </div>
              <div class="flex items-center gap-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpf-kE5sRHkR7UBUuskYMSQytRvJSQJ8tVDzQaZSb_hg&s"
                  alt=""
                  width={70}
                />
                <div>
                  <h3 class="text-xl font-semibold mt-3">LinkedIn</h3>
                  <p class="text-gray-300 font-semibold mt-2"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-12" />
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className=" flex justify-around px-4 py-6 lg:py-10 ">
            <div>
              <a href="/" id="brand" className="">
                <img
                  className=" w-36"
                  src="data:image/png;base64,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"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
            <div>
              <ul className="text-xl text-white font-medium">
                <li className="mb-4">
                  <a href="/" className=" hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Inbox
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-xl font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
