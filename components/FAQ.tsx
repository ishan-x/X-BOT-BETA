import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
            <button 
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-slate-750 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-slate-200'}`}>
                    {question}
                </span>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-500'}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 pt-0 text-slate-400 text-sm border-t border-slate-700/50 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-darker">
        <div className="container mx-auto px-6">
             <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-gradient-primary">Questions</span></h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto" data-aos="fade-up">
                <FAQItem 
                    question="Is ISHAN-X MD BETA Free?" 
                    answer="Yes, ISHAN-X MD BETA is 100% free to use. With our new Cloud System, you don't even need to pay for servers." 
                />
                <FAQItem 
                    question="Do I need Heroku or GitHub?" 
                    answer="No! We have updated the system. You just need to Link your Device using the buttons above. The bot will automatically deploy itself." 
                />
                <FAQItem 
                    question="How long does deployment take?" 
                    answer="Approximately 60 seconds after you successfully pair your device. It runs 24/7 automatically." 
                />
                <FAQItem 
                    question="Is it safe for my number?" 
                    answer="Yes, we use advanced anti-ban protocols and high-privacy encryption to keep your account safe." 
                />
            </div>
        </div>
    </section>
  );
};

export default FAQ;
