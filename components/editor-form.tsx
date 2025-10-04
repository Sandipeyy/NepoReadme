"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useReadmeStore } from "@/lib/store"
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  Coffee,
  Youtube,
  Mail,
  User,
  Share2,
  Code2,
  BarChart3,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function EditorForm() {
  const { config, updateConfig } = useReadmeStore()

  return (
    <Tabs defaultValue="basic" className="w-full">
      <TabsList className="grid w-full grid-cols-4 lg:grid-cols-4">
        <TabsTrigger value="basic" className="text-xs sm:text-sm">
          <User className="mr-1 h-4 w-4" />
          Basic
        </TabsTrigger>
        <TabsTrigger value="social" className="text-xs sm:text-sm">
          <Share2 className="mr-1 h-4 w-4" />
          Social
        </TabsTrigger>
        <TabsTrigger value="skills" className="text-xs sm:text-sm">
          <Code2 className="mr-1 h-4 w-4" />
          Skills
        </TabsTrigger>
        <TabsTrigger value="widgets" className="text-xs sm:text-sm">
          <BarChart3 className="mr-1 h-4 w-4" />
          Widgets
        </TabsTrigger>
      </TabsList>

      {/* Basic Info Tab */}
      <TabsContent value="basic" className="space-y-4">
        <Card className="border-border bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <User className="h-5 w-5 text-primary" />
              Profile Information
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Essential details about you and your work
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* GitHub Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground">
                GitHub Username{" "}
                <Badge variant="destructive" className="ml-2">
                  Required
                </Badge>
              </Label>
              <div className="relative">
                <Github className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  placeholder="octocat"
                  value={config.username}
                  onChange={(e) => updateConfig({ username: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={config.name}
                onChange={(e) => updateConfig({ name: e.target.value })}
              />
            </div>

            {/* Title/Tagline */}
            <div className="space-y-2">
              <Label htmlFor="tagline" className="text-foreground">
                Tagline
              </Label>
              <Input
                id="tagline"
                placeholder="Full Stack Developer | Open Source Enthusiast"
                value={config.tagline}
                onChange={(e) => updateConfig({ tagline: e.target.value })}
              />
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-foreground">
                Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself..."
                value={config.bio}
                onChange={(e) => updateConfig({ bio: e.target.value })}
                rows={4}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={config.email}
                  onChange={(e) => updateConfig({ email: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Current Work */}
            <div className="space-y-2">
              <Label htmlFor="currentWork" className="text-foreground">
                Currently Working On
              </Label>
              <Input
                id="currentWork"
                placeholder="Building awesome web applications"
                value={config.currentWork}
                onChange={(e) => updateConfig({ currentWork: e.target.value })}
              />
            </div>

            {/* Currently Learning */}
            <div className="space-y-2">
              <Label htmlFor="currentlyLearning" className="text-foreground">
                Currently Learning
              </Label>
              <Input
                id="currentlyLearning"
                placeholder="Rust, WebAssembly, Machine Learning"
                value={config.currentlyLearning}
                onChange={(e) => updateConfig({ currentlyLearning: e.target.value })}
              />
            </div>

            {/* Fun Fact */}
            <div className="space-y-2">
              <Label htmlFor="funFact" className="text-foreground">
                Fun Fact
              </Label>
              <Input
                id="funFact"
                placeholder="I can solve a Rubik's cube in under 2 minutes!"
                value={config.funFact}
                onChange={(e) => updateConfig({ funFact: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Social Links Tab */}
      <TabsContent value="social" className="space-y-4">
        <Card className="border-border bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Share2 className="h-5 w-5 text-primary" />
              Social Links
            </CardTitle>
            <CardDescription className="text-muted-foreground">Connect your social media profiles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="twitter" className="text-foreground">
                Twitter
              </Label>
              <div className="relative">
                <Twitter className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="twitter"
                  placeholder="username"
                  value={config.twitter}
                  onChange={(e) => updateConfig({ twitter: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-foreground">
                LinkedIn
              </Label>
              <div className="relative">
                <Linkedin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="linkedin"
                  placeholder="username"
                  value={config.linkedin}
                  onChange={(e) => updateConfig({ linkedin: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram" className="text-foreground">
                Instagram
              </Label>
              <div className="relative">
                <Instagram className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="instagram"
                  placeholder="username"
                  value={config.instagram}
                  onChange={(e) => updateConfig({ instagram: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="youtube" className="text-foreground">
                YouTube
              </Label>
              <div className="relative">
                <Youtube className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="youtube"
                  placeholder="channel-id or @username"
                  value={config.youtube}
                  onChange={(e) => updateConfig({ youtube: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="devto" className="text-foreground">
                Dev.to
              </Label>
              <Input
                id="devto"
                placeholder="username"
                value={config.devto}
                onChange={(e) => updateConfig({ devto: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medium" className="text-foreground">
                Medium
              </Label>
              <Input
                id="medium"
                placeholder="@username"
                value={config.medium}
                onChange={(e) => updateConfig({ medium: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="discord" className="text-foreground">
                Discord
              </Label>
              <Input
                id="discord"
                placeholder="username#1234"
                value={config.discord}
                onChange={(e) => updateConfig({ discord: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-foreground">
                Personal Website
              </Label>
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="website"
                  placeholder="https://yourwebsite.com"
                  value={config.website}
                  onChange={(e) => updateConfig({ website: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="donation" className="text-foreground">
                Donation Link
              </Label>
              <div className="relative">
                <Coffee className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="donation"
                  placeholder="https://buymeacoffee.com/username"
                  value={config.donation}
                  onChange={(e) => updateConfig({ donation: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Skills & Projects Tab */}
      <TabsContent value="skills" className="space-y-4">
        <Card className="border-border bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Code2 className="h-5 w-5 text-primary" />
              Skills & Projects
            </CardTitle>
            <CardDescription className="text-muted-foreground">Showcase your expertise and work</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-foreground">
                Skills & Technologies
              </Label>
              <Textarea
                id="skills"
                placeholder="JavaScript, React, Node.js, Python, Docker (comma separated)"
                value={config.skills.join(", ")}
                onChange={(e) => updateConfig({ skills: e.target.value.split(",").map((s) => s.trim()) })}
                rows={3}
              />
              <p className="text-xs text-muted-foreground">
                Separate skills with commas. Icons will be added automatically for popular technologies.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projects" className="text-foreground">
                Featured Projects
              </Label>
              <Textarea
                id="projects"
                placeholder="Project Name | Description | https://github.com/username/repo&#10;Another Project | Cool description | https://github.com/username/repo2"
                value={config.projects?.map((p) => `${p.name} | ${p.description} | ${p.url}`).join("\n") || ""}
                onChange={(e) => {
                  const projects = e.target.value
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line) => {
                      const [name, description, url] = line.split("|").map((s) => s.trim())
                      return { name: name || "", description: description || "", url: url || "" }
                    })
                  updateConfig({ projects })
                }}
                rows={5}
              />
              <p className="text-xs text-muted-foreground">
                Format: Project Name | Description | GitHub URL (one per line)
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Widgets Tab */}
      <TabsContent value="widgets" className="space-y-4">
        <Card className="border-border bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <BarChart3 className="h-5 w-5 text-primary" />
              Widgets & Stats
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Choose which widgets to display on your profile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-foreground">
                Widget Theme
              </Label>
              <Select value={config.theme} onValueChange={(value) => updateConfig({ theme: value })}>
                <SelectTrigger id="theme">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="radical">Radical (Purple)</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="tokyonight">Tokyo Night</SelectItem>
                  <SelectItem value="dracula">Dracula</SelectItem>
                  <SelectItem value="gruvbox">Gruvbox</SelectItem>
                  <SelectItem value="onedark">One Dark</SelectItem>
                  <SelectItem value="cobalt">Cobalt</SelectItem>
                  <SelectItem value="synthwave">Synthwave</SelectItem>
                  <SelectItem value="highcontrast">High Contrast</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="stats"
                  checked={config.widgets.stats}
                  onCheckedChange={(checked) =>
                    updateConfig({ widgets: { ...config.widgets, stats: checked as boolean } })
                  }
                />
                <Label htmlFor="stats" className="text-sm font-normal text-foreground">
                  GitHub Stats Card
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="languages"
                  checked={config.widgets.languages}
                  onCheckedChange={(checked) =>
                    updateConfig({ widgets: { ...config.widgets, languages: checked as boolean } })
                  }
                />
                <Label htmlFor="languages" className="text-sm font-normal text-foreground">
                  Top Languages Card
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="streak"
                  checked={config.widgets.streak}
                  onCheckedChange={(checked) =>
                    updateConfig({ widgets: { ...config.widgets, streak: checked as boolean } })
                  }
                />
                <Label htmlFor="streak" className="text-sm font-normal text-foreground">
                  Streak Stats
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="trophies"
                  checked={config.widgets.trophies}
                  onCheckedChange={(checked) =>
                    updateConfig({ widgets: { ...config.widgets, trophies: checked as boolean } })
                  }
                />
                <Label htmlFor="trophies" className="text-sm font-normal text-foreground">
                  GitHub Trophies
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="activity"
                  checked={config.widgets.activity}
                  onCheckedChange={(checked) =>
                    updateConfig({ widgets: { ...config.widgets, activity: checked as boolean } })
                  }
                />
                <Label htmlFor="activity" className="text-sm font-normal text-foreground">
                  Activity Graph
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="profileViews"
                  checked={config.widgets.profileViews}
                  onCheckedChange={(checked) =>
                    updateConfig({ widgets: { ...config.widgets, profileViews: checked as boolean } })
                  }
                />
                <Label htmlFor="profileViews" className="text-sm font-normal text-foreground">
                  Profile Views Counter
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="topRepos"
                  checked={config.widgets.topRepos}
                  onCheckedChange={(checked) =>
                    updateConfig({ widgets: { ...config.widgets, topRepos: checked as boolean } })
                  }
                />
                <Label htmlFor="topRepos" className="text-sm font-normal text-foreground">
                  Top Repositories
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}