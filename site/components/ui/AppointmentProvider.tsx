"use client";

import { useEffect } from "react";
import { DABADOC_URL } from "@/lib/constants";

export function AppointmentProvider() {
  useEffect(() => {
    const openDabadoc = () =>
      window.open(DABADOC_URL, "_blank", "noopener,noreferrer");

    // Legacy event kept for compatibility — now opens the Dabadoc booking page
    const handleOpen = () => openDabadoc();
    window.addEventListener("open-appointment", handleOpen);

    // Any element with [data-appointment] redirects to the Dabadoc booking page
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-appointment]");
      if (target) {
        e.preventDefault();
        openDabadoc();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("open-appointment", handleOpen);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
