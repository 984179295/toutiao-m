module.exports = {
  plugins: {
    // vue-cli内部已经配置了,冲突
    // autoprefixer 前缀
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    'postcss-pxtorem': {
      //  lib-flexible 的REM适配方案: 把一行分为10份
      // 所以 rootValue 应该设置为你的设计稿宽度的1/10
      // 我的的设计稿 750, 所以应该设置为750 / 10 =75
      // 但是Vant建议设置为37.5, 因为vant 是基于375写的

      // rootValue: 37.5,
      // postcss-pxtorem 处理每个css都会调用函数
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },

      // 配置要转换的css 属性
      // * 表示所有
      propList: ['*']
    }
  }
}
