import React from "react";
import { BirthIcon, FemaleIcon, InsuranceIcon, Layer7_2x, MaleIcon, PhoneIcon } from "../Assets";


const Profile = ({patient}) => {
    return(
        <div className="grid grid-cols-1 w-full h-fit bg-white rounded-[16px] ">
            <div className="flex flex-col items-center  px-[20px] py-[52px]">
                <div className="flex flex-col items-center"> 
                    <img src={patient ? patient.profile_picture : '-'} alt="" className="rounded-full h-[200px] w-[200px]"/>
                    <div className="pt-[24px]">
                       <h1 className="text-3xl font-bold text-quaternary">
                            {patient ? patient.name : '-'}
                        </h1> 
                    </div>
                    
                </div>
                <div className="flex flex-cols-2 pt-[42px] items-start w-full">
                    <div className="rounded-full bg-primary w-[52px] h-[52px]">
                        <img src={BirthIcon} alt="" className=" h-[52px] w-[52px]"/>
                    </div>
                    <div className="block pl-[16px]">
                        <h6 className="text-[16px] font-light"> Date Of Birth</h6>
                        <p className="text-[16px] font-semibold">{patient ? patient.date_of_birth : '-'}</p>
                    </div>
                </div>
                <div className="flex flex-cols-2 pt-[34px] items-start w-full">
                    <div className="rounded-full bg-primary w-[52px] h-[52px]">
                        <img src={patient?.gender === 'Male' ? MaleIcon : FemaleIcon} alt="" className=" h-[52px] w-[52px]"/>
                    </div>
                    <div className="block pl-[16px]">
                        <h6 className="text-[16px] font-light"> Gender</h6>
                        <p className="text-[16px] font-semibold"> {patient ? patient.gender : '_'}</p>
                    </div>
                </div>
                <div className="flex flex-cols-2 pt-[34px] items-start w-full">
                    <div className="rounded-full bg-primary w-[52px] h-[52px]">
                        <img src={PhoneIcon} alt="" className=" h-[52px] w-[52px]"/>
                    </div>
                    <div className="block pl-[16px]">
                        <h6 className="text-[16px] font-light"> Contact Info</h6>
                        <p className="text-[16px] font-semibold"> {patient ? patient.phone_number : '_'}</p>
                    </div>
                </div>
                <div className="flex flex-cols-2 pt-[34px] items-start w-full">
                    <div className="rounded-full bg-primary w-[52px] h-[52px]">
                        <img src={PhoneIcon} alt="" className=" h-[52px] w-[52px]"/>
                    </div>
                    <div className="block pl-[16px]">
                        <h6 className="text-[16px] font-light"> Emergency Contact</h6>
                        <p className="text-[16px] font-semibold"> {patient ? patient.emergency_contact : Math.random(10)}</p>
                    </div>
                </div>
                <div className="flex flex-cols-2 pt-[34px] items-start w-full">
                    <div className="rounded-full bg-primary w-[52px] h-[52px]">
                        <img src={InsuranceIcon} alt="" className=" h-[52px] w-[52px]"/>
                    </div>
                    <div className="block pl-[16px]">
                        <h6 className="text-[16px] font-light"> Insurance Provider</h6>
                        <p className="text-[16px] font-semibold"> {patient ? patient.insurance_type : 'AxA'}</p>
                    </div>
                </div>
                <div className="flex pt-[40px] items-center">
                    <button className=" bg-active border-none h-[41px] w-[220px] font-bold text-quaternary rounded-[41px]"> Show All Information</button>
                </div>
            </div>
        </div>
    )
}


export default Profile