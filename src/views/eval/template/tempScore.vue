<template>
  <div>
    <h1>分值测评{{this.$route.params.projectId}}</h1>
  </div>
</template>
<script>
import {getTemplateScore} from 'network/eval'
export default {
  data() {
    return {

    }
  },
  created() {
    this.getTemplateScoreList();
  },
  mounted() {
    
  },
  methods: {
    getTemplateScoreList() {
      getTemplateScore(this.$route.query.projectId,this.$route.query.projVoteTargetId).then(res =>{
        if(res != undefined) {
          console.log(res)
        }
      })
    }
  },
  watch: {
    '$route': function () {
      this.getTargetList()
    }
  }
}
</script>

<style>

</style>
