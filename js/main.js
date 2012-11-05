$(document).ready(function(){
  // Examples of how to assign the ColorBox event to elements
  $("ul.image-gallery li a").colorbox({
    rel:'group1',
    maxWidth: "98%",
    maxHeight: "98%",
  });

  if ($("#news").length != 0) {
    var news = Tempo.prepare('news').notify(function(event) {
      if (event.type === TempoEvent.Types.RENDER_STARTING || event.type === TempoEvent.Types.RENDER_COMPLETE) {
        $('ol').toggleClass('loading');
      }
    });
    news.starting();
     $.getJSON("http://www.athenryac.com/json/news/4?callback=?", function(data) {
      news.render(data);
    });
  }
});
