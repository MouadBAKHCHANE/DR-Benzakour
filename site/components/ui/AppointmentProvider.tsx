"use client";

import { useState, useEffect } from "react";
import { AppointmentModal } from "./AppointmentModal";

export function AppointmentProvider() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-appointment", handleOpen);

    // Intercept clicks on any element with data-appointment attribute
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-appointment]');
      if (target) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("open-appointment", handleOpen);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <AppointmentModal open={open} onClose={() => setOpen(false)} />;
}
