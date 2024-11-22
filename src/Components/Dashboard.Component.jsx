import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from 'chart.js';
import { ArrowDown, ArrowUp, HeartBPM, Respiratory, Temperature } from "../Assets";

Chart.register(...registerables);



const Dashboard = ({patient}) => {
  
  
  const [systolic, setSystolic] = useState([]);
  const [diastolic, setDiastolic] = useState([]);
  const [systolicLevel, setSystolicLevel] = useState(['']);
  const [diastolicLevel, setDiastolicLevel] = useState(['']);
  const [heartbeats, setHeartbeats] = useState([{value: 0, levels: ''}]);
  const [respiratoryRate, setRespiratoryRate] = useState([{value: 0, levels: ''}]);
  const [temperature, setTemperature] = useState([{value: 0, levels: ''}]);
  const barChartRef = useRef(null);
  const barChartInstance = useRef(null); // Track the chart instance

  useEffect(() => {
    if (!patient) {
      setSystolic([12, 19, 3, 5, 2, 3]);
      setDiastolic([12, 19, 3, 5, 2, 3]);
    } else if (patient?.diagnosis_history) {
      const newSystolic = [];
      const newDiastolic = [];
      const newSystolicLevel = [];
      const newDiastolicLevel = [];
      const newHeartbeats = [];
      const newRespiratoryRate = [];
      const newTemperature = [];

      patient.diagnosis_history.forEach((diagnosis) => {
        newSystolic.push(diagnosis.blood_pressure.systolic.value);
        newDiastolic.push(diagnosis.blood_pressure.diastolic.value);
        newSystolicLevel.push(diagnosis.blood_pressure.systolic.levels);
        newDiastolicLevel.push(diagnosis.blood_pressure.diastolic.levels);
        newHeartbeats.push(diagnosis.heart_rate);
        newRespiratoryRate.push(diagnosis.respiratory_rate);
        newTemperature.push(diagnosis.temperature);

      });
      const herB = newHeartbeats[newHeartbeats.length - 1];
      const resR = newRespiratoryRate[newRespiratoryRate.length - 1];
      const temp = newTemperature[newTemperature.length - 1];
      setHeartbeats(herB);
      setRespiratoryRate(resR);
      setTemperature(temp);
      setSystolic(newSystolic);
      setDiastolic(newDiastolic);
      setSystolicLevel(newSystolicLevel);
      setDiastolicLevel(newDiastolicLevel);
    }
  }, [patient]);

  useEffect(() => {
    if (barChartRef.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }

      barChartInstance.current = new Chart(barChartRef.current, {
        type: 'line',
        data: {
          labels: ['Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023'],
          datasets: [
            {
              data: systolic,
              backgroundColor: 'rgba(230, 111, 210, 0.2)',
              borderColor: 'rgba(230, 111, 210, 1)',
              borderWidth: 2,
            },
            {
              data: diastolic,
              backgroundColor: 'rgba(126, 108, 171, 0.2)',
              borderColor: 'rgba(126, 108, 171, 1)',
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: false,
              text: 'Blood Pressure Trends',
            },
          },
          cubicInterpolationMode: 'monotone',
        },
      });
    }

    return () => {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
        barChartInstance.current = null; // Clean reference
      }
    };
  }, [systolic, diastolic]);

  return ( 
    <>
      <main className="flex flex-1 flex-col h-fit max-h-fit">
        <h1 className="text-3xl font-bold text-quaternary p-[20px]">
          Diagnosis History 
        </h1>
        <div className='flex-1 flex p-[20px]'>
          <div className="flex fex-grow gap-2 bg-[#F4F0FE]  rounded-[12px] py-[35px]">
            <div className=" p-[16px]  rounded-[16px] h-[320px] flex flex-1 flex-col justify-start items-center">
              <h3 className="text-lg font-semibold pt-[36] text-gray-800 mb-4">Blood Pressure</h3>
              <canvas ref={barChartRef} className=" w-svw"></canvas>
            </div>
            <div className=" grid grid-cols-1 divide-y divide-solid divide-gray w-[208px] px-[20px] py-[20px]">
              <div className="card">
                <div className="flex gap-[10px] items-baseline">
                    <span className="h-[15px] w-[15px] bg-[#a99cca] rounded-full"></span>
                    <h6 className="text-xl font-semibold  text-gray-800 mb-4 decoration-solid list-disc">Systolic</h6>
                </div>
                
                <p className="text-3xl font-semibold ">{systolic[5]}</p>
                <div className="flex flex-grow ">
                  <img src={ArrowUp} alt="" />
                  <p className="pl-[5px]"> {systolicLevel[5]}</p>
                </div>
              </div>
              <div className="card">
              <div className="flex gap-[10px] items-baseline">
                    <span className="h-[15px] w-[15px] bg-[#E66FD2] rounded-full"></span>
                    <h6 className="text-xl font-semibold  text-gray-800 mb-4 decoration-solid list-disc">Diastolic</h6>
                </div>
                <p className="text-3xl font-semibold "> {diastolic[5]}</p>
                <div className="flex flex-grow ">
                  <img src={ArrowDown} alt="" />
                  <p className="pl-[5px]"> {diastolicLevel[5]}</p>
                </div>
              </div>
            </div>   
          </div>
          
        </div>
        <div className="flex flex-1 flex-grow p-[20px] justify-between gap-[50px]">
          <div className="card bg-[#E0F3FA] h-[242px] w-[258px] p-[16px] flex flex-1 flex-col  rounded-[12px]">
            <div className="rounded-[100%] bg-white h-[96px] w-[96px]">
              <img src={Respiratory} alt="" />
            </div>
            <h6 className="text-lg font-normal pt-[16px] text-black mb-4 decoration-solid list-disc">Respiratory Rate</h6>
            <p className="text-2xl font-bold ">{respiratoryRate ? respiratoryRate.value :0}</p>
            <p className="text-base font-normal text-gray-500"> {respiratoryRate ? respiratoryRate.levels : ''}</p>
          </div>
          <div className="card bg-[#FFE6E9] h-[242px] w-[228px] p-[16px] flex flex-1 flex-col rounded-[12px]">
            <div className="rounded-[100%] bg-white h-[96px] w-[96px]">
              <img src={Temperature} alt="" />
            </div>
            <h6 className="text-lg font-normal pt-[16px] text-black mb-4 decoration-solid list-disc">Temperature</h6>
            <p className="text-2xl font-bold "> {temperature ? temperature.value :0}</p>
            <p className="text-base font-normal text-gray-500">{temperature ? temperature.levels : ''} </p>
          </div>
          <div className="card bg-[#FFE6F1] h-[242px] w-[228px] p-[16px] flex flex-1 flex-col rounded-[12px]">
            <div className="rounded-[100%] bg-white h-[96px] w-[96px]">
              <img src={HeartBPM} alt="" />
            </div>
            <h6 className="text-lg font-normal pt-[16px] text-black mb-4 decoration-solid list-disc">Respiratory Rate</h6>
            <p className="text-2xl font-bold "> {heartbeats ? heartbeats.value :0}</p>
            <p className="text-base font-normal text-gray-500">{heartbeats ? heartbeats.levels : ''}</p>
          </div>
        </div>
        
      </main>
    </>
  );
  
}

export default Dashboard;
