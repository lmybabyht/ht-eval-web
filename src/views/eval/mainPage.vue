<template>
  <div>
    <div ref="topInfo">
        <header-page />
    </div>
    <div class="main" :style="{height: curHeight+ 'px'}">
        <Split v-model="split">
            <div slot="left" class="left-div">
                <project-list />
            </div>
            <div slot="right" class="right-div">
              <router-view ></router-view>
            </div>
        </Split>
    </div>
  </div>
</template>

<script>
import headerPage from 'views/eval/headerPage'
import projectList from 'views/eval/projectList'
export default {
  components: {
    "header-page": headerPage,
    "project-list": projectList
  },
  data() {
   return {
     split: 0.2,
     curHeight:0
   }
  },
  mounted() {
    this.goWelcome();
    this.getHeight();
  },
  methods: {
    loginOut() {
       this.$store.dispatch('loginOUt',{"router":this.$router});
    },
    goWelcome() {
      this.$router.replace('/MainPage/welcome')
    },
    getHeight() { 
        let h = document.documentElement.clientHeight || document.body.clientHeight;
        let topH = this.$refs.topInfo.offsetHeight;
        this.curHeight =h - topH -10; //减去页面上固定高度height
    }
  }
}
</script>
<style>
  .main{
    border: 1px solid #dcdee2;
  }
  .left-div{
    height: 100%;
  }
  .right-div{
    height: 100%;
  }
 
</style>
