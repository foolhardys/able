import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How can I contact Able?',
      answer: 'You can contact Able through their contact form on the website or by calling their support number.',
    },
    {
      question: 'How can I contact Able?',
      answer: 'You can contact Able through their contact form on the website or by calling their support number.',
    },
    {
      question: 'How can I contact Able?',
      answer: 'You can contact Able through their contact form on the website or by calling their support number.',
    },
  ];

  return (
    <div className="mb-40 mt-12 flex flex-col lg:flex-row gap-5 mx-5 text-black font-[poppins] ">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`bg-white dark:bg-[#252525] rounded-2xl p-4 w-full lg:w-[calc(33.33%-10px)] shadow-md cursor-pointer transition-all ease-in transform transform duration-100 ${
            openIndex === index ? 'max-h-screen' : 'max-h-20 overflow-hidden'
          }`}
          onClick={() => toggle(index)}
        >
          <div className="font-[poppins] flex justify-between items-center dark:text-white text-lg pb-1 ">
            <div className="py-2 font-bold transition-all ease-in-out duration-300">{item.question}</div>
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-black text-white ">
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          {openIndex === index && (
            <div className="faq-answer mt-3 text-sm dark:text-white transition-all ease-in transform transform duration-100">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;