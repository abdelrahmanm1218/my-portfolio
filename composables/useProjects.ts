export function useProjects(){
    const projects = [
        /*{
            id: "PR-04",
            project_name: "Hanbee3",
            thumbnail: "",
            short_description: "digital call center telesales solutions for buisnesses and remote telesales",
            start_date: "10/2025",
            end_date:"Present",
            technologies: ["Frappe", "Angular"],
            link: "https://hanbee3.com/home",
            classified: false
        },*/
        {
            id: "PR-02",
            project_name: "Bus14",
            thumbnail: "/images/projects/bus14_cover.jpeg",
            short_description: "Smart Transportation System",
            // description: "Personal portfolio to have a professional digital presence",
            start_date: "08/2025",
            end_date: "10/2025",
            technologies: ["Frappe",  "Angular"],
            link: "https://portal.bus14.co/",   
            classified: false,
        },
        
        {
            id: "PR-03",
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
        // }
        
    ]

    return projects
}
