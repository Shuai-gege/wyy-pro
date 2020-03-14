<template>
  <div class="MusicPage">
    <div class="top flex">
      <van-icon name="arrow-left" size="20" @click="out" />
      <van-notice-bar :text="musicImg.name" color="#000" />
      <van-icon name="cluster-o" size="20" />
    </div>
    <img class="bgc" :src="picUrl" alt />
    <img :class="[flag?'zhuan1':'zhuan']" :src="picUrl" alt />
    <audio id="mp3" autoplay="autoplay" :src="musicUrl.url"></audio>
    <!-- 播放控件 -->
    <div class="maxAction">
      <div class="action flex">
        <img class="jianTou" src="../../images/图标/箭头l.png" alt />
        <img :src="imgs" alt @click="actionEnd" />
        <img class="jianTou" src="../../images/图标/箭头.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import boFang from '../../images/图标/播放.png'
import zanTing from '../../images/图标/播放1.png'
export default {
  data() {
    return {
      musicId: '', //音乐id
      musicUrl: [], //音乐url
      musicImg: [], //音乐封面图
      picUrl: '', //图片
      flag: false,
      imgs: boFang
    }
  },
  mounted() {
    this.musicId = this.$route.query.id
    this.axios.post('/song/url', { id: this.musicId }).then(data => {
      console.log(data.data[0])
      this.musicUrl = data.data[0]
    }),
      this.axios.post('/song/detail', { ids: this.musicId }).then(data => {
        console.log(data.songs[0])
        this.musicImg = data.songs[0]
        this.picUrl = data.songs[0].al.picUrl
      })
    var Audio = document.getElementById('mp3')
    console.log(Audio.duration)
  },
  methods: {
    out() {
      this.$router.go(-1)
    },
    //播放and暂停
    actionEnd() {
      let audio = document.getElementById('mp3')
      if (audio !== null) {
        // 检查播放是否已暂停.audio.paused 在播放器播放时反回false
        // alert(audio.paused)
        if (audio.paused == true) {
          audio.play() //audio.play(),这个就是播放方法
          this.imgs = boFang
          this.flag = false
        } else {
          audio.pause() //audio.pause(),这个是暂停方法
          this.imgs = zanTing
          this.flag = true
        }
      }
    }
  }
}
</script>
<style lang='less' scoped>
.MusicPage {
  .top {
    padding: 0 10px;
    .van-notice-bar {
      width: 100%;
      background: #fff;
    }
  }
  .bgc {
    width: 100%;
    height: 627px;
    -ms-filter: blur(40px);
    -webkit-filter: blur(40px);
  }
  .zhuan {
    @-webkit-keyframes rotation {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    position: fixed;
    width: 300px;
    height: 300px;
    top: 20%;
    left: 10%;
    border-radius: 50%;
    -webkit-transform: rotate(360deg);
    animation: rotation 15s linear infinite;
    -moz-animation: rotation 15s linear infinite;
    -webkit-animation: rotation 15s linear infinite;
    -o-animation: rotation 15s linear infinite;
  }
  .zhuan1 {
    position: fixed;
    width: 300px;
    height: 300px;
    top: 20%;
    left: 10%;
    border-radius: 50%;
  }
  #mp3 {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .maxAction {
    width: 100%;
    position: absolute;
    bottom: 0;
    .action {
      padding: 0 35px 15px;

      img {
        width: 50px;
        height: 50px;
      }
      .jianTou {
        width: 35px;
        height: 35px;
      }
    }
  }
}
</style>