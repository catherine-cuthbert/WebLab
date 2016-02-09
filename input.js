$(document).ready(function(){

  var maxChars = 140;
  var inputBox = $('#textbox');
  var count = $('#count');

  inputBox.on('keyup', checkAndUpdateCount);

  checkAndUpdateCount();

  function checkAndUpdateCount(event){
    var currentText = inputBox.val();
    var remaining = maxChars - currentText.length;

    // count.text("update") will update count box
    // count.addClass('warn') will add a color warning via css.
    // we need to truncate text if needed and update inputBox.val(truncated_string);

  }

});
