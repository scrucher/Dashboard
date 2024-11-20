import React from "react";

const DiagnosticList = ({ diagnosis }) => {
  return (
    <>
      <main className=" flex flex-1 flex-col h-[321px] max-h-fit">
        <h1 className="text-3xl font-bold text-quaternary p-[20px]">
          Diagnosis List
        </h1>
        <div className="flex-1 flex flex-grow flex-shrink p-[20px] w-full overflow-hidden">
          <div className="w-full max-w-[820px]">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="text-quaternary h-[48px] font-semibold bg-[#F6F7F8] grid grid-cols-3 px-[20px] items-center rounded-[24px]">
                  <th className="text-start">Problem/Diagnosis</th>
                  <th className="text-start">Description</th>
                  <th className="text-start">Status</th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto max-h-[150px] block">
                {diagnosis.map((diagnose, index) => (
                  <tr
                    key={index}
                    className="text-start font-base h-fit grid grid-cols-3 px-[20px] py-[10px] items-center"
                  >
                    <td className="truncate">{diagnose?.name || "N/A"}</td>
                    <td className="truncate">{diagnose?.description || "N/A"}</td>
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
