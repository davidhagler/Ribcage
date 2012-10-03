/* required by router to create dynamic routes for all navigable views */
define(['views/index_view'], function (IndexView) {
  return {
    index: IndexView,
  }
});
