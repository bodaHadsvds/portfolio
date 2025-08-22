import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare,FaWhatsapp } from 'react-icons/fa';
import TypeIt from "typeit-react";
const Hero = () => {
  return(
    <div className='bg-emerald-100 py-24'> <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center  gap-8 '><article>
       <TypeIt  options={{
                    speed: 40,
                    waitUntilVisible: true,
                }} > <h1 className='text-7xl font-bold tracking-wider'>I'm Abdelrahman</h1> <strong></strong></TypeIt> 
        <p className='mt-4 text-3xl text-slate-700 capitlize tracking-wide'>Front-End web developer</p>
        <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>turning idea into interactive reality </p>
        {/* <div className='flex gap-x-4 mt-4'>
            <a href="https://github.com/bodaHadsvds"> <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/></a>
            <a href="https://www.linkedin.com/in/abdelrahman-mostafa-4b21231a2/"> <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'/></a>
            <a href="#"> <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/></a>
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwa.me%2Fmessage%2FKHGDIGSCMFA6B1%3Ffbclid%3DIwAR1bE87iH2gJbQLUCH4byh02RFgz0hbCS1kQkBDWB_62aVGXzcCEiaTroZs&h=AT2aZy2FxAkJHqxJz3orDcLlHUstTop0P4Nsnz7Kf1D_PO8aObUfEVGHDCmwGbMzrGxWHZ-td4qRgGGBdyt5NTXDijb5LdcT7477jMHOljhAG7HVpNevMZGzsTEt1_qQJWfX7A"> <FaWhatsapp className='h-8 w-8 text-slate-500 hover:text-black duration-300'/></a>
        </div> */}
        </article>
        <article className='hidden md:block'>
            <img src={heroImg} className='h-80 lg:h-96' />
        </article>
        </div>
        </div>
  );
};
export default Hero;