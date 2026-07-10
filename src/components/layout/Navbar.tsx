import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/gitam_logo.png" 
            alt="GITAM Logo" 
            width={130} 
            height={40} 
            className="object-contain"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/events" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Events
          </Link>
          <Link href="/clubs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Clubs
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center">
          <Image 
            src="/images/studentlife_logo.png" 
            alt="Student Life Logo" 
            width={130} 
            height={40} 
            className="object-contain hidden md:block"
          />
        </div>
      </div>
    </header>
  );
}
