function spritzify(input, output, wpm) {
  var words_per_minute = wpm;
  var ms_per_word = 60000 / wpm;
  var all_words = input.split(' ');
  var word = '';
  var result = '';

  for (var i = 0; i < all_words.length; i++) {
    setTimeout(function(x) {
      return function() {
        var p = pivot(all_words[x]);
        if (p == '' || p == '\n' || p == ' ')
          return;
        $(output).html(p);
      };
    } (i), ms_per_word * i);
    $(output).html(result);
  }
}

function clearTimeouts() {
  var id = window.setTimeout(function() {}, 0);
  while (id--)
    window.clearTimeout(id);
}

function pivot(word) {
  var start = word.slice(0, word.length / 2);
  var end = word.slice(word.length / 2, word.length);
  var result = "<span class='start'>" + start.slice(0, start.length - 1);
  result = result + "</span><span class='pivot'>";
  result = result + start.slice(start.length - 1, start.length);
  result = result + "</span><span class='end'>";
  result = result + end;
  result = result + "</span>";
  return result;
}
