<template>
  <view class="cover">
    <van-image lazy-load radius="5px" width="48vw" fit="widthFix" :src="props.articleData.coverImg" />
    <view class="tag">{{articleType}}</view>
    <view>
      <view v-if="props.articleData.address" class="address ellipsis">
        <van-icon name="location" color="green" />
        {{props.articleData.address}}
      </view>
      <view class="title ellipsis">{{props.articleData.title}}{{props.articleData.content ? ` | ${props.articleData.content}` : ''}}</view>
      <view class="author">
        <van-image round lazy-load width="25px" height="25px" :src="author.avatar" />
        <view>
          <view  class="ellipsis author-name">{{ author.name }}</view>
          <view class="publish-time">{{articleData.publishtime}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    articleData: Object,
    author: Object,
  })
   
  const articleType = computed(() => props.articleData.type !== '无' ? props.articleData.type : '')
  
</script>

<style lang="scss">
  .cover {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    object-fit: scale-down;
    margin: 1vw 0;
    width: 48vw;
    border-radius: 5px;
    background-color: white;
    box-shadow: #ececec 5px 5px 5px;
  }
  .author {
    display: flex;
    align-items: center;
    line-height: 16px;
    margin: 1vw;
  }
  .author-name {
     font-size: 14px; 
     margin-left: 1vw; 
     font-weight: bold;
  }
  .address {
    padding: 0 1vw;
    width: 45vw;
    font-size: 14px;
    font-weight: bold;
  }
  .title {
    width: 45vw;
    padding: 0 2vw;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
  .content {
    width: 45vw;
    padding: 0 2vw;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
  .tag {
    position: absolute;
    top: 2px;
    left: 2px;
    backdrop-filter: blur(3px);
    width: fit-content;
    padding: 0 1vw;
    border-radius: 5px;
    font-size: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .publish-time {
    font-size: 12px;
    margin-left: 1vw;
    color: rgba(0, 0, 0, 0.4);
  }
</style>
