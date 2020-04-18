import axios from 'axios';
// 回调异步函数测试
/* export const fetchData=(fn)=>{
  //异步代码测试
    // axios.get("http://www.dell-lee.com/react/api/demo.json").then((res)=>{
    //   fn(res.data)
    // })
    axios.get("http://www.dell-lee.com/react/api/demo1.json").then((res)=>{
      fn(res.data)
    })
} */
//返回promise  测试
export const fetchData=()=>{
   return axios.get("http://www.dell-lee.com/react/api/demo.json")
}