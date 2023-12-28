<template>
	<view class="content">
		<view class="text-area">
			<text class="le">账号登录</text>
			<text class="rg">手机号登录</text>
		</view>
		<view class="con">
			<view class="top">
				<input type="text" />
			</view>
			<view class="bot">
				<input type="text" />
			</view>
		</view>
		<button class="btn" @click="add">登录</button>
	</view>
</template>

<script setup lang="ts">
	import {login} from '@/api/login'
const add = async () =>{
	const res = await login({
	account: 'xbsj001',
	password: '123456',
	data: undefined
})
console.log('res',res);
}
</script>                                                                        

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.text-area {
		width: 100%;
		box-sizing: border-box;
		padding: 20px;
		height: 70px;
		line-height: 30px;
		display: flex;
		justify-content: space-between;
	}

	.btn{
		width: 80%;
		height: 50px;
		border-radius: 100px 100px 100px 100px;
		background-color: #EE4F3E;
		color: #fff;
		margin-top: 30px;
	}
	
	.le{
		font-size: 25px;
	}
	.rg{
		color: #EE4F3E;
	}
	.con{
		width: 100%;
		height: 100px;
		
	}
	.top{
		width: 90%;
		border-bottom: 1px solid #ccc;
		margin-left: 5%;
	}.bot{
		width: 90%;
		border-bottom: 1px solid #ccc;
		margin-left: 5%;
	}
	input{
		/* border: 1px solid black; */
		height: 50px;
	}
</style>
