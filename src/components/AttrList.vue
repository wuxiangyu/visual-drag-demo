<!-- TODO: 这个页面后续将用 JSX 重构 -->
<template>
    <div class="attr-list">
        <el-form>
            <el-form-item v-for="({key,label}, index) in styleKeys" :key="index" :label="label">
                <el-color-picker v-if="key == 'borderColor'" v-model="curComponent.style[key]" show-alpha></el-color-picker>
                <el-color-picker v-else-if="key == 'color'" v-model="curComponent.style[key]" show-alpha></el-color-picker>
                <el-color-picker v-else-if="key == 'backgroundColor'" v-model="curComponent.style[key]" show-alpha></el-color-picker>
                <el-input v-else-if="textareaKey.includes(key)" v-model="curComponent.style[key]" type="textarea" />
                <div v-else-if="key == 'backgroundicon'">
                    <el-form-item for="input" :label="curComponent.style[key]">
                        <!-- <label for="input" > 点击更换图片</label> -->
                        <input 
                            id="input"
                            value=""
                            type="file" 
                            @change="uploadforCanvas"
                        />
                    </el-form-item>
                </div>
                <el-select v-else-if="selectKey.includes(key)" v-model="curComponent.style[key]">
                    <template v-if="key == 'textAlign'">
                        <el-option
                            v-for="item in textAlignOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </template>
                    <template v-else-if="key == 'borderStyle'">
                        <el-option
                            v-for="item in borderStyleOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </template>
                    <template v-else>
                        <el-option
                            v-for="item in verticalAlignOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </template>
                </el-select>
                <el-input v-else v-model.number="curComponent.style[key]" type="number" />
            </el-form-item>
            <el-form-item v-if="curComponent.component === 'AppBlock'" label="内容">
                <el-input v-model="curComponent.propValue.appname" type="textarea" />
            </el-form-item>
            <el-form-item v-else-if="curComponent && isShowContent()" label="内容">
                <el-input v-model="curComponent.propValue" type="textarea" />
            </el-form-item>
            <el-form-item v-if="false && curComponent && curComponent.component === 'Picture'" label="镜像翻转">
                <div style="clear: both;">
                    <el-checkbox v-model="curComponent.propValue.flip.horizontal" label="horizontal">水平翻转</el-checkbox>
                    <el-checkbox v-model="curComponent.propValue.flip.vertical" label="vertical">垂直翻转</el-checkbox>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { styleData } from '@/utils/style'

export default {
    data() {
        return {
            textAlignOptions: [
                {
                    label: '左对齐',
                    value: 'left',
                },
                {
                    label: '居中',
                    value: 'center',
                },
                {
                    label: '右对齐',
                    value: 'right',
                },
            ],
            borderStyleOptions: [
                {
                    label: '实线',
                    value: 'solid',
                },
                {
                    label: '虚线',
                    value: 'dashed',
                },
            ],
            verticalAlignOptions: [
                {
                    label: '上对齐',
                    value: 'top',
                },
                {
                    label: '居中对齐',
                    value: 'middle',
                },
                {
                    label: '下对齐',
                    value: 'bottom',
                },
            ],
            selectKey: ['textAlign', 'borderStyle', 'verticalAlign'],
            styleData,
            textareaKey: ['packageId'],
        }
    },
    computed: {
        styleKeys() {
            if (this.$store.state.curComponent) {
                const curComponentStyleKeys = Object.keys(this.$store.state.curComponent.style)
                return this.styleData.filter(item => curComponentStyleKeys.includes(item.key))
            }
            return []
        },
        curComponent() {
            return this.$store.state.curComponent
        },
    },
    mounted() {
        const files = require.context('@/../static/images/', false, /.png$/)

        let arr = []
        for (let i = 0; i < files.keys().length; i++) {
            // console.log(files.keys()[i].substr(2, files.keys()[i].length))
            arr.push('images/' + files.keys()[i].substr(2, files.keys()[i].length))
        }
        this.pictureDatas = arr
    },
    methods: {
        isShowContent() {
            const excludes = ['Picture', 'Group', 'DotNineBg'] // 这些组件不显示内容
            const component = this.curComponent.component
            return !excludes.includes(component)
        },
        uploadforCanvas(e) {
            let file = e.target.files[0]
            console.log('wuxiangyu')
            console.log(file)
            if (!file.type.includes('image')) {
                console.log('只能上传图片')
                return
            }
            console.log(file.name)
            this.curComponent.style.backgroundicon = 'images/' + file.name
            let img = new FileReader()
            img.readAsDataURL(file)
            // console.log(img)
            img.onload = ({ target }) => {
                this.curComponent.propValue.url = target.result
                // console.log(target.result)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.attr-list {
    overflow: auto;
    padding: 20px;
    padding-top: 0;
    height: 100%;
}
.insert {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        margin-left: 10px;

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
        }

        &:hover {
            background-color: #ecf5ff;
            color: #3a8ee6;
        }
    }

</style>
