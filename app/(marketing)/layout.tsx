import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-white font-sans">
      <div className="mx-auto">
        <header className="container mx-auto py-6 px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="white" strokeWidth="2"/>
                <path d="M16 4L28 10L16 16L4 10L16 4Z" fill="white" fillOpacity="0.3"/>
                <path d="M16 16V28M16 16L28 10M16 16L4 10" stroke="white" strokeWidth="2"/>
              </svg>
              <span>cube</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm hover:text-gray-300">Home</Link>
              <Link href="/gallery" className="text-sm hover:text-gray-300">Gallery</Link>
              <Link href="#features" className="text-sm hover:text-gray-300">Features</Link>
              <Link href="#pricing" className="text-sm hover:text-gray-300">Pricing</Link>
              <Link href="#about" className="text-sm hover:text-gray-300">About</Link>
              <Link href="#contact" className="text-sm hover:text-gray-300">Contact</Link>
            </nav>
            <Link href="/dashboard" prefetch>
              <Button
                variant="outline"
                size="sm"
                className="hidden md:inline-flex rounded-full px-6 py-2 bg-black text-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="md:hidden rounded-full px-4 py-2 bg-black text-white hover:bg-gray-900">
              Menu
            </Button>
          </div>
        </header>

        <main className="container mx-auto py-20">
          {children}
        </main>

        <footer className="mt-20 container mx-auto py-6 border-t border-gray-800 px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm">You're in good hands.</p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-8">
              <span className="text-xs font-semibold">Trusted by 10,000+ companies</span>
              <span className="text-xs font-semibold">99.9% Uptime SLA</span>
              <span className="text-xs font-semibold">24/7 Support</span>
              <span className="text-xs font-semibold">GDPR Compliant</span>
            </div>
            <Button variant="outline" size="sm" className="rounded-full px-6 py-2 bg-white text-black hover:bg-gray-200">
              Learn more
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}
