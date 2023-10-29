<template>
  <view class="container">
    <van-nav-bar title="个人中心" fixed placeholder custom-style="background-color: var(--navbar-color);" z-index="99">
      <van-icon slot="left" name="setting-o" color="white" size="40rpx" @click="toSettingPage"></van-icon>
    </van-nav-bar>
    <image :src="backgroundImg" class="bg_Img"></image>
    <view class="main" :style="{ top: safeAreaHeight + 'px' }">
      <view class="user_Info">
        <image class="avatar" :src="userInfo.avatar"></image>
        <view class="info">
          <text class="ip">IP：{{userInfo.address}}</text>
        </view>
        <view class="been-place">
          <view>获赞</view>
          <view>关注</view>
          <view>粉丝</view>
        </view>
        <button class="edit-btn" @click="toUserInfo">编辑资料</button>
        <view style="">
          <view class="username">{{userInfo.name}}</view>
          <view class="uid">UID：{{userInfo.username}}</view>
        </view>

        <view class="signature ellipsis">{{userInfo.signature}}</view>
      </view>

      <view class="article">
        <van-tabs :offset-top="safeAreaHeight" sticky swipeable animated>
          <van-tab v-for="(cate,index) in category" :key="index" :title="tabName(cate)">
            <van-empty v-if="cate.list.length === 0" image="search" description="内容为空" />
            <view id="left">
              <Cover
                v-for="(item, i) in cate.list"
                :key="i"
                v-show="i % 2 === 0"
                :articleData="item"
                :author="item.name === '攻略' ? userInfo : getAuthor(item)"
                @click.native="toArticle(item,cate.name)"></Cover>
            </view>
            <view id="right">
              <Cover
                v-for="(item, i) in cate.list"
                :key="i"
                v-show="i % 2 === 1"
                :articleData="item"
                :author="cate.name === '攻略' ? userInfo : getAuthor(item)"
                @click.native="toArticle(item,cate.name)"></Cover>
            </view>
          </van-tab>
        </van-tabs>
      </view>
    </view>
  </view>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import { onShow, onLoad } from '@dcloudio/uni-app';
  import { login, fetchArticleAuthor, fetchUser } from '../../api/modules/user.js';
  import { fetchCollection, fetchStrategy } from '../../api/modules/strategy.js';
  import Cover from '../../components/Cover/index.vue';

  const app = getApp();
  const token = ref(''); //账号密码登录返回的token
  const wxtoken = ref(''); //微信登录返回的openid
  const userInfo = ref({});
  const backgroundImg = `http://192.168.1.100:8098/uploads/swiper/bg.jpg`;
  const authorList = ref([]);
  const category = ref([
    { name: '攻略', list: [] },
    { name: '视频', list: [] },
    { name: '收藏', list: [] },
    { name: '圈子', list: [] },
  ]);

  const safeAreaHeight = computed(() => app.globalData.navBarHeight + app.globalData.menuBotton + 2);

  const tabName = (tab) => `${tab.name} ${tab.list.length}`;
  const getAuthor = (article) => authorList.value?.find((item) => item.username === article.userName);
  const toSettingPage = () => {
    wx.navigateTo({
      url: `/pages/subPackages/Setting/Setting`,
    });
  };
  const toUserInfo = (user) => {
    wx.navigateTo({
      url:`/pages/subPackages/UserInfo/UserInfo?data=${JSON.stringify(userInfo.value)}`,
    })
  };
  const initData = async (operation) => {
    wxtoken.value = wx.getStorageSync('wxtoken');
    token.value = wx.getStorageSync('token');
    if (!wxtoken.value && !token.value) {
      return wx.reLaunch({ url: `/pages/Login/Login` });
    }

    let params = null;
    if (wxtoken.value) {
      params = { token: wxtoken.value, mode: 'wechat' };
    } else if (token.value) {
      params = { token: token.value, mode: 'normal' };
    }
    const result = await login(params);
    userInfo.value = result.data;
    wx.setStorage({ key: 'userInfo', data: JSON.stringify(userInfo.value) });

    authorList.value = (await fetchArticleAuthor())?.data;
    category.value[0].list = (await fetchStrategy({ userName: userInfo.value.username }))?.data;
    category.value[2].list = (await fetchCollection({ userName: userInfo.value.username }))?.data;

    // operation === 'refresh' && wx.stopPullDownRefresh();
  };
  initData();
</script>

<style lang="scss">
  /* pages/user/user.wxss */
  #left,
  #right {
    width: 48%;
    margin: 1%;
    float: left;
  }
  #left image,
  #right image {
    width: 100%;
  }
  .container {
    background-color: #f0f5f8;
    height: 100vh;
  }
  .bg_Img {
    background: no-repeat center/contain;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  .main {
    border-radius: 25px 25px 0 0;
    position: absolute;
    // top: 66px;
    left: 0;
    width: 100vw;
    height: fit-content;
  }
  .avatar {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    position: absolute;
    top: 6vw;
    left: 6vw;
    border: 1px solid white;
    box-shadow: #bbb 5px 5px 5px;
    background: #ccc url(../../static/assets/0.png) no-repeat 0 0 / 100%;
  }

  .user_Info {
    // margin: 14vw 6vw 2vw;
    padding: 14vw 6vw 2vw;
    color: white;
    width: 100vw;
    height: 42vw;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .edit-btn {
    position: absolute;
    top: 17vw;
    right: 4vw;
    border: 1px solid white;
    width: fit-content;
    line-height: fit-content;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
  }
  .username {
    position: absolute;
    top: 8vw;
    left: 30vw;
    font-size: 22px;
    font-weight: 600;
  }
  .info {
    position: absolute;
    top: 37vw;
    left: 6vw;
    width: 100vw;
    font-size: 12px;
  }

  .uid {
    position: absolute;
    top: 19vw;
    left: 30vw;
    font-weight: bold;
    border: 1px solid white;
    background-color: rgba(170, 255, 255, 0.3);
    padding: 0 4px;
    border-radius: 3px;
    font-size: 12px;
  }
  .ip {
    font-weight: bold;
    border: 1px solid white;
    background-color: rgba(170, 255, 127, 0.3);
    border-radius: 3px;
    padding: 1px;
  }
  .been-place {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    position: absolute;
    top: 29vw;
    left: 6vw;
    font-size: 16px;
    font-weight: bold;
  }
  .signature {
    position: absolute;
    top: 45vw;
    left: 6vw;
    font-size: 14px;
    width: 90vw;
    height: 8vh;
  }
  .article {
    // margin-top: 4vw;
    border-radius: 4vw 4vw 0 0;
    height: fit-content;
    background: #f0f5f8;
  }
</style>
