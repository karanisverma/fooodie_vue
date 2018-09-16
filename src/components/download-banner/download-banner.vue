<template>
  <div class="component-download-banner" v-if="showBanner">
  	<div class="download-banner">
  		<div class="cross" @click="closeBanner" v-if="!close" >
  			<i class="material-icons"> clear </i>
  		</div>
  		<div class="logo">
  			<img alt="zoomcar logo mini" class="zoom_logo_small" src="../../assets/logo.png">
  		</div>
  		<div class="download-info">
  			<p class="title">{{bannerTitle}}</p>
  			<p class="info">{{bannerInfo}}</p>
  		</div>
  		<div>
  			<a href="https://play.google.com/store/apps/details?id=store.fooodie" class="get-app" target="_blank">GET</a>
  		</div>
  	</div>
  </div>
</template>

<script>
import './download-banner.scss'

import DownloadBanner from './download-banner'
export default DownloadBanner
</script>

