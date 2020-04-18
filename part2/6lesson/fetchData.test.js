import {fetchData} from './fetchData';
/* //回调函数
test('fetchData返回结果为{success:true}',(done)=>{
  fetchData((data)=>{
    expect(data).toEqual({
      success:true
    })
    done();
  })
}) */
// 返回promise 404
/* test('fetchData返回结果为404',()=>{
  //下面语句必须执行
  expect.assertions(1);
  return fetchData().catch((e)=>{
    expect(e.toString().indexOf('404')>-1).toBe(true)
  })
}) */
//匹配 对象
test('fetchData返回结果为success',()=>{
  //下面语句必须执行
 
  return expect(fetchData()).resolves.toMatchObject({
    data:{
      success:true
    }
  })
})
// 是否没有请求到 404
/* test('fetchData返回结果为404 toThrow',()=>{
  return expect(fetchData()).rejects.toThrow();
}) */
