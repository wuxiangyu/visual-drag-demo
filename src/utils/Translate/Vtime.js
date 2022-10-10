import { deepCopy } from '@/utils/utils'

export const jTime = {
    widgetName: 'TimeWidget',
    props: {
        horizontalCenter: true,
        top: 190,
        let: 0,
        textSize: 112,
        timeFormat: {
            default: 'HH:mm',
        },
    },
}

export const vAppBlock = {
    animations: [],
    events: {},
    groupStyle: {},
    isLock: false,
    component: 'v-time',
    label: '时间',
    propValue: 'yyyy/MM/dd \u3000 EEEE',
    icon: 'wenben',
    style: {
        rotate: 0,
        opacity: 1,
        packageId: '',
        width: 1280,
        height: 40,
        fontSize: 27,
        fontWeight: 400,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: 'center',
        color: '',
        top: 311,
        left: 0,
    },
    id: 10,
}

export function getJTime(obj) {
    let tmpJTime = deepCopy(jTime)
    tmpJTime.widgetName = 'TimeWidget'

    if (obj.style.isCenter === true) {
        tmpJTime.props.horizontalCenter = true
    } else {
        tmpJTime.props.horizontalCenter = false
    }
    tmpJTime.props.top = obj.style.top
    tmpJTime.props.left = obj.style.left
    tmpJTime.props.textSize = obj.style.fontSize
    tmpJTime.props.timeFormat.default = obj.propValue
    return tmpJTime
}
