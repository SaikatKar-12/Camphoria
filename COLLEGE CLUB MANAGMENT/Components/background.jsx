import React from "react";
import { BackgroundBeams } from "@/Components/ui/background-beams"; // Make sure path is correct

export default function BackgroundBeamsDemo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <BackgroundBeams />
    </div>
  );
}


