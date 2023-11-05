"use client";


import { Carousel } from 'flowbite-react';
import ApprovalSection from "./(home)/ApprovalSection";

export default function Home() {
    return (

        <main className="items-center justify-between p-24 bg-white h-screen">
          <div className="h-400 sm:h-64 xl:h-80 2xl:h-96" style={{height:'850px'}}>
      <Carousel slideInterval={5000} >
        <div>
          <img src="https://images.unsplash.com/photo-1564156280315-1d42b4651629?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhbWlseSUyMHJlbm92YXRpbmd8ZW58MHx8MHx8fDA%3D" alt="..." style={{ width: '100%', height:'fill', objectFit:'contain'}} />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1674049406387-86c6d13a8285?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWVzJTIwYW5kJTIwZmFtaWxpZXN8ZW58MHx8MHx8fDA%3D" alt="..." style={{ width: '100%', height:'80%' ,objectFit:'contain' }} />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1577897113292-3b95936e5206?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhbWlsaWVzfGVufDB8fDB8fHww" alt="..." style={{ width: '100%', height:'80%' , objectFit:'contain'}} />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ldyUyMGZhbWlsaWVzfGVufDB8fDB8fHww" alt="..."style={{ width: '100%', height:'80%', objectFit:'contain'}} />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw2MDcwODV8fGVufDB8fHx8fA%3D%3D" alt="..." style={{ width: '100%', height:'80%' , objectFit:'contain'}} />
        </div>
      </Carousel>
    </div>
            <ApprovalSection approvalStatus="Y" loanAmount={100000} monthlyPayment={2500}/>
            
        </main>
        
    );
}
