function whenDocumentLoaded(action) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", action);
	} else {
		// `DOMContentLoaded` already fired
		action();
	}
}
	 
d3.selection.prototype.moveToFront = function() {
	return this.each(function(){
		this.parentNode.appendChild(this);
	});
};

var INFO = {
 "1947": ["Creation of 'Atlantic Records', a major label in R&B"],
 "1949": ["The term 'Rhythm and Blues' replaced the Billboard category 'Race Records' for music of African American Origin destined to a black audience"],
 "1950": ["Ruth Brown sing 'Teardrops from My Eyes', the title stay as BillBoard\u2032s number-one R&B hit for 11 non-consecutive weeks and Brown earned the title of 'Queen of the R&B'"], 
 "1951": ["Johnny Otis, 'the Godfather of Rhythm and Blues' hit 3 time the top R&B chart with  'Double Crossing Blues', 'Mistrustin' Blues' and 'Cupid's Boogie' "],
 "1957": ["Elvis Presley one of the first non african american artist to enter Rhythm and Blues Billboard chart with 'Jailhouse Rock' and 'All Shook up' "], 
 "1960": ["Start of mob culture in UK influenced by R&B music, there music is named as British Rythme and Blues", "Music industry start labeling Rhythme and Blues form white artist under genre of Blue Eyed Soul"],
 "1963": ["Billboard combine its pop and R&B chart because there were too similar", "The Who record there first album 'My Generation' under 'Maximum R&B' genre"], 
 "1964": ["The Rolling Stones publish there first eponym ablum registered under British R&B", "R&B music starts to be involved in Civil Rights movement with Sam Cooke's 'A change is gonna come' and Curtis Mayfield\u2019s 'Keep on Pushing' "],
 "1965": ["The Billboard changed name for music of African American Origin to 'R&B' "],
 "1968": ["James Brown release his single 'Say It Loud \u2013 I'm Black and I'm Proud', an unofficial anthem of the Black Power movement"],
 "1969": ["The Billboard renamed African American Origin music to from 'R&B' to 'soul'", "Grammys first added Rhythm and Blues category, giving it a academic recognition"], 
 "1980": ["Contemporary R&B is created after the demise of disco in the 80s it is 'a genre of smooth pop music that is entirely centered on the vocalist' and different from original Rhythm and Blues music"],
 "1982": ["The Billboard renamed African American Origin music to from 'soul' to 'black'"], 
 "1986": ["Release of Control by Janet Jackson, 'Control is regarded as one of the most influential albums in the history of rhythm and blues and the first album to bridge the gap between R&B and rap music.' (musicologist Richard J. Ripani, author of The New Blue Music: Changes in Rhythm & Blues, 1950\u20131999 (2006)). It also popularize new jack swing genre."],
 "1988": ["George Nelson, music editor to Billboard describe the development of retail outlets for R&B records in a book named 'The Death of Rhythm and Blues'"],
 "1989": ["Mariah Carey 'Vision of love' single becomes reach the number 1 US Billboard Hot 100 and popularize melisma (singing of a single syllable of text while moving between several different notes in succession) in R&B"],
 "1990": ["The Billboard finally changed the soul category to 'R&B' and it remains until today to represent more a type of music than a the race of an audience"],
 "1995": ["First Grammy Award for Best R&B Album goes to II by Boyz II Men"],
 "1996": ["R. Kelly with nickname 'the king of R&B' release 'I belive I can fly' and win 3 Grammy awards"],
 "2003": ["The music journalist Robert Christgau said 'Modern r&b isn't about discrete songs. It's about texture, mood, feel\u2014vocal and instrumental and rhythmic, articulated as they're smooshed together.'"]
}

var GENRES = ["contemporary-rnb", "british-rnb", "alternative-rnb", "new-jack-swing-rnb", "new-orleans-rnb", "jump-blues", "blue-eyed-soul"];
var FEATURES = ["energy", "valence", "danceability", "instrumentalness", "liveness", "speechiness"];

