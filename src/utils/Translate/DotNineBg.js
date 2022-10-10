import { deepCopy } from '@/utils/utils'

export const jDotNineBg = {
    widgetName: 'NinePatchWidget',
    props: {
        ninePatchIcon: '/vendor/dss/appIcon/classic/bg_app_list.png',
        horizontalCenter: true,
        top: 588,
        left: 0,
        width: 550,
        height: 110,
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

export function getJDotNineBg(obj) {
    let tmpJDotNineBg = deepCopy(jDotNineBg)
    tmpJDotNineBg.widgetName = 'NinePatchWidget'
    if (obj.style.isCenter === true) {
        tmpJDotNineBg.props.horizontalCenter = true
    } else {
        tmpJDotNineBg.props.horizontalCenter = false
    }
    tmpJDotNineBg.props.ninePatchIcon = obj.style.backgroundicon
    tmpJDotNineBg.props.left = obj.style.left
    tmpJDotNineBg.props.top = obj.style.top
    tmpJDotNineBg.props.width = obj.style.width
    tmpJDotNineBg.props.height = obj.style.height
   
    return tmpJDotNineBg
}
