import React from 'react';

// import footer data
import { footerData } from '../data';

// import components
import Copyright from './Copyright';

const Footer = () => {
  // destructure footer data
  const { logo, address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row text-center xl:text-left gap-y-12'>
          {/* info */}
          <div className='w-[45%] mx-auto flex flex-col items-center xl:items-start'>
            {/* logo */}
            <a href='#'>
              <img className='mb-[65px]' src={logo} alt='' />
            </a>
            {/* address */}
            <div className='max-w-[260px] mb-5 text-primary font-bold'>
              {address}
            </div>
            {/* email */}
            <div className='font-light italic'>{email}</div>
            {/* phone */}
            <div className='font-light italic'>{phone}</div>
          </div>
          {/* lists */}
          <div className='flex flex-1 flex-col gap-y-14 xl:flex-row justify-between'>
            {/* list 1 */}
            <div>
              <div className='font-extrabold text-primary mb-8'>About</div>
              <ul className='flex flex-col gap-y-4'>
                {list1.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className='text-primary' href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* list 2 */}
            <div>
              <div className='font-extrabold text-primary mb-8'>Help</div>
              <ul className='flex flex-col gap-y-4'>
                {list2.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className='text-primary' href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* social list */}
            <div>
              <div className='font-extrabold text-primary mb-8'>
                Social Media
              </div>
              <ul className='flex gap-y-4 gap-x-4 justify-center'>
                {socialList.map((item, index) => {
                  return (
                    <li
                      className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all'
                      key={index}
                    >
                      <a
                        className='text-white text-xl hover:text-white'
                        href={item.href}
                      >
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
