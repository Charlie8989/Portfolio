import { useRef } from "react";
import AnimatedtextLines from "../components/AnimatedtextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaders = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        y: "200",
        duration: 1,
        opacity: 0,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div
        style={{ clipPath: "polygon(0 0, 100% 0,100% 0, 100% 100%, 0 100%)" }}
      >
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`font-light text-sm tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col flex-wrap gap-12 ${textColor} uppercase banner-text-responsive sm:gap-16 md:block`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative  ${textColor}`}>
        <div className={`px-10 ${textColor} border-t-2`}>
          <div className="py-12 sm:py-16 text-end">
            <AnimatedtextLines
              text={text}
              className={`${textColor} font-light uppercase value-text-responsive`}
            ></AnimatedtextLines>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaders;
