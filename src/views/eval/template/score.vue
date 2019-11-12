<template>
  <div class="score" ref="evalInfo">
    <Divider orientation="left"><span class="legend">被考核对象</span></Divider>
    <Table :max-height="tabMaxH" size="large"  border :columns="column" :data="projVoteTargetList">
      <template slot-scope="{ row, index }" slot="status">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">未考核</Button>
      </template>
      <template slot-scope="{ row, index }" slot="doEval">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">评    价</Button>
      </template>
    </Table>
  </div>
</template>

<script>
import {getProjVoteTargetList} from 'network/eval'
export default {
  data(){
    return {
      tabMaxH:300,
      buttonSize: 'large',
      projectId: this.$route.query.projectId,
      voteTargetType:'',
      projVoteTargetList:[],
      column: [
        {
            title: '名称',
            key: 'voteTargetName',
            width:'200',
            align:'center'

        },
        {
            title: '单位',
            key: 'voteTargetUnitName',
            align:'center'
        },
        {
            title: '状态',
            slot: 'status',
            width:'200',
            align:'center'
        },
        {
            title: '评价',
            slot: 'doEval',
            width:'200',
            align:'center'
        }
      ]
    }  
  },
  methods: {
    getTableHeight() {
      let evalInfoH = this.$refs.evalInfo.offsetHeight;
      this.tabMaxH = evalInfoH * 0.8;
    },
    getTargetList(){
      getProjVoteTargetList(this.$store.state.currentUser.voteCode ,this.$route.query.projectId).then(res =>{
        console.log(res)
        if(res != undefined){
          this.projVoteTargetList = res.body;
        }
      });
    }
  },
  mounted() {
    this.getTableHeight();
  },
  created(){
    this.getTargetList()
  },
  watch: {
    '$route': function () {
     this.getTargetList()
    }
  }
}
</script>

<style>
  .score{
    height: 100%;
    padding: 0 20px;
  }
  .legend{
    font-size: 20px;
    font-weight: 300;
  }
</style>
