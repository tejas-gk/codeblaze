"use client";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
const Card = ({ title, description, imageSrc, register }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(255,115,0, 0.2), rgb(231,150,82,0))`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = "#d1f2f900";
  };

  return (
    <div className="p-4 w-full">
      <div className="md:flex hidden">
        <Tilt>
          <div
            className="button rounded-3xl border border-transparent hover:border-[#F1A340]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="h-full rounded-3xl bg-[#d1f2f9] bg-opacity-5 overflow-hidden">
              <div className="flex flex-col items-center p-6">
                <Image
                  height={500}
                  width={500}
                  className="rounded-xl lg:h-48 md:h-36 w-full object-cover object-center"
                  src={imageSrc}
                  alt=""
                />
                <h1 className="mt-5 title-font text-2xl font-bold mb-3">
                  {title}
                </h1>
                <p className=" border-t-2 border-[#6D76A3] pt-3 leading-relaxed mb-3">
                  {description}
                </p>
                <Link target="_blank" href={register}>
                  <div className="group flex w-fit rounded-full border border-transparent px-9 py-3 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30">
                    <h2 className={`text-lg font-semibold `}>
                      Register{" "}
                      <span className="inline-block text-pink-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
      <div className="md:hidden flex">
        <div
          className="button rounded-3xl border border-transparent hover:border-[#F1A340]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-full rounded-3xl bg-[#d1f2f9] bg-opacity-5 overflow-hidden">
            <div className="flex flex-col items-center p-6">
              <Image
                height={500}
                width={500}
                className="rounded-xl lg:h-48 md:h-36 w-full object-cover object-center"
                src={imageSrc}
                alt=""
              />
              <h1 className="mt-5 title-font text-2xl font-bold mb-3">
                {title}
              </h1>
              <p className=" border-t-2 border-[#6D76A3] pt-3 leading-relaxed mb-3">
                {description}
              </p>
              <Link target="_blank" href={register}>
                <div className="group flex w-fit rounded-full border border-transparent px-9 py-3 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30">
                  <h2 className={`text-lg font-semibold `}>
                    Register{" "}
                    <span className="inline-block text-pink-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;