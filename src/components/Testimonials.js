import React from 'react';

// import components
import TestimonialSlider from '../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='relative'>
      <div className='container-fluid mx-auto'>
        <div
          className='bg-accent-primary min-h-[600px]'
          data-aos='fade-up'
          data-aos-offset='300'
        >
          <div className='flex flex-col justify-center px-2 xl:px-0 h-[800px]'>
            <h2 className='h2 text-white text-center mb-[80px]'>
              Testimonials
            </h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
