<style scoped>
#welcome {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
} 
h1 {  
  margin-top: 200px;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: rgb(91, 192, 222);
}
</style>
<template>
    <div id="welcome">
       <h1>欢迎{{this.$store.state.currentUser.unitName}}使用在线考评系统</h1>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
