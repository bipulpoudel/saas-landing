import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const items = [
  {
    title: "How does Revesh work?",
    description:
      "Revesh is a cloud-based platform that allows you to manage your agency's operations, including client management, project management, and billing, all in one place.",
    image: "/blog.avif",
  },
  {
    title: "What are the benefits of using Revesh?",
    description:
      "Revesh streamlines your agency's operations, saving you time and money. With Revesh, you can automate repetitive tasks, track project progress, and manage your team more efficiently.",
    image: "/blog.avif",
  },
  {
    title: "How much does Revesh cost?",
    description:
      "Revesh offers a range of pricing plans to suit agencies of all sizes. Our plans start at $29 per month and scale up based on the number of users and features you need.",
    image: "/blog.avif",
  },
  {
    title: "Is Revesh secure?",
    description:
      "Revesh takes security seriously. We use industry-standard encryption to protect your data and ensure that your agency's information is safe and secure.",
    image: "/blog.avif",
  },
  {
    title: "Can I try Revesh before I buy?",
    description:
      "Yes! Revesh offers a 14-day free trial so you can try out all of our features before you commit. Sign up today to get started.",
    image: "/blog.avif",
  },
  {
    title: "How do I get started with Revesh?",
    description:
      "Getting started with Revesh is easy. Simply sign up for an account, choose a pricing plan that works for you, and start managing your agency more efficiently.",
    image: "/blog.avif",
  },
];

const BlogsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 max-sm:py-20 bg-background">
      <div className="container flex flex-col gap-5 items-center justify-center text-center max-sm:items-start max-sm:text-left">
        <span className="border rounded-full px-4 py-1 bg-background shadow">
          Blogs
        </span>
        <h2 className="text-4xl font-medium max-sm:text-2xl">
          Explore our latest blogs
        </h2>

        <p className="text-muted-foreground max-w-2xl text-base max-sm:text-sm">
          Stay up-to-date with the latest news, trends, and insights in the
          digital marketing industry
        </p>

        <div className="grid grid-cols-3 gap-5 py-20 max-sm:grid-cols-1 max-sm:py-10">
          {items.map((item) => (
            <BlogItem
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>

        <div className="flex items-center justify-center w-full">
          <Button className="rounded-full" variant="outline">
            View all blogs
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;

const BlogItem = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col w-full bg-background border rounded-2xl h-full p-4 shadow hover:translate-x-2 cursor-pointer animate-in duration-300">
      <Image
        src={image}
        alt="blog"
        width={300}
        height={200}
        className="rounded-xl w-full object-contain border"
      />

      <div className="flex flex-col gap-2 mt-4 text-left">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};
