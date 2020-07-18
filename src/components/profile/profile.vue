<style lang="less" src="./profile.less" scoped></style>
<template>
  <div class="page-profile">


<!-- 第一行的内容 -->
<div class="nav" style="margin-top: 0.3125rem; ">
      <router-link to="/setting">
      <van-col span="1" offset="1" >
        <van-image
          round
          width="1.5rem"
          height="1.5rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      </van-col>


      <van-col span="10" offset="3" >
      <div style="font-weight: bold;font-size: medium;">{{username}}</div>
      <van-row>
        <van-col span="10" style="font-size: small; margin-top: 0.5rem;color: #808080;"> {{word}}</van-col>

      </van-row>

     </van-col>
     </router-link>
      <van-col span="2" offset="4">
        <van-icon name="setting-o" size="20"  />

      </van-col>
      <van-col span="2" offset="1">
        <van-icon name="chat-o" badge="9" size="20" />
      </van-col>
    </van-row>
    </div>
<!-- 超级会员红包和活动中心三个cell -->
<van-cell title="超级会员" value="¥6开通" size="large" label="成为会员每月领20元红包" style="margin-bottom: 0.35rem;" />
<van-cell title="我的订单" size="large"  icon="bill"  style="margin-bottom: 0.35rem;"/>
<van-cell title="活动中心" :value="`${fuli_word}`" size="large"  icon="wap-home"style="margin-bottom: 0.35rem;" />
<!-- 常用功能一个panel，还没绑定点击事件 -->
<van-panel title="常用功能"  >
  <div style="padding-bottom: 0.125rem; margin-bottom: 0.625rem;">
    <van-row type="flex" justify="space-around">
   <router-link to="/collection">
      <van-col ><van-icon name="star" size="30"color="#6698cb" />
      <van-row>
        收藏
      </van-row>
      </van-col>
      </router-link>
       <router-link to="/evaluation">
      <van-col ><van-icon name="comment"  size="30" color="#6698cb"/>
      <van-row>
        评价
      </van-row>
      </van-col>
      </router-link>
      <van-col ><van-icon name="service"  size="30" color="#6698cb"/>
      <van-row>
        客服
      </van-row>
      </van-col>
    </van-row>
  </div>
</van-panel>
<!-- 我的钱包页面，其中数值双向绑定 -->
<van-cell title="我的钱包" is-link value="金币/金额"  />
<div style="background-color: white; font-size: large; padding-top: 0.625rem;">
  <van-row type="flex" justify="space-around">
    <van-col >借钱
   <van-row style="font-weight:bold;padding-top: 0.1875rem;">
     {{rent_amount}}万
   </van-row>
   <div style="color: #909399;padding-top: 0.1875rem;">最高可借</div>
    </van-col>
    <van-col >联名卡
    <van-row style="font-weight:bold;padding-top: 0.1875rem;">
      {{card_amount}}元
    </van-row>
    <div style="color: #909399;padding-top: 0.1875rem;">开卡最高领</div>
     </van-col>
     <van-col >享优惠
     <van-row style="font-weight:bold;padding-top: 0.1875rem;">
       {{discount_amount}}万
     </van-row>
     <div style="color: #909399;padding-top: 0.1875rem;">绑卡立减</div>
      </van-col>


  </van-row>
</div>






    <!-- 底部的固定导航栏 -->
    <Footer-nav></Footer-nav>
  </div>
</template>

<script>
import FooterNav from '../common/footerNav/footer_nav'
import Vue from 'vue'
import { Button } from 'vant'
import { Col, Row } from 'vant'
import { Image as VanImage } from 'vant'
import { Icon } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Panel } from 'vant'
Vue.use(Panel)
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(VanImage);
export default {
  name: 'discover',
  data () {
    return {
      username:'我是前端的👨',
      word:'123',
      card_num:"1",
      fuli_word:'🐛！',
      rent_amount:10,
      card_amount:720,
      discount_amount:157
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {

  },
  components: {
    FooterNav
  }
}
</script>