whenDocumentLoaded(() => {
	$.getJSON("./rnb_data.json", function(json) {
		var graph = new Graph(json, INFO);
		console.log(json);
		graph.redraw();
	});
});

class Graph {
	constructor(data, info) {
		this.data = data;
		this.info = info;
		this.year = 1964;
		this.xFeature = "energy";
		this.yFeature = "valence";
		this.xFeatureIndex = 0;
		this.yFeatureIndex = 1;
		this.xScale = d3.scaleLinear().domain([0, 1])
		                              .range([0, 200]);
		this.yScale = d3.scaleLinear().domain([0, 1])
		                              .range([200, 0]);
		this.svg = d3.select("#vis");
		this.infoDiv = d3.select("#info");
		this.audio = undefined;
		this.playing = false;
		this.drawAxis();
	}
	
	reset() {		
		this.svg.selectAll(":not(.fixed)").remove();
		this.infoDiv.selectAll("*").remove();
	}
	
	redraw() {		   				
		this.drawTitle();
		this.drawLegend();
		var gs = this.svg.selectAll("g")
						 .data(this.data.filter(d => d.year == this.year), d => d)
						 .enter()
						 .append("g")
						 .attr("class", "pointer")
						 .on("mouseover", mouseOverCircle(this))
						 .on("mouseout", mouseOutCircle(this));
						 
		gs.append("circle")
		  .attr("cx", d => this.xScale(d[this.xFeature]))
		  .attr("cy", d => this.yScale(d[this.yFeature]))
		  .attr("class", d => "normal " + d.genre)
		  .attr("r", 0)
		  .transition()
		  .attr("r", 2);
	
		gs.append("image")
		  .attr("x", d => this.xScale(d[this.xFeature]) - 3)
		  .attr("y", d => this.yScale(d[this.yFeature]) - 3)
		  .attr("height", 0)
		  .attr("width", 0)
		  .attr("xlink:href", "play.png")
		  .attr("class", "play pointer");
				
		if (this.info[this.year] != undefined) {
			this.svg.append("image")
					.attr("xlink:href", "key.png")
					.attr("x", this.xScale(1) - 10)
					.attr("y", this.yScale(1) - 10)
					.attr("width", 10)
					.attr("height", 10)
					.on("mouseover", mouseOverKey(this))
					.on("mouseout", mouseOutKey(this));
		}
		
		this.infoDiv.selectAll("p")
					.data(this.info[this.year])
					.enter()
					.append("p")
					.text(d => d);
	}
	
	drawAxis() {
		// x-axis
		this.svg.append("line")
				.attr("x1", this.xScale(0))
				.attr("y1", this.yScale(0))
				.attr("x2", this.xScale(1))
				.attr("y2", this.yScale(0))
				.attr("class", "axis fixed");
		   
		// y-axis
		this.svg.append("line")
				.attr("x1", this.xScale(0))
				.attr("y1", this.yScale(0))
				.attr("x2", this.xScale(0))
				.attr("y2", this.yScale(1))
				.attr("class", "axis fixed");
		
		// x-label
		this.svg.append("text")
				.attr("x", this.xScale(0.5))
				.attr("y", this.yScale(-0.05))
				.attr("class", "axis x label fixed")
				.text(this.xFeature);
		
		// y-label
		this.svg.append("text")
				.attr("transform", "translate(" + this.xScale(-0.05) + "," + this.yScale(0.5) + ") rotate(270)")
				//.attr("x", )
				//.attr("y", this.yScale(0.5))
				.attr("class", "axis y label fixed")
				.text(this.yFeature);
				
		// x changers
		this.svg.append("text")
				.attr("x", this.xScale(0.3))
				.attr("y", this.yScale(-0.05))
				.attr("class", "axis label pointer fixed")
				.text("◄")
				.on("mouseover", d => console.log("YO"))
				.on("click", d => changeFeature(this, "x", -1));
				
		this.svg.append("text")
				.attr("x", this.xScale(0.7))
				.attr("y", this.yScale(-0.05))
				.attr("class", "axis label pointer fixed")
				.text("►")
				.on("click", d => changeFeature(this, "x", 1));
				
		// y changers
		this.svg.append("text")
				.attr("transform", "translate(" + this.xScale(-0.05) + "," + this.yScale(0.7) + ") rotate(270)")
				// .attr("x", this.xScale(-0.05))
				// .attr("y", this.yScale(0.7))
				.attr("class", "axis label pointer fixed")
				.text("►")
				.on("click", d => changeFeature(this, "y", 1));
				
		this.svg.append("text")
				.attr("transform", "translate(" + this.xScale(-0.05) + "," + this.yScale(0.3) + ") rotate(270)")
				// .attr("x", this.xScale(-0.05))
				// .attr("y", this.yScale(0.3))
				.attr("class", "axis label pointer fixed")
				.text("◄")
				.on("click", d => changeFeature(this, "y", -1));
	}
	
