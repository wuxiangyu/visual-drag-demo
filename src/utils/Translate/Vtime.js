import { deepCopy } from '@/utils/utils'

export const jTime = {
    componentName: 'Time',
    props: {
        style: {
            isInCenter: true,
            position: 'absolute',
            top: 311,
            fontSize: 27,
        },
        timeFormat: {
            en: 'yyyy/MM/dd \u3000 EEEE',
            zh: 'yyyy/MM/dd \u3000 EEEE',
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
    propValue: 'yyyy/MM/dd \\u3000 EEEE',
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
    tmpJTime.componentName = 'Time'
    if (obj.style.packageId !== '') {
        tmpJTime.props.packageId = obj.style.packageId
    }
    tmpJTime.props.timeFormat.zh = obj.propValue
    tmpJTime.props.timeFormat.en = obj.propValue
    if (obj.style.textAlign === 'center') {
        tmpJTime.props.style.isInCenter = true
    } else {
        tmpJTime.props.style.isInCenter = false
    }
    tmpJTime.props.style.top = obj.style.top
    tmpJTime.props.style.left = obj.style.left
    tmpJTime.props.style.fontSize = obj.style.fontSize

    return tmpJTime
}
