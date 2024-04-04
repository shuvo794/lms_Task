import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="hidden lg:block h-20 border-t-2 border-slate-200 p-2">
      <div className="max-w-screen mx-auto flex items-center justify-evenly">
        <Button size="lg" variant="ghost">
          © 2024 LMS. Built with Next.js.
        </Button>
      </div>
    </div>
  );
};

export default Footer;
