

test("测试加法10等于10",()=>{
  //toBe ===匹配器 引用 matchers
  //toEqual 匹配内容
  const a={one:1};
  expect(10).toBe(10);
  //expect(a).toBe({one:1});
  expect(a).toEqual({one:2});
})

//定义
test("Deined",()=>{
  //toBe ===匹配器 引用 matchers
  //toEqual
  //object.js ===
  const a=null;
  expect(a).toBeDefined()
})

//布尔
test("toBeFalsy",()=>{
  //toBe ===匹配器 引用 matchers
  //toEqual
  //object.js ===
  const a=0;
  expect(a).toBeFalsy()
})

//数组相关的 大于
test("toBeGreaterThan",()=>{
  //toBe ===匹配器 引用 matchers
  //toEqual
  //object.js ===
  const a=10;
  expect(a).toBeGreaterThan(9)
})

//浮点数
test("toBeCloseTo",()=>{
  expect(0.1+0.2).toBeCloseTo(0.3)
})

//toMatch  
test("toMatch",()=>{
  const str='http://www.baidu.com'
  expect(str).toMatch(/baidu/)
})

//Array,Set
test("toContain",()=>{
  //
  const arr=['dell','lee','imooc'];
  // 设置 dell
  const data=new Set(arr);

  expect(data).toContain("dell");
})


// 异常  

const throwNewErrorFunc=()=>{
  throw new Error('this is a new error')
}
test('toTorow',()=>{
  expect(throwNewErrorFunc).toThrow();
})

//  f 测试失败文件
//  o git修改过的代码
//  