import Image from "next/image";

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

const Features2Section = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-32 bg-background max-sm:py-20">
      <div className="flex flex-col container gap-5 w-full items-center justify-center text-center max-sm:items-start max-sm:text-left">
        <span className="border rounded-full px-4 py-1 bg-background shadow">
          Slots
        </span>
        <h1 className="text-4xl font-medium max-w-3xl max-sm:text-2xl">
          Explore Slots Feature
        </h1>
        <p className="text-muted-foreground max-w-3xl text-base max-sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies aliquet, nunc purus ultricies nunc, nec
          tincidunt turpis nunc nec nunc.
        </p>

        <div className="grid grid-cols-12 gap-5 w-full mt-10">
          <div className="col-span-7 max-sm:col-span-12">
            <FeatureItem
              label={features[0].label}
              description={features[0].description}
            />
          </div>
          <div className="col-span-5 max-sm:col-span-12">
            <FeatureItem
              label={features[1].label}
              description={features[1].description}
            />
          </div>
          <div className="col-span-5 max-sm:col-span-12">
            <FeatureItem
              label={features[2].label}
              description={features[2].description}
            />
          </div>
          <div className="col-span-7 max-sm:col-span-12">
            <FeatureItem
              label={features[3].label}
              description={features[3].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2Section;

const FeatureItem = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col w-full bg-background border rounded-2xl p-1 h-full hover:translate-x-2 cursor-pointer animate-in duration-300 shadow-lg">
      <Image
        src="https://assets-global.website-files.com/655740d4e61407b6b8a9551a/65f44e8a6dc2aecf0f4b8996_slots-feature.png"
        alt="Feature Item"
        width={400}
        height={400}
        className="w-full object-left object-contain rounded-xl"
      />
      <div className="flex flex-col gap-3 p-5 mt-auto">
        <h3 className="text-2xl font-semibold">{label}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
