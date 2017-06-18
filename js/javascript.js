	$( document ).ready(function() {
	  	$("#mygallery").justifiedGallery({
    rowHeight : 200,
    lastRow : 'nojustify',
    margins : 10
    
});
	  });


	$( document ).ready(function() {
	$('#mygallery').justifiedGallery({
    lastRow : 'nojustify', 
    rowHeight : 200, 
    rel : 'gallery', //replace with 'gallery1' the rel attribute of each link
    margins : 10
}).on('jg.complete', function () {
    $(this).find('a').colorbox({
        maxWidth : '100%',
        maxHeight : '100%',
        opacity : 0.7,
        transition : 'elastic',
        current : ''
    });
});
});