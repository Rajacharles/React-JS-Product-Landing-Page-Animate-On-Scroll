import React from 'react';

// import cta data
import { ctaData } from '../data';

// import icons
import { BsArrowRight } from 'react-icons/bs';

const CtaSection = () => {
  // destructure cta data
  const { title, subtitle, btnText1, btnText2 } = ctaData;
  return (
    <section className='my-[75px] xl:my-[150px] border-t-2' data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center'>
          {/* text */}
          <div className='py-12 xl:py-24 text-center xl:text-left'>
            <h2 className='h2 mb-5' data-aos='fade-up' data-aos-delay='300'>
              {title}
            </h2>
            <p className='lead' data-aos='fade-up'>
              {subtitle}
            </p>
          </div>
          {/* buttons */}
          <div className='flex flex-col xl:flex-row gap-y-4 gap-x-[30px]'>
            <button
              className='btn btn-secondary'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              {btnText1}
            </button>
            <button
              className='btn btn-quaternary flex items-center gap-x-[20px] group'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              {btnText2}
              <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
