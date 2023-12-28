// 登录模块相关接口
import uniFetch from '../utils/uni-fetch';
// 导入登录模块所有接口参数类型
import {loginParmsType} from './types/loginType'
// 账号登录接口
export const login = (data:loginParmsType) =>{
	return uniFetch ({
		url:'/driver/login/account',
		method:'POST',
		data
	})
}
// 获取验证码接口
export const captcha = (data:string) =>{
	return uni.request({url: '/driver/register/captcha', method: 'GET',data })
}