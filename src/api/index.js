/* 
包含n个接口请求函数的模块
*/
import ajax from './ajax'

// 1、根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(`/position/${latitude},${longitude}`) 

// 2. 获取食品分类列表
export const reqCategorys = () => ajax('/index_category',
  {needCheck:true}
)

// 3. 根据经纬度获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax('/shops', {
  params: {longitude, latitude},
  needCheck:true
})
// 发送短信验证码
export const reqSendCode=(phone)=> ajax.get('/sendcode',{params:{phone}})
// 用户密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax.post('/login_pwd', {name, pwd, captcha})
// 手机验证码登录
export const reqSmsLogin = ({phone,code}) => ajax.post('/login_sms', {phone,code})
// 自动登录
export const reqAutoLogin = () => ajax.get('/auto_login')
// 请求商家商品列表
export const reqGoods=()=>ajax('/goods')
// 请求商家评价
export const reqRatings=()=>ajax('/ratings')
// 请求商家信息
export const reqInfo=()=>ajax('/info')


