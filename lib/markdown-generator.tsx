import type { ReadmeConfig } from "./store"

export function generateMarkdown(config: ReadmeConfig): string {
  let markdown = ""

  // Header with animated typing
  if (config.name || config.tagline) {
    markdown += `<div align="center">\n\n`

    if (config.name) {
      markdown += `# Hi 👋, I'm ${config.name}\n`
    }

    if (config.tagline) {
      markdown += `### ${config.tagline}\n\n`
    }

    // Profile views
    if (config.widgets.profileViews && config.username) {
      markdown += `![Profile Views](https://komarev.com/ghpvc/?username=${config.username}&label=Profile%20views&color=0e75b6&style=flat)\n\n`
    }

    markdown += `</div>\n\n`
  }

  // About section
  if (config.bio || config.currentWork || config.currentlyLearning || config.email || config.funFact) {
    markdown += `## 🚀 About Me\n\n`

    if (config.bio) {
      markdown += `${config.bio}\n\n`
    }

    if (config.currentWork) {
      markdown += `- 🔭 I'm currently working on **${config.currentWork}**\n\n`
    }

    if (config.currentlyLearning) {
      markdown += `- 🌱 I'm currently learning **${config.currentlyLearning}**\n\n`
    }

    if (config.email) {
      markdown += `- 📫 How to reach me: **${config.email}**\n\n`
    }

    if (config.funFact) {
      markdown += `- ⚡ Fun fact: **${config.funFact}**\n\n`
    }
  }

  // Social links
  const socials = []
  if (config.linkedin)
    socials.push(
      `[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/${config.linkedin})`,
    )
  if (config.twitter)
    socials.push(
      `[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white)](https://twitter.com/${config.twitter})`,
    )
  if (config.instagram)
    socials.push(
      `[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/${config.instagram})`,
    )
  if (config.youtube)
    socials.push(
      `[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@${config.youtube})`,
    )
  if (config.devto)
    socials.push(
      `[![Dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?logo=dev.to&logoColor=white)](https://dev.to/${config.devto})`,
    )
  if (config.medium)
    socials.push(
      `[![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white)](https://medium.com/@${config.medium})`,
    )
  if (config.discord)
    socials.push(
      `[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](https://discord.gg/${config.discord})`,
    )
  if (config.website)
    socials.push(
      `[![Website](https://img.shields.io/badge/Website-%23000000.svg?logo=About.me&logoColor=white)](${config.website})`,
    )
  if (config.donation)
    socials.push(
      `[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?logo=buy-me-a-coffee&logoColor=black)](${config.donation})`,
    )

  if (socials.length > 0) {
    markdown += `## 🌐 Connect with me\n\n<div align="center">\n\n${socials.join(" ")}\n\n</div>\n\n`
  }

  // Skills
  if (config.skills.length > 0) {
    markdown += `## 💻 Tech Stack\n\n<div align="center">\n\n`

    const skillBadges = config.skills.map((skill) => {
      const skillLower = skill.toLowerCase().trim()
      const badges: Record<string, string> = {
        javascript:
          "![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)",
        typescript:
          "![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)",
        python:
          "![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)",
        java: "![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)",
        react:
          "![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)",
        nextjs: "![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)",
        "next.js":
          "![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)",
        nodejs:
          "![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)",
        "node.js":
          "![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)",
        express:
          "![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)",
        mongodb:
          "![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)",
        postgresql:
          "![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)",
        mysql:
          "![MySQL](https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white)",
        tailwind:
          "![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)",
        tailwindcss:
          "![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)",
        docker:
          "![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)",
        git: "![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)",
        aws: "![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)",
        vercel:
          "![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)",
        html: "![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)",
        html5:
          "![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)",
        css: "![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)",
        css3: "![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)",
        vue: "![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)",
        "vue.js":
          "![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)",
        angular:
          "![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)",
        svelte:
          "![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)",
        redux:
          "![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)",
        graphql:
          "![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)",
        firebase: "![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)",
        supabase:
          "![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)",
        prisma: "![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)",
        rust: "![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)",
        go: "![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)",
        cpp: "![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)",
        "c++":
          "![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)",
        c: "![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)",
        "c#": "![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)",
        php: "![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)",
        ruby: "![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)",
        swift: "![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)",
        kotlin:
          "![Kotlin](https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white)",
        flutter:
          "![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white)",
        "react native":
          "![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)",
        tensorflow:
          "![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)",
        pytorch:
          "![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)",
        kubernetes:
          "![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)",
        redis:
          "![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)",
        nginx:
          "![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)",
      }

      return (
        badges[skillLower] ||
        `![${skill}](https://img.shields.io/badge/${encodeURIComponent(skill)}-%23000000.svg?style=for-the-badge)`
      )
    })

    markdown += skillBadges.join(" ") + "\n\n</div>\n\n"
  }

  // Projects
  if (config.projects && config.projects.length > 0) {
    markdown += `## 🚀 Featured Projects\n\n`

    config.projects.forEach((project) => {
      if (project.name && project.url) {
        markdown += `### [${project.name}](${project.url})\n`
        if (project.description) {
          markdown += `${project.description}\n\n`
        } else {
          markdown += `\n`
        }
      }
    })
  }

  // GitHub Stats
  if (config.username) {
    markdown += `## 📊 GitHub Stats\n\n<div align="center">\n\n`

    if (config.widgets.stats) {
      markdown += `![](https://github-readme-stats.vercel.app/api?username=${config.username}&theme=${config.theme}&hide_border=false&include_all_commits=true&count_private=true)\n\n`
    }

    if (config.widgets.streak) {
      markdown += `![](https://github-readme-streak-stats.herokuapp.com/?user=${config.username}&theme=${config.theme}&hide_border=false)\n\n`
    }

    if (config.widgets.languages) {
      markdown += `![](https://github-readme-stats.vercel.app/api/top-langs/?username=${config.username}&theme=${config.theme}&hide_border=false&include_all_commits=true&count_private=true&layout=compact)\n\n`
    }

    markdown += `</div>\n\n`
  }

  // Additional widgets
  if (config.username) {
    if (config.widgets.trophies) {
      markdown += `## 🏆 GitHub Trophies\n\n<div align="center">\n\n![](https://github-profile-trophy.vercel.app/?username=${config.username}&theme=${config.theme}&no-frame=false&no-bg=false&margin-w=4)\n\n</div>\n\n`
    }

    if (config.widgets.activity) {
      markdown += `## 📈 Activity Graph\n\n<div align="center">\n\n![](https://github-readme-activity-graph.vercel.app/graph?username=${config.username}&theme=${config.theme})\n\n</div>\n\n`
    }

    if (config.widgets.topRepos) {
      markdown += `## 🔝 Top Contributed Repo\n\n<div align="center">\n\n![](https://github-contributor-stats.vercel.app/api?username=${config.username}&limit=5&theme=${config.theme}&combine_all_yearly_contributions=true)\n\n</div>\n\n`
    }
  }

  // Footer
  markdown += `---\n\n<div align="center">\n\n### ✨ Created with [NepoReadme](https://neporeadme.vercel.app)\n\n</div>\n`

  return markdown
}
