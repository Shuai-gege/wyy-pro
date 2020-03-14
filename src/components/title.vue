<template>
  <header>
    <!-- 时间状态栏高度，原生交互获取 -->
    <div class="timeheight"></div>
    <!-- 导航 -->
    <van-nav-bar
      class="navbar"
      fixed
      :left-arrow="true"
      :title="title"
      :right-text="navbar_right_name"
      @click-left="onClickLeft(back)"
      @click-right="onClickRight(navbar_right_link)"
    >
      <img :src="navbar_right_img" slot="right" v-if="navbar_right_img" alt />
      <div
        slot="right"
        class="user_right_text"
        v-if="user_right_text"
        @click="clickUserRightText"
      >{{user_right_text}}</div>
    </van-nav-bar>
  </header>
</template>

<script>
export default {
  props: [
    'back', //导航右0侧链接
    'title', //导航标题
    'navbar_right_name', //导航右侧文字
    'navbar_right_link', //导航右侧链接
    'navbar_right_img', //导航右侧图片
    'user_right_text'
  ],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    //点击导航左侧箭头 -> 如果有链接 -> push(link) -> 否则返回上一页面-1
    onClickLeft(back) {
      if (back) {
        this.$emit('back')
      } else {
        this.$router.go(-1)
      }
    },

    //点击导航右侧内容 -> 如果有链接 -> push(link)
    onClickRight(link) {
      if (link) {
        this.$router.push(link)
      }
    },

    //单独写一个点击事件，在父组件中触发
    clickUserRightText() {
      this.$emit('clickRightText')
    }
  }
}
</script>

<style scoped lang="less">
header {
  /deep/.van-nav-bar {
    .van-nav-bar__left {
      .van-icon-arrow-left {
        color: #333;
        font-size: 20px;
      }
    }
    .van-nav-bar__title {
      font-size: 18px;
    }
  }
  .user_right_text {
    position: relative;
    top: -5px;
    width: 50px;
    height: 32px;
    line-height: 32px;
    background: rgba(189, 46, 252, 1);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(254, 254, 254, 1);
  }
}
</style>
