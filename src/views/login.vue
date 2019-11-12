<style >
    .index {
      display: flex;
      height: 100%;
      width: 100%;
      position: absolute;
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
</style>
<template>
    <div class="index">
        <div id="index_pc_bj">
          <div class="wrap_conter">
            <p>干部年度测评系统</p>
            <div class="wrap_form">
              <Form ref="formLogin" :model="formLogin" :rules="ruleLogin" >
                <FormItem prop="voteCode" >
                    <Input v-model="formLogin.voteCode" size="large" type="text" placeholder="请输入您的投票码" >
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
              if (value.length != 8) {
                  callback(new Error('投票码为8位数字'));
              }else{
                //请求检验投票码
                request({
                  method: 'post',
                  url: 'checkLogin',
                  params: {
                    "voteCode":this.formLogin.voteCode
                  }
                }).then(res => {
                  console.log(res);
                  if (res.code == 1) {
                    callback(new Error(res.msg));
                  }else if(res.code == 2){
                    this.formLogin.voteCode = res.msg
                    callback()
                  }
                })
              }
            };
            return {
                formLogin:{
                    voteCode: ''
                },
                ruleLogin: {
                  voteCode: [
                      { required: true, message: '请输入您的投票码', trigger: 'blur' },
                      { pattern: /^[0-9]*$/, message: '投票码为8位数字', trigger: 'blur' },
                      { validator: validateCode, trigger: 'blur'}
                  ]
                }
            }
        },
        methods: {
          login(formLogin){
            this.$refs[formLogin].validate((valid) => {
              if(valid){
                this.$store.dispatch('userLogin',{"voteCode":this.formLogin.voteCode,"router":this.$router});
              }
            })
          }
        }
    };
</script>
