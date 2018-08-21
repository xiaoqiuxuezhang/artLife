<template>
  <div class="regist" id="regist">
    <header class="header">
      <div class="x-close">
        <router-link to="/Login"style="cursor: pointer;" >╳</router-link>
      </div>
      <h2>找回密码</h2>
    </header>
    <group class="color" >
      <x-input class="c-color"title="" name="mobile" placeholder="手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
      <x-input class="c-color" title="" type="password" placeholder="密码" v-model="password" :min="6" :max="16" required></x-input>
      <x-input title=""class="c-color" type="password" placeholder="确认密码" v-model="passwordC" :min="6" :max="16" required></x-input>
      <x-input class="c-color" title="" type="text" placeholder="验证码" v-model="code" required>
        <x-button   slot="right" type="primary" mini :disabled="getCode.disabled" @click.native="handleGetCode" style="border-radius: 1rem;color:#fff;background-color:transparent;border:1px solid #fff;font-size: 10px;">{{getCode.txt}}</x-button>
      </x-input>
    </group>
    <box gap="10px 25px" style="margin-top:6rem;" class="boxUser">
      <x-button class="RegisterUser" style="font-size: 15px;" type="primary" @click.native="handleRevise">确认找回</x-button>
    </box>
  </div>
</template>

<script>
  export default {
    name: 'revise',
    data() {
      return {
        //img:Img,
        mobile: '', //手机号
        code: '', //验证码
        password: '', //密码
        passwordC: '', //确认密码
        getCode: {
          txt: '获取验证码',
          disabled: false,
        }
      }
    },
    methods: {
      handleGetCode() {
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

      },
      handleRevise() {
        /*this.$http.get(`http://192.168.1.13::8081//User/registered?userName=${this.mobile}&userPassword=${this.password}`).then((data)=>{
          console.log(data);
        });*/
        this.$router.push({path:'/login'});
        if(!this.mobile || !this.code || !this.password || !this.passwordC) {
          this.$vux.toast.text('您有未填项，不能修改')
        } else if(this.password != this.passwordC) {
          this.$vux.toast.text('两次输入的密码不一致')
        } else {
          this.$vux.toast.text('修改成功')
        }
      }
    },
    created() {
      window.document.title = '修改密码';
    },
  }
</script>
<style>

  #regist{
    background: url("../assets/register.jpg")  no-repeat;
    background-size: 100%;

    height:100%;
  }
  .header{
    color:#fff;
    font-size: 0.8rem;
    padding-top:1.2rem ;
  }
  .x-close{
    padding-left:1rem;
    text-align: left;
  }
  .x-close a{
    font-size: 1.2rem;
    color:#fff;
    text-decoration: none;
  }
  .color{
    text-align: center;
  }
  .color .c-color{
    color: #fff;
    margin-top: 1rem;
    border:none;
  }
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
  .boxUser .RegisterUser{
    border-radius: 2rem;
    color:#000000;
    background: #fff;
    background: url("../assets/right.png") 10rem center no-repeat #fff;
    background-size: 0.8rem;
  }
</style>
