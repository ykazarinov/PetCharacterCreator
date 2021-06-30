// initialisation of mobile menu
  $(document).ready(function(){
   $(document).on("click", ".begin_bot", function(e) {
     e.preventDefault();
      $('.sidenav').sidenav();

   })

    $(document).on("click", ".sidenav-trigger", function(e) {
      e.preventDefault();
      $('.collapsible').collapsible();
      // close navbar when we click
      var elem = $('.sidenav');
      var instance = M.Sidenav.getInstance(elem);
      $('.sidenav .menu_item').children('a').click(function() {
        instance.close();
      });
    })

    $(document).on("click", ".lang_bot", function(e) {
      e.preventDefault();
      var elem = $('.sidenav');
      var instance = M.Sidenav.getInstance(elem);
      instance.close();
    })


   });







