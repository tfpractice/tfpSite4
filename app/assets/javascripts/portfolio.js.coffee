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
   	

   
   