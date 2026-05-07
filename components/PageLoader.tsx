"use client";

import { useEffect } from "react";

export default function PageLoader() {
  useEffect(() => {
    document.body.classList.add("page-loaded");
  }, []);

  return null;
}
