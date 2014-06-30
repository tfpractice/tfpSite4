# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$  ->

   #$(".top-nav").scrollToFixed()
   $(".projectIcon").hide()
   $(".subjectDescription").hide()
   $(".canvasDiv").hide()


   $(".projectLink").click ->
      if $(".pJDisplay .imageSection").is(":visible")
         console.log("shit is empty")
         $(".pJDisplay").slideToggle()
      else
         $(".pJDisplay").slideDown()

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


   
   