	drawTitle() {		
		this.svg.append("text")
				.attr("x", this.xScale(0.5))
				.attr("y", -5)
				.attr("class", "axis year")
				.text(this.year);
	}
	
	drawLegend() {
		var genres = Array.from(new Set(this.data.filter(d => d.year == this.year).map(d => d.genre)));
		console.log(genres);
		this.svg.selectAll("dontknow")
				.data(genres)
				.enter()
				.append("circle")
				.attr("cx", this.xScale(1) + 40)
				.attr("cy", (d, i) => this.yScale(0.25) + 5 * i)
				.attr("r", 1)
				.attr("class", d => d);
				
		this.svg.selectAll("dontknow")
				.data(genres)
				.enter()
				.append("text")
				.text(d => d)
				.attr("x", this.xScale(1) + 40 + 5)
				.attr("y", (d, i) => this.yScale(0.25) + 5 * i)
				.attr("class", d => "legend " + d);
	}
	
	changeYear(year) {
		this.year = year;
		this.reset();
		this.redraw();
	}
}

function changeFeature(graph, xy, i) {
	if (xy == "x") {
		graph.xFeatureIndex = mod(graph.xFeatureIndex + i, FEATURES.length);
		graph.xFeature = FEATURES[graph.xFeatureIndex];
		graph.svg.select("text." + xy + ".label").text(graph.xFeature);
	} else if (xy == "y") {
		graph.yFeatureIndex = mod(graph.yFeatureIndex + i, FEATURES.length);
		graph.yFeature = FEATURES[graph.yFeatureIndex];		
		graph.svg.select("text." + xy + ".label").text(graph.yFeature);
	}
	graph.reset();
	graph.redraw();
}

function mouseOverKey(graph) {
	// return function(d, i) {
		// displayKeyPoint(d, i, graph, this);
	// }
	return function (d, i) {
		graph.changeYear(2003);
	}
}

function displayKeyPoint(d, i, graph, elem) {
	var infoCard = graph.svg.selectAll("rect")
						   .data(graph.info[graph.year])
						   .enter();
	
	infoCard.append("rect")
			.attr("x", graph.xScale(1) + 5)
			.attr("y", (d, i) => i * 55)
			.attr("class", "info-card");
			
	infoCard.append("text")
			.attr("x", graph.xScale(1) + 5 + 5)
			.attr("y", (d, i) => i * 55 + 10)
			.attr("class", "info-card")
			.text(d => d)
			.call(wrap, 70);
}

function mouseOutKey(graph) {
	return function(d, i) {
		removeKeyPoint(d, i, graph, this);
	}
}

function removeKeyPoint(d, i, graph, elem) {
	graph.svg.selectAll(".info-card")
			 .remove();
}

function mouseOverCircle(graph) {
	return function(d, i) {
		displaySongInfo(d, i, graph, this);
	}
}

