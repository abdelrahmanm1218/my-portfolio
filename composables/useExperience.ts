export function useExperience(){
    const experiences = [
      {
        date: '08/2025 – Present',
          role: 'Full Stack Engineer',
          company: 'Homains',
          desc: ["Translated business requirements into scalable technical solutions, which enabled 3+ key initiatives and reduced project delivery time by 30%.", "Partnered with cross-functional stakeholders to translate business needs into technical solutions, delivering 10+ successful product features that aligned with strategic goals. "],
          logo: "/homains-logo.png"
      },  
      {
          date: '12/2024 – 08/2025',
          role: 'Frontend Developer',
          company: 'Homains',
          desc: ["Delivered responsive web apps using Angular, Vue, Nuxt, TypeScript, Vuetify, and NG Zorro.",  
            "Reviewed and optimized misaligned code, resolving 50+ UI inconsistencies and improving feature usability scores by 15%. Integrated APIs and ensured performance optimization by increasing performance by 70%. ",
            "Transformed 20+ Figma designs into pixel-perfect, responsive Portal & Dashboard UIs.",
            "Actively contributed to Agile workflows and cross-functional collaboration using Git & Git-Flow."],
          logo: "/homains-logo.png"
        },
        
        {
          date: '04/2025 – 06/2025',
          role: 'Frontend Developer',
          company: 'Start for Business Development',
          desc: ["• Converted 25+ Figma designs into pixel-perfect, responsive E-Commerce UIs using HTML, SCSS, Bootstrap, improving design-to-development turnaround by 50% and boosting client satisfaction."],
          logo: "/start-for-business-dev.jpeg"
        },
        // {
        //   date: '12/2024 – 03/2025',
        //   role: 'Intern Frontend Developer',
        //   company: 'Homains',
        //   desc: ["Led the development of responsive UIs from Figma designs using Angular, and Ant-design.", "Independently integrated backend APIs via Angular Services, ensuring performance optimization (LCP, CLS).", "Actively contributed to Agile workflows and cross-functional collaboration using Git & Git-Flow.", "Recognized as a top performer in the internship program.", "Took ownership of the Homains internship web app, leading development of core pages and delivering the largest feature set."],
        //   logo: "/homains-logo.png"
        // },
        {
          date: '10/2023 – 01/2024',
          role: 'Frontend Developer',
          company: 'EPIK for Software Solutions',
          desc: [' Implemented 10+ Figma designs into pixel-perfect and responsive UIs.'],
          logo: "/epik.jpeg"
        },
      ]

      return experiences;
}