export default {
  Weibo: {
    icon: 'weibo',
    share(page) {
      return `https://service.weibo.com/share/share.php?url=${page.url}&title=${page.title}&pic=${page.pic}`
    }
  },
  QQ: {
    icon: 'qq',
    share(page) {
      return `https://connect.qq.com/widget/shareqq/index.html?url=${page.url}&title=${page.title}&summary=${page.summary}&pics=${page.pic}`
    }
  },
  Facebook: {
    icon: 'facebook',
    share(page) {
      return `https://www.facebook.com/sharer/sharer.php?u=${page.url}`
    }
  },
  Twitter: {
    icon: 'twitter',
    share(page) {
      return `https://twitter.com/intent/tweet?text=${page.title}&url=${page.url}&via=${page.origin}`
    }
  },
  GooglePlus: {
    icon: 'google-plus-g',
    share(page) {
      return `https://plus.google.com/share?url=${page.url}`
    }
  }
}
