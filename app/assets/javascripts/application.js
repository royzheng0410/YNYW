// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
// $(function(){
//   // $('ul').children('li').eq(0).next().text('added with jQuery');
//   var link = $('link');
//   $('button').click(function(){
//     var $this = $(this);
//     var stylesheet = $this.data('file');
//     $this.siblings('button').removeAttr('disabled');
//     link.attr('href', '/assets/' + stylesheet + '.scss');
//     $this.attr('disabled', 'disabled');
//   });
// })
// $(document).ready(function(){
  
// })

// $(function(){
//   $('dd').filter(':nth-child(n+4)').hide();
//   $('dl').on('mouseenter', 'dt ', function(){
//     $(this).next().siblings('dd').slideUp(200);
//     $(this).next().slideDown(200);
//   })
// })
// $(function(){
//   $('.container').delegate('h1', 'click', function(){
//     $(this).clone().appendTo('.container');
//   })
// })
// $(function(){
//   $('p').first().before('Hello from the JavaScript');
//   $('<h2></h2>', {
//     text: 'Hello from JavaScript',
//     class: 'myClass'
//   }).insertAfter('h1')
//   var co = $('span.co').each(function(){
//     $('<blockquote></blockquote>', {
//       class: 'co',
//       text: $(this).text()
//     }).prependTo( $(this).closest('p') );
//   });
// })

// console.log(this);
// var obj = {                     //create an object called obj
//   doIt: function(){             //declare a mehord named doIt
//     console.log(this);          // body of the method
//   }
// }
// function doSomething(e){        //declare a function named doSomething accepting an event e
//   e.preventDefault();
//   console.log(this);
// }
// $('a').on('click', doSomething); // when a is clicked, call method doSomething
// $('a').on('click', obj.doIt);  // call obj.doIt and event will be passed to it. the method can accept the evet by declaring a parameter.(e), in this case, this will still be <a>
// $('a').on('click', function(e){  // by calling this anonymours function, this will refer to obj Object instead of <a>, if you still 
//  obj.doIt.();                    // want this to refer a, go obj.doIt.call(this); and you can pass variables like obj.doIt.call(this, e)
//  e.preventDefault();
// });


// $('a').on('click', $.proxy(obj.doIt, obj) ) // $.proxy(param1, param2) param1: the function to call, param2: what will be treated as this

//11. createing custom effect methods
// $(function(){                       //put everything into an anonymous function to avoid any global variable
//   var content = $('.article').hide();    //grab the content to hide.
//   jQuery.fn.flash = function( speed, easing, callback) {
//     var $this = $(this);
//     $this.slideDown(500, function(){                   //passing a second parameter(function()) to execute code when the effect is done
//       $this.delay(2000).slideUp(500);                  //stay for 2 secs and then slide up
//     });              
//     // return this.animate( props, speed, easing, callback );
//   };
//   $('.article').hide();
//   $('h2').on('click', function(){
//     content.flash();
//   })
// })

//12. Full controll with the animate method
$(function(){
  var content = $('div.content');                         //only query it one time
      w = $(window).width() / 2 - content.outerWidth() / 2;
      h = $(window).height() / 2 - content.outerHeight() / 2;
  // var fontSize = parseInt(content.css('font-size'));      //old way 
  $('button').on('click', function(){
    // content.css('font-size', fontSize += 5)             //only check those divs with a class named content
    // content.css('font-size', '+=5')              //new way
    // content.css({                              //call css method once
    //   'font-size': '+=5',
    //   'color': 'white'
    // })
    // content.animate({                     //neater way
    //   'font-size': '+=5',
    //   'width': '+=300'
    // }, 500, 'swing', function(){
    //   console.log('completed')
    // });
  //   content.animate({
  //     'font-size' : '+=5',
  //   }, {
  //       duration: 500,
  //       compete: function() {
  //         console.log('completed');
  //       },
  //       step: function(){
  //         console.log('The current font-size is:' + $(this).css('fontSize'));
  //       }
  //   })
  //   .animate({ 'top': 500}, { duration: 3000, queue: false});       //same time animation
    content.animate({
      'left': w,
      'position': 'absolute'
    })
    .animate({
      'top': h
    }, {duration: 200, queue: false});
  })
})




