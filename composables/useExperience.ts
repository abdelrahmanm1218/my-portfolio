export function useExperience(){
    const experiences = [
      {
        date: '08/2025 – Present',
          role: 'Full Stack Engineer',
          company: 'Homains',
          desc: [],
          logo: "/homains-logo.png"
      },  
      {
          date: '03/2025 – 08/2025',
          role: 'Frontend Developer',
          company: 'Homains',
          desc: ["Delivered responsive web application using Vue, Nuxt, TypeScript, and Vuetify based on Figma designs.", "Took ownership of reviewing and refactoring legacy code to better match design specifications and user flows, resulting in a smoother and more maintainable UI.","Collaborated with backend developers to debug integration issues, adjust APIs, and ensure full end-to-end functionality."],
          logo: "/homains-logo.png"
        },
        
        {
          date: '04/2025 – 06/2025',
          role: 'Frontend Developer',
          company: 'Start for Business Development',
          desc: ["Developed responsive e-commerce interfaces from Figma designs using HTML, SCSS, Bootstrap and integrated them within Django Views.","Leveraged AI tools like Cursor to boost development productivity and learned to craft effective prompts to generate high-quality, production-ready code."],
          logo: "/start-for-business-dev.jpeg"
        },
        {
          date: '12/2024 – 03/2025',
          role: 'Intern Frontend Developer',
          company: 'Homains',
          desc: ["Led the development of responsive UIs from Figma designs using Angular, and Ant-design.", "Independently integrated backend APIs via Angular Services, ensuring performance optimization (LCP, CLS).", "Actively contributed to Agile workflows and cross-functional collaboration using Git & Git-Flow.", "Recognized as a top performer in the internship program.", "Took ownership of the Homains internship web app, leading development of core pages and delivering the largest feature set."],
          logo: "/homains-logo.png"
        },
        {
          date: '10/2023 – 01/2024',
          role: 'Frontend Developer',
          company: 'EPIK for Software Solutions',
          desc: ['Transformed Figma Designs to pixel-perfect interfaces.'],
          logo: "/epik.jpeg"
        },
      ]

      return experiences;
}