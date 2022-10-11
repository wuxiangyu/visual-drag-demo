import { getJAppBlock } from '@/utils/Translate/appBlock'
import { getJTime } from '@/utils/Translate/Vtime'
import { getJDotNineBg } from '@/utils/Translate/DotNineBg'
import { getJBackgroundWidget } from '@/utils/Translate/BackgroundWidget'
import { getJTimeGroupWidget } from '@/utils/Translate/TimeGroupWidget'
import { getJWeatherWidget } from '@/utils/Translate/WeatherWidget'
import { deepCopy } from '@/utils/utils'

export function TranslateJjson(jsonfille) {
    let javaJson = []
    for (let j in jsonfille) {
        if (jsonfille[j].component === 'AppBlock') {
            console.log(jsonfille[j].propValue.appname)
            let tmpjson = getJAppBlock(jsonfille[j])
            javaJson.push(tmpjson)
        } else if (jsonfille[j].component === 'v-time') {
            console.log(jsonfille[j].propValue.appname)
            let tmpjson = getJTime(jsonfille[j])
            javaJson.push(tmpjson)
        } else if (jsonfille[j].component === 'DotNineBg') {
            console.log(jsonfille[j].propValue.appname)
            let tmpjson = getJDotNineBg(jsonfille[j])
            javaJson.push(tmpjson)
        } else if (jsonfille[j].component === 'BackgroundWidget') {
            console.log(jsonfille[j].propValue.appname)
            let tmpjson = getJBackgroundWidget(jsonfille[j])
            javaJson.push(tmpjson)
        } else if (jsonfille[j].component === 'TimeGroupWidget') {
            console.log(jsonfille[j].propValue.appname)
            let tmpjson = getJTimeGroupWidget(jsonfille[j])
            javaJson.push(tmpjson)
        } else if (jsonfille[j].component === 'WeatherWidget') {
            console.log(jsonfille[j].propValue.appname)
            let tmpjson = getJWeatherWidget(jsonfille[j])
            javaJson.push(tmpjson)
        }
        // console.log(jsonfille[j].component)
    }
    let tmpLauncherJson = deepCopy(LauncherJson)
    tmpLauncherJson.widgetList = javaJson
    // console.log(tmpLauncherJson.children[0].children)
    return tmpLauncherJson
}

export const LauncherJson = {
    widgetList: [],
}