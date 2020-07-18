<style lang="less" src="./collection.less" scoped></style>
<template>
  <div class="page-collection">
    <van-nav-bar
      title="收藏栏"
      left-text="返回"

      left-arrow
      @click-left="onClickLeft"

    />
<form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<van-notice-bar scrollable text="这儿都是您最爱的" />
   <van-swipe-cell>
     <van-card
       num="2"
       price="2.00"
       desc="鲜猫肉一大碗"
       title="鲜猫肉"
       class="goods-card"
       thumb="https://img.yzcdn.cn/vant/cat.jpeg"
     />
     <template #right>
       <van-button square text="删除" type="danger" class="delete-button" />
     </template>
   </van-swipe-cell>

   <van-swipe-cell>
     <van-card
       num="2"
       price="2.00"
       desc="鲜猫肉一大碗"
       title="鲜猫肉"
       class="goods-card"
       thumb="https://img.yzcdn.cn/vant/cat.jpeg"
     />
     <template #right>
       <van-button square text="删除" type="danger" class="delete-button" />
     </template>
   </van-swipe-cell>
   <van-swipe-cell>
     <van-card
       num="2"
       price="2.00"
       desc="鲜猫肉一大碗"
       title="鲜猫肉"
       class="goods-card"
       thumb="https://img.yzcdn.cn/vant/cat.jpeg"
     />
     <template #right>
       <van-button square text="删除" type="danger" class="delete-button" />
     </template>
   </van-swipe-cell>

    <!-- 底部的固定导航栏 -->
    <Footer-nav></Footer-nav>
  </div>
</template>
<style>
  .goods-card {
    margin: 0;
    background-color: @white;
  }
  .van-card{
    margin-top: 0.25rem;
  }

  .delete-button {
    height: 100%;
  }
</style>
<script>
import FooterNav from '../common/footerNav/footer_nav'
import { Card } from 'vant';
import Vue from 'vue';
import { Tag } from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { SwipeCell } from 'vant';
import { Search } from 'vant';
import { Toast } from 'vant';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
Vue.use(Search);
Vue.use(SwipeCell);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Card);
export default {
  name: 'collection',
  data () {
    return {
       value: '',
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
       onClickLeft() {
              this.$router.go(-1);
            },
            onSearch(val) {
                  Toast(val);
                },
                onCancel() {
                  Toast('取消');
                },
  },
  components: {
    FooterNav
  }
}
</script>
