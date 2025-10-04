export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 text-center">

        {/* Social Links */}
        <div className="flex gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Sandipeyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.85 10.94c.57.1.78-.25.78-.56v-2c-3.19.7-3.87-1.38-3.87-1.38-.52-1.3-1.27-1.64-1.27-1.64-1.04-.7.08-.68.08-.68 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.28 1.18-3.09-.12-.3-.51-1.53.11-3.2 0 0 .96-.31 3.15 1.18a10.7 10.7 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.67.23 2.9.11 3.2.74.81 1.18 1.83 1.18 3.09 0 4.44-2.7 5.41-5.27 5.7.41.36.77 1.06.77 2.14v3.17c0 .32.21.67.79.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/sandip.gg_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.25-.75a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
            </svg>
          </a>
        </div>

        {/* License */}
        <p className="text-xs text-muted-foreground max-w-md">
          © {new Date().getFullYear()} NepoReadme • Licensed under <strong>GPL-3.0</strong> • Credit required in all forks
        </p>
      </div>
    </footer>
  )
}