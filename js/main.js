// var firstItem= etsy.results[0];
var templateString = $('#itemTemplate').text()      // set var templateString to the text inside of $('#itemTemplate')-- #itemTemplate is the template on HTML page
var templateFunction = _.template(templateString);  //make function of templateString with _.template
_.each(etsy.results, function(item){    //for each 'results' in etsy object, do this to (item):
  var itemHTML= templateFunction(item);  //create var itemHTML which equals the return of templateFunction(item);
  $('.wrapper').append(itemHTML);     // appending itemHTML to the end of $('.wrapper')
})
// var img= _.pluck(etsy.results.Images, 'url_75x75');

