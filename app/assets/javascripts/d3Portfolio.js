$(document).ready(function (){ 
	
	
	var visWidth = $(".skillsDiv").width();
	var visHeight = $(".skillsDiv").height();
	var iRad = 115;
	var oRad = 150;
	var fullCircle = Math.PI * 2;
	var arc = d3.svg.arc()
					.innerRadius(iRad)
					.outerRadius(oRad);
	
	var dGreen = d3.rgb("#002200");
	var bGreen = d3.rgb("#00ff00");
	
	var color = d3.scale.linear()
					.domain([0,10])
					.range([dGreen,  bGreen]);
	
	var svgCanvasDiv = d3.select("#svgSkills").append("div")
						.attr("class", "canvasDiv")
						.attr("id", "svgCanvasDiv");
	
	var svgCanvas  = d3.select("#svgCanvasDiv").append("svg")
	 						.attr("width", "100%")
	 						.attr("height", visWidth)
	 						.attr("viewBox", "0,0,500,500");

	var stylingCanvasDiv = d3.select("#stylingSkills").append("div")
						.attr("class", "canvasDiv")
						.attr("id", "stylingCanvasDiv");


	var stylingCanvas  = d3.select("#stylingCanvasDiv").append("svg")
	 						.attr("width", "100%")
	 						.attr("height", visWidth)
	 						.attr("viewBox", "0,0,500,500");

	var scriptingCanvasDiv = d3.select("#scriptingSkills").append("div")
						.attr("class", "canvasDiv")
						.attr("id", "scriptingCanvasDiv");


	var scriptingCanvas  = d3.select("#scriptingCanvasDiv").append("svg")
	 						.attr("width", "100%")
	 						.attr("height", visWidth)
	 						.attr("viewBox", "0,0,500,500");
	
	var frameworkCanvasDiv = d3.select("#frameworkSkills").append("div")
						.attr("class", "canvasDiv")
						.attr("id", "frameworkCanvasDiv");


	var frameworkCanvas  = d3.select("#frameworkCanvasDiv").append("svg")
	 						.attr("width", "100%")
	 						.attr("height", visWidth)
	 						.attr("viewBox", "0,0,500,500");
	
	
	var proficiencyArray = [];

	
	
	// ----____------____THIS IS WHERE THE CRAZY LOOP BEGINS
	
	d3.json("skills.json", function(data) {
	
	 	var arcDomain = d3.extent(data, function(d){ return d.proficiency;});
	 	//console.log(arcDomain);

		tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return ( ((d.data.proficiency)+ "/10")); });

	
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
												
												
	
	
							svgArcs.append("path")
								.attr("d", arc)
								.attr("fill", function(d){ return color(d.value); })
								.attr("stroke", 
								  "#000"
								 )
								.attr("stroke-width", "10")
								.attr("id", function(d) { return d.data.name + "Arc";});
								//.call(tip)
								//.on('mouseover', tip.show)
								//.on('mouseout', tip.hide);


										svgArcs.on("mouseover", function(){
													var selectedArc = d3.select(this);
													selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "svg") {
															return ((d.data.name) 
																); 
															} else {
															return ;
															}
														})
													.attr("fill","#00ff00" 
														//function(d){ return color(d.value); }
														)
													.attr("id", function(d){ return (d.data.name + "Text")})
													selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "svg") {
															return ((d.data.proficiency) + " / 10" 
																); 
															} else {
															return ;
															}
														})
													.attr("transform","translate(0, 40)")
													.attr("fill","#00ff00" 
														//function(d){ return color(d.value); }
														)
													.attr("id", function(d){ return (d.data.name + "Text2")}); 
	
												})
												.on("mouseout", function(){
													var selectedArc = d3.select(this);
													var currentText = selectedArc.selectAll("text");
													var textObj0 = (currentText[0][0]);
													var textObj1 = (currentText[0][1]);
													(textObj0).remove();	
													(textObj1).remove();													
													//return console.log(currentText);

	
												});
							
	
	 			break;
	
	 			case "styling":
	
						 stylingCanvas.selectAll("p")
							 		.data(data)
							 		.enter()
							 			.append("p")
							 			.text(function(d) { 
							 				if (d.worktype == "styling") {
							 					return d.proficiency;
							 				} else {
							 					return ;
							 				}
						
		 								});
	
							var stylingGroup = stylingCanvas.append("g")
											.attr("transform", "translate (250, 250)");	 
	
							var stylingGraph = d3.layout.pie()
											.value(function(d) {
												if (d.worktype == "styling") {
												return d.proficiency;
											} else {
												return 0;
											}
	
											});		
	
							var stylingArcs = stylingGroup.selectAll(".arc")
											.data(stylingGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "arc");
												
												
	
	
							stylingArcs.append("path")
								.attr("d", arc)
								.attr("fill", function(d){ return color(d.value); })
								.attr("stroke", 
								  "#000"
								 )
								.attr("stroke-width", "10")
								.attr("id", function(d) { return d.data.name + "Arc";});
								


										stylingArcs
												.on("mouseover", function(){
													var selectedArc = d3.select(this);
													selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "styling") {
															return ((d.data.name) 
																); 
															} else {
															return ;
															}
														})
													.attr("fill","#00ff00")
													.attr("id", function(d){ return (d.data.name + "Text")})
													selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "styling") {
															return ((d.data.proficiency) + " / 10" 
																); 
															} else {
															return ;
															}
														})
													.attr("transform","translate(0, 40)")
													.attr("fill","#00ff00")
													.attr("id", function(d){ return (d.data.name + "Text2")});; 

														//});
	
												})
												.on("mouseout", function(){
													var selectedArc = d3.select(this);
													var currentText = selectedArc.selectAll("text");
													var textObj0 = (currentText[0][0]);
													var textObj1 = (currentText[0][1]);
													(textObj0).remove();	
													(textObj1).remove();												
													//return console.log(currentText);

	
												});
							
	
	 			break;
	
	
	 			case "scripting":

						 scriptingCanvas.selectAll("p")
							 		.data(data)
							 		.enter()
							 			.append("p")
							 			.text(function(d) { 
							 				if (d.worktype == "scripting") {
							 					return d.proficiency;
							 				} else {
							 					return ;
							 				}
						
		 								});
	
							var scriptingGroup = scriptingCanvas.append("g")
											.attr("transform", "translate (250, 250)");	 
	
							var scriptingGraph = d3.layout.pie()
											.value(function(d) {
												if (d.worktype == "scripting") {
												return d.proficiency;
											} else {
												return 0;
											}
	
											});		
	
							var scriptingArcs = scriptingGroup.selectAll(".arc")
											.data(scriptingGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "arc");
												
												
	
	
							scriptingArcs.append("path")
								.attr("d", arc)
								.attr("fill", function(d){ return color(d.value); })
								.attr("stroke", 
								  "#000"
								 )
								.attr("stroke-width", "10")
								.attr("id", function(d) { return d.data.name + "Arc";});
								


										scriptingArcs
												.on("mouseover", function(){
													var selectedArc = d3.select(this);
													selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "scripting") {
															return ((d.data.name) 
																); 
															} else {
															return ;
															}
														})
													.attr("fill","#00ff00")
													.attr("id", function(d){ return (d.data.name + "Text")})
													selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "scripting") {
															return ((d.data.proficiency) + " / 10" 
																); 
															} else {
															return ;
															}
														})
													.attr("transform","translate(0, 40)")
													.attr("fill","#00ff00")
													.attr("id", function(d){ return (d.data.name + "Text2")});; 

														//});
	
												})
												.on("mouseout", function(){
													var selectedArc = d3.select(this);
													var currentText = selectedArc.selectAll("text");
													var textObj0 = (currentText[0][0]);
													var textObj1 = (currentText[0][1]);
													(textObj0).remove();	
													(textObj1).remove();												
													//return console.log(currentText);

	
												});
							
	
	 			break;
	
	
	 			case "programming languages and frameworks":
						 frameworkCanvas.selectAll("p")
							 		.data(data)
							 		.enter()
							 			.append("p")
							 			.text(function(d) { 
							 				if (d.worktype == "programming languages and frameworks") {
							 					return d.proficiency;
							 				} else {
							 					return ;
							 				}
						
		 								});
	
							var frameworkGroup = frameworkCanvas.append("g")
											.attr("transform", "translate (250, 250)")
											.attr("class", "pieGroup");	 
	
							var frameworkGraph = d3.layout.pie()
											.value(function(d) {
												if (d.worktype == "programming languages and frameworks") {
												return d.proficiency;
											} else {
												return 0;
											}
	
											});		
	
							var frameworkArcs = frameworkGroup.selectAll(".arc")
											.data(frameworkGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "arc")
												.attr("id", //"lol");
													function(d, i ){ return ("arc"+i); });

							var frameworksTags = frameworkGroup.selectAll(".tag")
											.data(frameworkGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "tag");
																		
												


							var frameworksTag = frameworkGroup.selectAll(".tag")
											.data(frameworkGraph(data))

									
											
											//	.enter()
												.append("text")
												.attr("class", "tag")
												.attr("id", //"lol");
													function(d, i ){ //console.log(d.data.name);
													 return ((d.data.name)+i); });	
												//console.log(frameworkGraph(data));
																																				
	
	
							frameworkArcs.append("path")
								.attr("d", arc)
								.attr("fill", function(d){ return color(d.value); })
								.attr("stroke", 
								  "#000"
								 )
								.attr("stroke-width", "10")
								.attr("id", function(d) { return d.data.name + "Arc";});
								


							frameworkArcs.on("mouseover", function(){
											var selectedArc = d3.select(this);
											var selectedArcNode = selectedArc.node();
											var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
											var selectedId = (selectedArcNode.id);
   											console.log(frameworksTag[0][18]);

											var currentIndex =(frameworkArcs[0].indexOf(selectedArc[0][0]));
													console.log(selectedArc);
													console.log(selectedArcNode);
													console.log(currentIndex);
													console.log(frameworksTag);
													//console.log(frameworksTag[0].attr("id"));
											frameworksTag//.append("text")
													.text(function(d, i) { 
													//	console.log(i);
													//	console.log(d);
														//return (d.data.name);
														if 	((d.data.worktype == "programming languages and frameworks") && 
															//((frameworksTag[0][i]) == ("text#"+(d.data.name)+i)) && 
															(((selectedArcNode.id) == ("arc" + i) ))
															) 
														{
															return ((d.data.name) 
																); 
															} else {
															return ;
															}

														})

													.attr("fill","#00ff00")
													.attr("id", function(d){ return (d.data.name + "Text")});
											selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "programming languages and frameworks")
														 {
															return ((d.data.proficiency) + " / 10" 
																); 
															} else {
															return ;
															}
														})
													.attr("transform","translate(0, 40)")
													
													.attr("fill","#00ff00")
													.attr("id", function(d){ return (d.data.name + "Text2")});
											var bbox = frameworksTag[0][currentIndex].getBBox();

						

											var selectedText  = frameworksTag.select("text");
											selectedArc.insert("rect", "text")
   														.attr("x", bbox.x)
   														.attr("y", bbox.y)
   														.attr("width", ((bbox.width)))
   														.attr("height", bbox.height)
   														.style("fill", "#000000")
   														.style("fill-opacity", "1.0")
   														//.style("stroke", "#666")
   														//.style("stroke-width", "1.5px");
   													
   													console.log(bbox);
   													//console.log(bbox2);
	
												})
												.on("mouseout", function(){
													var selectedArc = d3.select(this);
													var currentText = selectedArc.selectAll("text");
													var currentRects = selectedArc.selectAll("rect");
													var textObj0 = (currentText[0][0]);
													var textObj1 = (currentText[0][1]);
													(textObj0).remove();	
													(textObj1).remove();
													(currentRects).remove();												
													//return console.log(currentRects);

	
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
	 			//	console.log("default action");
	
	 		};
	
	
	
	 	
	 	});
	
	//console.log(proficiencyArray);
	
	});
	
	
	
	
	
	
	
	


});