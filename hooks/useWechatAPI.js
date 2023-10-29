class Toast {
  error(title, duration = 1000) {
    return wx.showToast({ icon: 'error', mask: true, title, duration });
  }
  success(title, duration = 1000){
    return wx.showToast({ icon: 'success', mask: true, title, duration });
  }
}


export const useWechatAPI = () => {
    
  return {
      Toast: new Toast()
  }
}