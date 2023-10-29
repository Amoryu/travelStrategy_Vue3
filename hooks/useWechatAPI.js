import { onLaunch } from '@dcloudio/uni-app';
import { ref } from 'vue';
import Dialog from '@/wxcomponents/@vant/weapp/dialog/dialog';

class Toast {
  error(title, duration = 1000) {
    return wx.showToast({ icon: 'error', mask: true, title, duration });
  }
  success(title, duration = 1000) {
    return wx.showToast({ icon: 'success', mask: true, title, duration });
  }
  loading(title, duration = 1000) {
    return wx.showToast({ icon: 'loading', mask: true, title, duration });
  }
}

class MyDialog {
  confirm(title = '提示',message) {
    return Dialog.confirm(title,message)
  }
}

export const useWechatAPI = () => {
  
  return {
    Toast: new Toast(),
    Dialog: new MyDialog()
  };
};
