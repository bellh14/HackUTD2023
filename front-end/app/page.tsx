import Image from "next/image";
import ApprovalSection from "./(home)/ApprovalSection";

export default function Home() {
    return (
        <main className="items-center justify-between p-24 bg-white h-screen">
            <ApprovalSection approvalStatus="Y" loanAmount={100000} monthlyPayment={2500}/>
        </main>
    );
}
