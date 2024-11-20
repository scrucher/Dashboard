import React from 'react'
import { TestLogo, 
    Home, 
    CalendarToday, 
    ChatBubble, 
    CreditCard, 
    Group, 
    SeniorWomanDoctorPortrait1,
    Settings,
    MoreVert
} from '../Assets'

const NavBar = () => {

    return (
        <>
            <header className="bg-[#ffffff] border-b flex items-center justify-between h-[76px]  rounded-[70px] border-none p-[18px]">
                <div className="flex gap-4 pl-[32px]">
                    <img src={TestLogo} alt='' />
                </div>
                <div className="flex items-center gap-4 min-w-[683px]">
                    <div className="flex justify-between h-[63px] w-full items-center">
                        <ul className=' flex flex-grow justify-between w-full h-full items-center'>
                            <li className='min-w-[129px] hover:bg-active rounded-[41px] h-full text-[14] font-bold text-[#072635] flex items-center justify-center'> <img src={Home} alt=""className='h-[24px] pr-[5px]' /><a href=''> Overview</a></li>
                            <li className='min-w-[121px] h-full text-[14] font-bold rounded-[41px] bg-active text-[#072635] flex items-center justify-center'> <img src={Group} alt=""className='h-[24px] pr-[5px]' /><a href=''>Patients</a></li>
                            <li className='min-w-[129px] hover:bg-active rounded-[41px] h-full text-[14] font-bold text-[#072635] flex items-center justify-center'> <img src={CalendarToday} alt=""className='h-[24px] pr-[5px]' /><a href=''>Schedule</a></li>
                            <li className='min-w-[129px] hover:bg-active rounded-[41px] h-full text-[14] font-bold text-[#072635] flex items-center justify-center'> <img src={ChatBubble} alt=""className='h-[24px] pr-[5px]' /><a href=''>Message</a></li>
                            <li className='min-w-[129px] hover:bg-active rounded-[41px] h-full text-[14] font-bold text-[#072635] flex items-center justify-center'> <img src={CreditCard} alt=""className='h-[24px] pr-[5px]' /><a href=''>Transaction</a></li>
                        </ul>

                    </div>
                </div>
                <div className="flex items-center gap-4 ">
                    <div className="flex divide-x divide-solid gap-2 ">
                        <div className="flex ">
                            <img src={SeniorWomanDoctorPortrait1} className='h-[44px]' alt="" />
                            <div className="block ">
                                <p className='text-bold font-medium'>Dr.Jose Simmons</p>
                                <p className='text-base text-[#707070] font-light'>General Practitioner</p>  
                            </div>    
                        </div>
                        
                        <div className="flex gap-2 items-center p-[12px]">
                            <a href=''><img src={Settings} className='h-[20px]' alt="" /></a>
                            <a href=''><img src={MoreVert} className='h-[20px]' alt="" /></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar