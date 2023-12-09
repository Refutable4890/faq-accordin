import iconStar from "@/assets/icon-star.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questionsAndAnswers = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function FAQCard() {
  return (
    <div className="px-5 w-screen h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-5 max-w-[600px] md:rounded-3xl md:w-[600px]">
        <h1 className="font-extrabold text-2xl">
          <img className="inline h-[1em] align-middle mr-4" src={iconStar} />
          FAQs
        </h1>
        <section>
          <Accordion type="single" collapsible className="w-full">
            {questionsAndAnswers.map((questionAndAnswer, index) => {
              let borderNone = "";
              if (index === questionsAndAnswers.length - 1)
                borderNone = "border-none";
              return (
                <AccordionItem
                  key={questionAndAnswer.question}
                  className={borderNone}
                  value={index.toString()}
                >
                  <AccordionTrigger className="text-left leading-5 font-semibold hover:text-purple-500">
                    {questionAndAnswer.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 text-grayish-purple">
                    {questionAndAnswer.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
