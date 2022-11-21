import { H2 } from "./typography";
import { SlLocationPin, SlPhone } from 'react-icons/sl'
import { FiCheck } from 'react-icons/fi'

function Check({children}) {
  return (
    <p className="flex items-center gap-3 mb-5 text-2xl font-light text-gray-700">
      <FiCheck className="text-3xl opacity-40"/>
      {children}
    </p>
  )
}

export function Services() {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-8 mb-14">
        <div className="col-span-4"></div>
        <div className="col-span-8">
          <H2>სერვისი</H2>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4">
          <div className="flex items-center gap-6 px-6 h-[115px] text-xl text-white bg-indigo-400 rounded-xl mb-4">
            <SlLocationPin className="text-5xl text-white opacity-50 shrink-0"/>
            ადგილზე ვიზიტი
          </div>
          <div className="flex items-center gap-6 px-6 h-[115px] text-xl text-white bg-red-400 rounded-xl">
            <SlPhone className="text-5xl text-white opacity-50 shrink-0"/>
            უფასო სატელეფონო კონსულტაცია
          </div>
        </div>
        <div className="col-span-8">
          <Check>მეძუძური დედის მკერდის მასაჟი</Check>
          <Check>ლაქტაციის დასრულება</Check>
          <Check>რეკომენდაციები ბავშვის მოვლაზე</Check>
          <Check>რეკომენდაციები ლაქტაციაზე</Check>
          <Check>მოჭიდების გასწორება</Check>
        </div>
      </div>
    </div>
  )
}