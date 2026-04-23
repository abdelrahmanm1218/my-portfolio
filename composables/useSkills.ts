
export default function useSkills(){
    const frontend = [
        {name: 'React', icon: '/icons/react.svg'},
        {name: 'Angular', icon: '/icons/angular.svg'},
        {name: 'Vue.js', icon: '/icons/vue-js.svg'},
        {name: 'Nuxt.js', icon: '/icons/nuxt-js.svg'},
        {name: 'TypeScript', icon: '/icons/typescript.svg'},
        {name: 'JavaScript', icon: '/icons/javascript.svg'},
        {name: 'HTML', icon: '/icons/html.svg'},
        {name: 'CSS', icon: '/icons/css.svg'},
        {name: 'Vuetify', icon: '/icons/vuetify.svg'},
        {name: 'Bootstrap', icon: '/icons/bootstrap.svg'},
        {name: 'Ant-Design', icon: '/icons/ant-design.svg'},
    ]
    const backend = [
        {name: 'Python', icon: '/icons/python.svg'},
        {name: 'Frappe', icon: '/icons/frappe.png'},
        {name: 'ERPNext', icon: '/icons/Erpnext_logo.svg'},
        {name: 'Django', icon: '/icons/django.svg'},
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