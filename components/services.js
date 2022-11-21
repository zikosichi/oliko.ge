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
      <H2 className="text-center mb-14">სერვისი</H2>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-end">
          <div className="flex max-w-[340px] w-full items-center gap-6 px-6 h-[115px] text-xl text-white bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-xl mb-4">
            <SlLocationPin className="text-5xl text-white opacity-50 shrink-0"/>
            ადგილზე ვიზიტი
          </div>
          <div className="flex max-w-[340px] w-full items-center gap-6 px-6 h-[115px] text-xl text-white bg-gradient-to-r from-red-400 to-red-500 rounded-xl">
            <SlPhone className="text-5xl text-white opacity-50 shrink-0"/>
            უფასო სატელეფონო კონსულტაცია
          </div>
        </div>
        <div>
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