import {runCallback} from './Counter';
test('测试callback',()=>{
  // jest mock函数
  const func=jest.fn((n)=>{
    return '456'+n
  });
  func.mockReturnValueOnce("ekko")
  runCallback(func);
  runCallback(func);
  runCallback(func);
  expect(func).toBeCalled()
  console.log(func.mock,"mock");
  
})
