const fs = require("fs");

describe("Template Literal Check", () => {
  test("uses the required template literal", () => {
    const code = fs.readFileSync("index.js", "utf8");

    expect(code).toMatch(
      /return\s*`Hello \$\{name\}, Your age is \$\{age\}\.`;/
    );
  });
});
