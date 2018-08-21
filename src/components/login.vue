<template>
  <div class="login" id="login">
    <header class="header">
      <h2>寸&nbsp;&nbsp;草</h2>
      <h4>让艺考更简单</h4>
    </header>
    <group class="color" >
      <x-input class="c-color"title="" name="mobile" placeholder="手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
      <x-input class="c-color" title="" type="password" placeholder="密码" v-model="password" :min="6" :max="16" required></x-input>
      <!--<x-input class="c-color" title="" type="text" placeholder="验证码" v-model="code" required>
        <x-button   slot="right" type="primary" mini :disabled="getCode.disabled" @click.native="handleGetCode" style="border-radius: 1rem;color:#fff;background-color:transparent;border:1px solid #fff;">{{getCode.txt}}</x-button>
      </x-input>-->
    </group>
    <div class="resetSet">
      <router-link to="/revise"style="cursor: pointer;text-decoration: none;color: #fff;font-size: 13px; " >忘记密码？</router-link>
    </div>
    <box gap="10px 25px" style="margin-top:6rem;" class="boxUser">
      <x-button class="loginUser" style="font-size: 15px;" type="primary" @click.native="loginUser">登&nbsp;陆</x-button>
    </box>
    <div class="registTo resetSet">
      <router-link to="/regist"style="cursor: pointer;text-decoration: none;color: #fff;font-size: 13px; " >注册账号</router-link>
    </div>
  </div>
</template>

<script>
  /*  import { XInput, Box, Group, XButton } from 'vux';*/
  //import Img from './assets/register.jpg';
  export default {
    name: 'login',
    data() {
      return {
        //img:Img,
        mobile: '', //手机号
        code: '', //验证码
        password: '', //密码
        /* passwordC: '', //确认密码*/
        getCode: {
          txt: '获取验证码',
          disabled: false,
        }
      }
    },
    methods: {
     /* handleGetCode() {
        if(this.mobile) {
          this.getCode.disabled = true;
          this.getCode.txt = '获取中...';
          let seconds = 60;
          let self = this;
          let time = setInterval(function() {
            --seconds;
            self.getCode.txt = seconds + 's';
            if(seconds <= 0) {
              clearInterval(time);
              self.getCode.disabled = false;
              self.getCode.txt = '获取验证码';
            }
          }, 1000)
        } else {
          this.$vux.toast.text('请先填写手机号');
        }

      },*/
      loginUser() {
        /*if(!this.mobile || !this.password) {
          this.$vux.toast.text('您有未填项，不能登录')
        }else if(this.mobile==="13939666068"&&this.password==="123456"){
          this.$router.push({path:'/home'});
        }*/
        this.$router.push({path:'/home'});
      }
    },
    created() {
      window.document.title = '登陆';
    },
    /*components: {
      XInput,
      XButton,
      Group,
      Box
    }*/
  }
</script>
<style>

  #login{
    background: url("../assets/login.jpg")  no-repeat;
    background-size: 100%;

    height:100%;
  }
  .header{
    color:#fff;
    font-size: 0.8rem;
    padding-top:1.2rem ;
  }
  .color{
    text-align: center;
  }
  .color .c-color{
    color: #fff;
    margin-top: 1rem;
    border:none;
  }
  /*.color .weui-input{
    padding-left: 1rem;
  }*/
  .color .weui-cell__ft{
    position: absolute;
    right: 0;
  }
  .color .weui-cells{
    background-color:transparent;
    width: 14rem;
    text-align: center;
    margin-left: 2rem;
  }
  .color .weui-cell{
    border-top: 0 solid #D9D9D9;
    border-bottom:1px solid #fff;
    padding: 10px 0;
  }
  .color .weui-cells:before {
    border:none;
  }
  .color .weui-cells:after {
    border:none;

  }
  .color  .weui-cell:before {
    border:none;
  }
  .color .weui-cell:before{
    border:none;
  }
  .color .weui-cell:before {

    border:none;
  }
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#fff;font-size: 12px;}
  input:-moz-placeholder,textarea:-moz-placeholder{color:#fff;font-size: 12px;}
  .boxUser .loginUser{
    border-radius: 2rem;
    color:#000000;
    background: #fff;
    background: url("../assets/right.png") 10rem center no-repeat #fff;
    background-size: 0.8rem;
  }
  input::-ms-input-placeholder{text-align: center;}
  input::-webkit-input-placeholder{text-align: center;}

  .resetSet{
    text-align: right;
    padding-top:0.6rem;
    padding-right:2rem;
  }
</style>
