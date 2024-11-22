import React from "react";

const DiagnosticList = ({ diagnosis }) => {
  return (
    <>
      <main className=" flex flex-1 flex-col h-full max-h-[321px]">
        <h1 className="text-3xl font-bold text-quaternary p-[20px]">
          Diagnosis List
        </h1>
        <div className="flex-1 flex flex-grow flex-shrink p-[20px] w-full overflow-hidden">
          <div className="w-full max-w-[820px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-quaternary h-[48px] font-semibold bg-[#F6F7F8] grid grid-cols-3 px-[20px] items-center rounded-[24px]">
                  <th className="text-start">Problem/Diagnosis</th>
                  <th className="text-start">Description</th>
                  <th className="text-start">Status</th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto h-full flex flex-col gap-[10px]">
                {diagnosis.map((diagnose, index) => (
                  <tr
                    key={index}
                    className="text-start font-base h-fit grid grid-cols-3 px-[20px] py-[15px] gap-2 items-center"
                  >
                    <td className="">{diagnose?.name || "N/A"}</td>
                    <td className="">{diagnose?.description || "N/A"}</td>
                    <td>{diagnose?.status || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default DiagnosticList;
