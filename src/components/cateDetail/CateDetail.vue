<template>
    <div class="catelist-detail">
        <div class="catelist-detail-wrap">
            <div class="catelist-banner">
                <swiper :options="swiperOption">
                    <swiper-slide><img class="banner-img" src="https://yanxuan.nosdn.127.net/f7f216f5d01874f8f768ccfd78a7112e.jpg?imageView&quality=75&thumbnail=0x196" alt=""></swiper-slide>
                    <swiper-slide><img class="banner-img" src="https://yanxuan.nosdn.127.net/f7f216f5d01874f8f768ccfd78a7112e.jpg?imageView&quality=75&thumbnail=0x196" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="catelist-menu-wrap c">
                <ul class="catelist-menulist">
                    <li><img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt=""><span>{{data}}</span></li>
                    <li><img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt=""><span>{{data}}</span></li>
                    <li><img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt=""><span>{{data}}</span></li>
                    <li><img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt=""><span>{{data}}</span></li>
                    <li><img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt=""><span>{{data}}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CateListDetail",
        props:['data'],
        data(){
            return ({
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                            const activeColor = '#fff'
                            const normalColor = 'rgba(255,255,255,0.3)'
                            let color = ''
                            let paginationStyle = ''
                            let html = ''
                            for (let i = 1; i <= total; i++) {
                                if (i === current) {
                                    color = activeColor
                                } else {
                                    color = normalColor
                                }
                                paginationStyle = `background:${color};opacity:1;margin-right:10px;width:40px;border-radius:0;height:4px`
                                html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
                            }
                            return html
                        },
                    },
                    loop: true,
                    // autoplay:true,
                    autoplay: {
                        delay: 2000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                },
            })
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .catelist-detail
        flex-grow 1
        height 100%
        background-color: #fff
        padding 30px
        position: relative
        .catelist-banner
            width 528px
            height 192px
            margin-bottom 32px
            img
                width 528px
                height 192px
        .catelist-menu-wrap
            position: absolute
            left: 30px
            top: 224px
            width 528px
            overflow hidden
            .catelist-menulist
                width 540px
                display flex
                flex-wrap wrap
                li
                    width 144px
                    height 216px
                    margin-right 34px
                    background-color: #fff
                    img
                        height 144px
                        width 144px
                    span
                        width 100%
                        display inline-block
                        text-align center
                        valign top
</style>