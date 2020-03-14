<template>
  <div class="My">
    <div class="con">
      <!-- 头部 -->
      <div class="top">
        <div>
          <img src="../../images/图标/音乐.png" alt />
          <p>名字FM</p>
        </div>
      </div>
      <van-divider />
    </div>
    <!-- 中间部分 -->
    <div class="myMy">
      <van-cell-group>
        <van-cell title="本地音乐（53）" icon="music-o" is-link />
        <van-cell title="最近播放（53）" icon="play-circle-o" is-link />
        <van-cell title="下载管理（53）" icon="share" is-link />
        <van-cell title="我的电台（53）" icon="service-o" is-link />
        <van-cell title="我的收藏（53）" icon="star-o" is-link />
      </van-cell-group>
    </div>
    <!-- 底部 -->
    <div class="btm">
      <!-- 第一部分 -->
      <div class="one flex_s">
        <span class="flex_l left">
          <img src="../../images/图标/箭头.png" alt :class="[flag?'zhuan':'huiQu']" @click="dongHua" />
          创建的歌单
          <i>(8)</i>
        </span>
        <div class="right">
          <van-icon name="plus" size="20" />
          <van-icon name="ellipsis" size="20" />
        </div>
      </div>
      <div :class="[flag?'isHidden':'isShow']">
        <div class="item_list flex">
          <div class="flex_l">
            <img src="../../images/图标/音乐.png" alt />
            <div class="music_name">
              <p>我喜欢的音乐</p>
              <p>112首</p>
            </div>
          </div>
          <van-icon name="ellipsis" size="20" />
        </div>
      </div>
      <!-- 第二部分 -->
      <div class="tow flex_s">
        <span class="flex_l left">
          <img src="../../images/图标/箭头.png" alt :class="[flag1?'zhuan':'huiQu']" @click="dongHua1" />
          收藏歌单
          <i>(188)</i>
        </span>
        <div class="right">
          <van-icon name="ellipsis" size="20" />
        </div>
      </div>
      <div :class="[flag1?'isHidden':'isShow']">
        <div class="item_list flex">
          <div class="flex_l">
            <img src="../../images/图标/音乐.png" alt />
            <div class="music_name">
              <p>我喜欢的音乐</p>
              <p>112首</p>
            </div>
          </div>
          <van-icon name="ellipsis" size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      flag1: false
    }
  },
  mounted() {},
  methods: {
    dongHua() {
      if (this.flag == false) {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    dongHua1() {
      if (this.flag1 == false) {
        this.flag1 = true
      } else {
        this.flag1 = false
      }
    }
  }
}
</script>
<style lang='less' scoped>
.My {
  min-height: 92.5vh;
  background: #f5f5f5;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .isShow {
    display: none;
  }
  .isHidden {
    display: block;
  }
  .con {
    display: flex;
    overflow: auto;
    background: #fff;
    .top {
      width: 65px;
      text-align: center;
      padding: 5px;
      img {
        margin: 0 auto;
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }
  }
  .myMy {
    .van-cell__left-icon {
      font-size: 25px;
    }
  }
  .btm {
    width: 100%;
    margin-top: 10px;
    .one {
      background: #fff;
      padding: 8px 5px 8px 0;
      border-bottom: 1px solid #f5f5f5;
      .left {
        font-size: 14px;
        color: #000;
        padding: 5px 15px;
        img {
          width: 25px;
          height: 25px;
        }
        .zhuan {
          transform: rotate(90deg);
        }
        .huiQu {
          transform: rotate(0deg);
        }
      }
      .right {
        .van-icon-ellipsis:before {
          margin-left: 15px;
        }
      }
    }
    .tow {
      background: #fff;
      padding: 8px 5px 8px 0;
      border-bottom: 1px solid #f5f5f5;
      .left {
        font-size: 14px;
        color: #000;
        padding: 5px 15px;
        img {
          width: 25px;
          height: 25px;
        }
        .zhuan {
          transform: rotate(90deg);
        }
        .huiQu {
          transform: rotate(0deg);
        }
      }
      .right {
        .van-icon-ellipsis:before {
          margin-left: 35px;
        }
      }
    }
    .item_list {
      padding: 8px 10px;
      background: #fff;
      border-bottom: 1px solid #f5f5f5;
      img {
        width: 45px;
        height: 45px;
      }
      .music_name {
        margin-left: 5px;
        p {
          margin: 5px 0;
        }
      }
    }
  }
}
</style>