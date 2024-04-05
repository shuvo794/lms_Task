import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 bg-slate-200 px-4 py-4">
      <div className="lg:max-w-screen-lg mx-auto flex h-full  items-center justify-between ">
        <div className="pt-8 pb-8 flex items-center gap-x-3">
          <Image src="/mascot.svg" width={40} height={40} alt="" />
          <h3 className="text-3xl font-bold text-green-600">LMS</h3>
        </div>
        <div className="flex items-center gap-x-5">
          <li className="text-xl list-none ">Home</li>
          <li className="text-xl list-none ">About</li>
          <li className="text-xl list-none ">Contuct</li>
        </div>
        <ClerkLoading>
          <Loader className="animate-spin h-5 w-5 text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
