<style lang="less" src="./setting.less" scoped></style>
<template>
  <div class="page-order">


<van-nav-bar
  title="个人信息"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"

/>
<van-cell-group style=" margin-top: 0.3125rem; padding-bottom:  0.25rem;">
  <van-cell title="昵称" :value="username" is-link @click="showPopup"/>
  <van-cell title="用户名" :value="account" />
  <van-cell title="密码"  is-link @click="showPopup4"/>
  <van-cell title="修改头像"  />

</van-cell-group>
<van-cell-group style=" margin-top: 0.3125rem; padding-bottom:  0.25rem;">
  <van-cell title="会员等级" :value="viplevel" />
   <van-cell title="手机号" :value="phonenumber" is-link @click="showPopup2"/>
  <van-cell title="地址" :value="address"  is-link @click="showPopup3"/>
</van-cell-group>

<van-button plain hairline type="info" style="margin-top: 3rem;width: 100%;" @click="save">保存</van-button>
    <van-popup v-model="showusername"closeable position="bottom" :style="{ height: '25%' }">

      <van-form @submit="onSubmit" >
        <van-field
          v-model="username"
          name="昵称"
          label="昵称"
          placeholder="昵称"
          style="margin-top: 0.3125rem;"
          :rules="[{ required: true, message: '昵称' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
      </van-popup
    <!-- 底部的固定导航栏 -->
    <Footer-nav></Footer-nav>
  <van-popup v-model="showphone"closeable position="bottom" :style="{ height: '25%' }">

    <van-form @submit="onSubmit2" >
      <van-field
        v-model="phonenumber"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        style="margin-top: 0.3125rem;"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    </van-popup>
    <van-popup v-model="showaddress"closeable position="bottom" :style="{ height: '25%' }">

      <van-form @submit="onSubmit3" >
        <van-field
          v-model="address"
          name="地址"
          label="地址"
          placeholder="地址"
          style="margin-top: 0.3125rem;"
          :rules="[{ required: true, message: '请填写地址' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
      </van-popup>

     <van-popup v-model="showpassword"closeable position="bottom" :style="{ height: '25%' }">

        <van-form @submit="onSubmit4" >
          <van-field
              v-model="nullpassword"
              type="password"
              name="请输入原密码"
              label="原密码"
              placeholder="请输入原密码"
              :rules="[{ required: true, message: '请填写原密码' }]"
            />
            <van-field
                v-model="newpassword"
                type="password"
                name="新密码"
                label="新密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
              />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
        </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import FooterNav from '../common/footerNav/footer_nav'
import { NavBar } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Toast } from 'vant';
import { Popup } from 'vant';
import { Field } from 'vant';
import { Form } from 'vant';
Vue.use(Form);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  name: 'discover',
  data () {
    return {
      username:'旺旺崽',
      account:'123234',
      nullpassword:'',
      password:'密码',
      address:'北京市 gg村',
      viplevel:1,
      phonenumber:110,
      showusername: false,
      showphone:false,
      showaddress:false,
      showpassword:false,
      newpassword:'',
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
onClickLeft () {
        this.$router.go(-1)
      },
      save(){
        Toast('点击了保存')
      },
      showPopup() {
            this.showusername = true;
          },
          showPopup2() {
                this.showphone = true;
              },
              showPopup3() {
                    this.showaddress = true;
                  },
                  showPopup4() {
                        this.showpassword = true;
                      },
          onSubmit(values) {
            this.showusername = false;
                console.log('submit', values);
              },
              onSubmit2(values) {
                this.showphone = false;
                    console.log('submit', values);
                  },
                  onSubmit3(values) {
                    this.showaddress = false;
                        console.log('submit', values);
                      },
                      onSubmit4(values) {
                        this.showpassword = false;
                        this.password=this.newpassword;
                        this.newpassword='';
                        this.nullpassword='';
                            console.log('submit', values);
                          },
  },
  components: {
    FooterNav
  }
}
</script>
