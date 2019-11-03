import axios from 'axios'
export function request(config){
  const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
  })
  //axios 请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  });
  //axios 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {

  })
  
  return instance(config)
}