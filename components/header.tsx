import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/logo.jpg"
            alt="NepoReadme"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-xl font-bold text-transparent">
            NepoReadme
          </span>
        </Link>

        <nav className="flex items-center gap-4">
        </nav>
      </div>
    </header>
  )
}