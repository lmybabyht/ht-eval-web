<template>
  <div class="header">
    <div class="title"><h3>年度干部测评在线考核系统</h3></div>
    <div class="header-info">
      <ul>
        <li>单位</li>
        <li>单位</li>
      </ul>
    </div>
    
    <!-- <h2>{{this.$store.state.currentUser.voteCode}}</h2>
    <button @click="loginOut">退出</button> -->
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
    display: flex;
    background-color: #3C8DBC;
    height: 60px;
    flex-direction: row;
    justify-content:center;
  }
  .header .title{
    align-items:center;
    justify-content:center;
  }
  .header h3{
     color: #FFF;
     font-size: 24px;
     font-weight: 400;
     height: 100%;
    
  }
  .header-info{
    flex: 1;
  }
  /* .header-info ul {
    display: flex;
    flex-wrap: nowrap;
    width:60%;
    margin:0px auto;
  }*/
  .header-info ul li{
    list-style:none;
  } 
  

</style>
