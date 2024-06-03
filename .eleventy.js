module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("code/css");
return {
    dir: {
      input: "code",
      output: "docs",
    }
  };
}