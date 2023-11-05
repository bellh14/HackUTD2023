"use client";
import { Footer } from 'flowbite-react';
import { BsGithub } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/Ai';

type Props = {};

export default function FooterBar(props: Props){
  return (
    <Footer container style={{backgroundColor:"#05314D"}}>
      <Footer.Copyright className='text-black' style={{color:"white", fontSize:'20px'}} href="#" by="HACKUTD™" year={2023} />
      <Footer.LinkGroup style={{ display: 'flex',color:"white", alignItems: 'center'}} className='text-black'>
      <Footer.Link href="home" ><AiTwotoneHome style={{color:"white", fontSize:'30px'}}/></Footer.Link>
        <Footer.Link href="https://github.com/bellh14/HackUTD2023" > < BsGithub style={{ fontSize:'30px'}}/> </Footer.Link>
      </Footer.LinkGroup>

    </Footer>
  );
}