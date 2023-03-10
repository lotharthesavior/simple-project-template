import './style.css'
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const data = {

    /**
     * Content
     */
    title: 'Simple Project',
    subtitle: 'A VueJS + Vite <strong>template</strong> for small projects.',
    subtitle_mobile: 'A VueJS + Vite <strong>template</strong> for small projects.',
    links: [
        {
            href: 'https://github.com/lotharthesavior/simple-project-template',
            text: 'Visit the <strong class="group-hover:underline">Project\'s Repository</strong>'
        },{
            href: 'https://savioresende.com',
            text: 'Visit the <strong class="group-hover:underline">Author\'s Website</strong>'
        }
    ],

    /**
     * Assets
     */
    logo: '/imgs/brand.svg',

    /**
     * Colors
     */
    color: '#292d3e',
}

createApp({
    data() {
        return data
    },

    mounted() {
        this.loaded();
    },

    methods: {
        loaded() {
            document.querySelector('#loading').classList.add('hidden');
            document.querySelector('#app').classList.remove('hidden');
        }
    },
}).mount('#app')
