<template>
  <div class="Yuncun">
    <van-tabs v-model="active">
      <van-tab title="广场">
        <div class="maxBox">
          <div class="con" v-for="(item,i) in images" :key="i">
            <img :src="item.img" alt />
            <span class="tiTle">{{item.title}}</span>
            <p class="flex_r pingLun">
              {{item.like}}
              <van-icon name="smile" size="15" />
            </p>
          </div>
        </div>
      </van-tab>
      <van-tab title="关注">
        <div class="flex_l guanZhu_top">
          <div class="guanZhu">
            <img src="../../images/图标/音乐.png" alt />
            <p class="yihang">关注人的名字</p>
          </div>
          <div class="guanZhu">
            <img src="../../images/图标/音乐.png" alt />
            <p class="yihang">关注人的名字</p>
          </div>
          <div class="guanZhu">
            <img src="../../images/图标/音乐.png" alt />
            <p class="yihang">关注人的名字</p>
          </div>
          <div class="guanZhu">
            <img src="../../images/图标/音乐.png" alt />
            <p class="yihang">关注人的名字</p>
          </div>
          <div class="guanZhu">
            <img src="../../images/图标/音乐.png" alt />
            <p class="yihang">关注人的名字</p>
          </div>
          <div class="guanZhu">
            <img src="../../images/图标/音乐.png" alt />
            <p class="yihang">关注人的名字</p>
          </div>
          <div class="guanZhu">
            <img src="../../images/图标/音乐.png" alt />
            <p class="yihang">关注人的名字</p>
          </div>
        </div>
        <van-divider />
        <!-- 发布的信息 -->
        <div class="xinXi">
          <div class="flex_l touBu">
            <img src="../../images/图标/音乐.png" alt />
            <div>
              <p class="userName">用户的名字</p>
              <span class="time">15:58</span>
            </div>
          </div>
          <!-- 内容部分 -->
          <div class="conText">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus atque excepturi odit consequuntur, nisi aspernatur quo debitis incidunt dignissimos sed itaque ullam, mollitia ut molestias. Sequi quia veniam nam itaque!</p>
            <img src="http://img4.imgtn.bdimg.com/it/u=1427398779,2246539867&fm=11&gp=0.jpg" alt />
          </div>
          <!-- 按键部分 -->
          <div class="btn flex_l">
            <!-- 转发 -->
            <div class="flex_l">
              <van-icon name="add-o" size="20" />
              <span>转发</span>
            </div>
            <!-- 评论 -->
            <div class="flex_l">
              <van-icon name="chat-o" size="20" />
              <span>99</span>
            </div>
            <!-- 点赞 -->
            <div class="flex_l">
              <van-icon name="thumb-circle-o" size="20" />
              <span>138</span>
            </div>
          </div>
          <van-divider />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1, //tab切换
      images: [
        {
          img:
            'https://image.watsons.com.cn//upload/8a316140.png?w=377&h=451&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '最近浴室新宠，日系神仙好物了解一下～',
          user: 'www',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/083767f0.JPG?w=828&h=620&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精',
          like: '952'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/02a4f38d.jpg?w=1067&h=1067&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '最近浴室新宠，日系神仙好物了解一下～',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/589585c1.jpeg?x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/d862d932.jpg?w=1080&h=1440&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '最近浴室新宠，日系神仙好物了解一下～',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/eb4fb58f.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/71d19462.jpg?x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:
            '贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/5c3e51e4.jpg?w=720&h=960&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '夏天用这款姨妈巾，让你体验真正的清爽',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '最近浴室新宠，日系神仙好物了解一下～',
          user: '迷人的小妖精迷人的小妖精123',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '最近浴室新宠，日系神仙好物了解一下～',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '夏天用这款姨妈巾，让你体验真正的清爽',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精123',
          like: '953'
        },
        {
          img:
            'https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '最近浴室新宠，日系神仙好物了解一下～',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '夏天用这款姨妈巾，让你体验真正的清爽',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/99253111.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精123',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/13afe9a7.jpg?x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title:
            '贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/54c5d7b4.jpg?w=828&h=991&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/71d19462.jpg?x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '夏天用这款姨妈巾，让你体验真正的清爽',
          user: '迷人的小妖精迷人的小妖精123',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/642cb83c.jpeg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/31e42833.jpg?w=750&h=750&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '夏天用这款姨妈巾，让你体验真正的清爽',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/60cc9b8e.jpg?w=991&h=744&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '150元搞定全套护肤品，这些护肤好物必须交出来！',
          user: '迷人的小妖精迷人的小妖精123',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/b709ed72.jpg?w=552&h=414&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '最近浴室新宠，日系神仙好物了解一下～',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/137b50b0.jpg?x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '夏天用这款姨妈巾，让你体验真正的清爽',
          user: '迷人的小妖精迷人的小妖精',
          like: '952'
        },
        {
          img:
            'https://image.watsons.com.cn//upload/31e42833.jpg?w=750&h=750&x-oss-process=image/resize,w_1080',
          avatar:
            'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
          title: '最近浴室新宠，日系神仙好物了解一下～',
          user: '迷人的小妖精迷人的小妖精',
          like: '953'
        }
      ],
      uid: '' //用户id
    }
  },
  mounted() {
    // this.uid = localStorage.getItem('uid')
    // this.axios.post('/user/follows', { uid: this.uid }).then(data => {
    //   console.log(data)
    // })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.Yuncun {
  //隐藏滚动条
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  .maxBox {
    column-count: 2;
    column-gap: 0px;
    .con {
      break-inside: avoid;
      margin: 15px;
      box-shadow: 3px 2px 2px rgba(184, 168, 168, 0.5);
      img {
        width: 100% !important;
        display: block;
      }
      .tiTle {
        font-size: 14px;
        color: #000;
      }
      .pingLun {
        text-align: center;
        .van-icon-smile:before {
          margin-left: 5px;
          margin-bottom: 3px;
        }
      }
    }
  }
  .guanZhu_top {
    width: 100%;
    overflow-x: auto;
    .guanZhu {
      width: 90px;
      text-align: center;
      margin: 3px;
      p {
        width: 70px;
        margin: 0 auto;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 5px auto;
      }
    }
  }
  .xinXi {
    .touBu {
      padding: 0 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 5px;
      }
      .userName {
        font-size: 14px;
      }
    }
    .conText {
      text-indent: 24px;
      padding: 0 5px 0 50px;
      img {
        width: 200px;
        height: 350px;
      }
    }
    .btn {
      padding-left: 30px;
      .flex_l {
        padding: 15px 15px 0;
      }
    }
  }
}
</style>