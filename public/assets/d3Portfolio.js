

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

	var softwareCanvasDiv = d3.select("#softwareSkills").append("div")
						.attr("class", "canvasDiv")
						.attr("id", "softwareCanvasDiv");


	var softwareCanvas  = d3.select("#softwareCanvasDiv").append("svg")
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
											.attr("transform", "translate (250, 250)")
											.attr("class", "pieGroup");	 
	
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
												.attr("class", "arc")
												.attr("id", //"lol");
													function(d, i ){ return ("arc"+i); });

							var svgTags = svgGroup.selectAll(".tag")
											.data(svgGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "tag");
																		
												


							var svgTag = svgGroup.selectAll(".tag")
											.data(svgGraph(data))

									
											
												.append("text")
												.attr("class", "tag")
												.attr("id", //"lol");
													function(d, i ){ //console.log(d.data.name);
													 return ((d.data.name)+i); });	
																																				
	
	
							svgArcs.append("path")
								.attr("d", arc)
								.attr("fill", function(d){ return color(d.value); })
								.attr("stroke", 
								  "#000"
								 )
								.attr("stroke-width", "10")
								.attr("id", function(d) { return d.data.name + "Arc";});
								


							svgArcs.on("mouseover", function(){
											var selectedArc = d3.select(this);
											var selectedArcNode = selectedArc.node();
											var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
											var selectedId = (selectedArcNode.id);
   											//console.log(svgTag[0][18]);

											var currentIndex =(svgArcs[0].indexOf(selectedArc[0][0]));
													//console.log(currentIndex);
													//console.log(svgTag[0][currentIndex]);
											svgTag
													.text(function(d, i) { 
									
														if 	((d.data.worktype == "svg") && 
															//((svgTag[0][i]) == ("text#"+(d.data.name)+i)) && 
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
													.attr("id", function(d){ return (d.data.name + "Text")})
													.attr("visibility","visible");

											


											selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "svg")
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
											var bbox = svgTag[0][currentIndex].getBBox();									

											var selectedTextParent  = d3.select((svgTag[0][currentIndex]).parentNode);
											var currentRects = selectedTextParent.selectAll("rect");
											var currentRect = currentRects[0][0];
											var selectedText = selectedTextParent.select("text");
											var currentText = d3.select(svgTag[0][currentIndex]);	

														console.log(selectedText);
														console.log(currentText);
														console.log(currentRects);
														console.log(selectedTextParent.selectAll("rect"));
														console.log((selectedTextParent.selectAll("rect")).length);
											


											if (currentRects[0].length > 0){
												return (currentRects).attr("visibility", "visible");

											} else if (((currentRects[0].length > 0) && (selectedText.length > 0))) { 

												return (currentRects).attr("visibility", "visible");

											} else {
											//var bbox = svgTag[0][currentIndex].getBBox();
											selectedTextParent.insert("rect", "text")
											   							.attr("x", ((bbox.x)-20))
											   							.attr("y", bbox.y)
											   							.attr("width", ((bbox.width)+40))
											   							.attr("height", bbox.height)
											   							.style("fill", "#000000")
											   							.style("fill-opacity", "1.0")
											   							.attr("rx", ((bbox.height)/2))
											   							.attr("ry", ((bbox.height)/2));
   													}
   														console.log(currentRects);
   														//console.log(bbox);   												//	console.log(bbox);	

   											var selectedTag = selectedTextParent.select("rect");
											//console.log(selectedTag);
												})
												.on("mouseout", function(){
											
													var selectedArc = d3.select(this);
													var selectedArcNode = selectedArc.node();
													var selectedId = (selectedArcNode.id);
													var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
													
												//	var bbox = svgTag[0][currentIndex].getBBox();
													var currentIndex =(svgArcs[0].indexOf(selectedArc[0][0]));

													var selectedTextParent  = d3.select((svgTag[0][currentIndex]).parentNode);
													var selectedTag = selectedTextParent.select("rect");
													var selectedText = selectedTextParent.select("text");


												
												
													var currentText = d3.select(svgTag[0][currentIndex]);
												//	console.log(d3.select((svgTag[0][currentIndex])));
												//	console.log(d3.select((svgTag[0])));
												//	console.log(currentIndex);
												//	console.log(selectedTextParent);


													
													var currentRects = selectedTextParent.selectAll("rect");
													var currentRect = currentRects[0][0];
													console.log(currentRects);
													console.log(currentRects);
													console.log(selectedText);
													var proficiencyText = selectedArc.selectAll("text");
													(proficiencyText).attr("visibility", "hidden");
													(selectedText).attr("visibility", "hidden");
													(currentRects).remove();										
													

	
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
											.attr("transform", "translate (250, 250)")
											.attr("class", "pieGroup");	 
	
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
												.attr("class", "arc")
												.attr("id", //"lol");
													function(d, i ){ return ("arc"+i); });

							var stylingTags = stylingGroup.selectAll(".tag")
											.data(stylingGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "tag");
																		
												


							var stylingTag = stylingGroup.selectAll(".tag")
											.data(stylingGraph(data))

									
											
												.append("text")
												.attr("class", "tag")
												.attr("id", //"lol");
													function(d, i ){ //console.log(d.data.name);
													 return ((d.data.name)+i); });	
																																				
	
	
							stylingArcs.append("path")
								.attr("d", arc)
								.attr("fill", function(d){ return color(d.value); })
								.attr("stroke", 
								  "#000"
								 )
								.attr("stroke-width", "10")
								.attr("id", function(d) { return d.data.name + "Arc";});
								


							stylingArcs.on("mouseover", function(){
											var selectedArc = d3.select(this);
											var selectedArcNode = selectedArc.node();
											var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
											var selectedId = (selectedArcNode.id);
   											//console.log(stylingTag[0][18]);

											var currentIndex =(stylingArcs[0].indexOf(selectedArc[0][0]));
													//console.log(currentIndex);
													//console.log(stylingTag[0][currentIndex]);
											stylingTag
													.text(function(d, i) { 
									
														if 	((d.data.worktype == "styling") && 
															//((stylingTag[0][i]) == ("text#"+(d.data.name)+i)) && 
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
													.attr("id", function(d){ return (d.data.name + "Text")})
													.attr("visibility","visible");

											


											selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "styling")
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
											var bbox = stylingTag[0][currentIndex].getBBox();									

											var selectedTextParent  = d3.select((stylingTag[0][currentIndex]).parentNode);
											var currentRects = selectedTextParent.selectAll("rect");
											var currentRect = currentRects[0][0];
											var selectedText = selectedTextParent.select("text");
											var currentText = d3.select(stylingTag[0][currentIndex]);	

														console.log(selectedText);
														console.log(currentText);
														console.log(currentRects);
														console.log(selectedTextParent.selectAll("rect"));
														console.log((selectedTextParent.selectAll("rect")).length);
											


											if (currentRects[0].length > 0){
												return (currentRects).attr("visibility", "visible");

											} else if (((currentRects[0].length > 0) && (selectedText.length > 0))) { 

												return (currentRects).attr("visibility", "visible");

											} else {
											//var bbox = stylingTag[0][currentIndex].getBBox();
											selectedTextParent.insert("rect", "text")
											   							.attr("x", ((bbox.x)-20))
											   							.attr("y", bbox.y)
											   							.attr("width", ((bbox.width)+40))
											   							.attr("height", bbox.height)
											   							.style("fill", "#000000")
											   							.style("fill-opacity", "1.0")
											   							.attr("rx", ((bbox.height)/2))
											   							.attr("ry", ((bbox.height)/2));
   													}
   														console.log(currentRects);
   														//console.log(bbox);   												//	console.log(bbox);	

   											var selectedTag = selectedTextParent.select("rect");
											//console.log(selectedTag);
												})
												.on("mouseout", function(){
											
													var selectedArc = d3.select(this);
													var selectedArcNode = selectedArc.node();
													var selectedId = (selectedArcNode.id);
													var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
													
												//	var bbox = stylingTag[0][currentIndex].getBBox();
													var currentIndex =(stylingArcs[0].indexOf(selectedArc[0][0]));

													var selectedTextParent  = d3.select((stylingTag[0][currentIndex]).parentNode);
													var selectedTag = selectedTextParent.select("rect");
													var selectedText = selectedTextParent.select("text");


												
												
													var currentText = d3.select(stylingTag[0][currentIndex]);
												//	console.log(d3.select((stylingTag[0][currentIndex])));
												//	console.log(d3.select((stylingTag[0])));
												//	console.log(currentIndex);
												//	console.log(selectedTextParent);


													
													var currentRects = selectedTextParent.selectAll("rect");
													var currentRect = currentRects[0][0];
													console.log(currentRects);
													console.log(currentRects);
													console.log(selectedText);
													var proficiencyText = selectedArc.selectAll("text");
													(proficiencyText).attr("visibility", "hidden");
													(selectedText).attr("visibility", "hidden");
													(currentRects).remove();										
													

	
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
											.attr("transform", "translate (250, 250)")
											.attr("class", "pieGroup");	 
	
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
												.attr("class", "arc")
												.attr("id", //"lol");
													function(d, i ){ return ("arc"+i); });

							var scriptingTags = scriptingGroup.selectAll(".tag")
											.data(scriptingGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "tag");
																		
												


							var scriptingTag = scriptingGroup.selectAll(".tag")
											.data(scriptingGraph(data))

									
											
												.append("text")
												.attr("class", "tag")
												.attr("id", //"lol");
													function(d, i ){ //console.log(d.data.name);
													 return ((d.data.name)+i); });	
																																				
	
	
							scriptingArcs.append("path")
								.attr("d", arc)
								.attr("fill", function(d){ return color(d.value); })
								.attr("stroke", 
								  "#000"
								 )
								.attr("stroke-width", "10")
								.attr("id", function(d) { return d.data.name + "Arc";});
								


							scriptingArcs.on("mouseover", function(){
											var selectedArc = d3.select(this);
											var selectedArcNode = selectedArc.node();
											var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
											var selectedId = (selectedArcNode.id);
   											//console.log(scriptingTag[0][18]);

											var currentIndex =(scriptingArcs[0].indexOf(selectedArc[0][0]));
													//console.log(currentIndex);
													//console.log(scriptingTag[0][currentIndex]);
											scriptingTag
													.text(function(d, i) { 
									
														if 	((d.data.worktype == "scripting") && 
															//((scriptingTag[0][i]) == ("text#"+(d.data.name)+i)) && 
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
													.attr("id", function(d){ return (d.data.name + "Text")})
													.attr("visibility","visible");

											


											selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "scripting")
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
											var bbox = scriptingTag[0][currentIndex].getBBox();									

											var selectedTextParent  = d3.select((scriptingTag[0][currentIndex]).parentNode);
											var currentRects = selectedTextParent.selectAll("rect");
											var currentRect = currentRects[0][0];
											var selectedText = selectedTextParent.select("text");
											var currentText = d3.select(scriptingTag[0][currentIndex]);	

														console.log(selectedText);
														console.log(currentText);
														console.log(currentRects);
														console.log(selectedTextParent.selectAll("rect"));
														console.log((selectedTextParent.selectAll("rect")).length);
											


											if (currentRects[0].length > 0){
												return (currentRects).attr("visibility", "visible");

											} else if (((currentRects[0].length > 0) && (selectedText.length > 0))) { 

												return (currentRects).attr("visibility", "visible");

											} else {
											//var bbox = scriptingTag[0][currentIndex].getBBox();
											selectedTextParent.insert("rect", "text")
											   							.attr("x", ((bbox.x)-20))
											   							.attr("y", bbox.y)
											   							.attr("width", ((bbox.width)+40))
											   							.attr("height", bbox.height)
											   							.style("fill", "#000000")
											   							.style("fill-opacity", "1.0")
											   							.attr("rx", ((bbox.height)/2))
											   							.attr("ry", ((bbox.height)/2));
   													}
   														console.log(currentRects);
   														//console.log(bbox);   												//	console.log(bbox);	

   											var selectedTag = selectedTextParent.select("rect");
											//console.log(selectedTag);
												})
												.on("mouseout", function(){
											
													var selectedArc = d3.select(this);
													var selectedArcNode = selectedArc.node();
													var selectedId = (selectedArcNode.id);
													var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
													
												//	var bbox = scriptingTag[0][currentIndex].getBBox();
													var currentIndex =(scriptingArcs[0].indexOf(selectedArc[0][0]));

													var selectedTextParent  = d3.select((scriptingTag[0][currentIndex]).parentNode);
													var selectedTag = selectedTextParent.select("rect");
													var selectedText = selectedTextParent.select("text");


												
												
													var currentText = d3.select(scriptingTag[0][currentIndex]);
												//	console.log(d3.select((scriptingTag[0][currentIndex])));
												//	console.log(d3.select((scriptingTag[0])));
												//	console.log(currentIndex);
												//	console.log(selectedTextParent);


													
													var currentRects = selectedTextParent.selectAll("rect");
													var currentRect = currentRects[0][0];
													console.log(currentRects);
													console.log(currentRects);
													console.log(selectedText);
													var proficiencyText = selectedArc.selectAll("text");
													(proficiencyText).attr("visibility", "hidden");
													(selectedText).attr("visibility", "hidden");
													(currentRects).remove();										
													

	
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

									
											
												.append("text")
												.attr("class", "tag")
												.attr("id", //"lol");
													function(d, i ){ //console.log(d.data.name);
													 return ((d.data.name)+i); });	
																																				
	
	
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
   											//console.log(frameworksTag[0][18]);

											var currentIndex =(frameworkArcs[0].indexOf(selectedArc[0][0]));
													//console.log(currentIndex);
													//console.log(frameworksTag[0][currentIndex]);
											frameworksTag
													.text(function(d, i) { 
									
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
													.attr("id", function(d){ return (d.data.name + "Text")})
													.attr("visibility","visible");

											


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

											var selectedTextParent  = d3.select((frameworksTag[0][currentIndex]).parentNode);
											var currentRects = selectedTextParent.selectAll("rect");
											var currentRect = currentRects[0][0];
											var selectedText = selectedTextParent.select("text");
											var currentText = d3.select(frameworksTag[0][currentIndex]);	

														console.log(selectedText);
														console.log(currentText);
														console.log(currentRects);
														console.log(selectedTextParent.selectAll("rect"));
														console.log((selectedTextParent.selectAll("rect")).length);
											


											if (currentRects[0].length > 0){
												return (currentRects).attr("visibility", "visible");

											} else if (((currentRects[0].length > 0) && (selectedText.length > 0))) { 

												return (currentRects).attr("visibility", "visible");

											} else {
											//var bbox = frameworksTag[0][currentIndex].getBBox();
											selectedTextParent.insert("rect", "text")
											   							.attr("x", ((bbox.x)-20))
											   							.attr("y", bbox.y)
											   							.attr("width", ((bbox.width)+40))
											   							.attr("height", bbox.height)
											   							.style("fill", "#000000")
											   							.style("fill-opacity", "1.0")
											   							.attr("rx", ((bbox.height)/2))
											   							.attr("ry", ((bbox.height)/2));
   													}
   														console.log(currentRects);
   														//console.log(bbox);   												//	console.log(bbox);	

   											var selectedTag = selectedTextParent.select("rect");
											//console.log(selectedTag);
												})
												.on("mouseout", function(){
											
													var selectedArc = d3.select(this);
													var selectedArcNode = selectedArc.node();
													var selectedId = (selectedArcNode.id);
													var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
													
												//	var bbox = frameworksTag[0][currentIndex].getBBox();
													var currentIndex =(frameworkArcs[0].indexOf(selectedArc[0][0]));

													var selectedTextParent  = d3.select((frameworksTag[0][currentIndex]).parentNode);
													var selectedTag = selectedTextParent.select("rect");
													var selectedText = selectedTextParent.select("text");


												
												
													var currentText = d3.select(frameworksTag[0][currentIndex]);
												//	console.log(d3.select((frameworksTag[0][currentIndex])));
												//	console.log(d3.select((frameworksTag[0])));
												//	console.log(currentIndex);
												//	console.log(selectedTextParent);


													
													var currentRects = selectedTextParent.selectAll("rect");
													var currentRect = currentRects[0][0];
													console.log(currentRects);
													console.log(currentRects);
													console.log(selectedText);
													var proficiencyText = selectedArc.selectAll("text");
													(proficiencyText).attr("visibility", "hidden");
													(selectedText).attr("visibility", "hidden");
													(currentRects).remove();										
													

	
												});
							
	
	 			break;
	
				case "software engineering":
	 					
	 					softwareCanvas.selectAll("p")
							 		.data(data)
							 		.enter()
							 			.append("p")
							 			.text(function(d) { 
							 				if (d.worktype == "software engineering") {
							 					return d.proficiency;
							 				} else {
							 					return ;
							 				}
						
		 								});
	
							var softwareGroup = softwareCanvas.append("g")
											.attr("transform", "translate (250, 250)")
											.attr("class", "pieGroup");	 
	
							var softwareGraph = d3.layout.pie()
											.value(function(d) {
												if (d.worktype == "software engineering") {
												return d.proficiency;
											} else {
												return 0;
											}
											
											});		
								
							var softwareArcs = softwareGroup.selectAll(".arc")
											.data(softwareGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "arc")
												.attr("id", //"lol");
													function(d, i ){ return ("arc"+i); });

							var softwareTags = softwareGroup.selectAll(".tag")
											.data(softwareGraph(data))
									
											
											.enter()
												.append("g")
												.attr("class", "tag");
																		
												


							var softwareTag = softwareGroup.selectAll(".tag")
											.data(softwareGraph(data))

									
											
												.append("text")
												.attr("class", "tag")
												.attr("id", //"lol");
													function(d, i ){ //console.log(d.data.name);
													 return ((d.data.name)+i); });	
																																				
	
	
							softwareArcs.append("path")
								.attr("d", arc)
								.attr("fill", function(d){ return color(d.value); })
								.attr("stroke", 
								  "#000"
								 )
								.attr("stroke-width", "10")
								.attr("id", function(d) { return d.data.name + "Arc";});
								


							softwareArcs.on("mouseover", function(){
											var selectedArc = d3.select(this);
											var selectedArcNode = selectedArc.node();
											var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
											var selectedId = (selectedArcNode.id);
   											//console.log(softwareTag[0][18]);

											var currentIndex =(softwareArcs[0].indexOf(selectedArc[0][0]));
													//console.log(currentIndex);
													//console.log(softwareTag[0][currentIndex]);
											softwareTag
													.text(function(d, i) { 
									
														if 	((d.data.worktype == "software engineering") && 
															//((softwareTag[0][i]) == ("text#"+(d.data.name)+i)) && 
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
													.attr("id", function(d){ return (d.data.name + "Text")})
													.attr("visibility","visible");

											


											selectedArc.append("text")
													.text(function(d) { 
														if (d.data.worktype == "software engineering")
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
											var bbox = softwareTag[0][currentIndex].getBBox();									

											var selectedTextParent  = d3.select((softwareTag[0][currentIndex]).parentNode);
											var currentRects = selectedTextParent.selectAll("rect");
											var currentRect = currentRects[0][0];
											var selectedText = selectedTextParent.select("text");
											var currentText = d3.select(softwareTag[0][currentIndex]);	

														console.log(selectedText);
														console.log(currentText);
														console.log(currentRects);
														console.log(selectedTextParent.selectAll("rect"));
														console.log((selectedTextParent.selectAll("rect")).length);
											


											if (currentRects[0].length > 0){
												return (currentRects).attr("visibility", "visible");

											} else if (((currentRects[0].length > 0) && (selectedText.length > 0))) { 

												return (currentRects).attr("visibility", "visible");

											} else {
											//var bbox = softwareTag[0][currentIndex].getBBox();
											selectedTextParent.insert("rect", "text")
											   							.attr("x", ((bbox.x)-20))
											   							.attr("y", bbox.y)
											   							.attr("width", ((bbox.width)+40))
											   							.attr("height", bbox.height)
											   							.style("fill", "#000000")
											   							.style("fill-opacity", "1.0")
											   							.attr("rx", ((bbox.height)/2))
											   							.attr("ry", ((bbox.height)/2));
   													}
   														console.log(currentRects);
   														//console.log(bbox);   												//	console.log(bbox);	

   											var selectedTag = selectedTextParent.select("rect");
											//console.log(selectedTag);
												})
												.on("mouseout", function(){
											
													var selectedArc = d3.select(this);
													var selectedArcNode = selectedArc.node();
													var selectedId = (selectedArcNode.id);
													var selectedArcNodeParent = d3.select(selectedArcNode.parentNode);
													
												//	var bbox = softwareTag[0][currentIndex].getBBox();
													var currentIndex =(softwareArcs[0].indexOf(selectedArc[0][0]));

													var selectedTextParent  = d3.select((softwareTag[0][currentIndex]).parentNode);
													var selectedTag = selectedTextParent.select("rect");
													var selectedText = selectedTextParent.select("text");


												
												
													var currentText = d3.select(softwareTag[0][currentIndex]);
												//	console.log(d3.select((softwareTag[0][currentIndex])));
												//	console.log(d3.select((softwareTag[0])));
												//	console.log(currentIndex);
												//	console.log(selectedTextParent);


													
													var currentRects = selectedTextParent.selectAll("rect");
													var currentRect = currentRects[0][0];
													console.log(currentRects);
													console.log(currentRects);
													console.log(selectedText);
													var proficiencyText = selectedArc.selectAll("text");
													(proficiencyText).attr("visibility", "hidden");
													(selectedText).attr("visibility", "hidden");
													(currentRects).remove();										
													

	
												});
	
	 				break;
	
	
	
	 				default:
	 			//	console.log("default action");
	
	 		};
	
	
	
	 	
	 	});
	
	
	});
	
	
	
	
	
	
	
	


});