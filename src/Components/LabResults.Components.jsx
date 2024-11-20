import React from "react";
import { Download } from "../Assets";


const LabResults = ({results}) => {
    
    return(
        <div className="lab-results grid grid-cols-1 p-[20px] h-[305px] bg-white rounded-[16px] pt-[32px]">
            <div className=" text-start">
                <h2 className="text-2xl font-bold">
                    Lab Results
                </h2>
            </div>
            <div className="pt-[16px] overflow-y-auto max-h-[296px]">
                {results.map((result, index) => (
                <div className="flex justify-between p-[14px]" key={index}>
                    <div className="text-start font-normal text-base ">
                        <p className="text-quaternary font-base"> {result}</p>
                    </div>
                    <div className="items-center">
                        <img src={Download} alt="" />
                    </div>
                </div>
                ))}
            </div>

        </div>
    )
}

export default LabResults;