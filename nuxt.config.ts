// @ts-ignore
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'My App',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" },
                { rel: "stylesheet", href: "/css/bootstrap.css" },
                { rel: "stylesheet", href: "/css/animate.css" },
                { rel: "stylesheet", href: "/css/fontawesome-all.css" },
                { rel: "stylesheet", href: "/css/flaticon.css" },
                { rel: "stylesheet", href: "/css/hover.css" },
                { rel: "stylesheet", href: "/css/custom-animate.css" },
                { rel: "stylesheet", href: "/plugins/glightbox/glightbox.min.css" },
                { rel: "stylesheet", href: "/css/style.css" },
                { rel: "stylesheet", href: "/css/rtl.css" },
                { rel: "stylesheet", href: "/css/responsive.css" },
                { rel: "stylesheet", href: "/css/colors/color-default.css" }
            ],
        },
        loading: { color: '#ffa915', height: '4px' },
    }
})