<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul ref="menuList">
        <li class="menu-item " :class="{current:currentIndex===index}"
            v-for="(item, index) in goods" :key="index" @click="goCurrent(index)">
            <span class="text bottom-border-1px">
              <img class="icon" v-if="item.icon" :src="item.icon">
               {{item.name}}
            </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul ref="foodlist">
        <li class="food-list-hook" v-for="(item, index) in goods" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item bottom-border-1px" v-for="(food,num) in item.foods" :key="num">
              <div class="icon">
                <img width="57" height="57"
                     :src="food.image">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.info}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span></div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  CartControl组件
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        scrollY: 0,
        tops: []
      }
    },
    computed: {
      ...mapState({
        goods: state => state.shop.goods
      }),
      currentIndex () {
        const {scrollY, tops} = this
        const index = tops.findIndex((item, index) => {
          return scrollY + 100 > item && scrollY < tops[index + 1]
        })
        if (this.scrollMenu) {
          const li = this.$refs.menuList.children[index]
          this.scrollMenu.scrollToElement(li, 300)
        }
        return index
      }
    },
    methods: {
      goCurrent (index) {
        const top = this.tops[index] + 100
        this.scrollY = top
        this.scrollFoods.scrollTo(0, -top, 400)
      },
      createFoodsScroll () {
        //创建右边foods实例
        this.scrollFoods = new BScroll('.foods-wrapper', {probeType: 1, swipeTime: 1500})
        const tops = []
        let top = 0
        tops.push(top - 100)
        const foods = this.$refs.foodlist.children
        //获取每一个li的top值
        Array.from(foods).forEach((item) => {
          top += item.offsetHeight
          tops.push(top - 100)
        })
        this.tops = tops
        //绑定食品列表滚动事件
        this.scrollFoods.on('scroll', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })
        this.scrollFoods.on('scrollEnd', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })
      }
    },
    mounted () {
      this.scrollMenu = new BScroll('.menu-wrapper', {click: true})
    },
    watch: {
      goods () {
        this.$nextTick(() => {
          this.createFoodsScroll()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/stylus/mixins.styl"

  .goods
    display: flex
    position: absolute
    top: 222px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        height: 54px
        width: 56px
        padding: 0 12px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        display flex
        align-items center
        &.current
          background: #fff
          color: #02a774
          .text
            font-weight 700
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
