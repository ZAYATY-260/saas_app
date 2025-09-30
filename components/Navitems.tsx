'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navitems = [
  { label: 'Home', href: '/' },
  { label: 'Companions', href: '/companions' },
  { label: 'My Journey', href: '/my-journey' },
  { label: 'Subscription', href: '/subscription' }
]

const Navitems = ({ direction = "row" }: { direction?: "row" | "col" }) => {
  const pathname = usePathname();

  return (
    <nav className={cn(
      "flex gap-4",
      direction === "col" ? "flex-col items-start" : "items-center"
    )}>
      {navitems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            pathname === href && "font-semibold text-primary"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default Navitems
