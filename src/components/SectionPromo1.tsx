import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import rightImgDemo from "@/images/rightLargeImg.png";
import rightLargeImgDark from "@/images/rightLargeImgDark.png";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Logo from "@/shared/Logo/Logo";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";

export interface SectionPromo1Props {
  className?: string;
}

const SectionPromo1: FC<SectionPromo1Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionPromo1 relative flex flex-col lg:flex-row items-center ${className}`}>
      <div className='relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5'>
        <Logo className='w-28' />
        <h2 className='font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-3 !leading-[1.2] tracking-tight'>
          Our Story
        </h2>
        <span className='block mt-3 text-slate-500 dark:text-slate-400 '>
          Display reviews from developers who have tried and loved Fika coffee.
        </span>
        <div className='flex space-x-2 sm:space-x-5 mt-6 sm:mt-12'>
          <ButtonPrimary
            href='/collection'
            className=''>
            Explore more &gt;
          </ButtonPrimary>
        </div>
      </div>
      <div className='relative flex-1'>
        <NcImage
          alt=''
          containerClassName='flex dark:hidden justify-center'
          src={rightImgDemo}
          sizes='(max-width: 420px) 50vw, 50vw'
          width={420}
          height={420}
          className=''
        />
      </div>
    </div>
  );
};

export default SectionPromo1;
