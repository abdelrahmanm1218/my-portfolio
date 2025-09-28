export function useProjects(){
    const projects = [
        {
            id: "PR-01",
            project_name: "Personal Portfolio",
            thumbnail: "/images/projects/am-logo.png",
            short_description: "Personal portfolio to have a professional digital presence",
            description: "Personal portfolio to have a professional digital presence",
            start_date: "08/2025",
            end_date: "Present",
            technologies: ["Vue js",  "Vuetify", "Nuxt.js",  "TypeScript", "SEO"],
            link: "https://abdelrahman-mahmoud-portfolio.vercel.app/",   
            classified: false,
        },
        {
            id: "PR-02",
            project_name: "Praxis",
            thumbnail: "/images/projects/Praxis.png",
            // short_description: "Internhsip program to track interns and internship cycles",
            // description: "Internhsip program to track interns and internship cycles and guide new interns via user specific dashboards",
            start_date: "12/2024",
            end_date: "03/2025",
            technologies: ["TypeScript","Angular",  "Ant-Design", "Git-Flow"],
            link: "https://internship-dev.homains.online/home",
            classified: false,

        },
        {
            id: "PR-03",
            project_name: "Classified",
            thumbnail: "https://placehold.co/600x400?text=Classified",
            short_description: "Open source project, that provide community for people to support the right cause",
            description: "Open source project, that provide community for people to support & defend the right cause",
            // start_date: "12/2024",
            // end_date: "03/2025",
            technologies: ["TypeScript","Vuetify",  "Vuetify", "Git-Flow"],
            link: "",
            classified: true, 
        }
        
    ]

    return projects
}