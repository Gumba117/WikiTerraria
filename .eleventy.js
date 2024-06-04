const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/js");
  eleventyConfig.addPassthroughCopy("code/img");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

return {
  
    dir: {
      
      input: "code",
      output: "docs",
    }
  };
}



/*
module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);
};

const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	return {
		pathPrefix: "/WikiTerraria/",
	};
};
*/