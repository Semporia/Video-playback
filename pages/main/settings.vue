<template>
	<view class="m-page m-main-bg" style="padding-bottom: 192rpx;">
		<cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
			<block slot="backText"></block>
			<block slot="content">设置</block>
		</cu-custom>
		<view class="m-content_">
			<view class="cu-list menu m-bg-none">
				<view class="cu-item arrow ">
					<view class="content">
						<text class="cuIcon-people "></text>
						<text class="">账号与安全</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-wefill "></text>
						<text class="">账号注销</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-lock "></text>
						<text class="">修改密码</text>
					</view>
				</view>
				<view class="cu-item arrow margin-top">
					<view class="content">
						<text class="cuIcon-emojifill "></text>
						<text class="">联系我们</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-notification "></text>
						<text class="">推送设置</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-attention "></text>
						<text class="">隐私设置</text>
					</view>
				</view>
				<view class="cu-item margin-top">
					<view class="content">
						<text class="cuIcon-lock "></text>
						<text class="">小窗模式</text>
					</view>
					<view class="action">
						<switch class="switch-sex" :checked="true"></switch>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-activityfill "></text>
						<text class="">个性化推荐</text>
					</view>
					<view class="action">
						<switch class="m-text-pink" :checked="false"></switch>
					</view>
				</view>
				<view class="cu-item arrow margin-top">
					<view class="content">
						<text class="cuIcon-wifi "></text>
						<text class="">检查更新</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-wefill "></text>
						<text class="">关于我们</text>
					</view>
				</view>
			</view>
			<view class="m-logout">退出登录</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import  "static/variables.scss";
	.m-bg-none .cu-item{
		background: none !important;
		color: $white !important;
	}
	.m-logout{
		color: $white !important;
		background-color: $pink !important;
		padding: 16rpx 32rpx;
		border-radius: 16rpx;
		text-align: center;
		width: 200rpx;
		margin: 192rpx auto 0 ;
	}
</style>
