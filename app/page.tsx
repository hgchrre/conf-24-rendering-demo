import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function CircleLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2"/>
                <circle cx="16" cy="16" r="6" fill="white"/>
              </svg>
              <span>circle</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-sm hover:text-gray-300">Features</Link>
              <Link href="#pricing" className="text-sm hover:text-gray-300">Pricing</Link>
              <Link href="#about" className="text-sm hover:text-gray-300">About</Link>
              <Link href="#contact" className="text-sm hover:text-gray-300">Contact</Link>
            </nav>
            <Button variant="outline" size="sm" className="hidden md:inline-flex rounded-full px-6 py-2 bg-black text-white hover:bg-gray-900">
              Get Started
            </Button>
            <Button variant="outline" size="sm" className="md:hidden rounded-full px-4 py-2 bg-black text-white hover:bg-gray-900">
              Menu
            </Button>
          </div>
        </header>

        <main className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Streamline your workflow with Circle
              </h1>
              <p className="text-xl mb-10 text-gray-300">
                Boost productivity and simplify collaboration with our intuitive SaaS platform.
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
                Start Free Trial
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/glass.png"
                alt="Circle SaaS Platform"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </main>

        <footer className="py-6 border-t border-gray-800">
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
  )
}
