import { FiPhoneCall } from "react-icons/fi";

export function Footer() {
  return (
    <div>
      <div className="container flex flex-col items-center mb-44">
        <button className="bg-[#667EF6] hover:bg-[#6e85f7] transition-colors mb-3 rounded-full flex items-center py-3 px-7 gap-2 text-white">
          დაჯავშნე ვიზიტი
        </button>
        <p className="text-lg text-gray-400 mb-11">კონსულტაცია უფასოა</p>
      </div>
      <div className="py-10 bg-gradient-to-r from-transparent to-blue-50">
        <div className="container flex items-center justify-between h-20">
          <div>
            <h1 className="text-xl text-indigo-500">მკერდის მასაჟი</h1>
          </div>
          <div>
            <a
              className="flex items-center gap-3 text-slate-500 hover:text-slate-900"
              href="tel:593227050"
            >
              <FiPhoneCall />
              593 22 70 50
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
