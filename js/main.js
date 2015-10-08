
var templateString = $('#itemTemplate').text()      // set var templateString to the text inside of $('#itemTemplate')-- #itemTemplate is the template on HTML page
var templateFunction = _.template(templateString);  //make function of templateString with _.template
_.each(etsy.results, function(item){    //for each 'results' in etsy object, do this to (item):
  var itemHTML= templateFunction(item);  //create var itemHTML which equals the return of templateFunction(item);
  $('.allstar').append(itemHTML); 
      // appending itemHTML to the end of $('.wrapper')
})

// var numberString= $('#numTemplate').text();
var keywords= etsy.params.keywords;
console.log(keywords);
$('.heynow').append('"'+keywords+'"');
var count= etsy.count;
$('.heynow').append('('+ count+' Results'+')');
 