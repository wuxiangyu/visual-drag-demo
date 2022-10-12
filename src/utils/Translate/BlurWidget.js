import { deepCopy } from '@/utils/utils'

export const jBlurWidget = {
    widgetName: 'BlurWidget',
    props: {
        blurRadius: 20,
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

export function getJBlurWidget(obj) {
    let tmpJBlurWidget = deepCopy(jBlurWidget)
    tmpJBlurWidget.widgetName = 'BlurWidget'
    tmpJBlurWidget.props.blurRadius = obj.style.borderRadius
    tmpJBlurWidget.props.left = obj.style.left
    tmpJBlurWidget.props.top = obj.style.top
    tmpJBlurWidget.props.width = obj.style.width
    tmpJBlurWidget.props.height = obj.style.height
    // tmpJBlurWidget.props.roundedCorners = obj.style.borderRadius
   
    return tmpJBlurWidget
}
