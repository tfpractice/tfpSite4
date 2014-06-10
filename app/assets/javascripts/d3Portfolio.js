$(document).ready(function (){ 
	
	
	var svgWidth = $(".skillsDiv").width();
	var svgHeight = $(".skillsDiv").height();
	var iRad = 125;
	var oRad = 150;
	var fullCircle = Math.PI * 2;
	var arc = d3.svg.arc()
					.innerRadius(iRad)
					.outerRadius(oRad);
	
	var dGreen = d3.rgb("#008800");
	var bGreen = d3.rgb("#00ff00");
	
	var color = d3.scale.ordinal()
					.range([dGreen, bGreen]);
	
	
	var svgCanvas  = d3.select("#svgSkills").append("svg")
	 						.attr("width", "100%")
	 						.attr("height", svgWidth)
	 						.attr("viewBox", "0,0,500,500");
	
	
	var proficiencyArray = [];
	
	
	// ----____------____THIS IS WHERE THE CRAZY LOOP BEGINS
	
	d3.json("skills.json", function(data) {
	
	 	var arcDomain = d3.extent(data, function(d){ return d.proficiency;});
	 	console.log(arcDomain);
	
	
	 	 	$.each(data, function(index, value) {
	
	 		proficiencyArray.push(value.proficiency); 	
	
	 		switch (value.worktype){
	 		
	
	 			case "svg":
	
						 svgCanvas.selectAll("p")
							 		.data(data)
							 		.enter()
							 			.append("p")
							 			.text(function(d) { 
							 				if (d.worktype == "svg") {
							 					return d.proficiency;
							 				} else {
							 					return ;
							 				}
						
		 								});
	
							var svgGroup = svgCanvas.append("g")
											.attr("transform", "translate (250, 250)");	 
	
							var svgGraph = d3.layout.pie()
											.value(function(d) {
												if (d.worktype == "svg") {
												return d.proficiency;
											} else {
												return 0;
											}
	
											});		
	
							var svgArcs = svgGroup.selectAll(".arc")
											.data(svgGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "arc");
												
	
	
							 //if (d.worktype == "svg") {
							svgArcs.append("path")
								
								.attr("d", arc)
								.attr("fill", function(d){ return color(d.value); })
								.attr("id", function(d) { return d.data.name + "Arc";});
	
	
	
							svgArcs.append("text")
									//.attr("transform", function(d){ console.log(d); return "translate(" + arc.centroid(d) + ")";})
									.text(function(d){ 
										if (d.data.worktype == "svg") {
											return d.data.name ;
											} else {
											return ;
											 }
										})
									.attr("fill", function(d){ return color(d.value); });
	
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
	
	//console.log(proficiencyArray);
	
	});
	
	//		var skillData2 = [1,12,33];
	//		
	//		//var svgWidth = $(".skillsDiv").width();
	//		//var svgHeight = $(".skillsDiv").height();
	//		//var iRad = 125;
	//		//var oRad = 150;
	//		//var fullCircle = Math.PI * 2;
	//		//
	//		var color = d3.scale.ordinal()
	//						.range(["red", "white", "blue"]);
	//		
	//		var skillCanvases = d3.selectAll(".skillsDiv").append("svg")
	//		 						.attr("width", "100%")
	//		 						.attr("height", svgWidth)
	//		 						.attr("viewBox", "0,0,500,500"); 
	//		
	//		var group = skillCanvases.append("g")
	//						.attr("transform", "translate (250, 250)");
	//		
	//		var arc = d3.svg.arc()
	//					.innerRadius(iRad)
	//					.outerRadius(oRad)
	//					//.startAngle(0)
	//		//			.endAngle(fullCircle);
	//		
	//		var graph = d3.layout.pie()
	//					.value(function(d) {
	//		
	//						return d;
	//					});			
	//		
	//		
	//		
	//		var arcs = group.selectAll(".arc")
	//					.data(graph(skillData2))
	//					.enter()
	//						.append("g")
	//						.attr("class", "arc");			
	//		
	//		
	//		arcs.append("path")
	//			.attr("d", arc)
	//			.attr("fill", function(d){ return color(d*20); });
	//		
	//		
	//		//group.append("path")
	//		//	.attr("d", arc)
	//		//	.attr("fill", "#ffffff");
	
	
	
	
	
	
	


});