"use client";

import { motion, useMotionValue, useTransform, MotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import Link from 'next/link';
import React from 'react';

type LinkType = {
  title: string;
  icon: React.ReactNode;
  href: string;
  target: string;
};

export const FloatingDockVertical = () => {
  return (
    <div className="hidden md:flex items-center justify-center snap-end">
      <FloatingDockCoreVertical />
    </div>
  );
};

const FloatingDockCoreVertical = () => {
  const links: LinkType[] = [
    { title: 'Linkedin', icon: <IconBrandLinkedin className="h-full w-full text-neutral-500" />, href: 'https://www.linkedin.com/in/hari-nair-243811247/', target:"_blank", },
    { title: 'Github', icon: <IconBrandGithub className="h-full w-full text-neutral-500" />, href: 'https://github.com/14-Hari-14', target:"_blank",},
    { title: 'Instagram', icon: <IconBrandInstagram className="h-full w-full text-neutral-500" />, href: 'https://www.instagram.com/ha.rii_14/', target:"_blank",  },
  ];

  const mouseY = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e: React.MouseEvent) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 rounded-2xl bg-blue-200 justify-center w-fit px-4 py-6 border border-solid border-purple-100"
    >
      {links.map((el) => (
        <IconContainerVertical mouseY={mouseY} key={el.title} el={el} />
      ))}
    </motion.div>
  );
};

const IconContainerVertical = ({
  el,
  mouseY,
}: {
  el: LinkType;
  mouseY: MotionValue<number>;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const widthTransform: MotionValue<number> = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform: MotionValue<number> = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthIconTransform: MotionValue<number> = useTransform(distance, [-150, 0, 150], [35, 70, 35]);
  const heightIconTransform: MotionValue<number> = useTransform(distance, [-150, 0, 150], [35, 70, 35]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const heightIcon = useSpring(heightIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={el.href} 
    passHref 
    target={el.target} 
    rel={el.target === "_blank" ? "noopener noreferrer" : undefined} 
    onMouseEnter={() => setHovered(true)} 
    onMouseLeave={() => setHovered(false)}>
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        className="flex relative items-center justify-center bg-blue-100 rounded-lg"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
                x: -10,
                y: '-50%',
              }}
              animate={{
                opacity: 1,
                x: -60, // Adjust this to shift text left
                y: '-50%',
              }}
              exit={{
                opacity: 0,
                x: 2,
                y: '-50%',
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute text-xs text-purple-200 top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-8 px-2 py-0.5 whitespace-pre w-fit bg-blue-200 rounded-md"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex items-center justify-center"
          style={{
            width: widthIcon,
            height: heightIcon,
          }}
        >
          {React.isValidElement(el.icon) &&
            React.cloneElement(el.icon, {
              className: `h-full w-full transition-colors duration-300 ${
                hovered ? 'text-purple-100' : 'text-neutral-500'
              }`,
            })}
        </motion.div>
      </motion.div>
    </Link>
  );
};

