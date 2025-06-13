import { useRouter } from "next/navigation";    
import { useFormData } from '@/context/FormContext';
import { useState } from "react";
import Navbar from "@/compo/nav";   


export default function Home() {
    const {formData, setFormData} = useFormData();
    const [localData, setLocalData] = useState({
        name: '',
        phone: '',
        age: '',
        gender: '',
        email: '',
        occupation: '',
        maritalStatus: ''
    });

    const router = useRouter();

    const handleNext = () => {
        setFormData({ ...formData, ...localData });
        router.push('/stage2');
    };

    return(
    //     <>
    //   <Navbar />
    //   <div className="min-h-screen bg-gradient-to-br from-[#fbe0c3] via-[#a18cd1] to-[#1c1c3c] text-black p-6 max space-y-4">
    //     <div className="grid grid-cols-2 py-40">
    //     <input type="text" placeholder="Name" className="input" 
    //       value={localData.name}
    //       onChange={(e) => setLocalData({ ...localData, name: e.target.value })}
    //     />
    //     <input type="tel" placeholder="Phone Number" className="input" 
    //       value={localData.phone}
    //       onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
    //     />
    //     <input type="number" placeholder="Age" className="input" 
    //       value={localData.age}
    //       onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
    //     />
    //     <select className="input" placeholder="Gender"
    //       value={localData.gender}
    //       onChange={(e) => setLocalData({ ...localData, gender: e.target.value })}
    //     >
    //       <option value="">Select Gender</option>
    //       <option value="Male">Male</option>
    //       <option value="Female">Female</option>
    //       <option value="Other">Other</option>
    //     </select>
    //     <input type="email" placeholder="Email" className="input" 
    //       value={localData.email}
    //       onChange={(e) => setLocalData({ ...localData, email: e.target.value })}
    //     />
    //     <input type="text" placeholder="Occupation" className="input" 
    //       value={localData.occupation}
    //       onChange={(e) => setLocalData({ ...localData, occupation: e.target.value })}
    //     />
    //     <select className="input"
    //       value={localData.maritalStatus}
    //       onChange={(e) => setLocalData({ ...localData, maritalStatus: e.target.value })}
    //     >
    //       <option value="">Marital Status</option>
    //       <option value="Single">Single</option>
    //       <option value="Married">Married</option>
    //       <option value="Divorced">Divorced</option>
    //     </select>
    //     </div>
    //     <button onClick={handleNext} className="btn w-20 bg-purple-900 text-white rounded-full hover:bg-purple-800 active:bg-purple-700 focus:border-2 border-purple-800 ">Next</button>
    //   </div>
    // </>

//     <>
//   <Navbar />
//   <div className="min-h-screen bg-gradient-to-br from-[#fbe0c3] via-[#a18cd1] to-[#1c1c3c] text-white px-6 py-16">
//     <div className="max-w-4xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-8 rounded-3xl shadow-xl backdrop-blur-md">
//         <input
//           type="text"
//           placeholder="Name"
//           className="input-style"
//           value={localData.name}
//           onChange={(e) => setLocalData({ ...localData, name: e.target.value })}
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           className="input-style"
//           value={localData.phone}
//           onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           className="input-style"
//           value={localData.age}
//           onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
//         />
//         <select
//           className="input-style text-white"
//           value={localData.gender}
//           onChange={(e) => setLocalData({ ...localData, gender: e.target.value })}
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//         <input
//           type="email"
//           placeholder="Email"
//           className="input-style"
//           value={localData.email}
//           onChange={(e) => setLocalData({ ...localData, email: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Occupation"
//           className="input-style"
//           value={localData.occupation}
//           onChange={(e) => setLocalData({ ...localData, occupation: e.target.value })}
//         />
//         <select
//           className="input-style text-white"
//           value={localData.maritalStatus}
//           onChange={(e) => setLocalData({ ...localData, maritalStatus: e.target.value })}
//         >
//           <option value="">Marital Status</option>
//           <option value="Single">Single</option>
//           <option value="Married">Married</option>
//           <option value="Divorced">Divorced</option>
//         </select>
//       </div>

//       <div className="flex justify-center mt-10">
//         <button
//           onClick={handleNext}
//           className="px-6 py-3 bg-purple-800 hover:bg-purple-700 active:bg-purple-900 text-white rounded-full shadow-md transition duration-200"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   </div>
// </>

<>
  <Navbar />
  <div className="min-h-screen bg-gradient-to-br from-[#fbe0c3] via-[#a18cd1] to-[#1c1c3c] text-white flex items-center justify-center px-4 py-16">
    <div className="w-full max-w-4xl">
      {/* Form container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/10 p-10 rounded-3xl shadow-xl backdrop-blur-md text-black text-2xl">
        <input
          type="text"
          placeholder="Name"
          className="input-stylet text-black rounded-md"
          value={localData.name}
          onChange={(e) => setLocalData({ ...localData, name: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="input-style rounded-md"
          value={localData.phone}
          onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          className="input-style rounded-md"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        />
        <select  
          className="input-style rounded-md"
          value={localData.gender}
          onChange={(e) => setLocalData({ ...localData, gender: e.target.value })}
        >
          <option value="" disabled hidden >
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          className="input-style rounded-md"
          value={localData.email}
          onChange={(e) => setLocalData({ ...localData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Occupation"
          className="input-style rounded-md"
          value={localData.occupation}
          onChange={(e) => setLocalData({ ...localData, occupation: e.target.value })}
        />
        <select
          className="input-style rounded-md"
          value={localData.maritalStatus}
          onChange={(e) => setLocalData({ ...localData, maritalStatus: e.target.value })}
        >
          <option value="" disabled hidden>
            Marital Status
          </option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
        </select>
      </div>

      <div className="flex justify-center mt-10 text-3xl">
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-purple-800 hover:bg-purple-700 active:bg-purple-900 text-white rounded-full shadow-md transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</>


    );
}