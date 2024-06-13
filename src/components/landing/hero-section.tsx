"use client";
import { useRef, useState } from "react";
import { ChevronRight, Sparkles, Play, Github } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-background">
      <section className="container flex flex-col items-center w-full px-4 py-40 justify-center gap-10 max-sm:py-20">
        <div className="bg-primary rounded-full p-2 px-5 text-secondary text-sm flex items-center">
          <Sparkles
            className="w-4 h-4 inline-block mr-2 "
            fill="currentColor"
          />
          <p className="line-clamp-1 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <ChevronRight className="w-4 h-4 inline-block ml-2" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold text-center text-primary max-sm:text-4xl max-sm:text-left max-sm:w-full">
            Saas Landing Page
          </h1>
          <h1 className="text-6xl font-bold text-center max-sm:text-4xl max-sm:text-left">
            Design has never been easier
          </h1>
        </div>

        <p className="text-center text-xl max-w-2xl font-medium max-sm:text-sm max-sm:text-left">
          Saas Landing Page Template Design has never been easier. Use this
          template to create a beautiful landing page for your SaaS application.
        </p>

        <div className="flex gap-4 max-sm:flex-col max-sm:w-full">
          <Button variant="outline" size="lg" className="max-sm:w-full">
            Learn more
          </Button>
          <Button size="lg" className="max-sm:w-full">
            Get started <Github className="w-5 h-5 ml-3" />
          </Button>
        </div>

        <div className="relative w-full h-full mt-20 z-10 max-sm:mt-5">
          <video
            ref={videoRef}
            loop
            playsInline
            className="w-full h-full rounded-xl p-5 bg-secondary z-10"
            src="https://stream.mux.com/Woifb2gxZArCOh2z1aPMW901UdR9pSeF5Dhx6kaEVZYc/high.mp4"
            onClick={togglePlay}
          />
          {!isPlaying && (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50 rounded-lg">
              <div
                className="rounded-full bg-primary p-10 focus:outline-none text-secondary hover:scale-125 transform transition-all duration-300 ease-in-out cursor-pointer max-sm:p-5"
                onClick={togglePlay}
              >
                <Play
                  className="w-12 h-12 max-sm:w-5 max-sm:h-5"
                  style={{ transform: "scale(1.5)" }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="bg-secondary-foreground rounded-2xl py-20 px-10 text-secondary w-full mt-10 flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl font-bold">
            Optimized for easy customization
          </h2>
          <p className="text-muted-foreground">
            Every variable, style, and component is optimized for quick, easy
            customization, and long-term maintainability
          </p>

          <div className="grid grid-cols-4 gap-10 w-full mt-10 max-sm:grid-cols-1">
            <HeroItem />
            <HeroItem />
            <HeroItem />
            <HeroItem />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

const HeroItem = () => {
  return (
    <div className="w-full p-5 hover:bg-white/10 rounded-lg cursor-pointer gap-5 flex flex-col max-sm:bg-white/10">
      <h3 className="text-2xl font-bold">Customizable</h3>
      <p className="text-muted-foreground">
        Every variable, style, and component is optimized for quick, easy
        customization, and long-term maintainability
      </p>
      <Button variant="secondary" size="sm" className="w-fit">
        Learn more <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};
