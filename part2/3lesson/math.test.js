import {add} from './math.js';
var result=add(3,7);
// var expected=10;
// if(result!==10){
//   throw Error(`3+7应该等于${expected} 结果是${result}`)
// }
test("测试加法3+7",()=>{
  expect(result).toBe(10);
})
// 单元测试 集成测试