import { deepCopy } from '@/utils/utils'

export const jDotNineBg = {
    props: {
        packageId: '',
        icon: 'images/bg_app_list.png',
        style: {
            isInCenter: true,
            position: 'absolute',
            left: 387,
            top: 588,
            width: 550,
            height: 110,
        },
    },
    componentName: 'DotNineBg',
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
    tmpJDotNineBg.componentName = 'DotNineBg'
    if (obj.style.packageId !== '') {
        tmpJDotNineBg.props.packageId = obj.style.packageId
    }
    if (obj.style.textAlign === 'center') {
        tmpJDotNineBg.props.isInCenter = true
    } else {
        tmpJDotNineBg.props.isInCenter = false
    }
    tmpJDotNineBg.props.icon = obj.style.backgroundicon
    tmpJDotNineBg.props.style.left = obj.style.left
    tmpJDotNineBg.props.style.top = obj.style.top
    tmpJDotNineBg.props.style.imageWidth = obj.style.width
    tmpJDotNineBg.props.style.imageHeight = obj.style.height
   
    return tmpJDotNineBg
}
