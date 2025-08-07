import gsap from "gsap";
import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = ["Contact Us", "Contact Us", "Contact Us", "Contact Us"];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
  });
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          "Let's build a <br /> <span className="font-normal">memorable</span> &
          <span className="italic">inspiring</span> <br /> web application
          <span className="text-gold"> together"</span>
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        icon="material-symbols-light:square"
        iconClassname="stroke-gold stroke-2 text-primary"
        className="text-black border-y-2 bg-transparent"
      />
    </section>
  );
};

export default Contact;
