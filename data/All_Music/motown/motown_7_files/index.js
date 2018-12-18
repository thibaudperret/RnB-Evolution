(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,30);


(lib.HG1 = function() {
	this.initialize(img.HG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.HG2 = function() {
	this.initialize(img.HG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.HG3 = function() {
	this.initialize(img.HG3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.HG4 = function() {
	this.initialize(img.HG4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.HG5 = function() {
	this.initialize(img.HG5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.HG6 = function() {
	this.initialize(img.HG6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.HG = function() {
	this.initialize(img.HG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.hl = function() {
	this.initialize(img.hl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,43);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,6);


(lib.prod = function() {
	this.initialize(img.prod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,184);


(lib.prod1 = function() {
	this.initialize(img.prod1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,184);


(lib.prod2 = function() {
	this.initialize(img.prod2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,184);


(lib.prod3 = function() {
	this.initialize(img.prod3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,184);


(lib.prod4 = function() {
	this.initialize(img.prod4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,184);


(lib.prod5 = function() {
	this.initialize(img.prod5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,184);


(lib.prod6 = function() {
	this.initialize(img.prod6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,46);


(lib.visual = function() {
	this.initialize(img.visual);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,42);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.schaltflaeche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().dr(-400,-125,800,250);
	this.shape.setTransform(400,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mc_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.hl();
	this.instance.parent = this;
	this.instance.setTransform(5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_text, new cjs.Rectangle(5,-37,85,43), null);


(lib.CTA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(220,-204,0.549,0.549);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_1, new cjs.Rectangle(220,-204,72.4,16.4), null);


(lib.Content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		if(!this.alreadyExecuted){
		    this.alreadyExecuted=true;
		    this.loopNum=1;
		} else {
		    this.loopNum++;
		    if(this.loopNum==3){
		        this.stop();
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(51));

	// CTA
	this.instance = new lib.CTA_1();
	this.instance.parent = this;
	this.instance.setTransform(54.5,224,1,1,0,0,0,43.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({x:61.5},2).to({x:54.5},2).to({x:61.5},2).to({x:54.5},2).wait(55).to({x:61.5},2).to({x:54.5},2).to({x:61.5},2).to({x:54.5},2).wait(88).to({x:61.5},2).to({x:54.5},2).to({x:61.5},2).to({x:54.5},2).wait(51).to({x:61.5},2).to({x:54.5},2).to({x:61.5},2).to({x:54.5},2).wait(34));

	// text
	this.instance_1 = new lib.mc_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.5,73,1,1,0,0,0,63.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({alpha:0.801},1).to({alpha:0},4).to({_off:true},1).wait(144));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159,24);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(155).to({_off:false},0).wait(145));

	// visual
	this.instance_3 = new lib.visual();
	this.instance_3.parent = this;
	this.instance_3.setTransform(15,4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(155).to({_off:false},0).wait(145));

	// prod6
	this.instance_4 = new lib.prod6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(77,2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(155).to({_off:false},0).wait(145));

	// prod5
	this.instance_5 = new lib.prod5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149,3,0.238,0.238);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(129).to({_off:false},0).to({_off:true},26).wait(145));

	// prod4
	this.instance_6 = new lib.prod4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149,3,0.238,0.238);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(103).to({_off:false},0).to({_off:true},26).wait(171));

	// prod3
	this.instance_7 = new lib.prod3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(149,3,0.238,0.238);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(77).to({_off:false},0).to({_off:true},26).wait(197));

	// prod2
	this.instance_8 = new lib.prod2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(149,3,0.238,0.238);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({_off:false},0).to({_off:true},26).wait(223));

	// prod1
	this.instance_9 = new lib.prod1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(149,3,0.238,0.238);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},0).to({_off:true},26).wait(249));

	// prod
	this.instance_10 = new lib.prod();
	this.instance_10.parent = this;
	this.instance_10.setTransform(149,3,0.238,0.238);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},25).wait(275));

	// HG6
	this.instance_11 = new lib.HG6();
	this.instance_11.parent = this;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(155).to({_off:false},0).wait(145));

	// HG5
	this.instance_12 = new lib.HG5();
	this.instance_12.parent = this;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(129).to({_off:false},0).wait(171));

	// HG4
	this.instance_13 = new lib.HG4();
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(103).to({_off:false},0).wait(197));

	// HG3
	this.instance_14 = new lib.HG3();
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(77).to({_off:false},0).wait(223));

	// HG2
	this.instance_15 = new lib.HG2();
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(51).to({_off:false},0).wait(249));

	// HG1
	this.instance_16 = new lib.HG1();
	this.instance_16.parent = this;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25).to({_off:false},0).wait(275));

	// HG
	this.instance_17 = new lib.HG();
	this.instance_17.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


// stage content:
(lib.MM_CH_320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clickTag01.addEventListener("click", clickHandler.bind(this));
		
		function clickHandler(e){
		    if(e.nativeEvent.button==0){
		        console.log('clicked');
		        window.open(clickTag);
		        console.log('triggered');
		    } else if(e.nativeEvent.button==2){
		        //console.log('right click');
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clickTag
	this.clickTag01 = new lib.schaltflaeche();
	this.clickTag01.name = "clickTag01";
	this.clickTag01.parent = this;
	this.clickTag01.setTransform(160.1,25,0.4,0.2,0,0,0,400.1,125);
	new cjs.ButtonHelper(this.clickTag01, 0, 1, 2, false, new lib.schaltflaeche(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag01).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Content
	this.instance = new lib.Content();
	this.instance.parent = this;
	this.instance.setTransform(160,25,1,1,0,0,0,160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,321,51);
// library properties:
lib.properties = {
	id: 'D12E7AFE5CAA394F9140AC93EAF7896D',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/CTA.png", id:"CTA"},
		{src:"img/HG1.png", id:"HG1"},
		{src:"img/HG2.png", id:"HG2"},
		{src:"img/HG3.png", id:"HG3"},
		{src:"img/HG4.png", id:"HG4"},
		{src:"img/HG5.png", id:"HG5"},
		{src:"img/HG6.png", id:"HG6"},
		{src:"img/HG.png", id:"HG"},
		{src:"img/hl.png", id:"hl"},
		{src:"img/logo.png", id:"logo"},
		{src:"img/prod.png", id:"prod"},
		{src:"img/prod1.png", id:"prod1"},
		{src:"img/prod2.png", id:"prod2"},
		{src:"img/prod3.png", id:"prod3"},
		{src:"img/prod4.png", id:"prod4"},
		{src:"img/prod5.png", id:"prod5"},
		{src:"img/prod6.png", id:"prod6"},
		{src:"img/visual.png", id:"visual"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D12E7AFE5CAA394F9140AC93EAF7896D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;