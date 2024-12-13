"use client";

import React, { FC, useEffect, useState } from "react";

export const Transition: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, Math.random() * 1000);
  }, []);
  return (
    <div className={`transition ${show ? "show" : ""}`}>
      {children}
      <div className="mask"></div>
    </div>
  );
};
