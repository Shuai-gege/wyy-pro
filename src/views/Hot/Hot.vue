<template>
  <div class="Hot">
    <div class="con" v-for="(item,i) in 5" :key="i">
      <video
        width="100%"
        controls="controls"
        src="http://oldvod2.v.news.cn/1F/FE/1f74d72eedda3dc922b3487f49619c4730b4fbfe.mp4"
      ></video>
      <div class="mp4">
        <!-- <iframe
          frameborder="0"
          width="100%"
          height="240px"
          src="https://v.qq.com/txp/iframe/player.html?vid=a30450vsfxt"
          allowfullscreen="true"
        ></iframe>-->
        <div class="musicName flex">
          <span>镇魂街，日文版牛逼</span>
          <img src="../../images/图标/音乐.png" alt />
        </div>
        <van-divider />
        <div class="diBu flex">
          <!-- 头像名字 -->
          <div class="left flex_l">
            <img src="../../images/图标/音乐.png" alt />
            <span>你的小爸爸</span>
          </div>
          <!-- 点赞、评论 -->
          <div class="right flex_l">
            <van-icon name="thumb-circle-o" info="99+" size="25" />
            <van-icon name="chat-o" info="99+" size="25" />
            <van-icon name="ellipsis" size="25" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    //页面多个视频只播放一个
    var vido = document.getElementsByTagName('video')
    for (var i = 0; i < vido.length; i++) {
      vido[i].addEventListener('play', function() {
        var thas1 = this //this为当前播放的video
        this.play()
        for (var j = 0; j < vido.length; j++) {
          var thas2 = vido[j]
          if (thas2 !== thas1) {
            thas2.pause()
            thas2.currentTime = 0
          }
        }
      })
    }
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.Hot {
  min-height: 100vh;
  background: #f5f5f5;
  .con {
    background: #fff;
    margin-bottom: 10px;
    .mp4 {
      margin: 5px 10px;
      iframe {
        border-radius: 8px;
      }
      .musicName {
        span {
          font-size: 14px;
          color: #000;
        }
        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }
      }
      .diBu {
        .left {
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          span {
            margin-left: 5px;
          }
        }
        .right {
          .van-icon-chat-o:before {
            margin: 0 10px;
          }
        }
      }
    }
  }
}
</style>