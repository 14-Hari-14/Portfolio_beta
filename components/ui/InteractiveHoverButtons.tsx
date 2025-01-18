'use client';
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link: string; // The link prop can now handle internal navigation (e.g., #id)
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, link, ...props }, ref) => {
  const handleClick = () => {
    if (link.startsWith("#")) {
      // Scroll to a section within the same page
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Open external links in a new tab
      window.open(link, "_blank");
    }
  };

  return (
    <button
      ref={ref}
      onClick={handleClick} // Attach the onClick handler
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-blue-200 p-2 px-6 text-center font-semibold font-mono",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-purple-100 transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
