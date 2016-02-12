$(document).ready(function(){

  var maxChars = 140;
  var inputBox = $('#textbox');
  var count = $('#count');

  inputBox.on('keyup', checkAndUpdateCount);

  checkAndUpdateCount();

  function checkAndUpdateCount(event){
    var currentText = inputBox.val();
    var remaining = maxChars - currentText.length;
    count.text(remaining);
    if (remaining <= 20) {
      count.addClass('warn');
    }
    if (currentText.length > maxChars) {
      inputBox.val(currentText.substr(0,140));
    }
    // count.text("update") will update count box
    // count.addClass('warn') will add a color warning via css.
    // we need to truncate text if needed and update inputBox.val(truncated_string);

  }

});
