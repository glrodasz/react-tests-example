const { default: getClasses } = require("./getClasses");

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
