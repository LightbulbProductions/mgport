$(function(){
	$("h1 .first").typed({
		strings: ['Welcome to my online home!'],
		typespeed: 1,
		callback: function() {
			showThis();
		},
	});

  function showThis(){
  
   $("span.second").typed({
	   strings:["This nifty site will be updated constantly, so come back often!", "Web Development, UX, CSS Hacks... OH MY!", "Code Creating and Breaking(fixing too!)"],
	   backDelay: 2000,
	   typeSpeed: 50,
	   
   });
  }
});  
