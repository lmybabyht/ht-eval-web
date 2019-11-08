<template>
  <div>
    <div class="header">
        <div class="ads">
          
        </div>
        <div class="title">
            <h3>年度干部测评在线考核系统</h3>
        </div>    
        <div class="header-btn" >
            <ul>
              <li>投票码：{{this.$store.state.currentUser.voteCode}}</li>
              <li style="width:60px">类型：C</li>
              <li title="公司领导公司领导公司">单位：公司领导公司领导公司公司领导公司领导</li>
              <li @click="loginOut" style="cursor: pointer;margin-left:80px;"><Icon type="md-log-out" />退出</li>
            </ul>
        </div>
    </div>
    <div class="demo-split">
        <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                Left Pane
            </div>
            <div slot="right" class="demo-split-pane">
                Right Pane
            </div>
        </Split>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //"header-Page": headerPage
  },
  data() {
   return {
     split1: 0.2
   }
  },
  methods: {
    loginOut(){
       this.$store.dispatch('loginOUt',{"router":this.$router});
    }
  }
  
}
</script>
<style>
  .header{
    display: flex;
    height: 60px;
    background: #3C8DBC;
    color: #ffffff;
    border-bottom: 5px solid #f8f8f9;
  }
  .header .ads{
    flex:3
  }
  .header .title{
    display: flex;
    flex: 2;
    align-items:center;
    justify-content:center;
  }
  .header .title h3{
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
  }
  .header-btn{
    flex: 3
  }
  .header-btn ul{
    display: flex;
    flex-wrap: wrap-reverse;
    list-style: none;
    align-items:center;
    margin-top: 25px;
  }
  .header-btn ul li{
    width: 150px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis; 
    overflow: hidden;  
  }
  .demo-split{
      height: 600px;
      border: 1px solid #dcdee2;
  }
  .demo-split-pane{
      padding: 20px;
  }
</style>
