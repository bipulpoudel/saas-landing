"use client";
import { useState } from "react";
import Image from "next/image";
import { useAnimate } from "framer-motion";

import { cn } from "@/lib/utils";

const features = [
  {
    label: "01. Feature 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc purus ultricies nunc, nec tincidunt turpis nunc nec nunc.",
    image: "/features/feature-3.png",
  },
  {
    label: "02. Feature 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc purus ultricies nunc, nec tincidunt turpis nunc nec nunc.",
    image: "/features/feature-1.webp",
  },
  {
    label: "03. Feature 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc purus ultricies nunc, nec tincidunt turpis nunc nec nunc.",
    image: "/features/feature-2.png",
  },
];

const FeaturesSection = () => {
  const [scope, animate] = useAnimate();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onActiveChange = (index: number) => {
    animate(scope.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
    });

    setActiveIndex(index);

    setTimeout(() => {
      animate(scope.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
      });
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-32 bg-muted max-sm:py-20">
      <div className="flex flex-col container gap-5 w-full items-center justify-center text-center max-sm:items-start max-sm:text-left">
        <span className="border rounded-full px-4 py-1 bg-background shadow">
          Features
        </span>
        <h1 className="text-4xl font-medium max-w-3xl max-sm:text-2xl">
          Build beautiful landing pages in minutes
        </h1>
        <p className="text-muted-foreground max-w-3xl text-base max-sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          asperiores expedita dolorem voluptate veniam corporis harum quas.
        </p>
        <div className="grid grid-cols-5 gap-10 w-full mt-10">
          <div className="flex flex-col gap-5 h-full justify-center col-span-2 max-sm:col-span-5">
            {features.map((feature, index) => (
              <AccordionItem
                key={feature.label}
                index={index}
                label={feature.label}
                description={feature.description}
                active={activeIndex === index}
                setActive={(index) => onActiveChange(index)}
              />
            ))}
          </div>

          <div
            className="col-span-3 w-full rounded-2xl p-10 flex items-center justify-center border bg-border max-sm:col-span-5"
            ref={scope}
          >
            <Image
              src={features[activeIndex].image}
              alt="Slots"
              width={600}
              height={400}
              className="rounded-2xl w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

const AccordionItem = ({
  index,
  label,
  description,
  active,
  setActive,
}: {
  index: number;
  label: string;
  description: string;
  active: boolean;
  setActive: (index: number) => void;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 items-start text-start px-5 py-3 cursor-pointer",
        active
          ? "border-l-4 border-l-primary border-opacity-100 w-full"
          : "border-l-4 border-transparent opacity-30 hover:opacity-60 hover:border-l-primary"
      )}
      onClick={() => setActive(index)}
    >
      <h3 className="text-2xl font-bold max-sm:text-xl">{label}</h3>
      {active && <p className="max-sm:line-clamp-3">{description}</p>}
    </div>
  );
};
