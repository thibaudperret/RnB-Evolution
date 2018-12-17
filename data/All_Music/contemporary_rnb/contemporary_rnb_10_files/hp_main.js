var cnt = 0;
var adWidth = 970;
var adHeight = 250;
var adSpeed = 0.25;

function initElements() {
	TweenMax.killAll();
	TweenMax.set('#banner_Logo',		{x:0, y:0, width:adWidth, height:adHeight, opacity:1});
	TweenMax.set('#banner_Border',		{x:0, y:0, width:adWidth, height:adHeight, opacity:1});
	TweenMax.set('#banner_Copy1',		{x:0, y:0, width:adWidth, height:adHeight, opacity:0});
	TweenMax.set('#banner_Copy2',		{x:0, y:0, width:adWidth, height:adHeight, opacity:0});
	TweenMax.set('#banner_Copy3',		{x:0, y:0, width:adWidth, height:adHeight, opacity:0});
	TweenMax.set('#banner_Relax',		{x:0, y:0, width:adWidth, height:adHeight, opacity:0});
	TweenMax.set('#banner_ImgBox',		{x:10, y:10, width:870, height:230, opacity:1});
	TweenMax.set('#video1',				{x:0, y:0, opacity:1});
	TweenMax.set('#banner_decker',		{right:0, width:10, height:230, opacity:1, backgroundColor:'#000000'});
	TweenMax.set('#banner_ctaBox',		{x:635, y:216, width:154, height:23, opacity:0});
	TweenMax.set('#banner_cta_black',	{x:0, y:0, width:154, height:23, opacity: 1});
	TweenMax.set('#banner_cta_color',	{x:0, y:0, width:154, height:23, opacity: 1});
	TweenMax.set('#banner',				{display: 'block'});		
}
// Set Animation 
function startScene01(){
	TweenMax.to('#banner_ImgBox', adSpeed*2,	{delay:2.5, width:615, ease:Sine.easeOut});
	TweenMax.to('#video1', adSpeed*2,			{delay:2.5, x:-225, ease:Sine.easeOut});
	TweenMax.to('#banner_Copy1', adSpeed,		{delay:3, opacity:1, ease:Sine.easeOut});
	TweenMax.to('#banner_Copy1', adSpeed,		{delay:5, opacity:0, ease:Sine.easeOut, onComplete:startScene02});
}
function startScene02(){
	TweenMax.to('#banner_Copy2', adSpeed,		{delay:0, opacity:1, ease:Sine.easeOut});
	TweenMax.to('#banner_Relax', adSpeed,		{delay:0, opacity:1, ease:Sine.easeOut});
	TweenMax.to('#banner_Copy2', adSpeed,		{delay:2.75, opacity:0, ease:Sine.easeOut, onComplete:startScene03});  
}
function startScene03(){ 
	TweenMax.to('#banner_Copy3', adSpeed,		{delay:0, opacity:1, ease:Sine.easeOut});
	TweenMax.to('#banner_ctaBox', adSpeed,		{delay:1.75, opacity:1, ease:Sine.easeOut, onComplete:CTA_Animation});  
}
function CTA_Animation(){
	TweenMax.set('#banner_cta_color',		{delay:0.5, opacity:1});
	TweenMax.set('#banner_cta_color',		{delay:0.8, opacity:0});
	TweenMax.set('#banner_cta_color',		{delay:1.1, opacity:1});
	TweenMax.set('#banner_cta_color',		{delay:1.4, opacity:0});
	TweenMax.set('#banner_cta_color',		{delay:1.7, opacity:1, onComplete:CTA_Animation2});
}
function CTA_Animation2(){
	TweenMax.set('#banner_cta_color',		{delay:1, opacity:1});
	TweenMax.set('#banner_cta_color',		{delay:1.3, opacity:0});
	TweenMax.set('#banner_cta_color',		{delay:1.6, opacity:1});
	TweenMax.set('#banner_cta_color',		{delay:1.9, opacity:0});
	TweenMax.set('#banner_cta_color',		{delay:2.2, opacity:1});
}

function executeLoop(){
  initElements();
  startScene01();
}

function startBanner(){
  initElements();
  startScene01();
}

startBanner();