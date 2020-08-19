import { generateConfig, generateAnotherConfig } from "./demo";
test("测试 generateConfig函数", () => {
  // expect(generateConfig()).toEqual({
  //     server:"http://localhost",
  //     port:8080,
  //     domain:'localhost'
  // })
  //快照 这功能nb
  expect(generateConfig()).toMatchSnapshot();
});
// test("测试 generateAnotherConfig函数",()=>{

//     //快照 这功能nb
//     expect(generateAnotherConfig()).toMatchSnapshot({
//         time:expect.any(Date)   //变化的数据
//     })
// })
test("测试 generateAnotherConfig函数", () => {
  //快照 这功能nb  prettier 
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "domain": "localhost2xx",
      "port": 8080,
      "server": "http://localhostss",
      "time": Any<Date>,
    }
  `
  );
});
