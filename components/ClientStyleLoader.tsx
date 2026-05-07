// components/ClientStyleLoader.tsx
"use client";

import dynamic from "next/dynamic";

// We wrap the loader in a dynamic import with ssr: false here
const DynamicStyles = dynamic(() => import("./StyleLoader"), {
  ssr: false,
});

export default function ClientStyleLoader() {
  return <DynamicStyles />;
}
