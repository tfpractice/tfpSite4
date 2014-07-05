# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$  ->

   #$(".top-nav").scrollToFixed()
   $("#titleSection").hide()
   #window.onload ->
   $("#titleSection").slideDown(800)


   $(".subjectDescription").hide()
   $(".canvasDiv").hide()


   $(".projectLink").click ->
    currentContents = $(@).find(".pJDisplay .pJContents")
    currentDisplay = $(@).find(".pJDisplay")
    $(".pJDisplay").slideToggle()
    slider = $('.flexslider').data('flexslider')
    fslide = $('.flexslider')
    slider.resize()
    fslide.resize()
    
    console.log(slider)
    console.log(fslide)
    #$(window).trigger("resize")
    




     # if currentContents.is(":visible")
       #  currentDisplay.css("height","40%")
         #currentDisplay.slideUp()
   #   else if $(".pJDisplay .pJContents").css("display", "none")
    #     $(".pJDisplay").slideDown()
   #   else
         #$(".pJDisplay").slideUp()
         #$(".pJDisplay").slideDown()
       #  $(".pJDisplay").slideToggle()

   $(".skillsDiv").hover ->
   	curSVG = $(@).find(".canvasDiv")
   	curSVG.slideDown()

   $(".skillsDiv").click ->
      curSVG = $(@).find(".canvasDiv")
      curSVG.slideToggle()

   $(".menuItem")
   $("#archiveLink").click (event)->
      event.preventDefault()
      window.open("http://tfpractice.tumblr.com/", "archive")

 # $(".projectLink").click ->
 #  	images = $("#slides > .projectImage")
  # 	console.log(images)

   #images = $("#slides > img")
   #console.log(images)
#
   #for image in images
   #	console.log(image)


   #images.each(index, image) ->
   #	 images.fadeOut()
   #	 $("#projectImage" + )
#


   
   