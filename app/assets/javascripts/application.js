// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require jquery-ui
//= require cocoon
//= require popper
//= require bootstrap-sprockets
//= require lib/typed
//= require typed-implementation
//= require html.sortable
//= require turbolinks
//= require_tree .


window.addEventListener("onload", function () {
	var background3 = function() {
  
  
	  var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		mouse = {
			x: undefined,
			y: undefined
		},
		dragging = false,
		dots = [],
		iterations = 40,
		distance = 2

	window.onresize = function() {
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
	}

	window.onresize()

	canvas.addEventListener('mousedown', function(e) {
		dragging = true
		mouse.x = e.clientX
		mouse.y = e.clientY
		addDot()
	})

	canvas.addEventListener('mouseup', function(e) {
		dragging = false
	})

	canvas.addEventListener('mousemove', function(e) {
		if (dragging) {
			mouse.x = e.clientX
			mouse.y = e.clientY
			addDot()
		}
	})

	function addDot() {
		dots.push({
			x: mouse.x,
			y: mouse.y,
			color: 'rgba(0,0,0,0.'+rand(1,9,true)+')'
		})
	}

	function draw() {
		for (var i = 0; i < dots.length; i++) {
			var dot = dots[i]
			var c = 0
		
			iterate(c, dot)
		}
	}

	function iterate(c, dot) {
		var dir = rand(0,4,true)
	
		switch(dir) {
			case 0:
				dot.x += distance
				break
			case 1:
				dot.x -= distance
				break
			case 2:
				dot.y += distance
				break
			case 3:
				dot.y -= distance
				break
		}
	
		ctx.fillStyle = dot.color
		ctx.fillRect(dot.x, dot.y, 3, 3)
	
		if(c < iterations) {
			iterate(c+=1, dot, distance)
		}
	}

	function rand(min, max, integer) {
		var n = (Math.random() * (max - min)) + min
		return integer ? parseInt(n) : n
	}

	setInterval(function() {
		draw()
	}, 500/60)



	// sample dots
	mouse.x = canvas.width/2
	mouse.y = canvas.height/2

	for(var i=0; i<100;i++) {
		addDot()	
	}

	for(var i=0; i<100; i++) {
		mouse.x = rand(0+(i*10), canvas.width-(i*10), true)
		mouse.y = rand(0+(i*10), canvas.height-(i*10), true)
		addDot()
	}






	}
	var init = function() {
  
  
  
	  var isMobile = navigator.userAgent &&
	    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
	  var isSmall = window.innerWidth < 1000;

	  var ps = new ParticleSlider({
	    ptlGap: isMobile || isSmall ? 5 : 5,
	    ptlSize: isMobile || isSmall ? 2 : 2,
	    width: 1e9,
	    height: 1e9,
   
	  });

	  (window.addEventListener ?
	    window.addEventListener('click', function() {
	      ps.init(true)
	    }, false) :
	    window.onclick = function() {
	      ps.init(true)
	    });
	}

	var initParticleSlider = function() { 
  
	  var psScript = document.createElement('script');
	  (psScript.addEventListener ?
	    psScript.addEventListener('load', init, false) :
	    psScript.onload = init);
	  psScript.src = 'http://particleslider.com/js/particleslider/current/particleslider.js';
	  psScript.setAttribute('type', 'text/javascript');
	  document.body.appendChild(psScript);
	  background3();
	}

	(window.addEventListener ?
	  window.addEventListener('load', initParticleSlider, false) :
	  window.onload = initParticleSlider);
 });
 