import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import HIW1img from "@/images/HIW1img.png";
import HIW2img from "@/images/HIW2img.png";
import HIW3img from "@/images/HIW3img.png";
import iconimg1 from '@/images/eco-friendly-practices.svg';
import iconimg2 from '@/images/enhance-productivity.svg';
import iconimg3 from '@/images/premium-quality.svg';

export interface SectionHowItWorkProps {
  className?: string;
  data?: typeof DEMO_DATA[0][];
}

const DEMO_DATA = [
  {
    id: 1,
    img: HIW1img,
    icon: iconimg3,
    title: 'Hack Your Potential',
    desc: 'Elevate Productivity, Performance and Creativity'
  },
  {
    id: 2,
    img: HIW2img,
    icon: iconimg2,
    title: 'Clear the Code Fog',
    desc: 'Keep You Sharp, Focus and Zen'
  },
  {
    id: 3,
    img: HIW3img,
    icon: iconimg1,
    title: 'Convenient, Healthy, Tasty',
    desc: 'No sugar, low-cal, and the perfect caffeine boost'
  }
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div className={`nc-SectionHowItWork ${className}`}>
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-4xl mb-10'>
        Why Devs Love Our Coffee
      </h2>
      <div className='relative grid sm:grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-5 xl:gap-10'>
        {data.map((item: (typeof DEMO_DATA)[number], index: number) => (
          <div
            key={item.id}
            className='relative flex flex-col items-center mx-auto bg-neutral-100 pt-8 px-8 rounded-lg w-full'>
              <NcImage
                containerClassName='mb-2 sm:mb-10 max-h-[10px] mx-auto left-0 block ml-0'
                className='rounded-3xl'
                src={item.icon}
                sizes='40px'
                alt='icon'
              />
            <div className='text-left mt-auto space-y-1 w-full'>
              <h3 className='text-base font-semibold'>{item.title}</h3>
              <span className='block text-slate-600 dark:text-slate-400 text-sm leading-2 mb-2'>
                {item.desc}
              </span>
            </div>
            <NcImage
              containerClassName='mb-4 sm:mb-10 max-w-[320px] mx-auto'
              className='rounded-3xl'
              src={item.img}
              sizes='320px'
              alt='HIW'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
