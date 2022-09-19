import React, { useEffect, useState, useRef } from "react";
import "./service.scss";

export default function ServiceEntry({ icon, sub, txt }) {
  const serviceRef = useRef();
  const [serviceVisble, setServiceVisble] = useState();

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setServiceVisble(entry.isIntersecting);
    }, options);
    observer.observe(serviceRef.current);
  }, []);

  return (
    <div
      className={`ServiceEntry box-shadow-dark text-neutral-400 ${
        serviceVisble ? "animateServiceEntry" : ""
      }`}
      ref={serviceRef}
    >
      {icon}
      <div className="ServiceCardText">
        <div className="title text-neutral-200">{sub}</div>
        <div className="textBody text-neutral-200">{txt}</div>
      </div>
    </div>
  );
}
