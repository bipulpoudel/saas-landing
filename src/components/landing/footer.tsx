import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col pt-32 bg-muted justify-between max-sm:py-20">
      <div className="container grid grid-cols-5 gap-10 max-sm:grid-cols-2">
        <div className="flex flex-col gap-3 items-start max-sm:col-span-2">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="Beyond UI Logo"
              width={160}
              height={40}
            />
          </Link>
          <p className="text-muted-foreground text-sm">
            Saas Starter Kit has everything you need to build your next great
            web app or website with Figma.
          </p>

          <div className="flex items-center gap-3 pt-5">
            <Button size="icon" variant="outline">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="outline">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="outline">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="outline">
              <Facebook className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <NavItem
            label="Products"
            items={[
              { label: "Slot UI Kit", href: "/slot-ui-kit" },
              { label: "Slot Design System", href: "/slot-design-system" },
              { label: "Slot Landing Page", href: "/slot-landing-page" },
            ]}
          />
          <NavItem
            label="Resources"
            items={[
              { label: "Slot Documentation", href: "/slot-documentation" },
              { label: "Slot Blog", href: "/slot-blog" },
              { label: "Slot Community", href: "/slot-community" },
            ]}
          />
          <NavItem
            label="Company"
            items={[
              { label: "About", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-10">
          <NavItem
            label="Legal"
            items={[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Refund Policy", href: "/refund-policy" },
            ]}
          />
          <NavItem
            label="Support"
            items={[
              { label: "Help Center", href: "/help-center" },
              { label: "FAQs", href: "/faqs" },
              { label: "Contact Support", href: "/contact-support" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-10">
          <NavItem
            label="Legal"
            items={[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Refund Policy", href: "/refund-policy" },
            ]}
          />
          <NavItem
            label="Support"
            items={[
              { label: "Help Center", href: "/help-center" },
              { label: "FAQs", href: "/faqs" },
              { label: "Contact Support", href: "/contact-support" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-10">
          <NavItem
            label="Legal"
            items={[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Refund Policy", href: "/refund-policy" },
            ]}
          />
          <NavItem
            label="Support"
            items={[
              { label: "Help Center", href: "/help-center" },
              { label: "FAQs", href: "/faqs" },
              { label: "Contact Support", href: "/contact-support" },
            ]}
          />
          <NavItem
            label="Legal"
            items={[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Refund Policy", href: "/refund-policy" },
            ]}
          />
          <NavItem
            label="Legal"
            items={[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Refund Policy", href: "/refund-policy" },
            ]}
          />
        </div>

        <div className="col-span-5 flex flex-col items-start pb-10 gap-3 max-sm:col-span-2 text-center max-sm:text-left max-sm:pb-0">
          <Separator />
          <p className="text-muted-foreground mt-5 text-sm">
            © 2024 Saas Starter Kit. All rights reserved. Made with ❤️ by Bipul
            Poudel
          </p>
          <p className="text-muted-foreground text-sm">
            We are not affiliated with Figma. This website was made with a lot
            of love using Webflow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const NavItem = ({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold mb-2 text-lg">{label}</span>
      {items.map((item) => (
        <Link href={item.href} key={item.label} legacyBehavior>
          <a className="text-muted-foreground font-medium text-sm hover:text-primary">
            {item.label}
          </a>
        </Link>
      ))}
    </div>
  );
};
