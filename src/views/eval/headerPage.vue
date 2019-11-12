<template>
  <div class="header">
      <div class="title">年度干部测评在线考核系统</div>
      <div class="navbar">
        <ul class="nav">
          <li :title="this.$store.state.currentUser.voteCode"><b>投票码：</b>{{this.$store.state.currentUser.voteCode}}</li>
          <li style="width: 12%;"><b>类型：</b><span>{{this.$store.state.currentUser.voteType}}</span></li>
          <li :title="this.$store.state.currentUser.unitName"><b>单位：</b>{{this.$store.state.currentUser.unitName}}</li>
          <li class="back_span" @click="loginOut"><i class="fa fa-sign-out"></i> <b>退出系统</b></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    loginOut(){
      this.$store.dispatch('loginOUt',{"router":this.$router});
    }
  }
}
</script>
<style>
  .header{
    background: #3C8DBC;
    color: #ffffff;
    height: 60px;
    border: 1px solid  #3C8DBC;
    border-bottom: 5px solid #f8f8f9;
  }
  .header .title{
    width: 99%;
    margin-top:0.5%; 
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    position:absolute;
  }
  .navbar{
    width: 30%;
    position:relative;
    float: right;
    margin-top: 1.5%;
  }
  .nav ul {
    right: 0;
    list-style: none;
  }
  .nav li {
    display: block;
    float:left;
    width: 24%;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis; 
    overflow: hidden;  
  }
  .back_span{
    cursor: pointer;
  }
</style>
