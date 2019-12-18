// Responsive Nav
$(function() {
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});


// Dropdown
$(document).ready(function() {
  // on click on  setting button
  $(".dropdown .button").click(function() {
      var val = $(this).attr('id');
      
      if (val == 1) {
          $(".dropdown ul").hide();
          $(this).attr('id', '0');
      } else {
          $(".dropdown ul").show();
          $(this).attr('id', '1');
      }

  });

  $('.sidebar ul li').on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

  //Tab
  $('.tabs .tab-links a').on('click', function(e) {
		var currentAttrValue = $(this).attr('href');

		// Show/Hide Tabs
		$('.tabs ' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		$(this).parent('li').addClass('active-tab').siblings().removeClass('active-tab');

		e.preventDefault();
  });

//Tab Informasi Pribadi
$('#main-content').load('informasi_pribadi.html');

$('ul#nav li a').click(function(){
  var page = $(this).attr('href')
  $('#main-content').load(page + '.html');
  return false;
})

});





