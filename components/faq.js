import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { H2 } from "./typography";

function Question({ children, question }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#F4FFFF] border-[#EEFBFB] border-2 mb-3 text-left w-full">
      <div className="flex items-center gap-4 px-8 py-6 text-2xl cursor-pointer hover:text-indigo-700" onClick={() => setExpanded(!expanded)}>
        <FiPlus />
        {question}
      </div>
      {expanded && (
        <div className="flex gap-4 px-8 py-6 pt-0 pl-8 text-xl text-gray-500">
          <FiPlus className="opacity-0 shrink-0" />
          {children}
        </div>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <div className="container flex flex-col items-center text-center">
      <H2 className="mb-8">ხშირად დასმული კითხვები</H2>
      <p className="max-w-2xl mb-16 text-lg text-gray-500">
        15 წლიანი გამოცდილებით, დასრულებული უმაღლესი სამედიცინო განათლების მქონე
        ადამიანი, რომლის საქმიანობა მოიცავს.
      </p>

      <Question question="ეს არის ძალიან ხშირად დასმული კითხვები?">
        ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად დასმული
        კითხვები? ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად
        დასმული კითხვები?
      </Question>

      <Question question="ეს არის ძალიან ხშირად დასმული კითხვები?">
        ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად დასმული
        კითხვები? ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად
        დასმული კითხვები?
      </Question>

      <Question question="ეს არის ძალიან ხშირად დასმული კითხვები?">
        ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად დასმული
        კითხვები? ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად
        დასმული კითხვები?
      </Question>

      <Question question="ეს არის ძალიან ხშირად დასმული კითხვები?">
        ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად დასმული
        კითხვები? ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად
        დასმული კითხვები?
      </Question>

      <Question question="ეს არის ძალიან ხშირად დასმული კითხვები?">
        ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად დასმული
        კითხვები? ეს არის ძალიან ხშირად დასმული კითხვები? ეს არის ძალიან ხშირად
        დასმული კითხვები?
      </Question>
    </div>
  );
}
