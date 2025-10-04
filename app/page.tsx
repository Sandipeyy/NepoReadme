import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Sparkles, Zap, Eye, Github, Code2, Palette, Rocket } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="container relative mx-auto px-4 py-24 text-center md:py-32">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Free & Open Source
              </div>
              <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Create{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Stunning
                </span>{" "}
                GitHub Profile READMEs
              </h1>
              <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl lg:text-2xl">
                Build beautiful, customized GitHub profile READMEs in minutes. No coding required, no authentication
                needed. Just create and download.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/editor">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 sm:w-auto"
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Creating Free
                  </Button>
                </Link>

                {/* GitHub Link */}
                <Link href="https://github.com/Sandipeyy/NepoReadme" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-border py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Everything You Need to{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Stand Out
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Powerful features to help you create the perfect GitHub profile
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="group border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 transition-transform group-hover:scale-110">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Lightning Fast</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Create your README in minutes with our intuitive form-based editor
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 transition-transform group-hover:scale-110">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Live Preview</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    See your README come to life with real-time markdown preview
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 transition-transform group-hover:scale-110">
                    <Code2 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Rich Widgets</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Add stats, trophies, streaks, and more to showcase your work
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 transition-transform group-hover:scale-110">
                    <Palette className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Customizable</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Choose from multiple themes and customize every aspect
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-primary/5 to-background py-24">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="container relative mx-auto px-4 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Ready to{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Stand Out
                </span>
                ?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Join thousands of developers creating impressive GitHub profiles
              </p>
              <Link href="/editor">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Building Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}