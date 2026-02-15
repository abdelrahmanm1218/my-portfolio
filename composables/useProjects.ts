export function useProjects(){
    const projects = [
        {
            id: "PR-04",
            project_name: "Hanbee3",
            thumbnail: "/images/projects/og-image.jpg",
            short_description: "Digital call center & telesales solutions for businesses and telesales agents",
            start_date: "10/2025",
            end_date:"02/2026",
            technologies: ["Frappe", "ERPNext", "Python", "Angular"],
            link: "https://hanbee3.com/home",
            classified: false,
            currently_working: false,
        },
        {
            id: "PR-02",
            project_name: "Bus14",
            thumbnail: "/images/projects/bus14_cover.jpeg",
            short_description: "Smart student transportation system",
            // description: "Personal portfolio to have a professional digital presence",
            start_date: "08/2025",
            end_date: "10/2025",
            technologies: ["Frappe", "ERPNext", "Python", "Angular"],
            link: "https://portal.bus14.co/",   
            classified: false,
            currently_working: false,
        },
        
        {
            id: "PR-03",
            project_name: "Praxis",
            thumbnail: "/images/projects/Praxis.png",
            short_description: "The Software Engineering Boot camp That Bridges the Gap between Education and Industry",
            // description: "Internhsip program to track interns and internship cycles and guide new interns via user specific dashboards",
            start_date: "12/2024",
            end_date: "02/2026",
            technologies: ["TypeScript","Angular",  "Ant-Design", "Git-Flow", "Frappe", "ERPNext", "Python"],
            link: "https://praxis.homains.eu/",
            classified: false,
            currently_working: false,

        },
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
            currently_working: true,
        },
        
        {
            id: "PR-05",
            project_name: "Tokens United",
            thumbnail: "",
            short_description: "Tokens United company's portfolio",
            start_date: "5/2025",
            end_date:"05/2025",
            technologies: ["HTML", "SCSS", "Python"],
            link: "https://tokensunited.com/",
            classified: false,
            currently_working: false,
        },
        // {
        //     id: "PR-04",
        //     project_name: "Classified",
        //     thumbnail: "https://placehold.co/600x400?text=Classified",
        //     short_description: "Open source project, that provide community for people to support the right cause",
        //     description: "Open source project, that provide community for people to support & defend the right cause",
        //     start_date: "03/2025",
        //     end_date: "08/2025",
        //     technologies: ["TypeScript","Vuetify",  "Vuetify", "Git-Flow"],
        //     link: "",
        //     classified: true, 
        //     currently_working: false,
        // }
        
    ]

    return projects
}
