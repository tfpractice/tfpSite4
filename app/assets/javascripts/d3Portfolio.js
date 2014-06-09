$(document).ready(function (){ 

 d3.json("skills.json", function(data) {


 	$.each(data, function(index, value) {
 		
 		switch (value.worktype){
 		

 			case "svg":
 				d3.select("#svgSkills")
					 		.selectAll("p")
						 		.data(data)
						 		.enter()
						 			.append("p")
						 			.text(function(d) { 
						 				if (d.worktype == "svg") {
					
						 					
						 					return d.proficiency;
						 				}
					
					
	 			 });


 				break;

 			case "styling":
 				

 				d3.select("#stylingSkills")
					 		.selectAll("p")
						 		.data(data)
						 		.enter()
						 			.append("p")
						 			.text(function(d) { 
						 				if (d.worktype == "styling") {
					
						 					return d.name;
						 				}
					
					
	 			 });


 				break;

 			case "scripting":
 				

 				d3.select("#scriptingSkills")
					 		.selectAll("p")
						 		.data(data)
						 		.enter()
						 			.append("p")
						 			.text(function(d) { 
						 				if (d.worktype == "scripting") {
					
						 					return d.name;
						 				}
					
					
	 			 });


 				break;

 			case "programming languages and frameworks":
 				

 				d3.select("#frameworkSkills")
					 		.selectAll("p")
						 		.data(data)
						 		.enter()
						 			.append("p")
						 			.text(function(d) { 
						 				if (d.worktype == "programming languages and frameworks") {
					
						 					return d.name;
						 				}
					
					
	 			 });


 				break;

	case "software engineering":
 			//console.log("here are the engineering");
 				//var softData = [];
 				//softData.push(value);
 				//console.log(softData);


					
					d3.select("#softwareSkills")
					 		.selectAll("p")
						 		.data(data)
						 		.enter()
						 			.append("p")
						 			.text(function(d) { 
						 				if (d.worktype == "software engineering") {
					
						 					return d.name;
						 			}
					
					
	 			 });




 				break;



 				default:
 				console.log("default action");

 		};


 	
 	});



});

 d3.selectAll(".skillsDiv").append("p").text("is this thing on?"); 










});