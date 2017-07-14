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
//= require lib/baffle
//= require typed-implementation
//= require html.sortable
//= require baffling-home
//= require about
//= require turbolinks
//= require_tree .

	var BatsBackground = {
	  batHeight: 44,
	  batWidth: 50,
	  bats: [],
	  batImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/343075/bat.png',
	  maxBats: 10,
	  minScale: 0.4,
	  draw: function() {
	    this.setCanvasSize();
	    this.ctx.clearRect(0, 0, this.w, this.h);
	    for (var i = 0; i < this.bats.length; i++) {
	      var bat = this.bats[i];
	      bat.image = new Image();
	      bat.image.style.height = bat.height;
	      bat.image.src = this.batImage;
	      this.ctx.globalAlpha = bat.opacity;
	      this.ctx.drawImage (bat.image, bat.x, bat.y, bat.width, bat.height);
	    }
	    this.move();
	  },
	  move: function() {
	    for(var b = 0; b < this.bats.length; b++) {
	      var bat = this.bats[b];
	      bat.y += bat.ys;
	      if(bat.y > this.h) {
	        bat.x = Math.random() * this.w;
	        bat.y = -1 * this.batHeight;
	      }
	    }
	  },
	  setCanvasSize: function() {
	    this.canvas.width = window.innerWidth;
	    this.canvas.height = window.innerHeight;
	    this.w = this.canvas.width;
	    this.h = this.canvas.height;
	  },
	  initialize: function() {
	    this.canvas = $('#canvas')[0];

	    if(!this.canvas.getContext)
	      return;

	    this.setCanvasSize();
	    this.ctx = this.canvas.getContext('2d');

	    for(var a = 0; a < this.maxBats; a++) {
	      var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
	      this.bats.push({
	        x: Math.random() * this.w,
	        y: Math.random() * this.h,
	        ys: Math.random() + 1,
	        height: scale * this.batHeight,
	        width: scale * this.batWidth,
	        opacity: scale
	      });
	    }

	    setInterval($.proxy(this.draw, this), 15);
	  }
	};

	$(document).ready(function(){
	  BatsBackground.initialize();
	});

	$(document).ready(function(){
	  BatsBackground.initialize();
	});