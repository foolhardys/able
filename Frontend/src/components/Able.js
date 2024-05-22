import React, { useEffect, useRef } from "react";
import "../styles/Able.css";
import amazon from "../assets/amazon.png";
import google from "../assets/google.jpg";
import accenture from "../assets/accenture.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";
import spotify from "../assets/spotify.png";
import zomato from "../assets/zomato.png";

function Able() {
  const objectsRef = useRef([]);

  useEffect(() => {
    function parallax(e) {
      objectsRef.current.forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 100;
        const y = (e.clientY * movingValue) / 100;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <div className="icons">
      <h1 className="text-7xl mb-12 ml-16 font-semibold">able</h1>
      <img
        className="brand-img object"
        data-value="-4"
        src={amazon}
        ref={(el) => (objectsRef.current[0] = el)}
        alt=""
      />
      <img
        className="brand-img object"
        data-value="4"
        src={google}
        ref={(el) => (objectsRef.current[1] = el)}
        alt=""
      />
      <img
        className="brand-img object"
        data-value="-9"
        src={accenture}
        ref={(el) => (objectsRef.current[2] = el)}
        alt=""
      />
      <img
        className="brand-img object"
        data-value="-5"
        src={apple}
        ref={(el) => (objectsRef.current[3] = el)}
        alt=""
      />
      <img
        className="brand-img object"
        data-value="6"
        src={facebook}
        ref={(el) => (objectsRef.current[4] = el)}
        alt=""
      />
      <img
        className="brand-img object"
        data-value="4"
        src={spotify}
        ref={(el) => (objectsRef.current[5] = el)}
        alt=""
      />
      <img
        className="brand-img object"
        data-value="6"
        src={zomato}
        ref={(el) => (objectsRef.current[6] = el)}
        alt=""
      />
    </div>
  );
}

export default Able;
