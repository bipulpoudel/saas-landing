import Image from "next/image";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";

const features = [
  {
    label: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc purus ultricies nunc, nec tincidunt turpis nunc nec nunc.",
  },
  {
    label: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc purus ultricies nunc, nec tincidunt turpis nunc nec nunc.",
  },
  {
    label: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc purus ultricies nunc, nec tincidunt turpis nunc nec nunc.",
  },
  {
    label: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc purus ultricies nunc, nec tincidunt turpis nunc nec nunc.",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-32 bg-muted max-sm:py-20">
      <div className="flex flex-col gap-5 w-full items-center justify-center">
        <div className="flex flex-col gap-5 w-full px-7 items-center justify-center text-center max-sm:items-start max-sm:text-left">
          <span className="border rounded-full px-4 py-1 bg-background shadow">
            Testimonials
          </span>
          <h1 className="text-4xl font-medium max-w-3xl max-sm:text-2xl">
            We are loved by our customers
          </h1>
          <p className="text-muted-foreground max-w-3xl text-base max-sm:text-sm">
            Read what our customers have to say about our product and services.
            We take pride in our customer satisfaction.
          </p>
        </div>

        <div className="w-full flex flex-col antialiased items-center justify-center relative overflow-hidden mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

const testimonials = [
  {
    quote:
      "Using [Product Name] has truly transformed my daily routine! I've never felt more organized and efficient. The user-friendly interface and seamless integration with my existing tools make it an indispensable part of my life. I highly recommend it to anyone looking to boost their productivity!",
    name: "Sarah M.",
    title: "Marketing Manager",
  },
  {
    quote:
      "I was skeptical at first, but [Product Name] exceeded all my expectations. The quality and attention to detail are unmatched. It's rare to find a product that delivers exactly what it promises. I am beyond satisfied with my purchase and will definitely be coming back for more",
    name: "John D.",
    title: "Tech Enthusiast",
  },
  {
    quote:
      "[Product Name] is a game-changer! As someone who struggles with maintaining a healthy lifestyle, this product has made it so much easier. The results speak for themselves, and I've never felt better. It's worth every penny and then some.",
    name: "Lisa T.",
    title: "Fitness Coach",
  },
  {
    quote:
      "The customer service at [Company Name] is phenomenal. When I had an issue with my order, they resolved it quickly and professionally. Plus, the product itself is fantastic - high quality and exactly as described. I'm a loyal customer for life!",
    name: "Michael B.",
    title: "Small Business Owner",
  },
  {
    quote:
      "I've tried many similar products, but [Product Name] stands out from the rest. The performance is outstanding, and it has made a significant difference in my daily tasks. I recommend it to everyone I know, and they all love it too!",
    name: "Emma S.",
    title: "Graphic Designer",
  },
];
