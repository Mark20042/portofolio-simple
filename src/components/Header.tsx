import { Me } from "../data/header";
import { MapPin, FileText, Mail } from "lucide-react";
const Header = () => {
  return (
    <div className="flex row  gap-6 p-4 mt-5">
      {/* Picture */}
      <div className="shadow-lg rounded-lg overflow-hidden w-50 h-50 ">
        <img src={Me.picture} alt="Ako Rani" className="w-50 h-50 " />
      </div>

      {/* Names and Details */}
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="font-sans text-4xl font-bold text-gray-700">
          {Me.name}
          <img
            src={Me.verified}
            alt="Verified"
            className="inline mb-4 ml-2 w-6 h-6"
          />
        </h1>
        <p className="font-sans text-md  font-semibold text-gray-500 ">
          <MapPin className="inline mb-1 mr-1" size={18} />
          {Me.location}
        </p>
        <p className="font-sans text-md text-gray-600 font-bold">{Me.role}</p>

        <div className="flex row gap-3 ">
          <button className="mt-2 font-sans bg-gray-800 text-white font-semibold px-2 py-2 rounded-md w-40">
            <FileText className="inline mb-1 mr-2" size={17} />
            View Resume
          </button>
          <button className="mt-2 font-sans  font-semibold bg-white text-gray-900 px-2 py-2 rounded-md w-40">
            <Mail className="inline mb-1 mr-2" size={20} />
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
