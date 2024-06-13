import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

const GetStartedSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 max-sm:py-20 bg-muted/40">
      <div className="container flex flex-col gap-5 items-center justify-center text-center">
        <span className="border rounded-full px-4 py-1 bg-background shadow text-secondary-foreground">
          Get Started
        </span>
        <h2 className="text-4xl font-medium max-sm:text-3xl">
          Get started today.
        </h2>

        <p className="text-muted-foreground max-w-2xl text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies aliquet, nunc purus ultricies nunc, nec
          tincidunt turpis nunc nec nunc.
        </p>

        <div className="flex items-center justify-center w-full">
          <Button className="rounded-full" variant="outline">
            Get started
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