function displaySongInfo(d, i, graph, elem) {
	var g = graph.svg.append("g")
	                 .attr("class", "song-info");
					   
	var cardX;
	if (d[graph.xFeature] < 0.5) {
		cardX = graph.xScale(d[graph.xFeature]) + 10;
	} else {
		cardX = graph.xScale(d[graph.xFeature]) - 10 - 60;
	}
	var cardY = graph.yScale(d[graph.yFeature]) - 40;
	if (cardY <= 0) {
		cardY = 10;
	}
	
	if (cardY + 80 > graph.yScale(0)) {
		cardY = graph.yScale(0) - 75;
	}
	
	g.append("rect")
	 .attr("class", "base-card")
	 .attr("x", cardX)
	 .attr("y", cardY);
	 
	g.append("text")
	 .attr("class", "band-name")
	 .attr("x", cardX + 5)
	 .attr("y", cardY + 62)
	 .text(d.artists)
	 .call(cut, 50);
	 
	g.append("text")
	 .attr("class", "song-name")
	 .attr("x", cardX + 5)
	 .attr("y", cardY + 74)
	 .text(d.name)
	 .call(cut, 50);
	 
	g.append("image")
	 .attr("class", "cover-img")
	 .attr("x", cardX + 5)
	 .attr("y", cardY + 5)
	 .attr("xlink:href", d.cover);
	 
	var gp = d3.select(elem)
			   .on("click", () => {
				   if (graph.audio == undefined) {
					   if (d.preview != "") {
						   graph.audio = new Audio(d.preview);
						   graph.audio.play();
						   graph.playing = true;
						   gp.select("image")
						     .attr("xlink:href", "pause.png");
							 
						   graph.audio.onended = () => {
							   graph.audio = undefined;
						       gp.select("image")
								 .attr("xlink:href", "play.png");
						   };
					   }
				   } else {
					   if (graph.playing) {
						   graph.audio.pause();
						   graph.playing = false;
						   gp.select("image")
						     .attr("xlilnk:href", "play.png");
					   } else {
						   graph.audio.play();
						   graph.playing = true;
						   gp.select("image")
						     .attr("xlilnk:href", "pause.png");
					   }
				   }
				   
				   
				   // if (graph.audio != undefined) {
				  	   // graph.audio.pause();
					   // graph.audio = undefined;
					   // gp.select("image")
					     // .attr("xlink:href", "play.png");
				   // } else if (d.preview != "") {
					   // graph.audio = new Audio(d.preview);
					   // graph.audio.play();
					   // gp.select("image")
					     // .attr("xlink:href", "pause.png");
				   // }
			   })
			   .moveToFront();
			   
	gp.select("circle")
	  .attr("r", 5);
	  
	if (d.preview != "") {	  
		gp.select("image")
		  .attr("height", 6)
		  .attr("width", 6);
	}
}

function mouseOutCircle(graph) {
	return function(d, i) {
		removeSongInfo(d, i, graph, this);
	}
}

function removeSongInfo(d, i, graph, elem) {	
	graph.svg.selectAll(".song-info")
			 .remove();
			 
	if (graph.audio != undefined) {
		graph.audio.pause();
		graph.audio = undefined;
		graph.playing = false;
	}
	
	d3.select(elem)
	  .select("circle")
	  .attr("r", 2)
	  .on("click", () => { return; });
	  
	d3.select(elem)
	  .select("image")
	  .attr("xlink:href", "play.png")
	  .attr("height", 0)
	  .attr("width", 0);
}

function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(" ").reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            x = text.attr("x"),
            y = text.attr("y"),
            dy = 0, //parseFloat(text.attr("dy")),
            tspan = text.text(null)
                        .append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("dy", ++lineNumber * lineHeight + dy + "em")
                            .text(word);
            }
        }
    });
}

function cut(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split("").reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            x = text.attr("x"),
            y = text.attr("y"),
            dy = 0, //parseFloat(text.attr("dy")),
            tspan = text.text(null)
                        .append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join("") + "…");
            if (tspan.node().getComputedTextLength() > width) {
				tspan.text(line.join("") + "…");
				break;
            }
        }
		
		if (words.length == 0) {
			tspan.text(line.join(""));
		}
    });
}

function mod(n, m) {
	return ((n % m) + m) % m;
}