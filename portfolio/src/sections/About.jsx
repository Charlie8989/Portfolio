import { useRef } from "react";
import AnimatedHeaders from "../components/AnimatedHeaders";
import AnimatedtextLines from "../components/AnimatedtextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `From interactive MERN stack apps to stunning edits and posters, I build with performance, creativity, and purpose — from idea to execution.`;
  
  const aboutText = `I'm a MERN stack developer with a passion for building clean, scalable web applications that feel fast and intuitive. Whether it's designing smooth frontends in React or structuring robust backend logic, I aim to create digital experiences that work flawlessly. Beyond development, I also enjoy video editing and poster making — combining creativity with tech to bring stories and ideas to life in a visually engaging way.`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaders
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/Man.jpeg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedtextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
