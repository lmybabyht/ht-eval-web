import {request} from 'network/request'

export function getProjVoteTargetList(voteCode,projectId){
  return request({
    url: 'getProjVoteTarget' ,
    method: 'post',
    params: {
      voteCode: voteCode,
      projectId: projectId
    }
  })
}
