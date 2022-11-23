const { fetchData, fetchDataPromis, fetchDataAscync } = require("./fetchData");


// test casese for callBack 
test("fetchData testCase", (done) => {
  function callbackFunction(data) {
    try {
      expect(data).toBe("Hi Zeeshan");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callbackFunction);
});


//test cases for Promises
test("promis testcase", () => {
  fetchDataPromis().then((data) => {
    expect(data).toBe("Hi Tanveer");
  });
});


//test cases for async await function
test("testing async function", async () => {
  const data = await fetchDataAscync();
  expect(data).toBe("done");
});
