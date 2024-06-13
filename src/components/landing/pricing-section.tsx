import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    price: "Free",
    label: "Starter",
    description:
      "Good for anyone who is self-employed and just getting started.",
    features: [
      "Unlimited traffic",
      "100% data ownership",
      "Email reports",
      "Custom domain",
      "24/7 support",
      "Manual payroll support",
      "Track up to 15 expenses per month",
    ],
  },
  {
    price: "$15",
    label: "✦ Premium",
    description:
      "Good for anyone who is self-employed and just getting started.",
    features: [
      "Unlimited traffic",
      "100% data ownership",
      "Email reports",
      "Custom domain",
      "24/7 support",
      "Manual payroll support",
      "Track up to 15 expenses per month",
    ],
  },
  {
    price: "$30",
    label: "🏢  Enterprise",
    description:
      "Individual license, perfect plan for solo designers and freelancers",
    features: [
      "Unlimited traffic",
      "100% data ownership",
      "Email reports",
      "Custom domain",
      "24/7 support",
      "Manual payroll support",
      "Track up to 15 expenses per month",
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-32 bg-background max-sm:py-20">
      <div className="flex flex-col container gap-5 w-full items-center justify-center text-center max-sm:items-start max-sm:text-left">
        <span className="border rounded-full px-4 py-1 bg-background shadow">
          Pricing
        </span>
        <h1 className="text-4xl font-medium max-w-3xl max-sm:text-2xl">
          Flexible Pricing Solutions
        </h1>
        <p className="text-muted-foreground max-w-3xl text-base max-sm:text-sm">
          Pay now and use Beyond UI forever with free updates
        </p>

        <div className="grid grid-cols-3 gap-5 w-full mt-10 max-sm:grid-cols-1">
          <div className="col-span-1">
            <PricingItem
              price={features[0].price}
              label={features[0].label}
              description={features[0].description}
              features={features[0].features}
            />
          </div>
          <div className="col-span-1">
            <PricingItem
              price={features[1].price}
              label={features[1].label}
              description={features[1].description}
              features={features[1].features}
              bestSeller
            />
          </div>
          <div className="col-span-1">
            <PricingItem
              price={features[2].price}
              label={features[2].label}
              description={features[2].description}
              features={features[2].features}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

const PricingItem = ({
  price,
  label,
  description,
  features,
  bestSeller,
}: {
  price: string;
  label: string;
  description: string;
  features: string[];
  bestSeller?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full bg-background border rounded-2xl p-7 h-full gap-5 text-secondary-foreground max-sm:p-5",
        bestSeller ? "border-2 border-primary" : "border-border"
      )}
    >
      <span className="border rounded-full px-4 py-1 w-fit">{label}</span>

      <h2 className="text-5xl font-medium max-sm:text-2xl">{price}</h2>
      <p className="text-muted-foreground max-sm:text-sm">{description}</p>

      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm">Includes:</p>
        <ul className="text-start flex flex-col gap-5 py-5">
          {features.map((feature) => (
            <li className="flex items-center" key={feature}>
              <Sparkles
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Button size="lg">Get started</Button>
      <Button variant="outline" size="lg">
        Learn more
      </Button>
    </div>
  );
};
