
import axios from 'axios';
import {Toast} from 'antd-mobile';

//拦截请求
axios.interceptors.request.use(function(config){
  Toast.loading('Loading...');
  return config
})


//拦截响应
axios.interceptors.response.use(function(config){
  Toast.hide()
  return config
})