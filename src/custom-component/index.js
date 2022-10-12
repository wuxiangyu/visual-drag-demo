import Vue from 'vue'

const components = [
    'Picture',
    'VText',
    'VButton',
    'Group',
    'RectShape',
    'VTime',
    'AppBlock',
    'DotNineBg',
    'BlurWidget',
    'BackgroundWidget',
    'TimeGroupWidget',
    'WeatherWidget',
    'SearchWidget',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}`))
})

const svgs = [
    'SVGStar',
]

svgs.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/svgs/${key}`))
})
