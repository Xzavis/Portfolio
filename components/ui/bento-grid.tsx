'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./magicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassesName,
  titleClassesName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassesName?: string;
  titleClassesName?: string;
  spareImg?: string;
}) => {
  // Membuat Loop Copas email
  const [copied, setCopied] = useState(false);
  // membuat sebuah Function ketika di Click bernama 'hanleClick'
  const handleCopy = () => {
    navigator.clipboard.writeText('xzabdulmalikibrahim@gmail.com')
    // kita buat setCopy ketika true
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba (12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassesName, 'object-cover,object-center ')}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${`id === 5 && 'w-full opacity-80' `}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover,object-center w-full h-full '}
            />
          )}
        </div>

        <div>
          {id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex justify-center h-full items-center text-white font-bold">
              </div> */}
            </BackgroundGradientAnimation>
          )}
        </div>

        <div className={cn(
          titleClassesName, 'group-hover/bento:translate-x-2 transition-200 relative duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-7 '
        )}>
          <div className="font-sans font-extraLight text-[#c1c2d3] text-sm md:text-sm lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text- lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {/* Globe Demo */}
          {id === 2 && <GlobeDemo />}
          {/* Style Grid card 3 */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8 ">
                {['Bootstrap 5', 'JavaScript', 'PHP'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10123e]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10123e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10123e]" />
                {['React', 'Next.js', 'Tailwind'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10123e]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-4 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMiYMid slice',
                  }
                }} />
              </div>
              <MagicButton
                title={copied ? 'Email Copied' : 'Copy My Email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses='!bg-[#161a31]'
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
