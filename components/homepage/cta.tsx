import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function CTA() {

  return (
    <Link href="/dashboard" prefetch>
        <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
        Start Free Trial
        </Button>
    </Link>
  )
}
