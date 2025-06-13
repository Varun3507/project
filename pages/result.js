import { useRouter } from "next/router";    
import Navbar from "@/compo/nav";

export default function Result() {
    const router = useRouter();
    const { score } = router.query;

    return(
        <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
        <h1 className="text-3xl font-bold">Your Credit Score</h1>
        <p className="text-6xl font-extrabold text-green-600">{score}</p>
      </div>
    </>
    );
}