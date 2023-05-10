// 判断终端来源
export const isMobile = {
  Windows: function () {
    return /IEMobile/i.test(navigator.userAgent);
  },
  Android: function () {
    return /Android/i.test(navigator.userAgent);
  },
  Hos: function () {
    return /hos\/boohee/i.test(navigator.userAgent);
  },
  iOS: function () {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },
  TEST: function () {
    // demo
    return /boohee/i.test(navigator.userAgent);
  },
  TestIOS: function () {
    // demo
    return this.iOS() && this.TEST();
  },
  TestAndroid: function () {
    // demo
    return this.Android() && this.TEST();
  },
  Weixin: function () {
    return /MicroMessenger/i.test(navigator.userAgent);
  },
  AliApp: () => {
    return /AliApp/i.test(navigator.userAgent);
  },
  Alipay: () => {
    return /AlipayClient/i.test(navigator.userAgent);
  },
  Taobao: () => {
    return (
      /AliApp/i.test(navigator.userAgent) && /TB/i.test(navigator.userAgent)
    );
  },
  AliHealth: () => {
    return (
      /AliApp/i.test(navigator.userAgent) &&
      /AliHealthClient/i.test(navigator.userAgent)
    );
  },
  WeixinMiniProgram: () => {
    return window.__wxjs_environment === 'miniprogram';
  }
};

// 以375为基准转换px
export const pxTransform = (px: number): number => {
  const windowWidth = window.innerWidth;
  const transformPx = (windowWidth / 375) * px;
  return transformPx;
};

// 阻止弹层下面滚动
export const stopBackGroundScroll = ((): ((isStop: boolean) => void) => {
  const ele = document.body;
  let top = 0;

  return (isStop: boolean): void => {
    if (isStop) {
      top = window.scrollY;
      ele.style.position = 'fixed';
      ele.style.top = -top + 'px';
    } else {
      ele.style.position = '';
      ele.style.top = '';
      window.scrollTo(0, top);
    }
  };
})();

// px ---> vw
export function pxToVw(css: string, viewportWidth = 750): string {
  return css.replace(/(\d+)px/g, (_, $1) => {
    const vw = ($1 / viewportWidth) * 100;
    return `${vw}vw`;
  });
}

export function getAppDivice(): string {
  switch (true) {
    case isMobile.WeixinMiniProgram():
      return 'mini_program';
    case isMobile.Android():
      return 'Android';
    case isMobile.iOS():
      return 'IOS';
    default:
      return 'other';
  }
}

export function getAppKey(): string {
  switch (true) {
    case isMobile.Alipay():
      return 'Alipay';
    default:
      return 'other';
  }
}

export function getAppVersion(): string | number {
  let appVersion: string | number = navigator.userAgent
    .split(' ')
    .slice(-1)[0]
    .split('/')
    .splice(-1)[0];
  if (isNaN(parseInt(appVersion))) {
    appVersion = 'other';
  }
  return appVersion;
}
