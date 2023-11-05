"use client";
import { Footer } from 'flowbite-react';
import { BsGithub } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/Ai';

type Props = {};

export default function FooterBar(props: Props){
  return (
    <Footer container className="bg-primary">
      <Footer.Copyright className='text-black' href="#" by="HACKUTD™" year={2023} />
      <Footer.LinkGroup style={{ display: 'flex', alignItems: 'center'}} className='text-black'>
      <Footer.Link style={{ display: 'flex', alignItems: 'right'}} href="home" ><AiTwotoneHome/></Footer.Link>
        <Footer.Link href="https://github.com/bellh14/HackUTD2023" ><BsGithub  /></Footer.Link>
      </Footer.LinkGroup>

    </Footer>
  );
}