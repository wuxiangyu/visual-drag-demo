import { deepCopy } from '@/utils/utils'

export const jTimeGroupWidget = {
    widgetName: 'TimeGroupWidget',
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

export function getJTimeGroupWidget(obj) {
    let tmpJTimeGroupWidget = deepCopy(jTimeGroupWidget)
    tmpJTimeGroupWidget.widgetName = 'TimeGroupWidget'
    if (obj.style.isCenter === true) {
        tmpJTimeGroupWidget.props.horizontalCenter = true
    } else {
        tmpJTimeGroupWidget.props.horizontalCenter = false
    }
    tmpJTimeGroupWidget.props.normalIcon = obj.style.backgroundicon
    tmpJTimeGroupWidget.props.left = obj.style.left
    tmpJTimeGroupWidget.props.top = obj.style.top
    tmpJTimeGroupWidget.props.width = obj.style.width
    tmpJTimeGroupWidget.props.height = obj.style.height
    tmpJTimeGroupWidget.props.roundedCorners = obj.style.borderRadius
   
    return tmpJTimeGroupWidget
}
