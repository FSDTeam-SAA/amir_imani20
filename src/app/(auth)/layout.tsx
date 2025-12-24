import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Authentication Layout",
  description: "Authentication Layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-[linear-gradient(0deg,rgba(212,161,50,0.90)_0%,rgba(212,161,50,0.90)_100%),url('/bg.png')] 
      bg-cover bg-center bg-no-repeat flex-col gap-5">
      {/* Logo */}
      {/* <div className=" flex items-center justify-center mb-4">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={60}
          className="w-full "
          priority
        />
      </div> */}

      {children}
    </div>
  );
}