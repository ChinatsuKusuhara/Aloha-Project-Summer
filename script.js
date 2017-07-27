$(function() {
  //  $("a[href^='#']").not("a[href='#']").click(function() {
  //     $("#"+$(this).attr("href").slice(1)+"").focus();
  //  });
    
  $('.main-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  autoPlay:true,
  percentPosition: false,
  setGallerySize:true
});
  console.log("this isn't working");
});
