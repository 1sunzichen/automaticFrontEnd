import Counter from './Counter';
describe('测试counter相关的代码',()=>{

// const counter=new Counter()
let counter=null;
/* beforeAll(()=>{
  counter=new Counter()
}) */
// 每个测试之前执行：都是独立的 类对象
beforeEach(()=>{

   counter=new Counter()
})
// 每个测试用例之后执行
afterEach(()=>{

  
})
/* afterAll(()=>{
  counter=null;
}) */
/* test('add',()=>{
   counter.add()
  expect(counter.number).toBe(1);
})
test('minus',()=>{
  counter.minus()
  expect(counter.number).toBe(-1);
})
test('add',()=>{
   counter.add2()
  expect(counter.number).toBe(2);
})
test('minus',()=>{
  counter.minus2()
  expect(counter.number).toBe(-2);
}) */
//分组 
describe('测试增加相关的代码',()=>{
 test('add',()=>{
   counter.add()
  expect(counter.number).toBe(1);
})

test('add2',()=>{
   counter.add2()
  expect(counter.number).toBe(2);
})
})
describe('测试减少相关的代码',()=>{
 test('minus',()=>{
   counter.minus()
  expect(counter.number).toBe(-1);
})

test.only('minus2',()=>{
   counter.minus2()
  expect(counter.number).toBe(-2);
})
})
})