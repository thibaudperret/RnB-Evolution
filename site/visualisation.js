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

// var INFO = {
 // "1947": ["Creation of 'Atlantic Records', a major label in R&B"],
 // "1949": ["The term 'Rhythm and Blues' replaced the Billboard category 'Race Records' for music of African American Origin destined to a black audience"],
 // "1950": ["Ruth Brown sing 'Teardrops from My Eyes', the title stay as BillBoard\u2032s number-one R&B hit for 11 non-consecutive weeks and Brown earned the title of 'Queen of the R&B'"], 
 // "1951": ["Johnny Otis, 'the Godfather of Rhythm and Blues' hit 3 time the top R&B chart with  'Double Crossing Blues', 'Mistrustin' Blues' and 'Cupid's Boogie' "],
 // "1957": ["Elvis Presley one of the first non african american artist to enter Rhythm and Blues Billboard chart with 'Jailhouse Rock' and 'All Shook up' "], 
 // "1960": ["Start of mob culture in UK influenced by R&B music, there music is named as British Rythme and Blues", "Music industry start labeling Rhythme and Blues form white artist under genre of Blue Eyed Soul"],
 // "1963": ["Billboard combine its pop and R&B chart because there were too similar", "The Who record there first album 'My Generation' under 'Maximum R&B' genre"], 
 // "1964": ["The Rolling Stones publish there first eponym ablum registered under British R&B", "R&B music starts to be involved in Civil Rights movement with Sam Cooke's 'A change is gonna come' and Curtis Mayfield\u2019s 'Keep on Pushing' "],
 // "1965": ["The Billboard changed name for music of African American Origin to 'R&B' "],
 // "1968": ["James Brown release his single 'Say It Loud \u2013 I'm Black and I'm Proud', an unofficial anthem of the Black Power movement"],
 // "1969": ["The Billboard renamed African American Origin music to from 'R&B' to 'soul'", "Grammys first added Rhythm and Blues category, giving it a academic recognition"], 
 // "1980": ["Contemporary R&B is created after the demise of disco in the 80s it is 'a genre of smooth pop music that is entirely centered on the vocalist' and different from original Rhythm and Blues music"],
 // "1982": ["The Billboard renamed African American Origin music to from 'soul' to 'black'"], 
 // "1986": ["Release of Control by Janet Jackson, 'Control is regarded as one of the most influential albums in the history of rhythm and blues and the first album to bridge the gap between R&B and rap music.' (musicologist Richard J. Ripani, author of The New Blue Music: Changes in Rhythm & Blues, 1950\u20131999 (2006)). It also popularize new jack swing genre."],
 // "1988": ["George Nelson, music editor to Billboard describe the development of retail outlets for R&B records in a book named 'The Death of Rhythm and Blues'"],
 // "1989": ["Mariah Carey 'Vision of love' single becomes reach the number 1 US Billboard Hot 100 and popularize melisma (singing of a single syllable of text while moving between several different notes in succession) in R&B"],
 // "1990": ["The Billboard finally changed the soul category to 'R&B' and it remains until today to represent more a type of music than a the race of an audience"],
 // "1995": ["First Grammy Award for Best R&B Album goes to II by Boyz II Men"],
 // "1996": ["R. Kelly with nickname 'the king of R&B' release 'I belive I can fly' and win 3 Grammy awards"],
 // "2003": ["The music journalist Robert Christgau said 'Modern r&b isn't about discrete songs. It's about texture, mood, feel\u2014vocal and instrumental and rhythmic, articulated as they're smooshed together.'"]
// }

var GENRES = ["contemporary-rnb", "british-rnb", "alternative-rnb", "new-jack-swing-rnb", "new-orleans-rnb", "jump-blues", "blue-eyed-soul"];
var FEATURES = ["energy", "valence", "danceability", "instrumentalness", "liveness", "speechiness"];
var INIT_YEAR = 1964;

whenDocumentLoaded(() => {
	// $.getJSON("./rnb_data.json", function(json) {
		
		// var graph = new Graph(json, INFO);
		// console.log(json);
		// graph.redraw();
		// var slider = new Slider(INFO,graph);
		// slider.redraw()
	// });
	
	Promise.all([d3.json('./rnb_data.json'), d3.json('./rnb_keypoints.json')])
		   .then(function(files) {
			   var data = files[0];
			   var info = files[1];
			   var graph = new Graph(data, info);
			   graph.redraw();
			   var slider = new Slider(info, graph);
			   slider.redraw()
		   });
});

class Slider {
	constructor(data, graph) {
		this.scale = d3.scaleLinear().domain([1939, 2018])
									  .range([0, 800]);
		
		this.svg = d3.select("#timeline");
		this.data = data;
		this.scaleinv = d3.scaleLinear()
					.domain([0,800])
					.range([1940, 2017])
					.clamp(true);
		
		this.year = INIT_YEAR;
		this.graph = graph;
	}
	
	
	redrawTrack(){
		this.svg.append("rect")
		.attr("id","track")
		.attr("x",0)
		.attr("y",0)
		.attr("rx",20)
		.attr("ry",20)
		.attr("width",800)
		.attr("height",100)
		.on("click", () => this.clickTrack());
	}
	
