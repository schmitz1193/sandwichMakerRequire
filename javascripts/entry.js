	requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min"
  }
});

require(
  ["jquery", "apps"], 
  function($, app) {

  }
);

