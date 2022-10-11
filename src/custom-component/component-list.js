// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
    packageId: '',
    isCenter: false,
}

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
}

// 编辑器左侧组件列表
const list = [
    {
        component: 'v-text',
        label: '文字',
        propValue: '双击编辑文字',
        icon: 'wenben',
        style: {
            width: 200,
            height: 22,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'Picture',
        label: '图片',
        icon: 'tupian',
        propValue: {
            url: require('@/assets/title.jpg'),
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 91,
            height: 91,
            borderRadius: '',
        },
    },
    {
        component: 'v-time',
        label: '时间',
        propValue: '20:14',
        icon: 'wenben',
        style: {
            width: 200,
            height: 40,
            fontSize: 20,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#FFFFFF',
        },
    },
    {
        component: 'AppBlock',
        label: '应用',
        icon: 'tupian',
        propValue: {
            url: '../static/images/files.png',
            appname: '文稿演示',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            backgroundicon: '',
            width: 91,
            height: 91,
            fontSize: 14,
            textAlign: 'center',
            color: '#FFFFFF',
        },
    },
    {
        component: 'DotNineBg',
        label: '点9图',
        icon: 'tupian',
        propValue: {
            url: '../static/images/bg_app_list.png',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            backgroundicon: '',
            width: 300,
            height: 200,
            textAlign: 'center',
        },
    },
    {
        component: 'BackgroundWidget',
        label: '背景图',
        icon: 'tupian',
        propValue: {
            url: '../static/images/widget_edit_background.png',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            backgroundicon: '',
            width: 506,
            height: 133,
            borderRadius: 3,
            textAlign: 'center',
        },
    },
    {
        component: 'TimeGroupWidget',
        label: 'TimeGroup',
        icon: 'wenben',
        propValue: {
            url: '../static/images/widget_image_time.png',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            backgroundicon: '',
            width: 244,
            height: 83,
            borderRadius: 3,
            textAlign: 'center',
        },
    },
    {
        component: 'WeatherWidget',
        label: 'Weather',
        icon: 'wenben',
        propValue: {
            url: '../static/images/widget_image_weather.png',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            backgroundicon: '',
            width: 244,
            height: 83,
            borderRadius: 3,
            textAlign: 'center',
        },
    },
    {
        component: 'SearchWidget',
        label: 'Search',
        icon: 'wenben',
        propValue: {
            url: '../static/images/widget_image_search.png',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            backgroundicon: '',
            width: 506,
            height: 42,
            borderRadius: 7,
            textAlign: 'center',
        },
    },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list
