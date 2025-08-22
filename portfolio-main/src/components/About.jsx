import React from 'react'
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about' >
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
            <SectionTitle text="about me"/>         
           <p className='text-slate-600 mt-8 leading-loose'>My name is abdelrahman front End web-developer , I am passionate with programming and design websites, I always try my best to provide the best experience
            I aim to be from the best web developers around the world.  </p> 
        </article>
        </div>
    </section>
  )
}

export default About;