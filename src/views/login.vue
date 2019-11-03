<style >
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }
    .index .ivu-row-flex {
        height: 100%;
    }
    #index_pc_bj{
      width:100%;
      height:100%;
      background-size:cover;
      overflow: hidden;
      background-image: url(~assets/img/login.jpg);
      background-position:center center;
      box-shadow: 0 0px 3px rgba(0,0,0,.5);
      text-align: center;
    }
    /*具体内容*/
    .wrap_conter p{
      position:relative;
      width:400px;
      color: #fff;
      font: 34px/100px "";
      font-weight: 600;      
      margin-top: 10%;
      margin-left: 40%;
      text-align:center;
      margin-bottom: 40px;
    }
    .wrap_conter .wrap_form{
      position:relative;
      width:400px;
      margin-left: 40%;
      border-radius:5px;
      text-align:center;
    }
    .pc-hign{height:75px;display: inline-table;}
    .name-password-error{
        padding-bottom: 2px;
        text-align: left;
        line-height: 1;
        color: #ed3f14;
    }
    
</style>
<template>
    <div class="index">
        <div id="index_pc_bj">
          <div class="wrap_conter">
            <p>干部年度测评系统</p>
            <div class="wrap_form">
              <Form ref="formLogin" :model="formLogin" :rules="ruleLogin" >
                <FormItem prop="voteCode" >
                    <Input v-model="formLogin.voteCode" size="large" type="text" placeholder="登录请输入您的投票码" >
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="login('formLogin')" style="font-size: 18px;width: 400px;height: 40px;">登&nbsp;&nbsp;录</Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    import {request} from 'network/request'
    export default {
        data(){
           const validateCode = (rule, value, callback) => {
              let a = 1;
              if (value.length != 8) {
                  callback(new Error('投票码为8位数字'));
              }
              setTimeout(() => {//后台验证投票码
                if (a < 0) {
                      callback(new Error('投票码有误'));
                  } else {
                      callback()
                  }
              },1000)
            };
            return {
                formLogin:{
                    voteCode: ''
                },
                ruleLogin: {
                        voteCode: [
                            { required: true, message: '请输入您的投票码', trigger: 'blur' },
                            { pattern: /^[0-9]*$/, message: '投票码为8位数字11', trigger: 'blur' },
                            { validator: validateCode, trigger: 'blur' }
                        ]
                }
            }
        },
        methods: {
            login(formLogin){
              this.$refs[formLogin].validate((valid) => {
                if(valid){
                  console.log(valid)
                }
              })
              request({
                method: "get",
                url: "/public/banners"
              }).then(res =>{
                console.log('res'+res);
              }).catch(res =>{

              })
                // this.$refs[formLogin].validate((valid) => {
                //     if(valid){
                //         this.$store.dispatch('users/userLogin',{"user_name":this.formLogin.userName,"user_password":this.formLogin.password,"router":this.$router});
                //     }
                // })
            }
        }
    };
</script>
