<template>
    <div>
        <img :src="picPathfront" class="img_head" :style="{'--width':width , '--height':height}">
        <img
            v-show="show"
            :src="picPathback"
            class="img_head_back"
            :style="{'--width':width , '--height':height}"
        >
    </div>
</template>

<script>
export default {
    props: {
        propValue: {
            type: Object,
            require: true,
            default: () => {},
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            width: '100px',
            height: '100px',
            picPathfront: '',
            picPathback: '',
            show: false,
        }
    },
    watch: {
        'element.style.width': function () {
            const { width, height } = this.element.style
            this.width = width + 'px'
            this.height = height + 'px'
            console.log(this.width)
            // this.height = height
        },
        'element.style.height': function () {
            const { width, height } = this.element.style
            this.width = width + 'px'
            this.height = height + 'px'
            // this.width = width
            // this.height = height
        },
        // 'propValue.flip.vertical': function () {
        //     this.mirrorFlip()
        // },
        // 'propValue.flip.horizontal': function () {
        //     this.mirrorFlip()
        // },
        'propValue.url': function () {
            if (this.propValue.url !== '') {
                this.show = true
            }
            this.picPathback = this.propValue.url
            // this.drawImage()
        },
    },
    mounted() {
        if (this.propValue.url !== '') {
            this.show = true
        }
        this.picPathfront = this.propValue.urlfront
        this.picPathback = this.propValue.url
        const { width, height } = this.element.style
        this.width = width + 'px'
        this.height = height + 'px'
    },
    methods: {
    },
}
</script>
<style>
.img_head{
  /* border: 0px solid #FF0000; */
  position:absolute;
  width:var(--width);
  /* width:10px;*/
  height: var(--height);
  z-index: 20;
  left:0;
  top:0;
  /* text-align: center; */
}
.img_head_back{
position:absolute;
  width:var(--width);
  /* width:10px;*/
  height: var(--height);
  left:0;
  top:0;
  z-index:10;
}

</style>