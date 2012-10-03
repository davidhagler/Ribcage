<!DOCTYPE html>
<html>
<head>
  <title>Testing grounds - look out for pitfalls!</title>
  <link rel="stylesheet" href="index.css" type="text/css">

  <script src="js/vendor/jquery-1.8.0.js"></script>
  <script src="js/vendor/underscore.js"></script>
  <script src="js/vendor/backbone.js"></script>
  <script data-main="js/main" src="js/vendor/require.js"></script>
  <style>
  textarea,
  pre {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
  }
  
  .autoresize {
    position: relative;
    border: 1px solid #888;
    background: #fff;
  }

  .autoresize > textarea,
  .autoresize > pre {
    margin: 0;
    outline: 0;
    border: 0;

    padding: 5px;
    background: transparent;
    font: 400 13px/16px helvetica, arial, sans-serif;
    white-space: pre-wrap;
    word-wrap: break-word;
  }  
  .autoresize > textarea {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
            box-sizing: border-box;
    width: 100%;
    height: 100px;
    resize: none; 
  }  
  
  .autoresize.active > textarea {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  
  .autoresize > pre {
    display: none;
  }

  .autoresize.active > pre {
    display: block;
    visibility: hidden;
  }
</style>
</head>
<body>
</body>
</html>
