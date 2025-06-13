import { useRouter } from "next/router"; 
import { useFormData } from "@/context/FormContext";
import { useState } from "react";
import Navbar from "@/compo/nav";   

export default function Stage2() {
    const {formData, setFormData} = useFormData();
    const [localData, setLocalData] = useState({
        income: "",
        ongoinloan: "",
        criminalBackground: "",
        governmentService: ""
    });

    const router = useRouter();

    const handleSubmit = async () => {
        const finalData = { ...formData, ...localData };
        setFormData(finalData);

        try{
            const response = await fetch('http://localhost:3000/api/score', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalData)
            });
             const result = await response.json();
             router.push(`/result?score=${result.creditScore}`);
        } catch (err) {
            console.error("Error submitting data:", err);
        };
    };


    return (
    //     <>
    //   <Navbar />
    //   <div className="p-6 max-w-lg mx-auto space-y-4">
    //     <input
    //       type="number"
    //       placeholder="Monthly Income"
    //       value={localData.income}
    //       onChange={(e) => setLocalData({ ...localData, income: e.target.value })}
    //       className="input"
    //     />
    //     <select
    //       value={localData.ongoingLoan}
    //       onChange={(e) => setLocalData({ ...localData, ongoingLoan: e.target.value })}
    //       className="input"
    //     >
    //       <option value="">Ongoing Loan?</option>
    //       <option value="Yes">Yes</option>
    //       <option value="No">No</option>
    //     </select>
    //     <select
    //       value={localData.criminalBackground}
    //       onChange={(e) => setLocalData({ ...localData, criminalBackground: e.target.value })}
    //       className="input"
    //     >
    //       <option value="">Criminal Background?</option>
    //       <option value="Yes">Yes</option>
    //       <option value="No">No</option>
    //     </select>
    //     <select
    //       value={localData.governmentService}
    //       onChange={(e) => setLocalData({ ...localData, governmentService: e.target.value })}
    //       className="input"
    //     >
    //       <option value="">Government Service?</option>
    //       <option value="Yes">Yes</option>
    //       <option value="No">No</option>
    //     </select>

    //     <div className="flex gap-4 mt-6">
    //       <button onClick={() => router.back()} className="btn">Back</button>
    //       <button onClick={handleSubmit} className="btn bg-green-600">Submit</button>
    //     </div>
    //   </div>
    // </>

//         <>
//   <Navbar />
//   <div className="min-h-screen bg-gradient-to-br from-[#fbe0c3] via-[#a18cd1] to-[#1c1c3c] text-white flex items-center justify-center px-4 py-16">
//     <div className="w-full max-w-4xl bg-white/10 p-12 rounded-3xl shadow-xl backdrop-blur-md">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <input
//           type="number"
//           placeholder="Monthly Income"
//           value={localData.income}
//           onChange={(e) => setLocalData({ ...localData, income: e.target.value })}
//           className="input-style"
//         />

//         <select
//           value={localData.ongoingLoan}
//           onChange={(e) => setLocalData({ ...localData, ongoingLoan: e.target.value })}
//           className="input-style text-white"
//         >
//           <option value="" disabled hidden>Ongoing Loan?</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>

//         <select
//           value={localData.criminalBackground}
//           onChange={(e) => setLocalData({ ...localData, criminalBackground: e.target.value })}
//           className="input-style text-white"
//         >
//           <option value="" disabled hidden>Criminal Background?</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>

//         <select
//           value={localData.governmentService}
//           onChange={(e) => setLocalData({ ...localData, governmentService: e.target.value })}
//           className="input-style text-white"
//         >
//           <option value="" disabled hidden>Government Service?</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>
//       </div>

//       <div className="flex justify-center gap-6 mt-10">
//         <button
//           onClick={() => router.back()}
//           className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition"
//         >
//           Back
//         </button>
//         <button
//           onClick={handleSubmit}
//           className="px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-500 transition"
//         >Submit </button>
//       </div>
//     </div>
//   </div>
// </>
    
    <>
  <Navbar />
  <div className="min-h-screen bg-gradient-to-br from-[#fbe0c3] via-[#a18cd1] to-[#1c1c3c] text-white flex flex-col items-center justify-center px-4 py-16 space-y-10">

    {/* Form Container */}
    <div className="w-full max-w-4xl bg-white/10 p-12 rounded-3xl shadow-xl backdrop-blur-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black text-2xl">
        <input
          type="number"
          placeholder="Monthly Income"
          value={localData.income}
          onChange={(e) => setLocalData({ ...localData, income: e.target.value })}
          className="input-style rounded-md"
        />

        <select
          value={localData.ongoingLoan}
          onChange={(e) => setLocalData({ ...localData, ongoingLoan: e.target.value })}
          className="input-style rounded-md"
        >
          <option value="" disabled hidden>Ongoing Loan?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <select
          value={localData.criminalBackground}
          onChange={(e) => setLocalData({ ...localData, criminalBackground: e.target.value })}
          className="input-style rounded-md"
        >
          <option value="" disabled hidden>Criminal Background?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <select
          value={localData.governmentService}
          onChange={(e) => setLocalData({ ...localData, governmentService: e.target.value })}
          className="input-style rounded-md"
        >
          <option value="" disabled hidden>Government Service?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>

    {/* Buttons Outside Form */}
    <div className="flex justify-center gap-6 text-2xl">
      <button
        onClick={() => router.back()}
        className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition"
      >
        Back
      </button>
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-500 transition"
      >
        Submit
      </button>
    </div>
  </div>
</>


    );
}

