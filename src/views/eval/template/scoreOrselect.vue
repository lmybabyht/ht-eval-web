<template>
  <div class="score" ref="evalInfo">
    <Divider orientation="left"><span class="legend">被考核对象</span></Divider>
    <Table :max-height="tabMaxH" size="large"  border :columns="column" :data="projVoteTargetList">
      <template slot-scope="{ row }" slot="status">
        <Button :type="row.finished?'success':'error'" size="large" style="margin-right: 5px" >{{row.finished?'已考核':'未考核'}}</Button>
      </template>
      <template slot-scope="{ row }" slot="doEval">
        <Button type="info" size="large" style="margin-right: 5px;" @click="doEval(row)">评&nbsp;&nbsp;&nbsp;&nbsp;价</Button>
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
      voteTargetType:'', //被考评人选择类型(1-班子,2-单位,3-个人)
      projVoteTargetList:[],
      column: [
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
    doEval(obj) {
      console.log(obj);
      let url = "/MainPage";
      if(this.$route.query.tmplType == 1) { //分值
        url += "/tempScore" ; 
      }else { //选项
        url += "/tempSelect" ; 
      }
      this.$router.push({
        path: url,
        query: {
          projectId: this.$route.query.projectId,
          projVoteTargetId:obj.id
        }
      });
    },
    getTableHeight() {
      let evalInfoH = this.$refs.evalInfo.offsetHeight;
      this.tabMaxH = evalInfoH * 0.8;
    },
    getTargetList(){
      getProjVoteTargetList(this.$route.query.projectId).then(res =>{
        if(res != undefined){
          this.projVoteTargetList = res.body;
          this.voteTargetType = this.projVoteTargetList[0].voteTargetType ;
        }
      })
    },
    getColumnData() {
      if(this.voteTargetType == 3) {
        this.column.unshift(
          {
            title: '姓名',
            width:'300',
            key: 'voteTargetName',
            align:'center'
          },
          {
            title: '职务',
            key: 'voteTargetTitle',
            align:'center'
          }
        )
      }else{
        this.column.unshift(
          {
            title: '名称',
            width:'300',
            key: 'voteTargetName',
            align:'center'
          }
        )
      }
    }
  },
  mounted() {
    this.getTableHeight();
  },
  created(){
    this.getTargetList();
    this.getColumnData();
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
  .ivu-btn-large {
    height: 38px;
    border-radius: 8px;
  }
  .ivu-table th {
    background-color: #CFE9FF;
    border-color: #d7d0d0 !important;
  }
</style>
