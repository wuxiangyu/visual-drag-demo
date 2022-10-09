import { deepCopy } from '@/utils/utils'

export const jAppBlock = {
    widgetName: 'AppWidget',
    props: {
        launch: {
            clickType: 'Click',
            launchType: 'Activity',
            packageName: 'com.dss.teamboard',
        },
        left: 387,
        top: 565,
        width: 91,
        height: 91,
        textSize: 14,
        textColor: '#ffffff',
        nameId: 'str_white_board',
        normalIcon: '/vendor/dss/appIcon/classic/default/com.dss.teamboard.png',
    },
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
    tmpJappBlock.widgetName = 'AppWidget'
    tmpJappBlock.props.launch.packageName = obj.style.packageId
    tmpJappBlock.props.normalIcon = obj.style.backgroundicon
    tmpJappBlock.props.left = obj.style.left
    tmpJappBlock.props.top = obj.style.top
    tmpJappBlock.props.width = obj.style.width
    tmpJappBlock.props.height = obj.style.height
    tmpJappBlock.props.textSize = obj.style.fontSize
    tmpJappBlock.props.nameId = obj.propValue.appname
    tmpJappBlock.props.textColor = obj.style.color
    return tmpJappBlock
}
