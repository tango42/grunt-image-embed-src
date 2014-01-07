/*global module:false*/
module.exports = function(grunt) {
  "use strict";

  grunt.loadTasks("../tasks");

  grunt.initConfig({
    imageEmbed: {

      dist: {
        src: "css/styles.css",
        dest: "css/output.css",

        options: {
          // Specify a max image size. Default is 32768 (32kb is IE8's limit).
          // maxImageSize: 0,

          // Base directory if you use absolute paths in your stylesheet
          // baseDir: "/Users/ehynds/projects/grunt-image-embed/"
          }
      },

      dist2: {
        src: [ 'skin/skin.xml' ],
        dest: 'skin/skin_output.xml',
        options: {
          deleteAfterEncoding : false,
          //typeSrc: search/replace 'src=' declarations instead of default ''url()''
          typeSrc: true
        }
      }
    }
  });

  grunt.registerTask("default", ["imageEmbed"]);
};
