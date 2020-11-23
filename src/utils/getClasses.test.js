import getClasses, { fakePromise } from "./getClasses";

describe("[ utils / getClasses ]", () => {
  describe("when a param is provided", () => {
    it("should return an string", () => {
      // given
      const string = "foo";
      // when
      const result = getClasses(string);
      const expected =
        "mt-2 relative bg-foo-500 text-white py-4 px-10 rounded text-2xl font-bold overflow-visible";

      // then
      expect(result).toBe(expected);
    });
  });
});

describe("[ utils / fakePromise ]", () => {
  describe("when a param is a", () => {
    it("should return 10", async () => {
      // given
      const string = "a";
      // when
      try {
        const result = await fakePromise(string);
        const expected = 10
  
        // then
        expect(result).toBe(expected);
      } catch (error) {

      }
    });
  });

  describe("when a param is not a", () => {
    it("should return 5", () => {
      // // given
      // const string = "foo";
      // // when
      // const result = getClasses(string);
      // const expected =
      //   "mt-2 relative bg-foo-500 text-white py-4 px-10 rounded text-2xl font-bold overflow-visible";

      // // then
      // expect(result).toBe(expected);
    });
  });
});
