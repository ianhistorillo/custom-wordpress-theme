const browserSync = require('browser-sync').create();

browserSync.init({
  proxy: "http://custom-wordpress.local", // Replace with your local WP URL
  files: [
    "**/*.php",
    "**/*.css",
    "**/*.js"
  ],
  notify: false,
  open: true
});