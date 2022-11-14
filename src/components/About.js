import React from 'react';

// import about data
import { aboutData } from '../data';

const About = () => {
  // destructure about
  const { image, title, subtitle } = aboutData;
  return (
    <section
      className='my-[30px] xl:mt-[100px]'
      data-aos='fade-up'
      data-aos-offset='350'
    >
      <div className='container mx-auto'>
        <div className='bg-accent-secondary/[15%] rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          {/* image */}
          <div className='flex-1' data-aos='zoom-in-left'>
            <img src={image} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mb-10' data-aos='fade-up' data-aos-delay='300'>
              {title}
            </h2>
            <p
              className='max-w-[474px] mx-auto xl:mx-0'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
