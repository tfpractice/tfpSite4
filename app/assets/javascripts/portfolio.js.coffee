# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$  ->
   #$(".top-nav").scrollToFixed()

   $(".canvasDiv").hide()
   $(".projectLink").click ->
   	$(".pJDisplay").slideToggle()

   $(".skillsDiv").hover ->
   	curSVG = $(@).find(".canvasDiv")
   	curSVG.slideDown()

   $(".menuItem")

   $(".projectLink").click ->
   	images = $("#slides > .projectImage")
   	console.log(images)

   #images = $("#slides > img")
   #console.log(images)
#
   #for image in images
   #	console.log(image)


   #images.each(index, image) ->
   #	 images.fadeOut()
   #	 $("#projectImage" + )
#


   
   