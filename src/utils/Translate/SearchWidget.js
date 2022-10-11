import { deepCopy } from '@/utils/utils'

export const jSearchWidget = {
    widgetName: 'SearchWidget',
    props: {
        normalIcon: '',
        top: 588,
        left: 0,
        width: 550,
        height: 110,
        roundedCorners: 7,
    },
}

export const vDotNineBg = {
    component: 'DotNineBg',
    label: '点9图片',
    icon: 'tupian',
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
    propValue: {
        url: '',
        flip: {
            horizontal: false,
            vertical: false,
        },
    },
    style: {
        backgroundicon: '',
        top: 0,
        left: 0,
        width: 300,
        height: 200,
        borderRadius: '',
        fontSize: 20,
        textAlign: 'center',
        rotate: 0,
        opacity: 1,
        packageId: '',
    },
}

export function getJSearchWidget(obj) {
    let tmpJSearchWidget = deepCopy(jSearchWidget)
    tmpJSearchWidget.widgetName = 'WeatherWidget'
    if (obj.style.isCenter === true) {
        tmpJSearchWidget.props.horizontalCenter = true
    } else {
        tmpJSearchWidget.props.horizontalCenter = false
    }
    tmpJSearchWidget.props.normalIcon = obj.style.backgroundicon
    tmpJSearchWidget.props.left = obj.style.left
    tmpJSearchWidget.props.top = obj.style.top
    tmpJSearchWidget.props.width = obj.style.width
    tmpJSearchWidget.props.height = obj.style.height
    tmpJSearchWidget.props.roundedCorners = obj.style.borderRadius
   
    return tmpJSearchWidget
}