	redrawCircle() {
		this.svg.selectAll("circle.timeline_year")
				.data(Object.keys(this.data))
				.enter()
				.append("circle")
				.attr("class","timeline_year")
				.attr("cx", d => this.scale(d)) 
				.attr("cy", 50)
				.attr("r", 10)
				.attr("fill","url(#image2)")
				.filter(d => d == this.year)
				.attr("fill", "url(#image1)");
	}
	
	redrawThumb(year) {
		this.svg.append("rect")
		.attr("id","thumb")
		.attr("x", this.scale(year)-5)
		.attr("y",2)
		.attr("width",10)
		.attr("height",96)
		.attr("rx",3)
		.attr("class", "draggable")
		.call(d3.drag()
			.on("start", this.dragstarted)
			.on("drag", this.drag_func())
			.on("end", this.dragended)
			);
	}
	
	redrawAxis(){
		var labels = ["40s", "50s", "60s", "70s", "80s", "90s", "00s", "10s"];
		
		var labelScale = d3.scaleLinear().domain([0,7])
								.range([1940, 2010]);
		this.svg.selectAll("text")
				.data(labels)
				.enter()
				.append("text")
				.attr("x",(d,i) => this.scale(labelScale(i)))
				.attr("y", -10)
				.text(d => d)
				.attr("class", "timeline_label");
	}
	
	redrawKDots(){
		var range = Array(78);
		
		this.svg.selectAll("kdots")
				.data(range)
				.enter()
				.append("circle")
				.attr("class","kdot")
				.attr("cx", (d,i) => this.scale(i+1940)) 
				.attr("cy", 50)
				.attr("r", 1)
				.attr("fill","black");
	}
	
	redraw(){
		this.redrawTrack();
		this.redrawKDots();
		this.redrawCircle();
		this.redrawThumb(this.year);
		this.redrawAxis();
		
	}
	
	dragstarted() {
		d3.select(this).raise().classed("active", true);
	}
	
	drag_func(){
		return (d,i) => this.dragged();
	}

	dragged() {
							  
		var newyear = Math.round(this.scaleinv(d3.event.x));

		this.changeYear(newyear);	
	}
	
	dragended() {
		d3.select(this).classed("active", false);
	}
		
	clickTrack(){
		var coordinates= d3.mouse(this.svg.node());
		var x = coordinates[0];
		var newyear = Math.round(this.scaleinv(x));
		this.changeYear(newyear);
			
	}
	
	changeYear(newyear){
		this.svg.select("#thumb").attr("x", this.scale(newyear)-5)
		this.svg.selectAll("circle.timeline_year")
				.data(Object.keys(this.data))
				.attr("fill","url(#image2)")
				.filter(d => d == newyear)
				.attr("fill","url(#image1)");
				
		if (newyear != this.year) {
			this.year = newyear;
			this.graph.changeYear(this.year);
		}
	}
}

class Graph {
	constructor(data, info) {
		this.data = data;
		this.info = info;
		this.year = INIT_YEAR;
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
				
		if (this.info[this.year] != undefined) {var card = this.infoDiv.selectAll("div")
								  .data(this.info[this.year])
								  .enter()
								  .append("div")
								  .attr("class", "card");
			card.append("p").text(d => d.info);
			card.append("a")
				.attr("href", d => d.url)
				.attr("target", "_blank")
				.attr("rel", "noopener noreferrer")
				.attr("class", "link")
				.text("source");
		}
	}
	
	changeFeature(xy, i) {
		if (xy == "x") {
			this.xFeatureIndex = mod(this.xFeatureIndex + i, FEATURES.length);
			this.xFeature = FEATURES[this.xFeatureIndex];
			this.svg.select("text." + xy + ".label").text(this.xFeature);
		} else if (xy == "y") {
			this.yFeatureIndex = mod(this.yFeatureIndex + i, FEATURES.length);
			this.yFeature = FEATURES[this.yFeatureIndex];		
			this.svg.select("text." + xy + ".label").text(this.yFeature);
		}
		var gs = this.svg.selectAll("g.pointer");
		console.log(this.xFeature);
		gs.select("circle")
		  .transition()
		  .attr("cx", d => this.xScale(d[this.xFeature]))
		  .attr("cy", d => this.yScale(d[this.yFeature]));
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
				// <
				.text("◀")
				.on("click", d => this.changeFeature("x", -1));
				
		this.svg.append("text")
				.attr("x", this.xScale(0.7))
				.attr("y", this.yScale(-0.05))
				.attr("class", "axis label pointer fixed")
				// >
				.text("▶")
				.on("click", d => this.changeFeature("x", 1));
				
		// y changers
		this.svg.append("text")
				.attr("transform", "translate(" + this.xScale(-0.05) + "," + this.yScale(0.7) + ") rotate(270)")
				// .attr("x", this.xScale(-0.05))
				// .attr("y", this.yScale(0.7))
				.attr("class", "axis label pointer fixed")
				// >
				.text("▶")
				.on("click", d => this.changeFeature("y", 1));
				
		this.svg.append("text")
				.attr("transform", "translate(" + this.xScale(-0.05) + "," + this.yScale(0.3) + ") rotate(270)")
				// .attr("x", this.xScale(-0.05))
				// .attr("y", this.yScale(0.3))
				.attr("class", "axis label pointer fixed")
				// <
				.text("◀")
				.on("click", d => this.changeFeature("y", -1));
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