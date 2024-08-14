import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import rightImgDemo from "@/images/promo3.png";
import backgroundLineSvg from "@/images/BackgroundLine.svg";
import Badge from "@/shared/Badge/Badge";
import Input from "@/shared/Input/Input";
import ButtonCircle from "@/shared/Button/ButtonCircle";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export interface SectionPromo3Props {
  className?: string;
}

const SectionPromo3: FC<SectionPromo3Props> = ({ className = "lg:pt-10" }) => {
  return (
    <div className={`nc-SectionPromo3 ${className}`}>
      <div className='relative flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24'>
        <div className='absolute inset-0'>
          <Image
            fill
            className='absolute w-full h-full object-contain object-bottom dark:opacity-5'
            src={backgroundLineSvg}
            alt='backgroundLineSvg'
          />
        </div>

        <div className='lg:w-[50%] max-w-lg relative'>
          <h2 className='font-semibold text-4xl md:text-5xl'>
            {`☕️ Awaken your passion for coffee`}
          </h2>
          <span className='block mt-5 text-neutral-500 dark:text-neutral-400'>
            Sign up now to receive the latest coffee news, brewing secrets, and
            exclusive offers.
          </span>
          <form className='mt-10 relative max-w-sm'>
            <Input
              required
              aria-required
              placeholder='Enter your email'
              type='email'
              rounded='rounded-full'
            />
            <ButtonCircle
              type='submit'
              className='absolute transform top-1/2 -translate-y-1/2 right-1'>
              <ArrowSmallRightIcon className='w-6 h-6' />
            </ButtonCircle>
          </form>
        </div>

        <NcImage
          alt=''
          containerClassName=' block mt-10 lg:mt-0 lg:max-w-[calc(100%-40px)] ml-auto'
          src={rightImgDemo}
          sizes='(max-width: 768px) 100vw, 50vw'
          className=''
        />
      </div>
    </div>
  );
};

export default SectionPromo3;
