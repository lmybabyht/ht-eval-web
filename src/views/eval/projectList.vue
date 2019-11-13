<template>
  <div class="content_wrap">
    <div class="project-content">
      <ul class="sidebar-menu">
        <li>
          <a href="javascript:;">
              <i class="fa fa-th-list fa-lg"></i><span style="font-size: 18px;">&nbsp;考核项目列表</span>
          </a>
          <ul class="project-ul">
            <li v-for="(project,index) in projectList" :key="index" :class="{bgColor:project.bgColor}">
              <a href="javascript:void(0);">
                  <p style="word-wrap:break-word;white-space: pre-line;margin: 5px 0 5px;"
                      @click="openContent(index)">
                      <i class="fa fa-file fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span :class="project.finishedVoteTargetNum==project.voteTargetNum?'count_number_g':'count_number_r'">{{project.projName}}&nbsp;&nbsp;<span v-if="project.projTemplate.tmplType != 3">({{project.finishedVoteTargetNum}}/{{project.voteTargetNum}})</span></span>
                  </p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="btn-info">
      <Button :size="buttonSize" type="info">完成考评</Button>
    </div>
  </div>
</template>
<script>
import {request} from 'network/request'
export default {
  data(){
    return {
      buttonSize: 'large',
      projectList: ''
    }
  },
  created() {
    this.getProjectList();
  },
  methods: {
    getProjectList() {
      request({
        method: 'post',
        url: 'getProjectList',
        params: {
          "voteCode":this.$store.state.currentUser.voteCode
        }
      }).then(res => {
        if(res.code == 0 ) {
          this.projectList = res.body;
          this.projectList.forEach(item => {
              this.$set(item,'bgColor',false);
          });
        }
      })
    },
    openContent(index) {
      this.projectList.forEach(item => {
        item.bgColor = false ;
      });
      this.projectList[index].bgColor = true ;

      const project = this.projectList[index];
      let url = "/MainPage";
      if(project.projTemplate.tmplType == 1 || project.projTemplate.tmplType == 2){//分值 //选项
        url += "/scoreOrselect" ; 
      }else{
        url += "/recommend" ; 
      }
      this.$router.push({
        path: url,
        query: {
          projectId: project.id,
          tmplType: project.projTemplate.tmplType
        }
      });
    }
  }
}
</script>
<style>
  .content_wrap {
    height: 100%;
  }
  .project-content{
    height: 90%;
  }
  .sidebar-menu {
    white-space: nowrap;
    overflow: hidden;
  }
  .sidebar-menu>li {
    position: relative;
    margin: 0;
    padding: 0;
  }
  .sidebar-menu>li>a {
    padding: 12px 5px 12px 15px;
    display: block;
    color: #3c8dbc;
  }
  .project-ul {
    list-style: none;
    padding: 0;
    margin: 0;
    padding-left: 5px;
  }
  .project-ul>li {
    border: 1px solid white;
    margin-left: 10px;
  }
  .bgColor {
    background-color: #ececec;
  }
  .project-ul>li>a{
    padding: 5px 5px 5px 15px;
    display: block;
    font-size: 14px;
    color: #3c8dbc;
  }
  .project-ul>li>a>p>span{
    font-size: 16px;
    margin-left: 5px;
  }
  .count_number_g {
    color: #00a157;
  }

  .count_number_r {
    color: #D9534F;
  }
  .btn-info {
    text-align: center;
  }
  .btn-info button {
    width: 40%;
  }
</style>
