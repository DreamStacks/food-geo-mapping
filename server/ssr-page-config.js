/**
 * 服务端渲染页面配置
 */
// 精确匹配配置
// const pageConfigs = [{
//   name: 'page',
//   regExp: /^\/page\//
// }]

// 控制是否开启服务端渲染
const isEnableServerRender = process.env.NODE_ENV !== 'dev'
// 控制是否开启用户校验服务端渲染，开启 用户登录走前端渲染，未登录走服务端渲染
const isEnableUserLoginCheck = false

module.exports = function isServerRenderPage(ctx, cookies) {
  // 关闭服务端渲染
  if (!isEnableServerRender) {
    return false
  }

  // 服务端渲染判断,可以增加多种处理判断
  // 通过url判断 确认关闭 ssr 功能
  const userId = cookies['Ihoey_UserId'] // 根据需求自定义
  const userToken = cookies['Ihoey_UserToken']
  // 通过url判断 确认关闭 ssr 功能
  if (ctx.query.ssr) {
    return ctx.query.ssr === 'on' || ctx.query.ssr !== 'off'
    // 登录用户走前端渲染
  } else if (isEnableUserLoginCheck && userId && userToken) {
    return false
  } else {
    // let isSSR = false
    // pageConfigs.forEach(item => {
    //   if (!isSSR) {
    //     isSSR = item.regExp.test(ctx.path)
    //   }
    // })
    return true
  }
}
