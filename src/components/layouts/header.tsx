import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full max-sm:border-b">
      <header className="container flex items-center w-full px-4 py-3 justify-between max-sm:py-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="SaaS Starter Kit"
            width={160}
            height={40}
          />
        </Link>

        <nav className="flex items-center gap-2 max-sm:hidden">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About us</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Features</Button>

          <Button variant="outline" size="lg">
            Sign in
          </Button>

          <Button size="lg">Get started</Button>
        </nav>

        <Button variant="ghost" size="icon" className="hidden max-sm:flex">
          <Menu className="w-7 h-7" />
        </Button>
      </header>
    </div>
  );
};

export default Header;
