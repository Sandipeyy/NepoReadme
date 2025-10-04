import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EditorForm } from "@/components/editor-form"
import { ReadmePreview } from "@/components/readme-preview"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Editor - NepoReadme | Create Your GitHub Profile README",
  description:
    "Use our powerful editor to create your GitHub Profile README. Add stats, widgets, social links, skills, and more.",
  openGraph: {
    title: "Editor - NepoReadme",
    description: "Create your GitHub Profile README with our powerful editor",
  },
}

export default function EditorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                README Editor
              </span>
            </h1>
            <p className="text-muted-foreground">Customize your GitHub profile README with ease</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Editor Form */}
            <div className="order-2 lg:order-1">
              <EditorForm />
            </div>

            {/* Live Preview */}
            <div className="order-1 lg:order-2">
              <ReadmePreview />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}