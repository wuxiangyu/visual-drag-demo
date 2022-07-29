// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
    packageId: '',
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
            width: 300,
            height: 200,
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
            color: '',
        },
    },
    {
        component: 'AppBlock',
        label: '应用',
        icon: 'tupian',
        propValue: {
            url: require('@/assets/title.jpg'),
            appname: '文稿演示',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            backgroundicon: '',
            width: 60,
            height: 60,
            borderRadius: '',
            fontSize: 20,
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
