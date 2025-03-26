
import React from 'react';
import { cn } from "@/lib/utils";
import FadeIn from './FadeIn';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: boolean;
  fadeIn?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  container = true,
  fadeIn = true,
  ...props
}) => {
  const content = (
    <section
      className={cn(
        "py-16 sm:py-24",
        container && "container max-w-6xl mx-auto px-4 sm:px-6",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );

  if (fadeIn) {
    return <FadeIn>{content}</FadeIn>;
  }

  return content;
};

export default Section;
