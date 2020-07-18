<style lang="less" src="./login.less" scoped></style>
<template>
  <div class="page-login">
    <van-nav-bar
      title="用户登陆"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs type="card" style="margin-top: 0.6rem;">
      <van-tab title="账号密码登陆">

        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            style="margin-top: 0.5rem;"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="人脸登录">
        <van-cell @click="showPopup" style="margin-top: 0.625rem;">点击识别</van-cell>
       <van-popup v-model="show" position="bottom" :style="{ height: '40%' }" />
      </van-tab>

    </van-tabs>

    <!-- 底部的固定导航栏 -->
    <Footer-nav></Footer-nav>
  </div>
</template>

<script>
import FooterNav from '../common/footerNav/footer_nav'
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { Popup } from 'vant';
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Field);
Vue.use(Form);
Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: 'discover',
  data () {
    return {
       username: '',
       password: '',
        show: false,
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
     onSubmit(values) {
          console.log('submit', values);
          const redirect = this.$route.query.redirect
              if(redirect){
                  //存在回跳地址就回跳
                  this.$router.push(redirect)
                  console.log("回");
              }else{
                  //否则就跳到默认的首页
                  this.$router.push({
                    name: 'Profile'
                  })
                  console.log("条");

              }
          this.$router.push('/profile')
        },
        onClickLeft() {
              this.$router.go(-1);
            },
             showPopup() {
                  this.show = true;
                },

  },
  components: {
    FooterNav
  }
}
</script>
