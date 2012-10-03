requirejs.config({
  baseUrl: 'js',
  urlArgs: "time=" + (new Date()).getTime()
});

require(['globals', 'navigation', 'router'], function(Globals, Navigation) {

});
console.log("Main");
