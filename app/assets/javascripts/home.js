$(document).on('turbolinks:load', function() {
 var b = window.baffle('.display-2', 
    {
      characters: 'b6c7807bb10b5d867000afaiufiuehefUry238y3U',
    speed: 50
  });
  b.start().once().reveal(2000, 1000);
var b2 = window.baffle('.display-3',
  {
    characters: 'b6c7807bb10b5d867000jskssjaoidjfiefaoiefjoisdefjoi;dsfj',
  speed: 50
});
b2.start().once().reveal(4000, 2000);
});