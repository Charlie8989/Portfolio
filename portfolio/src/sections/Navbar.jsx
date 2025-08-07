import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setshowBurger] = useState(true);
  const iconTL = useRef(null);

  useGSAP(() => {
    gsap.set(navRef.current, {
      xPercent: 100,
    });
    gsap.set([linksRef.current, contactRef.current], { autoAlpha: 0, x: -20 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "Power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );
    iconTL.current = gsap
      .timeline({ paused: true })
      .to(topRef.current, {
        rotate: 45,
        y: 3.3,
        ease: "power2.inOut",
        duration: 0.5,
      })
      .to(
        bottomRef.current,
        {
          rotate: -45,
          y: -3.3,
          ease: "power2.inOut",
          duration: 0.5,
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      let currentScroll = window.scrollY;

      setshowBurger(currentScroll <= lastScroll || currentScroll < 10);

      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTL.current.reverse();
    } else {
      tl.current.play();
      iconTL.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col w-full h-full px-10 bg-black justify-between text-white/70 py-28 gap-y-10 uppercase md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  to={`${section}`}
                  smooth="true"
                  offset={0}
                  duration={2000}
                  className="transition-all duration-300 cursor-pointer hover:text-white"
                >
                  {section}
                </Link>
              </div>
            )
          )}
        </div>

        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50 ">Email</p>
            <p className="lowercase tracking-wider text-xl">
              sahuayush467@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2 cursor-pointer">
              {socials.map((social, index) => (
                <span key={index}>
                  <a
                    href={social.href}
                    className="hover:text-white transition-colors duration-300 text-sm leading-loose tracking-widest uppercase text-white/70"
                  >
                    {social.name}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
      >
        <span
          ref={topRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
