<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})

			Vue.prototype.ColorList = [{
					title: '嫣红',
					name: 'red',
					color: '#e54d42'
				},
				{
					title: '桔橙',
					name: 'orange',
					color: '#f37b1d'
				},
				{
					title: '明黄',
					name: 'yellow',
					color: '#fbbd08'
				},
				{
					title: '橄榄',
					name: 'olive',
					color: '#8dc63f'
				},
				{
					title: '森绿',
					name: 'green',
					color: '#39b54a'
				},
				{
					title: '天青',
					name: 'cyan',
					color: '#1cbbb4'
				},
				{
					title: '海蓝',
					name: 'blue',
					color: '#0081ff'
				},
				{
					title: '姹紫',
					name: 'purple',
					color: '#6739b6'
				},
				{
					title: '木槿',
					name: 'mauve',
					color: '#9c26b0'
				},
				{
					title: '桃粉',
					name: 'pink',
					color: '#e03997'
				},
				{
					title: '棕褐',
					name: 'brown',
					color: '#a5673f'
				},
				{
					title: '玄灰',
					name: 'grey',
					color: '#8799a3'
				},
				{
					title: '草灰',
					name: 'gray',
					color: '#aaaaaa'
				},
				{
					title: '墨黑',
					name: 'black',
					color: '#333333'
				},
				{
					title: '雅白',
					name: 'white',
					color: '#ffffff'
				},
			]

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}

	}
</script>

<style lang="scss">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	
	@import  "static/variables.scss";
	
	.m-main-bg{
		background-color: $main-bg !important;
	}
	.m-bg-pink{
		background-color: $pink !important;
		color: $white !important;
	}
	.m-bg-bar{
		background-color: $bar-bg !important;
	}
	.m-text-gray{
		color: $gray !important;
	}
	.m-text-white{
		color: $white !important;
	}
	.m-text-pink{
		color: $pink !important;
	}
	.uni-switch-input{
		background-color: $bar-bg !important;
	}
	.m-page{
		min-height: 100vh;
	}
	.m-content{
		margin: 0 32rpx;
	}
	.m-fixed {
		position: fixed;
		z-index: 99;
	}
	.m-tab{
		font-weight: bolder;
		color: $gray;
	}
	.m-tab-selected{
		color: $pink !important;
	}
	.m-mini-info{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 48rpx;
		.m-left{
			display: flex;
			.m-name{
				color: $white;
				font-weight: 500;
			}
			.m-data{
				color: $gray;
			}
		}
		.m-right{
			color: $white;
			font-weight: 700;
			margin-right: 32rpx;
		}
	}
	.m-buttons{
		margin-bottom: 32rpx;
		button{
			background: none !important;
			border: 1px solid $bar-bg;
			color: $gray;
		}
	}
	.m-hr{
		margin: 16rpx 0 32rpx 0;
		border-bottom: 1px solid $bar-bg;
	}
	
	.m-thumbs-list{
		margin-top: 64rpx;
		padding-bottom: 32rpx;
		.m-cover-item{
			height: 192rpx;
			background-color: $bar-bg !important;
			display: flex;
			flex-direction: row;
			padding: 16rpx;
			margin-top: 32rpx;
			justify-content: space-between;
			.m-thumb{
				width: 200rpx;
				height: 160rpx;
				image{
					width: 100%;
					height: 100%;
					vertical-align: middle;
					border-radius: 8rpx;
				}
			}
			.m-content{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
				.m-title{
					color: $white !important;
					font-weight: 500;
					font-size: 32rpx;
				}
				.m-data{
					color: $gray !important;
				}
			}
		}
	}
	
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}

	.nav-li {
		padding: 30upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}

	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}

	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}

	.text-light {
		font-weight: 300;
	}

	@keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}

	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}
	.ml-auto,
	.mx-auto {
		margin-left: auto !important;
	}
	
	.mr-auto,
	.mx-auto {
		margin-right: auto !important;
	}
	
	.no-gutters {
		margin-right: 0;
		margin-left: 0;
	}
	
	.row {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: -15px;
		margin-left: -15px;
	}
	
	.align-self-start {
		-ms-flex-item-align: start !important;
		align-self: flex-start !important;
	}
	
	.col-12 {
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}
	
	.align-self-end {
		-ms-flex-item-align: end !important;
		align-self: flex-end !important;
	}
	
	.align-self-center {
		-ms-flex-item-align: center !important;
		align-self: center !important;
	}
</style>
