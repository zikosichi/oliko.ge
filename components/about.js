import { H2 } from "./typography";

export function About() {
  return (
    <div className="container">
      <div className="grid grid-cols-12">
        <div className="col-span-3 pt-20">
          <H2>ჩემ შესახებ</H2>
        </div>
        <div className="col-span-8">
          <div className="bg-[#F4FFFF] py-20 px-24 relative">
            <img src="/assets/dots.svg" alt="" className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" />
            <img src="/assets/dots.svg" alt="" className="absolute bottom-0 left-0 rotate-180 -translate-x-1/2 translate-y-1/2" />
            <div className="py-4 pl-12 mb-10 border-l-4 border-indigo-500">
              <h3 className="mb-4 text-2xl text-indigo-500">
                მოგესალმებით, <br /> მე ვარ ოლიკო ჯინჭარაძე
              </h3>
              <p className="text-gray-500">ექთანი მასაჟისტი</p>
            </div>

            <div className="pl-12">
              <p className="text-lg text-gray-700">
                15 წლიანი გამოცდილებით, დასრულებული უმაღლესი სამედიცინო
                განათლების მქონე ადამიანი, რომლის საქმიანობა მოიცავს სამკურნალო
                და პროფილაქტიკურ ღონისძიებებს. ექიმი ვალდებულია დაიცვას საექიმო
                ეთიკა დასრულებული უმაღლესი სამედიცინო განათლების მქონე ადამიანი,
                რომლის საქმიანობა მოიცავს სამკურნალო და პროფილაქტიკურ
                ღონისძიებებს. ექიმი ვალდებულია დაიცვას საექიმო ეთიკა
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
