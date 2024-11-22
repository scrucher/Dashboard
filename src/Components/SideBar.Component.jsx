import React, { useState } from "react";
import { MoreHoriz, Search } from "../Assets";

const SideBarComponent = ({ patients, setPerson }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeLink = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white w-[367px] rounded-[16px] pt-[18px] h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-[20px]">
        <h1 className="text-3xl font-bold text-quaternary">Patients</h1>
        <div>
          <img src={Search} className="w-[18px] h-[18px]" alt="Search" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 max-h-svh">
          {patients.map((patient, index) => (
            <li
              className={`w-full cursor-pointer ${activeIndex === index ? 'bg-[#D8FCF7]' : 'hover:bg-[#D8FCF7]'}`}
              onClick={() => { setPerson(patient); activeLink(index); }}
              key={`${index}-${patient.age}-${patient.name}`}
            >
              <div className="flex items-center justify-between w-full p-[20px]">
                <div className="flex items-center gap-4">
                  <img
                    src={patient.profile_picture}
                    className="w-[48px] h-[48px] rounded-full"
                    alt="Patient"
                  />
                  <div>
                    <p className="text-[14px] font-semibold">{patient.name}</p>
                    <p className="text-[14px] text-gray-500">{patient.gender}</p>
                  </div>
                </div>
                <img src={MoreHoriz} alt="More" />
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBarComponent;
