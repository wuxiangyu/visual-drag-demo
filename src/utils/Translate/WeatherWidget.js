import { deepCopy } from '@/utils/utils'

export const jWeatherWidget = {
    widgetName: 'WeatherWidget',
    props: {
        normalIcon: '',
        top: 588,
        left: 0,
        width: 550,
        height: 110,
        roundedCorners: 3,
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

export function getJWeatherWidget(obj) {
    let tmpJWeatherWidget = deepCopy(jWeatherWidget)
    tmpJWeatherWidget.widgetName = 'WeatherWidget'
    if (obj.style.isCenter === true) {
        tmpJWeatherWidget.props.horizontalCenter = true
    } else {
        tmpJWeatherWidget.props.horizontalCenter = false
    }
    tmpJWeatherWidget.props.normalIcon = obj.style.backgroundicon
    tmpJWeatherWidget.props.left = obj.style.left
    tmpJWeatherWidget.props.top = obj.style.top
    tmpJWeatherWidget.props.width = obj.style.width
    tmpJWeatherWidget.props.height = obj.style.height
    tmpJWeatherWidget.props.roundedCorners = obj.style.borderRadius
   
    return tmpJWeatherWidget
}
