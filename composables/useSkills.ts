
export default function useSkills(){
    const frontend = [
        {name: 'HTML', icon: '/icons/html.svg'},
        {name: 'CSS', icon: '/icons/css.svg'},
        {name: 'JavaScript', icon: '/icons/javascript.svg'},
        {name: 'TypeScript', icon: '/icons/typescript.svg'},
        {name: 'Angular', icon: '/icons/angular.svg'},
        {name: 'Vue.js', icon: '/icons/vue-js.svg'},
        {name: 'Nuxt.js', icon: '/icons/nuxt-js.svg'},
        {name: 'Vuetify', icon: '/icons/vuetify.svg'},
        {name: 'Bootstrap', icon: '/icons/bootstrap.svg'},
        {name: 'Ant-Design', icon: '/icons/ant-design.svg'},
    ]
    const backend = [
        {name: 'Python', icon: '/icons/python.svg'},
        {name: 'Django', icon: '/icons/django.svg'},
        {name: 'Frappe', icon: '/icons/frappe.png'},
        {name: 'Postman', icon: '/icons/postman-api.svg'},
        {name: 'Swagger', icon: '/icons/swagger.svg'},
    ]
    const general = [
        {name: 'Git', icon: '/icons/git.svg'},
        {name: 'Github', icon: '/icons/github.svg'},
        {name: 'GitLab', icon: '/icons/gitlab.svg'},
        {name: 'Cursor AI', icon: '/icons/cursor-ai.svg'},
        {name: 'Figma', icon: '/icons/figma.svg'},
    ]


    return {frontend, backend, general}
}