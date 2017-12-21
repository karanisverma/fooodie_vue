<template>
  <div class="component-toolbar" :class="`theme-${theme}`">
    <header class="main">
      <div v-if="leftAction" class="left-action">
        <div class="item" @click.prevent="leftAction.method">
          <i v-if="leftAction && leftAction.icon" class="material-icons">
            {{leftAction.icon}}
          </i>
          <img v-else-if="leftAction && leftAction.iconImg"
            :src="leftAction.iconImg" class="img-icon">
        </div>
      </div>
      <h1 class="title" :style="title.position === 'center' ? 'text-align: center;' : ''">
        {{title.text}}
      </h1>

      <div class="right-actions d-f fd-r jc-sb ai-c">
        <div v-for="(action, i) in rightActions" v-if="rightActions" class="item cur-p d-f ai-c jc-c"
          @click.prevent="action.method">
             <i class="material-icons">
              {{action.icon}}
            </i>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import './toolbar.scss'

import Toolbar from './toolbar'
export default Toolbar
</script>
