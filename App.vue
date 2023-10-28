// ifndef MP
<template></template>
<script setup></script>

<style lang="scss">
  /*每个页面公共css */
  @import '/wxcomponents/@vant/weapp/common/index.wxss';
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box;
  }
  .tac {
    text-align: center;
  }
  .pd-5 {
    padding: 5px;
  }

  .example-info {
    font-size: 14px;
    color: #333;
    padding: 10px;
  }
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ml-5 {
    margin-left: 5px;
  }
</style>

// endif
