import { deepCopy } from '@/utils/utils'

export const jAppBlock = {
    props: {
        packageId: 'com.dss.teamboard',
        name: {
            zh: '白板书写',
            en: 'Writting Board',
        },
        style: {
            position: 'absolute',
            left: 387,
            top: 565,
            fontSize: 14,
            imageWidth: 91,
            imageHeight: 91,
        },
        icon: 'images/icon_whiteboard.png',
    },
    componentName: 'AppBlock',
}

export const vAppBlock = {
    component: 'AppBlock',
    label: '应用',
    icon: 'tupian',
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
    propValue: {
        url: '',
        appname: '文稿演示',
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

export function getJAppBlock(obj) {
    let tmpJappBlock = deepCopy(jAppBlock)
    tmpJappBlock.componentName = 'AppBlock'
    tmpJappBlock.props.packageId = obj.style.packageId
    tmpJappBlock.props.name.zh = obj.propValue.appname
    tmpJappBlock.props.icon = obj.style.backgroundicon
    tmpJappBlock.props.style.left = obj.style.left
    tmpJappBlock.props.style.top = obj.style.top
    tmpJappBlock.props.style.imageWidth = obj.style.width
    tmpJappBlock.props.style.imageHeight = obj.style.height
    tmpJappBlock.props.style.fontSize = obj.style.fontSize

    return tmpJappBlock
}
