import { fileicon, editBackground } from '@/utils/icon'
// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
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
            url: fileicon,
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 91,
            height: 91,
            backgroundicon: 'images/files.png',
        },
    },  
    {
        component: 'v-time',
        label: 'Time',
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
            url: fileicon,
            appname: 'str_finder',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            backgroundicon: 'images/files.png',
            width: 91,
            height: 91,
            fontSize: 14,
            textAlign: 'center',
            color: '#FFFFFF',
            packageId: 'com.seewo.easifinder',
        },
    },
    {
        component: 'DotNineBg',
        label: '点九',
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
        component: 'BlurWidget',
        label: '高斯',
        propValue: '&nbsp;',
        icon: 'juxing',
        style: {
            width: 506,
            height: 133,
            borderColor: '#FFFFFF',
            // borderWidth: 1,
            borderStyle: 'dashed',
            borderRadius: '20',
        },
    },    
    {
        component: 'BackgroundWidget',
        label: '背景',
        icon: 'tupian',
        propValue: {
            url: editBackground,
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            backgroundicon: 'images/widget_edit_background.png',
            width: 506,
            height: 133,
            borderRadius: 3,
            textAlign: 'center',
        },
    },
    {
        component: 'TimeGroupWidget',
        label: '时间组',
        icon: 'wenben',
        propValue: {
            url: '',
            urlfront: '../static/images/widget_image_time.png',
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
        label: '天气',
        icon: 'wenben',
        propValue: {
            url: '',
            urlfront: '../static/images/widget_image_weather.png',
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
        label: '搜索',
        icon: 'wenben',
        propValue: {
            url: '',
            urlfront: '../static/images/widget_image_search.png',
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
