import { H2 } from "./typography";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Item({ children, image }) {
  return (
    <div className="flex flex-col items-center bg-[#F4FFFF] border-[#EEFBFB] border-2 p-7 pt-12 text-center text-lg text-gray-800 relative">
      <img src={image} alt="" className="absolute top-0 w-20 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full left-1/2" />
      <div className="flex flex-col gap-3">
        <RiDoubleQuotesL className="text-3xl opacity-20"/>
        <p className="px-3">
          {children}
        </p>
        <RiDoubleQuotesR className="self-end text-3xl opacity-20"/>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="container">
      <H2 className="mb-32 text-center">რეკომენდაციები</H2>

      <div className="grid grid-cols-3 gap-x-9 gap-y-20">
        <Item image="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_960_720.jpg">
          საოცარი სერვისი, გადასარევი ადამიანი, აღმაფრთო ვანებელი სიხარული
          სიყვარული სითბო და ბარაქა
        </Item>
        <Item image="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_960_720.jpg">
          საოცარი სერვისი, გადასარევი ადამიანი, აღმაფრთო ვანებელი სიხარული
          სიყვარული სითბო და ბარაქა
        </Item>
        <Item image="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_960_720.jpg">
          საოცარი სერვისი, გადასარევი ადამიანი, აღმაფრთო ვანებელი სიხარული
          სიყვარული სითბო და ბარაქა
        </Item>
        <Item image="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_960_720.jpg">
          საოცარი სერვისი, გადასარევი ადამიანი, აღმაფრთო ვანებელი სიხარული
          სიყვარული სითბო და ბარაქა
        </Item>
        <Item image="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_960_720.jpg">
          საოცარი სერვისი, გადასარევი ადამიანი, აღმაფრთო ვანებელი სიხარული
          სიყვარული სითბო და ბარაქა
        </Item>
        <Item image="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_960_720.jpg">
          საოცარი სერვისი, გადასარევი ადამიანი, აღმაფრთო ვანებელი სიხარული
          სიყვარული სითბო და ბარაქა
        </Item>
      </div>
    </div>
  );
}
