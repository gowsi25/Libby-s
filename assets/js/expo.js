$('.expotheme_slide').slick({
    slidesToShow:1,
    slidesToScroll:1,
    autoplay: true,
    dots:false,
    speed:800,
    autoplaySpeed: 2000,
    prevArrow:  '<i class="fa fa-chevron-left left_arrow ">',
    nextArrow:'<i class="fa fa-chevron-right right_arrow">',
 
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: ".speakers-bottom-dots",
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: ".speakers-bottom-dots",
      },
    },
  ],
});
