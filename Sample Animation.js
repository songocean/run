(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.shadow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.271)").s().p("A1MCLQoyg5AAhSQAAhRIyg7QIyg5MaAAQMbAAIyA5QIyA7AABRQAABSoyA5QoyA7sbAAQsaAAoyg7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.9,-19.7,383.9,39.6);


(lib.bilbotail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C6F74").s().p("AAkG+QAAgNACgGQAFgOASgYQASgbAFgKIAbg6QAQgjAGgZQAIgdAEgoQAEgkABgiQAAgRgFgYQgEgUgGgUQgFgRgJgVQgKgVgKgPQgJgPgPgRQgOgQgNgLQgNgLgVgNIgjgVIgkgSQgYgLgKgHQgPgIgLgIQgPgLgJgIQgIgIgGgLQgHgLgDgJQgDgJgBgMQAAgKACgLQABgLADgOIAIgZIAOghIAQgiIADgFIAEgGIACgFIADgEIACADIgBAEIgBACIgCAIIgDAIIgEAIIgDAJIgCAGIgCAHIACAAIAEgGIAFgGIAMgKIALgKIALgIQAGgFAFgDIAIgCIAAAAIABABIgnAxIgmAxIAXgOQAZgQANgEQAHgDAUABIATACIgEAFIgdAFQgeAGgLAIQgSANgMAPQgQAUADAPQADAVAWAbQAQAUAZAUQATAPBAAfQA5AdAVAWQAZAaAXAwQASAlAPAtQAHAVABAiQABAYgCAeQgDAfgGAdQgHAjgKAXQgRApgeA0QgaAugcArIAAAAQgCAAgBgIg");
	this.shape.setTransform(-50.7,-73.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C6F74").s().p("AA6HAQgBgNADgGQAFgOARgYQASgbAGgLIAbg5QAQgkAGgYQAIgdAFgoQAEgkABgiQAAgRgEgYIgJgoQgFgSgJgUQgJgWgKgPQgJgPgOgQQgOgRgOgLQgLgLgWgNIgjgUIgigPIgkgPIgagNQgRgIgKgHQgIgGgJgJQgKgJgFgIQgFgHgFgNIgIgVIgHgZQgEgOgBgMQgEgNgCgVIgFgkIAAgGIgBgGIgBgFIABgFIABAAIACACIADAFQAAACABAGIACAIIACAIIADAJIABAGIACAHIABAAIAAgBIABgIIABgHIAEgOIAEgNIAEgMQACgHADgEIADgEIADgCIABABIgFA8IgFA8IAMgYQAMgaAJgJQAFgHARgJQAHgEAIgDIAAAGIgTASQgWAVgEAMQgJAVgDATQgEAZAIAOQAIAVAbAXQAQANAfAWQAQALBDAeQA4AaAWAXQAZAaAWAxQAQAkAPAvQAHAVAAAiQABAYgDAeQgDAfgGAdQgHAjgKAWQgRAqgeA0QgaAvgbAqIgBAAQgDAAAAgIg");
	this.shape_1.setTransform(-52.9,-73.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C6F74").s().p("ABlGqQAAgNACgHQAFgNARgZQATgaAFgLIAcg5QAQgkAHgYQAIgdAFgnQAFglACgiQABgRgEgYQgDgUgFgTQgFgUgHgUIgSglQgJgQgNgQQgOgRgMgMQgNgLgUgNIgjgUQgMgGgWgJIgigMIgagLIgbgKIgUgMQgMgGgIgHQgGgEgLgLIgQgPIgUgSIgUgSIgZgXIgZgXIgEgEIgEgEIgEgDIgDgEIACAAIACAAIADAAIACACIAHAFIAFAEIAHAGIAIAEIAFAEIAGADIAAgBIgEgGIgDgGIgGgLIgFgMIgEgLIgCgLIAAgFIABgCIABgBIAiAvIAhAvIgGgYQgFgaAAgMQABgIAIgQIAIgPIAEAEIgEAZQgDAbAEAMQAEAUALATQAKAWANAMQAQARAfATIA0AeIBSApQA2AZAWAZQAYAaAVAxQAOAkAPAyQAFAUAAAhQAAAZgDAeQgEAegHAeQgHAigKAXQgSApgdA0QgbAvgbApIgBAAQgCAAgBgHg");
	this.shape_2.setTransform(-57.2,-71.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C6F74").s().p("ABxGLQgBgOADgGQAGgNAQgZIAYglIAcg5QAQgjAIgZQAJgdAGgnQAGgkADghQABgSgDgYQgCgUgEgUIgKgoQgIgXgIgPQgIgQgMgRQgNgSgNgNQgLgMgUgNQgQgLgRgKQgMgHgWgJIghgNIgbgJIgagIIgWgIIgWgIIgVgHIgVgHQgKgDgQgBQgLgCgQAAIghgBIgggBIgGAAIgGAAIgEgBIgFgBIABgBIACgBIADgBIADgBIAHAAIAHAAIAIgCIAJgBIAHgBIAGgCIgBAAIgFgCIgHgBIgLgFIgLgFIgJgFIgIgGIgDgHIABAAIA3ANIA2AMIgTgNQgVgPgHgKQgDgGgDgQIgCgPIAGAAIANATQAPAVAIAHQANAKAXALIAmASQAOAHArASQAlAQASAKIBTAqQAyAbAWAbQAXAbATAzQAMAjANA0QAEAVgBAhQAAAXgFAfQgFAegHAeQgIAigLAXQgSAogdA0QgcAwgaAoIgBAAQgDAAAAgHg");
	this.shape_3.setTransform(-58.4,-68);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C6F74").s().p("ABhFkQgBgOADgFQAGgOAQgZQATgbAFgJIAdg6QARgiAIgYQAJgdAJgnIAMhGQABgQgBgYQgBgVgDgUIgIgpQgGgYgHgPQgHgRgMgSQgLgTgMgNQgLgMgSgPQgQgOgQgLQgNgHgTgKIgigOQgLgEgQgFIgagHIgXgGIgYgDIgVgBQgNAAgJACQgKACgOAHIgXAMQgJAGgRAMIgaAUIgFADIgEADIgEADIgEABIAAgCIABgCIAJgIIAFgFIAHgGIAGgGIAEgFIAEgFIAAAAIgGACIgFADIgLADIgLADIgJABIgJABIgEgCIgCgCIABgBIAygWIAygXIgXABQgXAAgLgCQgGgCgJgLIgJgKIAFgFIAUAHIAhAHIAqgCQAcgCAOACQAgAGAeAIQAjAKAYANQA1AbAcATQAvAeAWAdQAWAcAPA2QAKAhAJA3QAEAWgDAgQgCAWgGAgQgFAdgIAdQgKAjgKAWQgUAqgcAyQgdAwgbAoIAAAAQgDAAAAgIg");
	this.shape_4.setTransform(-56.9,-64.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C6F74").s().p("AA8FgQAAgNACgGQAGgNARgZQATgcAFgJIAeg5QARgiAJgYQAKgcAKgnQAKgkAGghQACgQABgYQABgVgCgVQgCgUgDgVQgEgYgGgQQgFgRgKgTQgKgUgLgOQgKgOgRgQQgPgQgQgMQgLgIgTgLIgigRIgbgKIgbgIQgLgDgMgBQgOgBgJABQgLAAgKACQgMAEgIAEQgIAFgKALIgQATQgGAKgKATIgNAcIgFAJIgCAEIgCADIgBgBIAAgCIAEgLIACgHIADgJIAEgOIACgHIgBABIgDAFIgEAFIgHAIIgHAHIgHAGIgIAEIgFgBIAAgBIAhgqIAigrIgTAMQgUALgKACQgFABgMgEIgKgGIACgGIATgFIAegIIAlgTQAYgMAPAAQAfAAAiAIQAkAHAZAOQAsAXAkAdQAsAiAUAhQATAdALA2QAGAgAHA6QACAWgGAfQgCAVgIAhQgHAegJAcQgKAhgLAXQgWAqgcAxQgdAxgaAnIAAAAQgDAAgBgJg");
	this.shape_5.setTransform(-53.2,-63.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C6F74").s().p("AAXFoQgBgMADgHQAHgNAQgZIAYgkIAgg4IAbg6QAMgcAMgmQAMgkAIggQAEgRADgWQACgWABgTQAAgWgBgUQgCgYgEgSQgEgRgHgVQgJgUgJgPQgJgPgPgSQgOgRgNgNQgMgLgSgMQgPgLgRgKQgMgGgOgGQgPgGgNgEQgKgDgNgBQgNgCgKABQgKAAgKADQgLADgHAFQgHAHgIALQgHALgFALQgEAKgFAUIgIAfIgCAOIgCADIgBgBIgBgCIAAgDIACgJIABgGIAAgIIABgJIAAgHIABgHIgBAAIAAABIgFAKIgDAKIgGAJIgEAHIgHAFIgCABIgCAAIAAgBIAXgwIAXgwIgQAOQgRARgJAFQgEABgLgBIgJgCIAAgHIAQgKIAagQQAQgKARgOQAVgPAPAAQAegCAjAJQAlAJAYAQQAnAZAjAiQApAmASAkQAQAfAFA3QAEAdAAA+QAAAVgHAgIgPA0IgSA5QgNAggMAWQgWAtgbAuQgfAzgaAkIgBAAQgCAAgBgJg");
	this.shape_6.setTransform(-49.6,-64.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C6F74").s().p("AgwGDQAAgNADgGQAHgOARgXIAZgkIAig2QAUghAMgWQAOgcAQgkIAahBQAGgRAGgWQAGgUADgUQAEgVABgUQADgYAAgRQgBgSgDgVQgEgWgFgRQgFgRgKgVQgJgTgKgRQgJgNgNgSIgYgcQgKgKgMgKQgMgLgMgHQgJgGgKgFQgMgGgKgDQgJgCgKAAQgMAAgIACQgJAEgLAJQgJAIgIAJQgHAKgJARIgPAbIgHAPIgBgBIAAgCIADgLIACgGIADgHIACgIIACgHIADgGIgBABIgHAJIgGAJIgHAHQgCADgEACIgFAEIgEAAIAAgBIAhgpIAhgpIgTALQgUAMgLADQgDABgKgDIgIgDIACgGIARgHQATgJAKgCIAmgQQAYgIAOADQAdAIAeAUQAgATATAXQAeAiAaArQAbAvALAmQAIAigEA3QgBAbgKA+QgDAUgLAfIgUAzQgLAbgNAbQgPAfgMAVQgdAwgaAoQghAzgaAgIgBABQgCAAgBgJg");
	this.shape_7.setTransform(-42.1,-67.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C6F74").s().p("AiLGXQAAgNADgGQAIgOASgWIAcgiIAmg0QAXggANgVQAQgaAUgiQAUghAOgbIASglQAKgUAGgSIANgmQAIgYADgRIAFgnQACgVgBgSQAAgRgDgXIgGgoIgKgkIgMgjIgMgcIgOgaIgOgSQgJgKgIgGQgIgHgJgEQgKgFgIAAQgJAAgOADQgMAEgKAGQgKAGgOAMIgXAVIgIAJIgDACIAAgBIACgFIAEgFIAJgMIAEgGIAFgFIADgFIAAAAIgFAEIgFADIgIAFQgFAFgEABIgGAEIgHADIgBgBIgBAAIgBgBIAtgcIAsgcIgWADQgYAEgKABQgEAAgIgFIgIgEIAEgFQAFgCAPgBQAVgEAKABIAqAAQAYACANAIQAWARAVAgQAUAeALAdQAPAqAKAxQALA0gBAoQAAAjgPA0QgHAZgUA6QgHAUgPAdIgaAvIgeAyIgfAyIg8BUQgmAygbAeQgDAAAAgJg");
	this.shape_8.setTransform(-32.7,-68.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C6F74").s().p("AjBGkQABgMAEgGQAJgOASgUIAeghIAqgxIApgwIAtg3QAYgfASgZIAXgiIAXghIAVgkIATgjIAPglQAIgTAFgRIAKgoIAJgoIAGgkIAEglIABgdIAAgeQgBgLgDgMQgDgOgEgIQgEgKgGgHQgHgKgGgEQgJgFgOgDQgMgDgLABQgLAAgTAGIgcAKIgLAGIgDABIAAgCIAEgDIAGgEIAEgDIAHgEIAHgEIAGgEIAFgCIgBAAIgFABIgGABIgKADIgKACIgHABIgHACIgDgCIABgBIAzgJIA1gIIgXgGQgYgHgKgEQgEgBgIgGIgGgGIAGgEIAVAEQAXAGAKAFIAmASQAWAOAHAOQALAYADAnQADAfgCAjQgCArgKAyQgJAygNAnQgLAggZAvIgsBMQgKARgUAbIggAqIgjAuIglAtIhBBQQgqAwgcAbIAAAAQgDAAAAgKg");
	this.shape_9.setTransform(-27,-69.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C6F74").s().p("AkgGOQACgNAEgFQAKgOAUgUIAfgfIAvgsIAugsIAzgxIAzgwIAcgdIAdgcIAdgfIAbgdIAZgfIAXgfIAYghIAYggIAUgfIAVgeIAQgaQAKgPAFgKQAFgLAEgLIAGgXIABgTQgBgMgDgHQgFgKgJgIQgJgKgKgDQgKgGgSgDIgegFIgEABIgFAAIgDABIgDgBIAAAAIAGgCIAGgBIAGgBIAIgCIAIgBIAEAAIAJADIA0APIgRgPQgTgTgIgJQgDgDgGgKIgFgJIAIAAIATAPQAUARAHAKQARAYAGALQALAYgBAOQgDAbgSAkQgGAMgbAtQgTAjgeArQgaAngcAiQgVAagiAoIg7BAQgMAOgZAXIglAlIgqAoIgpApIhIBJQguAwgdAXQgCgBAAgJgACmlxIgHgBIgDgCIABgBIAQAFg");
	this.shape_10.setTransform(-17.2,-67);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C6F74").s().p("Al8FFQAEgMAEgFQAKgOAVgSIAigdIAzgoIAygnIA6gpIA6goQANgJAVgOIAigWIAigXIAigVQAJgFAYgRIAhgWIAjgWIAigUIAhgSIAhgQIAbgNQARgIAJgGIAUgNQALgJAHgHQAHgIAFgIQAHgJABgHQABgLgCgMQgCgNgFgIQgGgJgPgNIgXgSIgFgBIgEgCIgEgBIgDgBIABgBIAGAAIAHACIAFABIAJADIAEADIAKAKIAmAnIgFgYIgJgmIgDgTIgBgLIAIADIAKAZQAKAbABANQAAAagCARQgDAagLAMQgOATgmAVIg6AgIhOAuIhNAuIhHAvIhHAxIgrAdIgrAeIgvAiIguAjIhNBEQgyAsgdAUQgDAAAAgKgAEmk+IAAgCIgBgCIAAAAIAIAIIgHgEg");
	this.shape_11.setTransform(-7.7,-59.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C6F74").s().p("AnIDVQADgNAFgFQAMgNAWgRQAMgKAYgQIA2gkQAegUAZgNIA/ghIA/geQAQgHAXgIQARgIAVgHIAngOIAngNIAngLIAmgLIAogGIAogFIAlABIAlABIAeADIAeAEIAXgBIAYgCIATgFQAMgEAFgFQAHgIAGgKQAGgMAAgJQAAgLgHgRIgLgcIgCgEIgEgDIgDgDIgDgDIACAAIAEABIACACIAFAFIAFAEIAFAHIABACIADANIAOA5IAIgZIAPgmIAIgUIAGgNIAFAIIgGAdQgHAfgHAMQgMAUgOAOQgSATgQAFQgXAGgrgFQg2gFgNABIhYAFQg2AFgiAHQghAHgxATIhQAeIgwAUIgvAWIg0AcQgeAQgTANQgUANg+AwQg2ApgdARQgEAAACgJgAGGjYIgBgFIABAAIACAJIgCgEg");
	this.shape_12.setTransform(0.4,-47.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C6F74").s().p("AnlBcQAFgMAEgFQANgMAXgPIAlgZQAcgPAegOQAhgRAagLQAbgLAogNIBEgVIAogIIApgHIAqgEIApgDIApAAQAYABARACIAnAJQAVAGARAHQAPAGATALIAgATQAIAFAPAOIAYASIAUANQAMAIAJAEQALAFAHACQAMAFAIgCQAKgBAKgFQAMgFAEgHQAGgKAEgRIAEgeIAAgFIgCgFIgCgJIABAAIACACIACACIABADIACAHIACAIIABAIIAAABIgEALIgTA4IAVgPIAjgXIAUgOIANgKIAAALIgXAVQgZAYgNAGQgUAJgVAEQgaAEgQgGQgUgGgjgfQgmgfgQgIQgqgUgngOQgxgSgkgFQgggEg0AGIhWAMQgWAEgdAHQgaAGgYAIQgdAJgZALQggAMgVALQgYAMg+AqQg6AmgeAOQgDAAACgKgAGyhHIACgGIABABIgDAKIAAgFg");
	this.shape_13.setTransform(3.6,-35.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C6F74").s().p("AFtChQgUgDgUgKQgXgLgLgOQgMgQgOguQgNgugMgPQgbgkgfgeQglgjghgQQgegOg1gHIhWgGQgVgCgfACQgZADgbAFQgdAFgbAHQghAIgXAKQgaALg/AkQg9AjgeAMQgEgBADgKQAFgLAGgFQAOgNAWgNQATgMAVgJQAdgPAfgLQAjgPAbgHQAdgIAogHQAkgHAkgEQARgBAZAAQAVAAAVACQAUAAAVAEQAYAEASAEIAoAMQAXAIAPAIQAQAJASANQASANANAOQAKAKAMATQALAPAJARQAFAJAGASIALAdIAJAXQAGANAGAIIAKARQAIAKAHAEQAJAFAKACQAMACAHgDQALgFAMgOIAUgYIACgFIABgGIACgJIACABIABADIAAADIgBADIgBAIIgDAHIgDAJIgBACIgHAFIgvAnIAaAAIAqgBIAcgBIASgBIgHAJIghAHQgYAEgPAAIgMgBgAGvBHIAGgFIAAABIAAAAIgKAIIAEgEg");
	this.shape_14.setTransform(0.8,-23);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C6F74").s().p("AFEDmQgkgOgLgLQgPgNgMgUQgNgVgCgSQgCgTAMgwQAMgvgFgTQgIgqgTgoQgVgvgagYQgZgWgzgSQgQgGhFgSQgUgHgfgBQgZgCgbACQgeABgcAEQgiAFgXAIQgcAJhBAgQhAAegdAKQgDgBADgKQAFgLAGgEQAPgNAXgMQAVgLAUgHQAfgNAggJQAkgMAbgEQAegFAqgBQAlgDAjACQASAAAXAFQAWAEAVAFQATAGAVAIQAXAIARAJQATAKARAMQAVAOAMANQAMAMANATQAMATAHARQAGAQADAVIAFAmIgDAdIgGAfIgDAZQgCAPABAJIAAAUQABANAEAHQAEAJAIAGQAJAJAHABQAMABARgHIAdgMQACAAADgDIAEgFIAHgHIABACIgCAGIgCACIgGAGIgGAGIgIAHIgDABIgFACIg+AKIAXAOIAlAVIAZAOIAQAKIgKADgAF+CeIAEgBIAEAAIgBABIgPADIAIgDg");
	this.shape_15.setTransform(-5.5,-11.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C6F74").s().p("ADyEbIgXgaQgYgdgFgQQgGgSgBgXQgBgYAGgSQAGgQAignQAfgkAEgWQAIgogFgtQgGgygTgeQgSgdgvgbQgSgKg+gdQgUgJgfgHQgYgEgcgCQgdgCgcABQgiACgYAFQgeAIhBAcQhCAcgeAIQgDgCADgJQAHgMAFgEQARgLAXgLQAVgKAVgHQAggKAggHQAmgJAbgCQAfgCAqADQAkACAjAGQASADAYAIQAVAHATAJQATAJAUAMQAVANAOAMQAQAOAPAQQARATAIAQQAJAQAGAWQAHAWABASQAAAQgEAWQgEATgGAQQgFALgLARIgRAZIgOAVIgNAVIgJATQgFALgBAIQAAAKADAKQAEAKAGAFQAKAFATADIAfACIAHgBIAGgCIAFgCIAFgBIAAABIgCADIgGADIgJADIgIACIgKACIgHABIgBAAIg9gUIAOAXIAWAkIAQAaIAKAQgAEpDZIAKABIAIADIgBACIgRgGg");
	this.shape_16.setTransform(-12.8,-4.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4C6F74").s().p("ABvEeQgJgeAAgDQgLglACgQQABgTAJgVQAJgWAMgOQALgMAvgZQAqgWALgTQATgkAHgtQAIgygNghQgLgggrgiQgTgPg3glQgSgLgfgJQgXgIgdgEQgcgFgdgBQgigBgXAEQgfAHhCAZQhDAZgeAGQgDgCADgJQAHgLAGgEQARgLAXgKQAXgJATgHQAigIAggFQAngHAbAAQAgAAAoAIQAlAFAjAJQASAGAWAKQAUAKASAMQASAKASAQQAUARALAOQAOAQALAUQANAVAFASQAFARABAYQABAXgEASQgEARgLARQgJASgMAOQgHAJgQAMIgZARIgVAPIgUAPIgQAOQgJAJgEAHQgDAIgBAKQgCAMAFAFQAHAKARAJIAcAOIAHABIAHABIAGABIAFAAIgBACIgHACIgEgBIgJAAIgJgBIgKgCIgJgDIgwgpIAEAbIAFApIAEAfIACATgADMEDIgQgNIALAGIAGAGIgBABg");
	this.shape_17.setTransform(-15.8,-2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C6F74").s().p("ACBD3IAEAGIAHALIAHAMIACAIIgBABIgTgmgAAxERIAFgiQAFgkAHgQQAIgRAOgUQAPgSAPgMQAMgKAygUQAqgSAMgUQAUggAHgvQAIgygNghQgMgggqgjQgTgPg2glQgSgMgfgJQgYgGgcgGQgcgEgdgBQgigBgXAEQgfAGhCAaQhEAZgdAGQgEgCAEgJQAGgLAGgEQARgLAYgKQAWgKAUgGQAigIAggFQAmgHAcAAQAfAAAoAHQAmAGAiAJQATAFAWALQAUAKASAMQARAKASARQAUAQALAPQAOARALASQANAXAFARQAFATAAAWQABAXgEAUQgEANgLAVQgJAQgMAOQgHAJgQAKIgaAQIgVANQgPAIgGAFIgSALQgLAIgFAFQgGAJgDALQgEALADAIQADAKANARIAWAYIAGAFIAFADIAFADQADABABACIgBABIgDAAIgIgCIgIgGIgHgEIgJgGIgIgHIgGgEIgEgEIgXgwIgHAbIgKApQgDAKgIAUIgHASg");
	this.shape_18.setTransform(-15.8,-3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C6F74").s().p("AA1EYIgBAAIAMhCIAMhBIgUATQgVAWgLAHQgHAGgTAKIgSAJIAAgKIAXgWQAbgYANgJQAPgMAWgNIAngVIA/gVQApgOAMgTQAUggAHgvQAHgygNgiQgMgggrgkQgTgPg2gkQgSgMgfgJQgXgHgdgEQgcgFgdgBQgigBgYAFQgeAGhCAZQhDAageAHQgDgCADgJQAHgMAGgDQAQgMAYgKQAWgKAUgFQAigKAggFQAngGAcgBQAfAAAoAHQAlAGAiAJQATAEAWAMQAVAKASAMQARALASAQQATAQAMAOQAOASALATQANAWAFASQAFARAAAYQABAXgEATQgEAPgKATQgKARgLANQgIAJgPAJIgZAQIgWAKIgVALIgUAJQgMAGgGAGQgKAHgGAIQgIAMgCAJQgDAMACAVIADAhIABAIIADAGIABAFQACADgBACIgCAAIgDgCIgDgGIgDgIIgDgJIgDgKIgEgKIgCgHIgCgIIgBABIgBAHIgBAHIgCAOIgDAPIgDAMQgBAKgCAEIgFAIg");
	this.shape_19.setTransform(-15.8,-3.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C6F74").s().p("AAND9IAAgEIABgDIACgDIAEgHIAEgHIAEgJIAFgJIADgGIADgHIgBAAIAAAAIgGAFIgFADIgMAJIgNAGIgLAGIgNAFIgJAAIAAgCIAzgmIAzglIgbADQgdAEgNgCQgIgBgUgIIgTgHIAGgGIAfADQAfACAPAAQAWgBAWgEQAagEARgFIA/gPQAmgMAMgTQAUghAGgxQAGgxgOgjQgMgggrgiQgVgRg1gjQgSgLgfgJQgYgHgcgEQgcgFgdAAQgjgBgXAFQgfAHhCAaQhDAagdAGQgEgCAEgIQAGgMAGgEQARgLAXgKQAXgKAUgGQAhgJAggGQAmgHAcgBQAfABApAFQAmAGAiAIQASAFAXALQAUAJASAMQASALASAQQATAQAMAPQAPARALAUQANAWAFASQAFARACAYQABAXgEATQgDAQgLATQgJARgLAPQgHAIgPAKIgZAPIgVALIgXAJIgVAHQgPAEgGAEQgNAGgKAGQgMAIgIAGQgJAJgNARIgVAbIgEAGIgEAFIgDAFQgBADgCABg");
	this.shape_20.setTransform(-15.7,-6.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C6F74").s().p("AgeDVIAAgCIACgCIAFgCIAIgBIAIgCIAIgCIAJgDIAGgCIAGgDIAAgBIgIgBQgEABgCgBIgOgDIgNgFIgMgGIgMgHIgGgHIABgBIAAAAIA7AHIA7AGIgXgLQgYgNgJgJQgGgGgHgTIgFgSIAFAAIAQAWQATAXAMAGQASAIAWAFQAYAEASgDQArgGAUgHQAmgMAMgVQAUghAEgyQAEgygPgkQgNgfgrgiQgWgQg2giQgSgLgfgIQgYgHgdgDQgcgEgdABQgigBgYAGQgeAHhCAaQhDAbgdAHQgDgCADgIQAGgMAHgEQAQgLAXgLQAXgKATgGQAhgKAggGQAngIAcAAQAfgCAoAGQAmAEAjAIQASAEAXALQAVAJARAMQASAKASAPQAUAQANAOQAPARALAUQAOAWAGARQAGASACAYQABAYgDATQgDAQgKAUQgJASgLAQQgIAJgOAKIgaARIgWAKQgLAFgMAEQgJADgPACIgYAFIgaAFIgaAFIghAGIghAGIgGABIgGAAIgGABIgCAAIgDgBg");
	this.shape_21.setTransform(-15.5,-10.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C6F74").s().p("ABVDEQgQgBgLgDQgMgDgTgIIgegMIgGgDIgFgEIgFgDIgDgEIABgCIAFABIAJAGIAHAEIAIACIAIADIAGACIAGABIAAgBIgBAAIgFgEIgGgFIgJgKQgFgHgCgFIgGgMQgDgHgCgGIAAgKIABAAIAqAjIArAkIgPgSQgPgUgDgLQgCgHAGgTIAGgRIADAEQgBAFABAUQABAbAIAJQAMANAWAIQAVAKASgCQAkgEAbgKQAmgNAMgWQATgiACgzQACgzgRgkQgOgfgtggQgVgPg4ggQgTgLgfgHQgYgFgdgDQgcgDgdACQgiAAgYAGQgdAIhCAcQhCAdgdAHQgEgBAEgJQAFgMAHgEQAQgMAWgLQAXgKAUgHQAhgKAfgIQAngIAbgCQAfgCApAEQAmAEAjAGQASAEAXAJQAVAJASALQATAKATAOQAUAPANAOQAPAQANATQAOAWAHARQAHATADAWQADAZgDATQgCARgKAVQgIATgLAQQgHAKgPAMIgaARQgJAGgPAFQgNAGgLADQgKACgPACIgaABIgbgCg");
	this.shape_22.setTransform(-15.2,-13.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4C6F74").s().p("AB7C/QgOAAgMgEQgQgCgJgFQgMgGgQgMIgagUIgEgFIgEgGIgEgFQgCgCAAgCIABgBIAFACIAHAJIAFAFIAHAGIAHAGIAFACIAFADIAAgBIgFgFIgDgFIgGgNIgEgOQgCgGAAgIIgBgOIABgHIACgDIABAAIAeAtIAcArIgIgQQgLgWABgLQAAgHAKgQIAMgOIAAAFIgIAXQgHAZAGAJQAJAOAVALQAUAKARgCQAjgEAdgNQAlgPALgYQAQgjgBg0QgCgzgTgjQgQgfgugdQgVgNg7geQgTgJgfgFQgYgEgegCQgcgBgdADQgiACgYAGQgdAKhAAeQhCAegdAJQgDgCAEgJQAFgMAFgEQAQgMAXgMQAVgLAUgHQAhgLAfgJQAmgKAcgCQAfgEApACQAlABAjAGQATACAXAJQAWAGATAKQASAJAUANQAVAOAOAOQAQAPAOASQAPAUAHARQAJASAEAXQAFAZgBATQgBARgIAWQgIAUgJARQgHALgOAMQgLAKgOAKQgKAHgOAGQgNAGgMADQgLACgPABIgLAAIgPgBg");
	this.shape_23.setTransform(-14.8,-15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C6F74").s().p("ACSC4QgNgDgSgIIgegOIgGgEIgFgEIgFgEIgEgDIACgCIACAAIAMAHIAHAFIAIADIAIAEIAGACIAGABIAAAAIgBgBIgFgEIgFgEIgKgMIgIgNIgFgNQgEgHgBgHIAAgGIAAgEIABAAIApAmIAnAlIgNgQQgOgUgDgKQgCgJAHgTIAGgRIADAFIgCAaQgBAcAIAIQALANAWAFQAWAGAOgGQAfgOAYgWQAegbADgaQAEgmgRgxQgRgxgbgeQgXgZgzgTQgTgIhDgTQgUgGgggBQgYgBgcACQgdACgdAGQghAFgXAJQgcAKhAAiQg+AhgeALQgEgBAEgKQAFgMAFgEQAPgMAXgNQAUgMAUgJQAfgNAfgKQAkgNAbgFQAfgGApgEQAlgCAjABQASgBAZAFQAWADAUAGQAUAGAWAJQAWAJARAKQASALASAOQATAQAMAPQANAPAKAVQAMAXAEASQAFAQgBAXQgBAWgEATQgCAMgJARQgIAOgJANQgHAKgMAKQgKAJgLAGQgKAGgNAFQgNAFgMACQgMACgNAAQgQAAgKgCg");
	this.shape_24.setTransform(-12.9,-18.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C6F74").s().p("ADPCqIgigCIgGgBIgHgCIgFgBIgFgCIAAgBIACgBIADgBIADAAIAIABIAIACIAJgBIAJABIAGgBIAGgCIgBAAIgHgCIgHgCIgNgHIgNgIIgLgJIgLgKIgFgJIABgBIA3AUIA3AUIgWgNQgWgPgGgKQgGgHgDgUIgDgTIAEADIALAbQANAbAMAGQAOAHAXAAQAWgCALgKQAVgXANgfQAOgkgGgZQgMgjgkgpQghglglgVQgdgQg3gHIhYgFQgWgBgeAEQgXAEgcAGQgdAHgcAIQggAKgWAKQgaANg/AmQg7AkgdANQgEgBACgJQAEgMAGgFQAOgMAWgPQATgMAUgLQAdgOAegNQAjgQAagJQAdgJApgJQAkgIAjgGQAQgDAZgBQAXAAAUABQAUABAXADQAYAEASAFQAWAGAUAHQAXAJAPAKQARALASAPQATAQALAQQAKAOAJAVQAJAUAEASQACAMgBATQAAAQgEAPQgCAMgGAOQgGAMgHAKQgGAJgLAJQgJAJgLAGIgWALQgNAFgKABQgKACgPAAIgIAAg");
	this.shape_25.setTransform(-10.1,-24.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C6F74").s().p("AD2CUIAAgCIAFgDIAHgDIAGgDIAHgEIAHgFIAFgDIAFgEIgBAAIgBAAIgGABIgHACIgPABIgPAAIgNgBIgNgCIgIgEIAAgBIA5gLIA5gLIgagCQgdgDgMgFQgIgDgPgMIgNgNIAGgCQAFAFATALQAcAQAOAAQASgBAUgJQAVgJAFgPQAIgbgFgiQgFglgSgSQgagbgzgUQgsgRgtgHQgggFg2AKIhVATQgVAEgdALQgWAHgbALIg2AYQgeAPgVAMQgWANg+AsQg4AngeAQQgDgBACgJQAEgMAFgFQAMgNAWgQIAlgZQAagQAegRQAggSAZgMQAcgNAlgQIBDgaQARgGAXgGIAogKIAqgHIArgFQAXgCATABQAZAAARADQAVADAWAHQAXAHARAIQAQAJARANQARAOAMAOQAJAKAIAQQAIAPAEAOQAEALABANQABAPgBALQgCALgEAMQgFAMgGAJQgGAJgKAJQgJAJgKAGQgKAHgTAKIgdANIgGACIgFACIgFACIgFABg");
	this.shape_26.setTransform(-7.4,-33.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C6F74").s().p("AmDCrQACgNAFgFQAMgOAUgRIAkgcQAWgRAdgVIA2glIA6gmIA9gmIAjgVIAlgUIAkgUIAngRIAmgQQAXgJAQgEQAWgGAUgEQAZgEARgBQATAAAVACQAWADARAFQANAEAPAJQAPAJAKAJQAJAIAIALQAJALAEALQAFAJABANQACANgBAKQgBAKgFANIgLAXQgEAKgMAQIgRAaIgEAEIgDAFIgDADIgCACIgCAAIAAgBIAAgDIABgBIADgGIAEgFIADgHIAEgHIACgFIACgFIgBAAIAAAAIgFAFIgEAFIgMAJIgLAHIgKAGIgKAFIgFABIgDAAIAAAAIApgnIAngmIgYANQgaANgNAEQgJACgQAAIgRgBIADgEQAHAAAWgEQAegFALgIQASgNAMgPQAQgUgEgPQgGgagWgaQgYgcgYgGQgkgKg3AGQgpAFgyAOQgfAJgwAZIhMArQgTAKgaARIgsAcIgxAfQgcATgTAPQgPALhAA1Qg0ArgdATQgEAAACgJg");
	this.shape_27.setTransform(-6.6,-43.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4C6F74").s().p("AlsECQACgNAEgGQAKgNAVgTIAhgeIAvgrIAvgrIA0gwIAzgvIAegdIAdgdIAdgdIAdgdIAegcQASgTAMgJQAUgSAMgKQAVgPAOgJQAQgKATgJQAVgJAQgFQANgEASgBQARgBANACQALABAOAFQANAFAJAGQAIAGAIAKQAHAKAFAKQAEAJADAPQACANABANQABAMgCATQgBARgCAPIAAAEIgBAFIAAAEIgBADIgCAAIgBgBIAAgBIAAgOQABgCAAgFIgBgGIAAgFIgBgGIAAAAIAAACIgCAFIgCAHIgEAMIgFALIgFAIIgFAJIgFAEIAAgBIAMg0IAMgzIgMAYQgOAbgIALQgDAFgMAJIgLAIIAAgFIARgTQATgWAEgLQAHgZACgRQADgagLgLQgSgTghgJQgigJgZAHQgiAKguAiIhIA7QgYATgnApIg7A/IgmAkIgmAkIgqAoIgpAoIhLBIQguAtgeAXQgEAAACgJg");
	this.shape_28.setTransform(-9.2,-52.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C6F74").s().p("Ak9FYQABgNAEgFQAIgOAVgUIAfggIAqgvQAbgeAPgTQATgXAYggQAWgeASgbIAWgiIAVgjIAUgkIASglIAQglIARglIAQgmQALgZAIgNIAVgiQANgTALgMQAKgLANgJQAOgLAMgGQAKgFANgDQAOgDALABQAKAAAMAEQAMAFAIAFQAJAHALALQAKAKAHALIAQAcIAOAeIABAFIACAEIABAHIgBABIgBgBIgEgIIgCgGIgDgGIgDgHIgDgEIgDgFIgBABIADAHIABAGIABAMIABANIgBAJIAAAKIgDAEIgBAAIgPgyIgQgyIAEAbQAEAcgBANQAAAFgGALIgFAKIgDgDIAFgXQAEgZgDgKQgIgagIgPQgMgXgPgDQgYgGghALQghALgRATQgYAYgYA3IgnBVIglBPQgYAzgPAZQgKATgSAbIgeArIgjAvIglAtIhEBOQgpAvgeAbQgDAAABgKg");
	this.shape_29.setTransform(-14.2,-61.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4C6F74").s().p("AjuGTQACgNADgFQAIgOASgVIAdgiIAngzQAXggANgVQAPgaASgjQARghANgeIAOgnIAMgnIAJgnIAGgoIADgoIABgoIAAgrIAAgpIACgoQACgYAEgPQADgOAGgQQAGgQAIgLQAGgJAKgJQAJgKAKgFQAIgFANgCQAMgCAKAAQAMABAPADQAPAEALAFQALAFATAMIAcATIAEADIAEAFIADADIADADIgBABIgEgBIgHgGIgFgEIgHgEIgGgFIgFgDIgGgCIAAAAIABABIAEAFIAGAFIAHALIAGALQADAEACAGIADAKIAAAGIAAAAIgBAAIgngmIgngmIAPAUQARAXAFALQACAFgCANIgCAMIgDgCIgFgWQgGgYgHgHQgRgRgQgKQgWgNgOAFQgYAIgVAbQgVAZgHAZQgJAfADA+QADBMgBATQgEAogHAuQgIAwgJAlQgFAVgMAeIgWAwQgNAbgPAZQgQAfgPAUQgeAsgfAnQglAvgdAfIgBAAQgDAAAAgJg");
	this.shape_30.setTransform(-22.5,-68);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C6F74").s().p("AiPGwQAAgNACgGQAIgOASgXIAbgjIAig2QAUghAKgWQANgcAMgmQAMgjAIggQAEgQADgYQACgTAAgWQABgSgCgWQgBgXgCgSQgDgQgGgXQgFgUgGgSQgFgOgJgZIgRgmIgPgmQgJgXgDgPQgEgOgBgQQgCgRABgOQABgKAFgNQAEgNAGgIQAFgIAKgIQAJgHAJgEQAKgFAOgEQAOgEAMgBQAOgCAWACIAkADIAGACIAHABIAEABIAFACIAAABIgCABIgDAAIgDAAIgHgBIgIAAIgJgCIgIAAIgGAAIgHABIABABIAHACIAHACIAMAGIANAIQAFADAFAEIAJAIIADAEIABACIgBABIg4gRIg5gQIAYAMQAZAOAIAIQAFAFAFAPIADAOIgFgBIgNgUQgQgWgKgFQgUgIgUgCQgYgBgKAKQgQASgHAhQgGAfAEAbQAFAeAcA6QAdA+AIAZQAIAkAFAzQAEAsgBArQgBAWgGAfQgGAYgJAcQgKAdgKAbQgMAhgNAVQgYApgfAvQgiAvgdAjIAAABQgCAAAAgJg");
	this.shape_31.setTransform(-32.2,-71.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C6F74").s().p("AgvG/QAAgOADgGQAGgNARgYQAUgaAFgKIAeg4QASgiAIgYQAKgcAJgnQAHglAEggQACgRgBgYQgBgVgDgUQgDgTgFgVQgGgWgHgRQgGgQgLgTIgUgjQgJgMgSgVIgagfIgagfQgRgSgJgNIgPgZQgJgRgDgNQgDgKgBgNQAAgNACgKQACgJAGgKQAGgKAGgHQAIgIAMgJIAVgOQAMgHAWgIIAigMIAGgCIAHgCIAEgBIAGgBIAAACIgBACIgGADIgHADIgHADIgJADIgJAEIgGADIgEADIAAAAIAAAAIAHgBIAHAAIAQAAIAPACIANACIANADIAIAEIgBABIg9AIIg8AIIAaAEQAcAEAMAGQAHADAMANIALAOIgGAAIgWgPQgYgQgNgBQgVgBgTAEQgYAGgGAOQgIAVAHAiQAFAdAOAZQANAZAvAvQAvAxAOAYQASAgAOAyQANAqAGAsQAEAWgCAgQgDAZgGAdQgFAegIAcQgKAigMAWQgTApgfAyQgdAvgdAnIAAAAQgDAAAAgIg");
	this.shape_32.setTransform(-42.1,-72.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4C6F74").s().p("AAIG8QAAgNADgGQAFgNASgYIAXglIAdg6QAQgjAHgYQAIgdAFgoQAGgkAAgiQABgRgEgYIgIgoQgGgRgIgVQgIgVgKgQQgIgPgOgSQgNgRgMgNQgLgLgVgQIghgaIgggXQgVgPgKgJQgMgLgLgLQgMgOgGgLQgGgJgEgMQgDgNgBgKQAAgJADgLIAIgTIAOgVIASgSIAcgYIAegVIAFgEIAGgEIAFgDQACgDACAAIAAAEIgBADIgDACIgGAFIgGAGIgIAGIgHAGIgEAFIgFAFIABAAIAHgDIAHgDIAQgEIAPgDIANgDIANgBIAFAAIAEABIAAABIg5AaIg6AaIAbgDQAegCANACQAJABARAKIAPAKIgGADIgbgKQgfgIgNABQgVAEgSAIQgVALgDAPQgDAWAQAeQAMAaATAWQASAUA6AmQA2AkATAXQAXAdAVAwQARAnANAsQAFAVABAhQAAAZgDAeQgEAegGAdQgIAjgKAXQgSAogeA0QgbAvgcApIgBABQgCAAgBgJg");
	this.shape_33.setTransform(-47.8,-72.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4C6F74").s().p("AAbG5QgBgNADgGQAGgOARgYQASgbAGgLQASglAJgVQAPgiAHgZQAHgdAFgoQAEglAAghQAAgRgFgYQgEgUgGgUQgGgRgJgUQgKgWgKgPQgIgOgPgRQgOgQgOgNQgMgKgWgOIgigXIgigVQgXgNgLgJQgMgJgLgLQgOgMgHgLQgHgIgEgMQgFgMgCgKQAAgJACgLQACgKAEgJQAFgKAIgMQAHgLAIgJIAZgaIAbgZIAFgEIAKgJQACgDACAAIABACIAAACIgDAGIgFAGIgHAGIgGAHIgHAHIgEAFIgFAGIACAAIAHgEIAHgDIAPgGIAPgFIANgEQAIgDAFgBIAGAAIADABIAAAAIAAAAIg3AhIg3AgIAbgFQAegGANABQAJABATAIQAKAEAHAEIgGADIgdgGQgggHgOAEQgUAFgRAKQgVANgBAOQgBAXARAdQAPAXAWAVQATASA8AiQA5AgAUAWQAZAbAXAvQATAnAPArQAHAVABAhQABAZgCAeQgDAfgGAdQgHAjgJAXQgSAogdA1QgaAugcArIgBAAQgCAAgBgIg");
	this.shape_34.setTransform(-49.8,-72.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-118.5,33.6,90.9);


(lib.bilbopupil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAWQgJgJgBgNQABgMAJgKQAJgJANAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNAAQgNAAgJgKg");
	this.shape.setTransform(4.9,8.6,1.436,1.436);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6666CC").s().p("AgtA/QgTgaAAglQAAgkATgaQATgaAaAAQAbAAATAaQATAaAAAkQAAAlgTAaQgTAagbAAQgaAAgTgag");
	this.shape_1.setTransform(-0.2,-0.4,1.436,1.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-13.1,19.1,26.3);


(lib.bilbomouthint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D6B74").s().p("AlwrUIEtjmQKUL1lSR5IpoAHQHioHnpyIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-95.5,73.9,191);


(lib.bilbohat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF5293").s().p("Aj6A/IhSiPQFcCyE9i1Ig4CMQh5AbiNAAQh8AAiNgVg");
	this.shape.setTransform(1.6,5.6,0.739,0.739,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E08DBF").s().p("AjYBtQAChnA9hKQBAhNBZAAQBaAABABNQA9BKADBnQhnAlhtAAQhsAAhyglg");
	this.shape_1.setTransform(-1.2,-4.9,0.882,0.739,-15,0,0,-0.1,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-14.8,47.5,29.6);


(lib.bilbofoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#39C0CE","#2EABB8"],[0,1],-20.6,6.9,0,-20.6,6.9,30.1).s().p("AhNDYIAAAAQgjiPhrCFIDDmlID0APIhJGbQgwADgwACQg3hthJBtg");
	this.shape.setTransform(0.5,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99DEE6").s().p("AAHAlQBJhsA3BsIhAAAIhAAAgAiGAbQBriEAhCOQhGgDhGgHg");
	this.shape_1.setTransform(-8,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#39C0CE","#2EABB8"],[0,1],-26.6,14.3,0,-26.6,14.3,34.6).s().p("AhED+IgEgBQAsjBilCTIAAAAQgGg1C2mQIDTgKIgpH8QgwADgwACQg3hrhGBog");
	this.shape_2.setTransform(-0.2,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99DEE6").s().p("AAAA2QBHhnA3BqIgdAAQgvAAgygDgAh8AHQCkiTgsDAg");
	this.shape_3.setTransform(-7,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-27.2,44,43.2);


(lib.bilboeyeball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWBxQg3gXgNgxQgNgvAkgvQAkgvBAgSQBAgRA2AXQA3AXANAwQANAwgkAvQgkAvhBARQgbAIgZAAQgiAAgfgNg");
	this.shape.setTransform(0,0,1.152,1.086,107.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-18.4,26.9,36.8);


(lib.bilboear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2EABB8","#55C8D5"],[0.165,1],-48.7,13,0,-48.7,13,142.4).s().p("AgNKFQhYgDhTghQhSgghBg7QhIg/gshTIgSgfQgTgegHglQgQhbAChdQAChgAjhWQAlhcA4hMQA3hNA7g2QA7g3BFgwQBFgxBLgkQB6g6BygIQBJACAPBIQAIAigGAjQgPBRgpBFQg1BbhEBPQhdBuhuBaQAggTA5gdQA5gdBwgcQBvgbBOAYQBNAYAWBEQAVBEhhBcQhiBbiNA0QiDAviMAGIgIAAQAoAGAoANQBgAgAjBdQAPAogTAjQgXArgtASQgWAIgWAAIgRgBg");
	this.shape.setTransform(0,0,1.436,1.436);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-92.8,145.5,185.6);


(lib.bilbobrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D6B74").s().p("AAkALQgMgVgfAAQgLAAgVAJIgaAKQgCAEAAgGQAAgOAVgMQAVgLAZgCQBEgEAAA5QAAAEgDAEQgEAEgFAAQgJAAgLgWg");
	this.shape.setTransform(0,0,1.436,1.436);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-4.7,19.5,9.5);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shadow2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.03},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).to({scaleX:1.06,scaleY:1.03},5).to({scaleX:1,scaleY:1},4).to({scaleX:1.06,scaleY:1.03},4).to({scaleX:1,scaleY:1},4).to({scaleX:1.06,scaleY:1.03},5).to({scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.9,-19.7,383.9,39.6);


(lib.bilbofootwalkcycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bilbo-foot
	this.instance = new lib.bilbofoot("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-25.2,-6.3,1.436,1.436,0,0,0,3.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.46,skewX:-9.6,x:-22.1,y:-5.3},0).wait(1).to({scaleX:1.42,scaleY:1.49,skewX:-15,skewY:-1.6,x:-15.2,y:-5.8},0).wait(1).to({x:-4.9},0).wait(1).to({x:3.8},0).wait(1).to({regX:3.4,regY:-8.4,scaleX:1.4,scaleY:1.59,skewX:-25,skewY:-3.3,x:14.1,y:-5.7},0).wait(1).to({x:20.7},0).wait(1).to({regY:-8.5,scaleX:1.44,scaleY:1.45,skewX:-27.6,skewY:-20.5,x:28.4,y:-6.6,startPosition:1},0).wait(1).to({regX:3.3,scaleX:1.44,scaleY:1.45,skewX:-33.1,skewY:-26,x:33.9,y:-8.6},0).wait(1).to({regX:3.4,scaleX:1.44,scaleY:1.45,skewX:-57.6,skewY:-50.5,x:27.1,y:-12.1},0).wait(1).to({x:15.8,y:-13.3},0).wait(1).to({regX:3.2,scaleX:1.42,scaleY:1.46,rotation:-68.6,skewX:0,skewY:0,x:-0.1,y:-16.4},0).wait(1).to({regY:-8.4,scaleX:1.41,scaleY:1.45,rotation:-53.1,x:-16.1,y:-23.1},0).wait(1).to({scaleX:1.41,scaleY:1.45,rotation:-31,x:-18.7,y:-21.9},0).wait(1).to({regY:-8.6,scaleX:1.41,scaleY:1.58,rotation:-16.2,x:-27.1,y:-26.6,startPosition:0},0).wait(1).to({rotation:-1.2,x:-29.8},0).wait(1).to({scaleX:1.41,scaleY:1.58,rotation:15.8,x:-27.5},0).wait(1).to({regX:3.5,regY:-8.5,scaleX:1.44,scaleY:1.44,rotation:5.8,x:-25.2,y:-24.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-33.2,63.1,62.1);


(lib.bilboeyebuild = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bilbopupil("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2.8,-2.8);

	this.instance_1 = new lib.bilboeyeball("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#258B96").s().p("AhWBxQg3gXgNgxQgNgvAkgvQAkgvBAgSQBAgRA2AXQA3AXANAwQANAwgkAvQgkAvhBARQgbAIgZAAQgiAAgfgNg");
	this.shape.setTransform(1.1,1.4,1.396,1.316,107.3,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-20.7,32.5,44.6);


(lib.bilbobody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.bilboeyebuild("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-54.4,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.2,regY:1.6,x:-53.2,y:-58.5},0).wait(1).to({y:-58.7},0).wait(1).to({y:-59},0).wait(1).to({y:-59.5},0).wait(1).to({y:-60},0).wait(1).to({y:-60.6},0).wait(1).to({y:-61.2},0).wait(1).to({y:-61.8},0).wait(1).to({y:-62.3},0).wait(1).to({y:-62.7},0).wait(1).to({y:-63.1},0).wait(1).to({y:-63.4},0).wait(1).to({y:-63.6},0).wait(1).to({y:-63.8},0).wait(1).to({y:-63.9},0).wait(1).to({regX:0,regY:0,x:-54.4,y:-65.5},0).wait(1).to({regX:1.2,regY:1.6,x:-53.2,y:-63.8},0).wait(1).to({y:-63.7},0).wait(1).to({y:-63.6},0).wait(1).to({y:-63.4},0).wait(1).to({y:-63.1},0).wait(1).to({y:-62.8},0).wait(1).to({y:-62.4},0).wait(1).to({y:-61.9},0).wait(1).to({y:-61.3},0).wait(1).to({y:-60.8},0).wait(1).to({y:-60.2},0).wait(1).to({y:-59.7},0).wait(1).to({y:-59.3},0).wait(1).to({y:-59},0).wait(1).to({y:-58.8},0).wait(1).to({y:-58.6},0).wait(1).to({y:-58.5},0).wait(1).to({regX:0,regY:0,x:-54.4,y:-60},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.bilbobrow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.7,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-91.6},0).wait(1).to({y:-91.8},0).wait(1).to({x:-51.6,y:-92.1},0).wait(1).to({y:-92.5},0).wait(1).to({x:-51.5,y:-93},0).wait(1).to({x:-51.3,y:-93.6},0).wait(1).to({x:-51.2,y:-94.1},0).wait(1).to({x:-51.1,y:-94.6},0).wait(1).to({x:-51,y:-95.1},0).wait(1).to({y:-95.5},0).wait(1).to({x:-50.9,y:-95.8},0).wait(1).to({x:-50.8,y:-96.1},0).wait(1).to({y:-96.3},0).wait(1).to({y:-96.4},0).wait(1).to({y:-96.5},0).wait(1).to({x:-50.7},0).wait(1).to({x:-50.8},0).wait(1).to({y:-96.4},0).wait(1).to({y:-96.3},0).wait(1).to({y:-96.1},0).wait(1).to({x:-50.9,y:-95.8},0).wait(1).to({x:-51,y:-95.5},0).wait(1).to({y:-95.2},0).wait(1).to({x:-51.1,y:-94.7},0).wait(1).to({x:-51.2,y:-94.2},0).wait(1).to({x:-51.3,y:-93.7},0).wait(1).to({x:-51.4,y:-93.2},0).wait(1).to({x:-51.5,y:-92.8},0).wait(1).to({x:-51.6,y:-92.4},0).wait(1).to({y:-92.1},0).wait(1).to({x:-51.7,y:-91.9},0).wait(1).to({y:-91.7},0).wait(1).to({y:-91.6},0).wait(1).to({y:-91.5},0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#369AA8","#2EABB8"],[0,1],-45.7,-4.8,47.8,3.4).s().p("AgNJkQhYgZhTg3QhSg1hBhMQhIhRgsheIgSglQgTgigHgnQgQhfAChcQAChgAjhNQAlhTA4g+QA3g+A7gnQA7goBFgeQBFgfBLgRQB6gaByAVQBJAVAPBMQAIAkgGAhQgPBNgpA7Qg1BOhEA9QhdBWhuA+QAggMA5gOQA5gOBwABQBvABBOAtQBNArAWBKQAVBKhhBCQhiBCiNAQQiDANiMgeIgIgCQAoAQAoAXQBgA5AjBmQAPAsgTAfQgXAlgtAGIgOABQgYAAgXgKg");
	this.shape.setTransform(36.2,-61.2,1.436,1.436,0,0,0,-50.7,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(35));

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2EABB8").s().p("AFAYTQhDgBhSgEQhSgEhCgGQgygEg+gJQg+gJgygJQg6gMhGgRQhFgQg5gRQg2gPhCgWQhAgWg3gUQgxgTg8gaQg7gagxgXQgjgRgqgXQgqgXgigVQgkgXgrgeQgsgeghgaQgggZgoghQglghgfgdQgbgZgfggQgfghgXgbQgXgbgbgkQgbgjgVgfIgng9QgXglgMgbQgLgbgGgUQgIgeADgTQADgOAPgOQAQgPAKAHQAeASAsA2QAzA+ASAQQCOB6AkAeQBvBbBOAuQCDBPBZArQCJBCBiAPQBTANBogUQBqgVBFgsQBDgrA+hYQA7hTAahRQAchZADiKQADhpgLh+QgJhhgdh6Qgch0glhgQgXg+glg7QgphEgsgkQgbgXgugHQgvgIgeAPQglATgpA7Ig+BgQgQAVhNB3Qg6BagpAqQgqAsg6AoQg9Aqg0AVQgxAShDAIQhBAIg2gGQg0gFhUgbIiFguIhHgkIgtgaIgsgbIgrgeIgpggQghgcgdgcQgjgigXgZQgWgZgegoIgwhCIgxhJIgvhJIg2hYQghg1gTgkQgVgogYgyQgXgxgSgqQgQglgNgkQgPgrgJggQgIgfgFghQgGgmAAgcQAAgbAFgiQAFghAIgaQAIgZAPgeQAOgdAQgWQAQgXAYgZQAYgaAXgRQAUgQA1gdQA0geAVgQQAJgIAKgOQAIgNAFgOIgEgFIgGgGIgDgFIgBgFIAAgFIAEgJIADgEIAGgEIAMgGIATgHIANgCIAKABIAJACIAEADIACAFIACALIgDALIgHAQIgCAHIABATIAGATIAJAOIAXAXIARANIAZAOIAJAJIAIAJIAEAKIgBAJIgIAFIgRAFIgJAAIgHAAIgfgIIgWgKIgGgEIgFgFIgDgIIgBgFIAAgTIgIgHIgNgHQgOAAgTAHIggAMQgMAGgRALIgbASIgfAYQgSAOgMAMIgXAZQgMAOgIANIgVAjQgMAVgEAQQgHAXgCAZQgEAcADAUQAEAZAKAdQALAdAOAUQAWAhAcAfQAgAkAdAUQAoAcAzAYQA2AaAsAMQBOAUBPALQBdANBCgEQBSgFB2gaQBWgTBuggQBggcC3hDQDbhQA7gUIDvhNQCPgtBigaQA+gRBsgWICtgiIBlgVQA/gNAngGQAcgFAsgFIBJgHIBRgJIBRgHIBRgFIBRgFIBIgDIBJgBIBHABIBGACIBLAEIBMAFIBJAHIBKAIIBCAIIBDAKIA+AKIA+AKIAkAHIAjAJIA0AOQAgAKATAIQASAIAUALQAVAMAPAMQASANAUAVQATATAPASQARAVATAdQASAbAOAaQAQAcASAlQARAkANAeQAOAiAQAuQAPAqALAmQAMAnAOAzIAWBbIAVBhQAKA3AHArIAOBiQAHA5ADApQADAoABA0QABAxgBArQgCA7gEBEQgFBHgFA4QgGA3gHAzQgJA/gKArQgQBFgPA5QgVBLgUAxQgTAugcAyQgeA1gdAkQgeAngvAsQgsApgrAgQgvAkhIArQg7AkhBAiQgwAahDAeQg7Aag6AXQg/AZhHAYQhMAag7ARQg6ARhHAQQhIAQg7AKQhGAMhYALQhWAKhJAFQhBAFhVADQg/ACg6AAIgcgBg");
	this.shape_1.setTransform(23.8,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2EABB8").s().p("AEtY9QhDgBhSgEQhTgEhDgGQgygEg+gJQg+gJgzgKQg6gLhHgRQhFgRg6gRQg1gPhDgXQhBgWg2gVQgygTg8gaQg8gagwgXQgjgRgrgYQgqgXgigWQglgXgrgeQgrgegigbQgggZgngiQgmghgfgdQgagagfggQgfghgXgcQgXgcgbgkQgagkgVgeQgYglgPgZQgWgmgMgbQgLgcgFgUQgIgeAEgTQACgOAQgOQAQgPALAGQAeATArA3QAzA/ASAQQCNB8AlAeQBvBcBOAwQCCBPBbAsQCJBCBjAQQBTAOBpgVQBrgUBGgtQBEgrA/hYQA9hUAahRQAdhZAEiLQADhpgKh/QgIhhgdh7QgchzgkhhQgXg+glg7QgphEgrgkQgbgXgugHQgwgIgeAPQgkATgqA7Ig/BgQgPAUhOB3Qg8BbgpAqQgqArg6AoQg+Aqg1AUQgxAThEAHQhBAHg3gGQg0gFhUgdIiFgvIhIgmIgtgaIgsgcIgrgfQgYgTgQgOQghgdgdgcQgjgjgXgaQgVgZgdgpIgvhEQgVgegagrIguhLIgzhZQgeg2gTgkQgTgngXgzQgWgxgQgqQgPglgMgkQgPgsgIgfQgHgggFghQgGgmAAgcQAAgcAFgiQAFgjAIgbQAHgaAPgfQAOgfAQgYQAPgZAYgcQAXgcAWgUQASgRA0glQAxgkAUgTQAJgJAGgRQAGgOADgPIgFgGIgIgFIgEgEIgCgGIgBgFIABgEIABgFIADgFIAJgJIANgIIAYgJIAKgBIAKABIAEADIAEAEIADAMIAAAMIgEASIAAAHIABAKIADAKIAKAUIAMANIAGAGIAVAPIATALIAcALIALAIIAJAIIAFAKIABAKIgHAHIgQAHIgIACIgQABIgRgCIgQgEIgVgIIgGgFIgFgIIgCgGIgDgTIgJgHIgPgGQgOACgSAJQgOAHgRAKQgLAHgQANIgZAWIgeAcQgSASgKAMQgLANgLAQQgMAQgHAOIgUAmQgLAYgEARQgGAYgCAaQgDAeADAVQAEAaAKAdQAKAeAOAUQAVAiAbAgQAfAkAbAUQAnAdAyAaQA0AbArAMQBOAXBMANQBbAPBBgDQBRgDB1gZQBXgSBsgfQBhgbC2hCQDdhRA4gSQCVgxBZgcQCRgtBggaQA+gRBsgVICtgiIBlgVQA+gMAngGQAcgFAtgFIBJgIIBRgIIBQgHIBRgFIBRgFIBJgCIBIgBIBHAAIBGADIBLAEIBMAFIBJAHIBKAIIBCAIIBDAKIA+AKIA+ALIAjAHIAkAIIA0AOQAfAKAUAIQASAIAUALQAVAMAOAMQASAOAUAUQAUATAOASQARAVATAdQASAbAOAaQAQAcASAkIAeBDQAOAiAQAtQAPArALAmQAMAnANAzIAXBaIAUBiIASBiIAOBiQAHA4ADAqQADAoABA0QAAAwgBArQgCA8gEBEQgEBHgGA3QgGA4gHAzQgJA+gKAsQgQBFgQA5QgVBLgUAxQgTAugcAyQgeA2gdAkQgfAngvAsQgsApgrAgQgwAkhIAsQg7AkhBAiQgwAahEAeQg7Abg7AXQg+AYhIAZQhMAag7ARQg7ARhIAQQhIARg7AKQhGAMhZAKQhWALhKAFQhBAFhVACQg5ACg0AAIgqAAg");
	this.shape_2.setTransform(24.6,-18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2EABB8").s().p("AEiZyQhEAAhSgEQhTgEhCgGQg0gEg/gJQg+gIgzgKQg6gLhHgRQhGgRg6gQQg2gQhDgWQhBgWg2gVQgzgTg8gaQg8gagxgXQgjgSgrgYQgqgXgigWQgkgXgrgeQgsgfgigbQgggZgngiQgmgigegeQgbgageggQgfgigXgcQgXgcgbglIguhEQgYglgPgaQgWgngLgbQgLgcgFgWQgHgeAEgUQACgOAQgPQARgPALAHQAeASArA4QAyBAASARQCNB9AlAfQBvBeBOAvQCBBQBcAtQCKBDBjAPQBUAOBqgWQBrgVBHgtQBFgsBAhZQA9hVAbhTQAdhaAFiLQAEhqgLiAQgHhhgdh7Qgbh1gkhgQgXg+gkg8QgqhDgrglQgagWgvgIQgvgIgeAPQglATgpA7IhABgQgPAUhPB4Qg8BagpAqQgrArg7AoQg+Aqg1AUQgxAThEAHQhCAHg3gGQg0gGhUgdIiGgwIhIgnIgtgbIgsgcIgqggQgZgTgQgOIg8g6QgjgjgXgbQgVgZgcgpIguhFQgTgegagsIgrhLIgxhYQgdg1gRgkQgTgmgVgyQgUgvgRgrQgOglgMgjQgPgrgIgeQgIghgGggQgHgmgBgcQgBgdACgkQADgjAGgdQAGgcALgjQAMghAMgcQANgcAUgiQASggATgbQAMgSAtg0QAoguAPgaQAGgLAAgTQABgPgEgRIgHgFIgKgDIgJgIIgDgFIgBgFIAAgLIADgGIAIgLIAEgFIAKgJIALgHIAKgEIAKgBIAFACIAFADIAFAFIADAGIAFANIAFAbIAGAKIAHAJIARARIAQALIAiAPIAWAFIAfAEIAOAEIAMAGIAIAJIAEAKIgEAJIgHAHIgGAGIgHAEIgHADIgZAGIghgBIgIgCIgIgDIgLgNIgKgTIgLgFIgRgDQgNAGgQAOIgZAZQgJAKgMARIgTAdIgYAkQgOAWgIAPIgQAiQgJAUgFAQQgKAcgEARQgIAbgCASQgDAbAAAcQAAAgAFAWQAFAbAMAdQAMAfAOAVQAWAiAaAfQAeAkAbAUQAlAdAwAZQAyAcAqAMQBNAYBIAOQBaARA/gCQBQgDB0gXQBXgSBqgdQBhgcC1hBQDghQA0gSIDvhNQCRgtBfgZQA+gRBsgVICtghIBlgVIBlgSQAcgFAtgEIBJgIIBQgIIBRgHIBRgFIBQgEIBJgDIBJgBIBGABIBGADIBMAEIBLAFIBKAHIBJAIIBCAJIBDAKIA+AKIA9ALIAkAHIAkAIIAzAPQAgAJATAIQASAIAUALQAVAMAPAMQARAOAUAUQAUATAOASQARAVATAeQASAaAOAaQAQAcARAlQASAjAMAfQAOAiAQAtIAbBRIAZBaIAWBaQAKAtAKA1QALA3AGArQAIAxAGAxQAHA5ADApQADAoABAzQAAAygBArQgCA7gEBEQgFBHgGA4QgFA3gIAzQgJA/gKArQgQBGgQA5QgVBLgUAxQgTAvgdAyQgeA1gdAlQgeAngwAsQgsAqgrAgQgwAkhIAsQg8AkhBAjQgwAahEAeQg7Abg7AXQg/AZhIAZQhMAbg8ARQg6ARhIARQhJARg8AKQhGAMhZALQhWAKhKAGQhBAFhWADQhDACg9AAIgXAAg");
	this.shape_3.setTransform(24.9,-23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2EABB8").s().p("ACHaUQhTgDhCgFQg0gFg+gIQg/gIgzgKQg6gKhHgRQhGgQg6gQQg2gQhDgVQhBgWg3gVQgygSg8gaQg9gagwgYQgjgRgrgXQgqgYgigVQglgYgrgeQgsgfghgcQghgZgngjQglgigfgeQgbgageghQgfgjgXgcQgXgdgaglQgagmgUggIgnhAQgWgogLgdQgLgcgFgWQgHgfAEgVQADgPAPgQQARgQALAHQAeASArA5QAyBBASARQCNCAAlAeQBuBfBPAwQCBBQBcAtQCKBEBjAOQBUANBrgXQBqgWBHgvQBFgtBAhbQA8hWAbhUQAdhbAFiMQAEhrgKiBQgHhigdh7Qgbh2gjhgQgXg+gkg7QgphEgrglQgbgXgugHQgwgIgdAPQglATgqA7QghAzgfAtQgPAUhPB3Qg9BbgpApQgrAsg7AoQg+Aqg1AUQgxAThFAHQhBAHg3gGQg0gGhVgdIiFgwIhIgnIgsgbQgbgSgRgMQgWgPgUgQQgYgTgQgPIg8g7QgjgjgWgaQgUgagcgpIgshFQgTgegYgsIgphLIguhWIgshXQgQgjgVgzQgRgqgRgtIgbhGQgOgpgJgeQgJghgHgeQgJgmgDgbQgEgdgBgmQgBgkACgeQACgdAGgoQAFgiAHghQAGgdALgqIAVhFIAhhVQAWg4AEggQACgNgJgSQgGgMgMgRIgJgCIgLABIgOgFIgJgIIgDgFIgCgFIABgNIADgNIAGgMIAHgLIAIgGIAJgFIAGAAIAHABIAGAEIAHAEIALAKIASAYIAWAOIAZALIAVAFIAdACIAigDIAfgHIAOgBIAOABIAMAFIAJAJIAAAKIgGASIgEAIIgFAFIgOALIgfANIgIACIgJABIgIgBIgLgEIgGgFIgTgPIgNgCIgRAEQgKAKgKASIgNAhQgFAMgFAVIgIAiIgLAsIgKAsQgDARgDAWIgEApIgDAyQgCAfACATQACAeAFAcQAFAjAIAXQAIAaAOAeQAPAeAPAXQAYAiAYAeQAeAkAaATQAjAdAtAZQAxAbAnANQBMAZBFAOQBWASA9gBQBPgCBygXQBXgQBogdQBhgbC0hAQDihRAygRIDvhMQCRgtBegZQA/gRBsgUICsghIBlgUQA/gMAngGQAbgEAtgFIBJgHIBQgIIBRgHIBRgFIBQgEIBJgCIBJgBIBGABIBGADIBMAFIBLAFIBJAHIBKAIIBCAJIBCAKIA+AKIA+AMIAkAGIAjAJIA0AOQAfAKATAIQATAIATALQAVAMAPAMQARAOAUAUQAUATAOATQAQAUAUAeQARAbAOAZQAQAcARAlQARAjANAfQAOAiAPAtQAPArAMAmQALAnANAzQANAwAJArIAUBhQALA3AHArIANBiQAHA5ADApQADAoAAA0QABAxgCArQgCA7gEBFQgFBHgGA3QgGA4gHAzQgKA/gKArQgPBGgRA5QgVBLgUAxQgTAvgdAyQgeA2gdAlQgeAngwAsQgsAqgrAhQgwAkhIAsQg8AlhBAkQgwAZhDAfQg8Abg7AYQg/AZhHAZQhNAbg7ASQg6AShIAQQhJARg7ALQhHAMhZAMQhWALhKAHQhBAFhWADQhQADhHAAQhEAAhSgDg");
	this.shape_4.setTransform(25.3,-25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2EABB8").s().p("ADaajQhSgDhDgFQgzgEg9gHQg/gIgygJQg6gKhGgQQhGgQg6gQQg1gPhDgWQhBgVg2gUQgzgTg8gZQg8gagwgXQgjgRgrgYQgqgXgigWQglgXgrgfQgrgfgigaQgggagngjQgmgigfgfQgbgagegiQgfgjgXgdQgXgdgbgmQgbgmgUghQgXgmgQgcQgWgpgLgdQgMgdgFgXQgIggAEgWQACgPAPgRQARgSALAHQAeATArA5QAzBDASARQCNCAAkAgQBvBfBPAxQCABPBcAtQCJBEBkAOQBTANBqgZQBpgZBGgvQBEguA/hdQA7hXAahVQAchcADiNQAEhrgKiDQgIhigch7Qgbh2gjhgQgWg/gkg7QgphEgrgkQgagXgvgIQgvgIgeAPQglATgqA7IhABfQgQAVhPB3Qg8BagpAqQgrAsg7AoQg+Aqg1AUQgxAThEAHQhBAHg3gGQg0gGhTgdIiFgwIhHgoIgtgbIgrgdQgWgQgUgQQgYgTgPgPQgggfgbgbQgigkgWgbQgUgagagpIgrhFQgSgdgXgsIgmhKIgrhVIgnhWQgOghgUgzIgghUIgZhFIgYhEIgTg/QgLglgGgaQgGgbgGgnIgJhDIgGhFIgFhGIgChJIgDhJIgChaQgCg5gJggQgEgNgSgNQgLgHgVgKIgKACIgLAFIgIABIgJAAIgGgBIgGgCIgFgDIgFgEIgDgGIgDgFIgDgNIABgYIAEgJIAGgIIAHgCIAGgCIARABIAQAFIAfAMIAcAEIAeAAIAXgEIAmgOIAVgLIAYgUIAagMIAOAAIAMAEIAGAJIAEAMIABAIIAAAJIgCAHIgHAPIgFAHIgRATIgHAFIgHAEIgJADIgMgBIgIgCIgagHIgNAEIgQAKQgEAMAAAWIACAiQABAMAEAXIAOBPIAHAtIAIApIAJAoIAMA0QAHAfAGATQAKAfALAcQAMAiALAXQANAbARAdQASAeARAWQAdApATAXQAfAmAYAUQAjAcAqAZQAtAcAmAOQBJAaBBAPQBTAVA7gBQBOAABwgWQBWgQBmgbQBhgbC0hAQDihQAygQIDthMQCRgtBfgZQA+gQBsgVICsgfIBmgUQA+gMAngGQAcgEAsgFIBJgGIBRgIIBQgGIBRgFIBQgEIBJgCIBJAAIBGABIBGADIBMAFIBLAGIBJAHIBKAJIBCAJIBCAKIA+AKIA+ALIAjAIIAkAIIAzAPQAgAKATAIQASAIAUALQAUAMAPAMQARAOAUAUQATATAPASQAQAVATAeQARAbAOAZQAQAdARAkIAdBCQAOAiAQAuQAOAqAMAnQALAmANA0IAWBaQAKAtAJA1QALA3AGArIAOBiQAGA5ADApQADAnAAA0QABAygCArQgCA7gFBEQgFBHgGA4QgGA4gHAzQgKA+gKAsQgQBFgQA6QgVBLgUAxQgUAvgcAyQgeA2gdAlQgeAngvAtQgsAqgrAhQgwAkhHAsQg8AlhBAkQgvAahDAfQg7Abg7AYQg/AZhGAaQhNAcg7ARQg6AShHARQhIASg8AKQhFANhZAMQhWAMhJAGQhBAGhVAEQhPADhHABIgXAAQg6AAhFgCg");
	this.shape_5.setTransform(18,-26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2EABB8").s().p("AFFaiQhRgDhCgEQgzgEg9gHQg+gIgxgIQg5gKhGgQQhFgQg5gPQg1gPhCgWQhAgUg2gUQgygTg8gZQg7gagwgWQgjgRgrgYQgpgXgigWQglgXgrgfQgrgegigbQgggagngkQgmgigfgeQgbgbgfgiQgfgjgXgdQgYgegbgnQgbgmgVghQgYgmgQgdQgXgpgMgdQgMgegGgYQgIghADgWQABgQAPgRQAPgTALAHQAeATAsA6QAyBDATAQQCNCCAlAfQBvBgBOAxQCBBQBbAsQCIBEBjAOQBRAMBpgaQBngZBEgwQBDgvA8hdQA4hYAZhVQAbhcADiOQADhqgLiDQgIhjgch7Qgbh3gihfQgXg/gjg7QgphEgqglQgbgXgugIQgwgIgdAPQglATgqA7IhBBfQgQAVhOB2Qg9BbgpAqQgrArg6AoQg9Aqg1AUQgxAThDAHQhBAHg2gGQg0gGhTgdIiDgxIhHgoIgsgbQgagRgQgMQgWgQgUgQQgXgUgQgPQgfgegbgcQghgkgVgbQgUgagZgpQgTgegWgnIgnhJIgkhLIgmhUQgVgxgPglQgMgegSg1IgdhUIgYhDIgYhEIgWg9IgWg9IgUg/IgUhAIgVhBIgWhBIgYhEQgPgpgMgZIglhOQgYgwgXgYQgJgKgYgCIgmgBIgJAGIgJAJIgPAIIgGACIgHABIgHAAIgGgBIgFgCIgGgEIgJgJIgGgJIgEgKIAAgJIACgJIAFgGIANgIIASgFIAsgFIAPgEIAqgSIAUgNIAdgcIANgTIANgbIAIgLIAKgKIANgGIANgCIALAGIAJAIIAGAHIAEAIIADAHIABAQIgBAIIgEAQIgHAOIgFAHIgGAFIgVAHIgcAEIgKAIIgKAPQABANAKASIASAdIAUAcIAVAcIAYAmIAuBJIAWAkIAcAtIAbAuIAiA2IAjA1IAmA1IAoA0IA0BBQAgAnAXAVQAkAfAlAZQAsAfAkAOQBHAdA9ARQBQAYA5AAQBNACBvgUQBUgQBlgaQBhgaC0hAQDihQAxgPIDuhLQCQgtBegYQA+gQBtgUICtgfIBlgTIBlgSIBJgIIBIgHIBRgHIBQgGIBRgEIBRgEIBIgBIBJAAIBGABIBGADIBMAFIBLAHIBJAHIBKAJIBCAJIBCALIA+AKIA9ALIAkAIIAjAIIA0APQAfAKATAIQASAIAUAMQAUAMAPAMQARAOAUAUQATATAOATQAQAUATAeQARAbAPAaQAPAcARAlQARAjAMAfQANAiAQAuQAOAqAMAnIAYBZQAMAwAJArQAKAtAJA1QALA3AGArIANBiQAHA5ACApQADAnAAA1QAAAxgBArIgHB/QgGBHgGA4QgGA4gIAzQgJA+gKAsQgQBGgQA5QgVBLgUAxQgUAvgcAyQgdA2gdAlQgeAmgvAtQgrAqgrAhQgvAkhHAsQg7AlhBAkQgvAahDAfQg6Abg6AYQg+AZhGAaQhMAbg7ASQg5ARhHASQhHARg7ALQhFANhXAMQhVAMhJAGQhAAGhUAEQhPAEhGABIgWAAQg6AAhEgCg");
	this.shape_6.setTransform(9,-26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2EABB8").s().p("AGOZvQhRgDhAgEQgzgEg8gIQg9gHgxgJQg3gKhGgQQhEgQg4gPQg0gPhCgVQg/gVg2gUQgxgTg7gZQg7gZgvgXQgjgRgqgXQgqgYghgVQglgXgqgfQgsgfghgbQghgagngjQgmgigfgeQgbgbgfgiQgfgjgYgdQgYgegcgnQgbgmgVghQgZgngRgdQgYgpgMgeQgNgegHgXQgJghACgXQABgPANgSQAOgTAKAHQAfATAsA6QAzBDASAQQCOCBAlAgQBvBgBPAxQCABQBaAsQCHBEBiAOQBQAMBmgZQBmgZBCgwQBBguA5heQA3hWAYhVQAZhcADiNQABhqgLiDQgJhjgbh6Qgbh3gjhgQgXg/gig7QgohEgrglQgagXgugIQgwgJgdAPQglATgqA7IhBBfQgQAVhPB2Qg8BbgpApQgrArg5AoQg+Aqg0AUQgwAShDAHQhAAHg2gHQgzgGhSgeIiDgxIhGgoIgrgbIgqgeQgWgQgTgQQgXgTgQgPIg5g7QgggkgVgcQgTgagZgpQgTgfgUgnQgQgdgVgsIghhLIgjhVIghhWQgKgcgSg4IgbhVIgYhEIgahEIgZg7Igag7Igbg7QgSgjgMgXIghg4QgUgggQgXIgpg2QgZgfgUgSQgoglgWgSQgngegegMQgOgFgXAJIgkARIgGAJIgEALIgFAHIgLALIgGAEIgGADIgGACIgHAAIgMgBIgPgHIgIgGIgEgHIgBgIIACgHIAJgMIAOgNIAngYIAMgKIAggiIANgTIAQgjIAEgVIgBgcIADgNIAFgMIAJgLIALgHIANAAIAMADIAJAEIAIAEIAGAGIAIAMIAFAPIACAPIAAAHIgCAIIgEAHIgJAJIggATIgGALIgDARQAGAKARALIAcARQAIAFAWALIAeAQIAkAZIAjAaIAgAYIAgAaQARAOAWAVIAmAkIAuAtIAtAuIAvAxIAuAyIA4BBQAkAqAXAVQAoAkAfAYQAtAiAiAPQBHAhA5AUQBPAaA3ADQBMADBugSQBUgOBkgaQBigZCzg/QDihQAxgPIDthKQCRgsBegYQA+gQBtgUICtgeIBlgTIBlgRIBJgIIBIgGIBRgGIBQgGIBRgEIBRgDIBIgBIBJAAIBGACIBGADIBMAFIBLAHIBJAHIBJAJIBDAKIBCAKIA9ALIA+AMIAkAHIAjAJIAzAPQAfAKAUAIQASAIATAMQAVAMAOAMQARAOAUAUQATAUAOASQAQAVATAeQARAbAOAaQAPAcARAkQARAkAMAfQANAiAPAuQAPArALAmQALAnANAzQAMAwAJArIATBhQAKA3AGAsIANBiQAGA5ADApQACAoAAAzQABAygCArQgDA6gFBFQgFBHgGA3QgGA4gIAzQgKA/gKArQgQBGgQA5QgVBKgUAyQgTAugcAyQgeA2gcAlQgeAmgvAtQgrApgqAhQgvAkhHArQg6AlhAAjQgvAahCAeQg6Abg6AYQg9AZhGAZQhKAbg6ASQg5ARhGARQhHARg6ALQhEAMhXAMQhUALhIAHQg/AFhTAEQhOADhFABIgXAAQg5AAhCgCg");
	this.shape_7.setTransform(3.5,-22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2EABB8").s().p("AGqYkQhQgEhAgEQgygFg7gHQg9gIgwgJQg4gLhDgQQhEgQg3gQQg0gPhBgVQg/gVg1gVQgwgSg7gZQg6gagvgXQgigRgqgXQgpgXghgWQglgXgqgfQgrgfgigbQgggagogiQgmgjgfgeQgbgagfgjQgfgigYgdQgYgegdgnQgcgmgVghQgZgmgSgdQgYgpgNgdQgOgegHgXQgKgiABgWQABgPAMgRQANgTAKAHQAeATAtA5QAzBCATASQCMB/AmAgQBvBgBPAxQCBBRBXAsQCHBEBhAPQBPAMBkgYQBkgYBBgvQA/gtA5hdQA0hVAXhUQAZhcACiMQABhogMiDQgJhkgbh5Qgbh3gihfQgXhAgig7QgohEgqglQgbgXgugJQgvgIgeAPQglASgqA7IhBBgQgQAUhOB2Qg9BbgpApQgqAqg6AnQg8Aqg1AUQgwAShCAGQhAAHg1gHQgzgHhSgeIiBgyIhFgoIgrgdQgagQgQgMQgVgQgTgQQgXgUgPgPQgfgfgagdQgggkgUgcQgTgbgYgpQgTgggTglQgQgegTgtIgghLQgPglgSgyQgRgtgOgqQgJgZgSg9QgSg8gKgaQgLgigOgjIgchEIgcg5Igfg4Ighg1QgVgggQgUQgSgWgXgYQgYgYgUgSQgagVgYgRQgfgVgXgJQgogSghgJQgtgNgfABQgPABgSAQIgcAeIgCAKIgBALIgFAQIgIALIgJAKIgFADIgGADIgMACIgJAAIgKgBIgFgFIgFgGIAAgGIABgHIAHgRIAggtIAIgNIASgqIAHgeIABgbIgEgTIgLgXIgCgMIAAgNIAFgMIAIgKIAMgGIANgCIATAAIAHADIANAHIAGAGIAEAFIAHAMIADAGIABAHIgBAHIgGALIgXAdIgDAMIADAOQAKAHATADIAfAEIAiADIAhAEQARADAXAIIApAMIAlANQAVAIAPAHQAVAJAYAOIAsAZQAZAOAcAUQAdAUAXASIA2AqQAdAaAWAUQASARAtAxQAqAsAWAUQA0AuAVARQAuAlAiARQBKAlA1AUQBOAeA3AEQBMAFBtgQQBVgNBigZQBigZCzg+QDjhQAwgPIDuhJQCPgqBfgYQA/gQBtgTICtgeIBlgSQA+gLAngFQAcgFAtgDIBIgGIBRgGIBQgGIBRgDIBRgEIBIgBIBJABIBGACIBGAEIBMAFIBLAGIBJAIIBJAJIBDAKIBCALIA9ALIA+AMIAjAIIAjAIIA0APQAfAKATAJQASAIAUAMQAUAMAOALQASAPATAUQATAUAOASQAQAVATAeQARAbAOAbQAPAbARAlQAQAkAMAfQAOAjAPAtQAOAqALAnQALAnANAzIAUBbQAKAtAJA1QAKA3AGArQAIAxAFAxQAGA5ADApQACAoAAA0QAAAxgCArQgCA7gGBEQgFBHgGA4QgHA3gIA0QgJA9gKAsQgRBFgQA5QgVBLgUAxQgTAvgcAxQgdA2gdAkQgdAmgvAsQgrApgqAgQgvAkhGArQg6AkhAAjQguAZhCAeQg6Abg5AWQg9AahFAYQhLAag5ASQg5ARhFAQQhGARg6AJQhDAMhWAMQhUAKhHAHQg/AFhSADQhNAChFABQhBgBhPgCg");
	this.shape_8.setTransform(1.9,-16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2EABB8").s().p("AI+XlQhBAAhOgEQhPgDhAgGQgxgEg7gIQg8gJgwgJQg4gLhDgQQhDgRg2gQQg0gPhBgWQg+gVg0gVQgwgTg7gZQg5gagvgXQgigRgqgYQgogXgigVQgkgYgrgeQgqgfgigbQgggagngjQgmgigfgeQgbgbgfgiQgggigYgdQgZgdgcgnQgcgmgWghQgZglgRgdQgagpgNgdQgOgegHgXQgKggAAgXQAAgOALgRQANgSAKAGQAeATAtA6QAzBCATAQQCLB/AnAhQBvBfBPAyQCABRBXAsQCGBEBgAQQBOAMBkgXQBjgXBAgtQA+gtA3hcQA0hUAXhTQAZhaABiMQABhngMiDQgJhjgbh5Qgah4gjhfQgWg/gig8QgohEgqglQgbgXgtgJQgwgIgeAOQglATgqA7IhBBfQgQAVhOB1Qg9BagpAqQgqAqg6AmQg8Apg0AUQgwARhDAGQg/AGg1gHQgzgGhRgfIiBgzIhEgnIgrgcQgagSgQgMQgVgRgSgQQgXgTgPgQQgfgfgZgdQggglgTgbQgUgbgXgpIglhHQgQgegTgsIgehMQgOgkgTg0IgehYIgbhYQgTg6gKgdQgMghgQgkQgQgngOgcQgNgagTgdQgSgegQgXQgSgZgTgXQgXgcgSgRQgUgSgZgTQgagTgWgMQgbgPgagKQgggNgYgDQgngGgkABQgsABgdAKQgNAEgOAVIgSAjIAAAKIACAKIAAAJIgBAIIgEANIgHAMIgDAEIgJAIIgPAGIgJACIgGgCIgFgFIgCgFIgBgHIACgRIATg0IAJgsIABgZIgBgSIgGgZIgJgQIgQgQIgFgKIgEgLIABgNIAFgMIALgIIAVgKIAKgCIAHAAIAHABIAPAEIAFAEIAKAIIAEAFIACAGIABAHIgDAMIgPAgIABALIAGANQALACATgDIAfgGIAggGQAVgEALgBQARgBAYABIAoABIAmAEQAWADAPAEQAXAFAZAHQAaAIAUAIQAbALAdAPQAgAPAXAOQAdARAeAUQAhAXAYATQAWASAuAtQAxAuAUARIBNBBQAvAnAjASQBOApAxAUQBPAhA3AFQBLAHBtgQQBVgMBigYQBigXCzg/QDjhPAwgPQCVguBZgaQCPgqBggYQA+gPBtgTICtgdIBmgSQA9gLAogFQAcgEAtgEIBIgGIBRgFIBQgFIBRgEIBRgDIBIgBIBJABIBGACIBGAEIBMAFIBLAHIBJAIIBJAKIBCAJIBCALIA+ALIA+AMIAjAIIAjAJIAzAPQAgAKASAJQASAIAUALQAUANAOAMQASAOATAUQAUAUAOASQAQAVASAeQARAbAOAbQAPAcARAlQAQAkAMAeQAOAjAPAtQAOArALAnQAKAnANAzIAVBbQAJAtAKA1QAJA3AGArQAHAxAGAxQAGA5ACApQACAoABA1QgBAxgBAqIgIB/QgGBHgGA3QgHA4gIAzQgJA+gLArQgQBGgRA5QgUBKgUAxQgUAugcAyQgdA1gcAkQgeAmgvAsQgqAogrAgQgvAjhGArQg5AkhBAiQguAZhBAdQg6Aag5AXQg9AYhEAYQhLAag5ARQg4AQhGAQQhGARg5AJQhDAMhWAKQhTAKhGAGQg/AFhSACQg/ACg6AAIgYAAg");
	this.shape_9.setTransform(2,-11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2EABB8").s().p("AJLW/QhBgBhOgEQhPgEhAgFQgwgFg8gIQg7gJgwgJQg3gLhDgRQhDgRg3gQQgzgPhBgXQg9gVg0gVQgxgTg6gaQg5gZgvgXQghgRgqgYQgpgYgggVQglgYgqgeQgqgfgigbQgggagngjQgngigfgeQgbgbgfghQgfgjgZgdQgXgdgdgnQgdglgWghIgrhCQgZgpgNgdQgOgegHgWQgLggAAgXQAAgNALgSQAMgSAKAGQAeAUAsA5QA0BCASARQCMB+AnAhQBvBfBOAyQCBBRBWAsQCGBEBgARQBNANBjgWQBjgXA/gtQA+gsA3hbQA0hTAWhTQAZhaABiMQABhmgLiDQgKhjgah4Qgbh4gihgQgWg/gjg7QgnhFgqglQgbgXgtgJQgwgIgeAOQglATgqA7IhBBeQgQAVhPB1Qg8BbgqApQgqAqg5AnQg9Aog0ATQgvARhDAGQg/AGg1gHQgygHhRgfIiBgyIhEgpIgrgcQgZgSgQgMIgoghQgXgUgOgPQgegggZgdQgggkgUgcQgSgbgYgpQgSghgTglQgPgegSgtIgfhNQgNgigSg2IgfhYIgdhYQgRg6gMgdQgNghgQgkQgSgmgPgcQgOgZgTgdQgUgcgSgWQgSgXgUgWQgYgZgUgPQgUgQgagQQgbgQgXgJQgbgLgbgHQghgIgXAAQglABgkAGQgrAIgbAOQgMAGgKAXIgOAlIABAJIAEAKIABAIIAAAPIgEANIgDAGIgCAFIgFAFIgIAHIgIAFIgIAEIgGgBIgHgDIgCgFIgBgGIAAgaIAKgtIABg6IgCgVIgIgWIgIgPIgGgHIgSgNIgGgIIgGgKIAAgNIADgMIAJgKIAUgNIAJgDIAHgCIAHAAIAIAAIAHACIAGACIALAHIAEAEIAEAFIACAGIgBAMIgLAhIACALIAHALQAMABASgGIAdgLIAegLQAVgHALgCIAngHIApgDIAlgBQAVAAAQACQAXACAYAFQAbAFAUAGQAcAIAeALQAhANAYAMQAeAOAfATQAjAUAYASQAZASAwArIBIA9IBOBBQAyAnAjASQBUAtArATQBPAjA4AFQBLAHBtgOQBWgMBigXQBhgXCzg+QDkhPAwgPQCTgtBbgaQCPgqBggYQA/gPBsgSICtgdIBmgSIBlgQQAbgEAtgDIBJgGIBQgGIBRgEIBRgEIBRgCIBIgBIBJAAIBGADIBGADIBLAGIBMAHIBJAIIBJAJIBCAKIBCALIA9ALIA+AMIAkAIIAjAJIAzAPQAfAKATAJQASAIATAMQAVAMAOAMQARAOAUAUQATAUAOATQAQAVATAeQARAbANAaQAQAdAQAkQAQAkANAfQANAiAPAuQAOArALAmQALAnAMAzQAMAwAJArIATBiQAJA3AGArQAHAxAGAxQAGA5ACAqQACAoAAA0QAAAxgCArQgCA6gGBEQgGBHgGA4QgHA4gHAyQgKA/gKArQgRBFgQA5QgVBKgVAxQgSAugcAyQgeA0gcAlQgeAlgvAsQgrApgqAfQguAjhGArQg6AjhAAiQguAZhCAdQg6Aag5AWQg8AYhFAYQhKAag6AQQg3AQhGAQQhGAQg5AKQhCALhXAKQhSAKhHAFQg+AFhSACIhiABIguAAg");
	this.shape_10.setTransform(0.9,-8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2EABB8").s().p("AJhWtQhBgBhOgEQhPgEg/gGQgxgEg7gJQg8gJgwgKQg3gLhCgRQhDgRg2gQQg0gQhAgWQg+gWg0gVQgwgTg5gaQg6gagugYQgigRgqgYQgogYghgVQgkgYgqgfIhMg6QgggagogkQglgigfgeQgbgbgggiQgfgigYgeQgYgdgdgnQgcgmgWghIgrhDQgZgpgNgdQgOgegIgWQgLghAAgWQAAgOALgSQAKgNALABQAeAUAtA5QAzBCASARQCLCAAnAhQBuBgBOAzQCABSBWAtQCGBFBgARQBNANBigVQBjgWA/gtQA9gsA3haQAzhTAWhSQAZhaABiLQABhlgMiEQgJhjgah4Qgah4gihfQgWhAgig7QgnhFgpgmQgbgXgtgJQgwgJgeAOQglASgrA6IhCBdQgQAVhQB0Qg9BZgqApQgqApg5AmQg9Ang0ATQgvARhCAFQg/AFg0gIQgygHhQgfIh/g0IhDgoIgqgdQgZgRgQgNQgVgQgSgQQgWgUgPgPQgdgfgZgdQgfgkgUgcQgSgagXgpQgSgggTgmQgOgcgTguIgghLIghhWIghhWIgghVQgUg2gNgeQgOgegTgjQgUgkgRgbQgPgXgWgbQgVgagTgUQgUgVgXgUQgZgXgVgNQgWgPgbgOQgdgOgYgIQgcgJgcgGQgigHgYABQgnACgjAHQgsAJgbAPQgNAHgJAWIgNAmIABAKIAEAJIABARIgCANIgEANIgHAKIgJAIIgRAIIgGgBIgGgDIgDgGIgCgOIAAgSIALg8IAAgsIgEgVIgIgXIgJgPIgFgHIgTgOIgHgJIgFgKIgBgNIADgMIAJgKIAUgNIAJgEIAHgBIAPAAIAHACIAGACIALAHIAFAEIAEAGIACAGIgDAUIgIAaIACALIAIALQALABATgHIAdgLIAfgLQAUgIALgDQARgEAYgDIAogGIAngCIAmgBIAwAFQAcADAVAFQAdAGAfAJQAiALAZAJQAgANAgAQQAlARAZAQQAbARAyAlQA7AtARAMIBUA7QA1AkAiARQBfAuAlAPQBSAhA3AGQBNAHBtgMQBZgLBggVQBjgWCzg6QDqhMAqgNIDuhEQCPgoBfgWQA+gPBtgSICsgcIBlgSQA/gLAmgFIBIgHIBIgGIBQgGIBQgFIBRgDIBQgDIBJgBIBIAAIBHADIBGADIBLAGIBLAHIBJAIIBJAJIBCAJIBCALIA+ALIA9AMIAjAHIAkAJIAzAQQAfAJATAJQASAIATAMQAVAMAOAMQARAOAUAUQATAUAOATQAQAUASAeQARAbAOAaQAPAdARAkQARAkALAfQAOAjAPAtQAOArALAmQALAnANAzQAMAxAJAqQAJAtAJA1IARBiQAHAxAFAxQAGA5ADAqQACAoAAA0QAAAxgCArIgIB+QgFBHgHA4QgGA3gIAzQgKA/gKArQgQBGgQA4QgVBKgUAxQgTAvgcAxQgeA1gcAkQgeAmguAsQgrApgrAgQguAjhGAqQg6AkhAAiQguAZhCAdQg6Aag5AXQg9AYhFAYQhKAZg5ARQg4AQhGAQQhFAPg6AKQhDALhVAKQhTAKhHAFQg+AEhSACIhiABIguAAg");
	this.shape_11.setTransform(-1.3,-6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2EABB8").s().p("AJ9WoQhBgBhNgEQhPgFhAgGQgwgEg8gJQg7gJgwgKQg3gMhDgRQhCgRg2gRQgzgPhBgXQg9gWg0gVQgwgUg5gaQg6gagugYQgigRgpgZQgpgYgggVQglgYgqggQgqgfghgbQgggbgngkQgmgigfgfQgbgbgfgjQgggigYgeQgYgegcgnQgcgmgWgiQgZgmgSgeQgZgpgNgdQgOgfgHgXQgMghAAgXQAAgOALgSQAKgOALABQAdAUAsA6QAyBDATARQCLCBAlAiQBuBiBOAzQCABTBWAuQCFBGBgASQBMAOBigVQBigVA+gtQA9gsA3hZQAyhTAWhSQAYhZAAiLQABhkgMiEQgIhkgah4QgZh4ghhfQgVhAgig8QgnhFgogmQgagXgugKQgvgKgfAOQglARgsA5IhCBbQgSAVhQBxQg+BYgqAoQgrApg5AlQg8Ang0ASQgwAPhBAEQg+AEgzgIQgygIhPgfIh8g0IhCgpIgpgcIgogeQgUgQgSgQQgVgTgPgPIg1g8QgfgjgSgbQgTgagWgoIglhEQgOgbgUgtIgghIIgkhTIglhSIgkhQQgXgxgQgdQgPgbgWggQgWgggUgZQgQgUgYgYQgXgXgWgSQgWgTgYgSQgcgUgWgNQgXgNgfgNQgdgNgagHQgggJgcgGQgkgHgZAAQgsABgjAEQgvAGgcAOQgOAGgLAWIgRAmIABAKIAEAKIABARIgCAHIgCAHIgFAMIgNANIgFADIgSAGIgHgCIgHgEIgCgGIgBgGIAAgJIACgSIABgJIALgkIAGg9IgDgWIgHgZIgEgIIgKgRIgSgRIgGgKIgFgLIAAgOIAFgNIAKgJIALgHIASgHIAIAAIAOACIAHACIAHAEIAKAIIAFAFIADAGIACAHIgEAVIgJAbIACALIAHANQALACAUgFIAfgIIAggKQAXgHALgCIAqgHIAqgEIApgDQAXgBAQABQAZAAAbADIAzAGQAeAFAhAHQAjAIAaAIQAiAKAhAMQAmAOAaANQAdAOA0AfIBRAwIBZAyQA3AfAkAOICIA3QBVAfA5AFQBOAHBugLQBcgJBfgSQBkgUCzg2IEVhRIDuhAQCQgnBcgUQA/gOBsgRICrgcIBkgRIBkgQQAbgEAsgDIBIgGIBPgHIBQgFIBQgEIBRgDIBIgBIBJAAIBGACIBFADIBMAGIBKAGIBJAIIBJAJIBDAJIBCALIA9AKIA9AMIAjAHIAjAJIA0APQAfAKATAIQASAIAUAMQAUAMAPALQARAPATAUQATAUAOASQAQAVATAdQARAbAOAaQAPAdAQAkQARAkAMAfQAOAiAPAtQAPArAKAmIAYBaQANAxAIAqIAUBiQAJA3AHArIANBiQAHA5ACApQACApAAA0QABAxgCArQgDA6gFBEQgFBHgGA4QgGA3gIAzQgJA/gLArQgPBGgQA5QgWBKgUAxQgSAvgcAxQgeA1gcAlQgdAmgvAsQgrApgqAgQguAkhHArQg6AjhAAjQguAZhCAeQg6Aag5AXQg9AYhFAYQhKAag5ARQg5AQhFAQQhHAQg5AJQhDAMhWAKQhSAJhIAGQg+AEhSACIhYABIg4AAg");
	this.shape_12.setTransform(-3.9,-4.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2EABB8").s().p("AKWWpQhBgBhOgFQhOgEhAgGQgxgFg7gJQg7gJgwgKQg2gMhEgRQhBgRg2gRQgzgQhAgXQg+gXg0gVQgvgTg6gbQg5gbgugYQgigRgpgZQgpgYgggWQgkgZgqgfQgrggghgcQgggagnglQgmgjgegfQgbgbgfgjQgfgkgYgeQgYgegcgoQgcgngWgiQgYgmgSgfQgYgpgOgeQgNgfgIgYQgLghAAgYQAAgPAKgSQAJgPALABQAeAVArA6QAxBEASARQCKCEAlAiQBuBjBNA0QB+BVBWAvQCFBHBgATQBMAPBhgVQBigVA9gsQA9gsA2hZQAyhSAWhSQAXhZAAiLQABhhgMiGQgJhlgYh3QgZh5gghfQgVhAghg7QgnhGgngmQgagYgugLQgugLgfANQglARgsA3IhFBaQgRAVhSBuQhABWgqAnQgrAog5AjQg9AmgzARQgvAQhAADQg9ADgzgJQgxgIhNggIh6g2IhAgoIgogcIgngdIglggQgVgTgOgPQgcgegYgcQgdgjgTgaQgRgYgXgoIglhCQgMgXgWguIgihFIgnhOQgZgvgQgdIgphIQgagsgTgaQgRgYgZgcQgYgbgXgVQgRgRgcgVIgwgiQgXgPgcgQQgdgRgYgLQgZgMgggNQgggMgbgIQgjgKgdgHQgmgIgagCQg2gEgeAAQgyAAgfAKQgOAEgPAVIgVAjIAAALIADALIgCASIgFANIgHALIgFAEIgLAGIgGACIgKACIgKAAIgIgEIgGgFIgBgHIgBgHIADgRIAGgSIAQgiIANg9IgBghIgGgcIgIgTIgQgWIgFgMIgDgNIACgOIAGgNIALgHIAMgFIAJgCIAKgBIAHABIAPAFIAGAEIAQAQIAEAFIADAIIAAAIIgDAMIgPAjIAAANIAHAPQALAEAVgCIAggEQALgBAYgFIAjgFQARgCAbgBIAtgCIAqAAQAZgBARABIA1AEIA1AFIBBAJIBBAMIBEAOQAoAKAbAJQAeAKA3AYIBUAjIBdAmQA7AXAkAMICOAtQBZAbA5AEQBRAGBugIQBjgIBcgQQBmgSCygvIEXhJIDsg7QCUgkBYgTQA9gMBtgRICqgaIBjgSIBigQQAbgEAsgEIBHgGIBPgHIBPgGIBPgEIBQgEIBIgBIBJAAIBGABIBGADIBLAFIBLAGIBJAIIBIAIIBCAJIBCALIA+AKIA9ALIAjAHIAjAJIA0AOQAfAKATAIQASAIATAMQAVAMAOALQARAOAUAUQATAUAOASQAQAVATAdQARAbAOAaQAPAcARAkQARAkAMAfQANAiAQAtIAaBRQALAnANAzQAMAwAJArQAKAtAKA0QALA3AGArIANBiQAHA5ADApQACApABA0QAAAxgCArQgCA7gEBDQgFBIgGA3QgGA4gIAzQgJA/gKArQgQBGgPA5QgVBKgUAyQgTAugbAyQgeA2gcAlQgeAmguAtQgrApgqAgQgvAkhGAsQg7Akg/AjQgvAZhCAeQg6Abg5AXQg9AYhFAZQhLAag6ARQg4ARhGAQQhGAQg6AKQhDALhWAKQhTAKhHAFQg+AFhTACIhYABIg4AAg");
	this.shape_13.setTransform(-6.4,-4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2EABB8").s().p("AK2WqQhBgBhOgFQhPgEg/gHQgxgFg7gJQg7gJgwgKQg3gMhDgSQhCgSg1gRQgzgQhAgXQg+gXgzgVQgwgUg5gbQg6gbgtgZQgigSgpgZQgpgYgggWQgkgZgqggQgqghghgcQgggbgnglQglgjgfggQgbgcgegjQgfgkgYgeQgYgfgcgpQgbgngVgiIgqhGQgYgrgNgeQgNgfgIgZQgKgigBgYQAAgPAKgTQAJgPALABQAdAUAqA7QAwBFASARQCJCHAlAiQBsBlBNA1QB8BWBXAwQCEBKBhATQBLAQBhgVQBhgUA9gsQA9grA2hZQAxhSAVhRQAXhZABiKQAAhegMiJQgIhkgYh3QgYh6gfheQgVhAggg8QgmhGgognQgagZgsgLQgugMgfANQgmAPgsA2IhGBYQgSAUhTBrQhCBVgqAlQgsAng4AiQg9AlgzAQQguAPg/ACQg9ACgzgJQgvgJhLghIh3g2Ig/gpIgmgcIgmgcIgkggQgVgSgNgPQgbgdgXgcQgdghgSgaQgRgXgXgnIgkhAIgjhCIgkhBIgqhHQgagqgTgbQgZgjgWgcQgcglgXgXQgSgUgdgXQgZgUgagSQgTgNgfgQIg0gbIg3gZIg4gYIg8gXIg9gUIhCgUQgogMgagFIhVgQQg1gIggAFQgPACgSARIgaAeIgCALIABAMIgEARIgDAGIgEAGIgFAFIgFAEIgGADIgGACIgMABIgLgBIgLgDIgHgGIgFgHIgBgHIABgHIAGgRIAJgPIAWgeIASgrIAGgbIACgqIgGggIgMgaIgDgOIAAgOIAEgOIAIgMIALgFIAWgCIAJABIAHADIANAJIAFAFIAFAHIALAUIACAJIgBAIIgJAUIgQAZIgBANIAFARQAKAHAVACIAhADQAMABAYgBIAjgBIAuADIAtADIArADIArACIA2AFIB4AMIBDAGIBFAHQAsAFAaAEQAfAGA4ANIBXAWIBiAXIBiAWICUAiQBeAVA3ADQBWAFBvgHQBpgFBagOQBngPCygpIEYhAIDrg1QCXgiBUgRQA7gLBugQICpgaIBhgRIBigRIBFgIIBGgGIBPgIIBOgGIBPgFIBQgEIBIgCIBIgBIBGABIBFADIBLAEIBLAGIBJAHIBJAIIBCAJIBBAKIA+AKIA9AKIAjAHIAkAJIAzAOQAfAJATAIQASAIATALQAVAMAOAMQASAOATATQATAUAOASQARAUASAeQARAaAPAaQAPAcARAkQARAkAMAeQAOAjAQAtQAPAqALAmQAMAnANAzQAMAwAKArIAUBhIARBiIAOBiQAHA5ADApQADAoAAA1QABAxgBArQgCA7gFBDQgEBHgGA4IgNBrQgJA/gJArQgQBGgQA5QgUBLgUAyQgSAvgcAyQgdA2gcAlQgeAnguAtQgsApgqAhQgvAkhGAsQg7AlhAAjQguAahCAfQg7Abg5AXQg+AZhFAZQhLAbg6ARQg5ARhGAQQhGAQg6AKQhEAMhWAKQhUAKhHAGQg/AEhSACIhZABIg4AAg");
	this.shape_14.setTransform(-9.7,-3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2EABB8").s().p("ALFWpQhAgBhPgFQhPgFg/gGQgxgGg7gJQg7gKgwgKQg3gMhDgSQhCgSg1gSQgzgQhBgYQg9gXg0gWQgvgVg5gbQg5gcgugYQgigTgpgZQgogZghgXQgjgZgqggQgqghghgcQgfgcgnglQgmgkgdghQgbgcgfgkQgegkgXgfQgYgfgbgpQgbgogVgjQgXgngSggQgXgqgNgfQgNgfgHgaQgLgiAAgYQAAgQAKgTQAIgQAMABQAcAVApA7QAvBFASASQCHCJAkAjQBrBnBNA2QB7BXBXAyQCEBLBhAVQBJAQBigTQBfgUA/grQA9gqA1hZQAxhRAVhQQAYhYAAiLQAAhbgMiKQgIhlgXh2QgXh6gfheQgUhBgfg8QglhGgogoQgZgYgsgNQgugMgfAMQgmAOgtA0QglAugiAnQgTAVhUBoQhDBSgqAlQgtAlg4AhQg9AkgzAPQgtANg/ABQg7ABgygKQgvgKhJghIh0g3Ig9gpIgmgbIgkgdIgjgfQgVgSgNgOQgZgcgXgcQgcghgSgYQgPgWgYgnIgkg9Igkg/QgWgogPgVQgVghgYgfQgbglgVgYQgZgbgcgbQgegegagTQgUgPgggSQgagNgegOQgTgJgjgMIg3gSIg7gUIg5gTIg+gVIg+gVIhAgYIhCgWIhTgdQg0gRgggCQgOgBgUAMQgKAHgVAQIgDALIgBALIgDAIIgEAIIgEAFIgFAFIgFADIgGADIgGABIgOAAIgRgGIgKgGIgGgIIgEgJIABgGIACgHIAJgPIAmgjIAJgMIAPgZIALgZIAIgqIABgWIgBgMIgGgeIAAgPIACgOIAHgNIAJgKIALgCIAMACIAIACIAIADIAGAFIAFAFIAKAOIAIAXIABAIIABAIIgCAJIgHALIgXAcIgEANIADASQAIAJAUAHIAgAKQAMAEAWADIAjAFIAsAIIAtAJIAqAGIAqAFIA1AHQAiAEAUABIBDADIBCABQASABA0gCQAwgBAXAAIBaAFIBZAGIBlAHIBlAIQAaADB/ATQBkAPA2ACQBdACBsgEQBxgEBYgLQBpgNCxgiIEZg4QA6gLCvgkQCdggBOgOQA5gKBugQICogZIBggRQBCgMAegFIBGgJIBEgHIBOgIIBOgHIBPgGIBOgEIBIgDIBIgBIBGABIBGACIBLAEIBKAGIBJAGIBIAIIBDAIIBBAJIA+AKIA9AKIAkAHQAUAEAOAEIAzAOQAgAJATAIQASAIAUALQAUAMAPALQAQAOAVATQASAUAPARQAQAVATAdQARAaAPAaQAPAcASAkQARAjAMAfQAOAiAPAtIAbBQIAZBaIAXBaQALAtAKA1QALA2AHArQAHAxAGAxQAIA5ADApQADAoABA1QABAxgBArQgBA7gFBDQgEBIgFA3QgGA4gGA0QgKA+gJAsQgPBGgQA6QgUBLgTAxQgTAwgbAyQgdA2gdAmQgdAngvAtQgrAqgqAhQgvAlhIAsQg6AmhAAjQgwAahCAfQg6Acg7AXQg9AahGAZQhLAbg6ARQg6ARhGARQhHAQg7AKQhEAMhXAKQhTAKhIAGQg/AEhTACIhZABIg5gBg");
	this.shape_15.setTransform(-11.7,-2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2EABB8").s().p("ALCWnQhBgBhPgGQhPgFhAgHQgxgGg7gKQg7gKgwgKQg3gNhDgTQhDgSg1gSQgzgRg/gYQg+gYgzgXQgvgUg6gcQg4gcgugZQgigTgpgaQgogZgggXQgkgagpghQgrghgggdQgfgcgmgmQglgkgfghQgagcgeglQgegkgXggQgXgfgbgqQgbgogUgjQgXgngRggQgXgrgMgfQgMgfgIgaQgJgjgBgYQAAgQAKgUQAIgPALABQAdAVAoA8QAtBFARASICpCvQBqBoBNA3QB5BZBYAzQCCBNBhAWQBLARBggSQBigSA9gqQA9gpA1hYQAyhQAUhQQAYhXAAiKQAAhZgLiLQgIhlgWh2QgXh6gchdQgVhBgfg9QgkhHgngnQgZgZgrgNQgugOggALQglAOgvAzIhHBTQgTAUhXBlQhEBQgrAkQgsAkg4AgQg9AigzAOQgtAMg+AAQg7AAgygLQgtgKhIgjIhxg4Ig8goIgkgcIgkgcIghgfIggggQgZgbgWgcQgbgggSgYQgPgUgWgmIgkg8Igkg7QgYglgPgUQgXgegZgcQgcghgYgVQgYgWgggWQghgYgcgOQgWgMgjgMIg8gSIg5gMIg6gLIg8gOQgkgIgYgHIg9gTQghgLgbgKIg+gZIg+gcIhNgnQgxgagdgHQgOgDgUAHQgOAEgTALIgEAJIgDALIgEAHIgFAGIgKAHIgFACIgHABIgGAAIgGgCIgGgCIgRgLIgIgIIgEgJIgDgKIACgGIADgGIAKgLIAHgFIAcgOIAHgFIAUgTIARgXIAKgVIAJgcIAGghIAAggIACgOIAFgOIAHgLIALgIIALABIARAIIAGAFIAIANIAEAHIAEAQIACAZIgBAIIgCAIIgOAQIgVARIgEAMIgBASQAHALARAKQAKAHATAJQAMAGAUAHIAgAKIApANQAaAJAQAEIAnAJIAoAHIA0AIQAfAEAUABQAdABAkgBQAkgBAdgCQAZgCAugHIBHgLIBbgKIBcgIIBngJQBAgEAnAAQAvABBvAJQBtAJAwAAQBwABBfgDQB6gDBTgJQBtgLCvgcIEagvQBHgLCigfQCjgeBGgMQA1gJBxgPQB5gRAugHIBfgRQBCgNAdgFIBEgJIBEgHIBOgJIBMgIIBPgGIBPgFIBIgDIBIgCIBFABIBFABIBLAEIBLAFIBJAGIBIAHIBBAIIBCAJIA+AJIA9AKIAjAHIAkAHIAzAOQAfAJATAIQASAHATALQAVAMAOALQASANAUAUQATATAOASQAQAUAUAdQARAaAPAaQAPAcASAkQARAjANAeQAOAiAQAtIAbBQQAMAnAOAyQANAwAJArIAWBhQALA3AHArQAIAwAHAxQAHA5AEApQADApABA0QABAxgBArQgBA7gDBDQgEBIgFA4QgGA4gHAzQgIA/gJArQgPBHgPA5QgVBMgTAyQgSAvgcAzQgdA2gdAmQgeAnguAuQgrAqgrAiQgvAkhHAtQg8AmhAAkQgvAahDAgQg7Abg6AYQg+AZhGAaQhNAbg6ARQg6ARhHARQhHARg7AKQhEALhYALQhUAJhJAGQg/AEhTABIhLABIhHgBg");
	this.shape_16.setTransform(-11.9,-1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2EABB8").s().p("AKxWkQhBgChPgGQhPgGhBgIQgwgFg8gLQg7gKgwgMQg2gMhEgUQhBgTg2gSQgzgRhAgaQg9gYgzgXQgwgVg5gdQg4gcgugaQgigTgogaQgogagggXQgkgagpghQgqgigggdQgggdgmgmQgkglgeghQgagcgeglQgeglgWggQgXgfgbgqQgagogUgjQgWgngRghQgWgrgMgfQgMgfgIgaQgJgjAAgYQAAgQAJgUQAJgQAKABQAdAWAmA8QAtBGARASQCECNAjAjQBpBqBLA5QB4BZBZA1QCCBOBhAYQBJASBhgQQBigRA9gqQA9goA2hWQAxhPAVhPQAYhWAAiKQAAhVgKiOQgIhkgVh2QgWh5gdheQgUhBgeg8QgjhHgngoQgZgagrgNQgugOgfAKQgmANgvAxIhIBRQgUAUhXBjQhFBOgrAjQgtAjg5AfQg9AhgyAMQgtAMg+gCQg6gBgxgMQgtgKhGgkIhvg5Ig6gpIgkgbIgigdIghgeQgTgSgMgOQgXgagXgcQgagfgRgYQgOgTgXgmIgkg6Igkg4QgXgkgQgSQgXgbgagaQgegdgZgRQgZgTgjgSQgigSgegLQgXgIglgHIg+gJQgTgDgpgDIg8gFIg8gIQgkgGgZgGQgbgGgggKQghgKgZgKQgagKghgQQgfgPgagPQgPgIg3gmQgtgfgagLQgMgFgUADQgOACgSAFIgGAIIgDAKIgKALIgFADIgLACIgGAAIgLgFIgLgIIgJgJIgHgLIgDgJIgBgKIACgFIAEgFIAGgFIAMgHIAjgKIAVgPIASgSIAMgSIAQgjIAGgWIAEgfIAFgOIAHgMIAIgJIALgGIAJADIAIAGIAGAFIAFAGIAFAOIADAPIAAAZIgDAQIgDAHIgOANIgVANIgGALIgDASQAGALAOANIAaAUQAKAHASAJIAdAOIAlARIAmAPQAQAFAVAFQAUAGARADIAwAIQAdAEAUAAQAcAAAjgDQAjgDAdgFQAZgEAtgMIBHgSIBcgWQA6gOAigHIBogVQBAgNAogDQA4gDBpACQCDADAeAAIDTgCQCDgCBPgHQBxgJCsgXQBbgMDAgcQBNgLCagbIDpgnQAwgHB1gQQBzgPAzgIQAdgEBBgNIBegSQAagEApgFIBEgIIBNgKIBMgIIBPgHIBOgFIBHgEIBIgCIBFAAIBGACIBLADIBKAEIBJAGIBIAHIBCAHIBCAJIA9AJIA9AJIAkAHIAjAHIAzAOQAfAIATAIQASAHAUALQAVAMAOALQASANATATQAUATAOASQARAUATAdQARAaAPAaQAQAbARAkQASAjAMAeQAPAiAQAtQAQAqAMAmQAMAmAOAzIAXBaIAWBhQALA3AIArIAPBhQAIA5ADAqQADAoACA0IABBcQgBA7gEBEQgDBHgFA4QgFA4gHAzQgIA/gJAsQgPBGgPA6QgUBMgTAyQgTAvgbAzQgeA3gcAlQgeAogvAuQgrArgrAhQgvAlhIAtQg8AmhAAkQgwAbhDAfQg7Acg7AYQg+AZhHAaQhMAbg7ARQg6AShIAQQhIARg7AJQhFAMhXAKQhWAKhIAEQhAAFhTABIgzAAIhggBg");
	this.shape_17.setTransform(-10.8,-1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2EABB8").s().p("AKfWgQhBgChQgGQhOgHhBgIQgxgGg7gLQg7gKgwgMQg3gNhDgUQhBgUg3gTQgygRhAgaQg9gZgzgXQgvgVg6geQg4gdgtgaQgigTgpgaQgngagggYQgkgagpgiQgqgigggeQgfgcgmgnQgkglgeghQgZgdgeglQgdglgXggQgWgfgbgqQgZgpgUgjQgWgngRghQgWgrgMgfQgMgfgHgaQgJgjAAgYQAAgQAJgTQAIgQALABQAcAWAmA8QArBGARASQCCCOAkAlQBoBqBLA5QB3BbBYA2QCCBPBhAZQBJATBhgPQBhgPA+gpQA8gnA2hVQAyhOAVhOQAYhWAAiJQAAhTgKiOQgIhlgVh1QgVh5gcheQgUhBgdg8QgjhIgngoQgXgZgsgOQgugPggAKQglAMgvAxIhKBPQgTAThZBiQhFBNgsAiQgtAig4AeQg+AggxALQgtALg+gCQg6gCgwgNQgsgLhGgkIhtg6Ig5gqIgjgbIghgdIghgeIgeggQgWgZgXgcQgZgfgRgYQgNgSgXgmIgkg5Igjg2QgXgigRgSQgWgYgcgYQgegagagPQgZgQglgOQgigOgfgIQgYgGgngDIg/gDQgSgBgqABQgrABgSgBIg9gEQgkgDgYgFQgbgFgfgIQgggJgYgKQgagKgegPQgegPgYgPQgRgKgvgmQgqgigXgMQgLgGgTAAQgOAAgRADIgFAGIgEAJIgFAFIgFAEIgFACIgFABIgGAAIgFgBIgGgDIgKgIIgFgFIgNgVIgCgKIAAgJIACgGIAEgEIAMgGIAGgCIAagDIAIgCIAUgLIATgPIAMgQIASggIAHgVIAHgeIAGgNIAHgLIAJgIIALgEIAIAEIALAMIAEAHIACAHIACAPIgCAfIgBAIIgDAHIgEAHIgIAHIgZAPIgHAKIgEAQQAFAMAMAOQAKALANALQAJAIAQAKIAbAPIAiASQAVALAPAFQAOAGATAFQATAGAQACQAaAFAUACQAbAEATgBQAcgBAigFQAigEAbgHQAagGAsgPIBGgZIBbgfQA8gVAhgJIBnggQBAgTApgFQA8gHBngCICjgCIDWgCQCLgCBMgFQBzgICpgTQB+gOCegUQBQgKCXgZIDogkIClgWQBvgPA1gIQAegFBAgNIBdgSIBDgJIBDgJIBMgJIBNgJIBOgHIBOgHIBHgDIBIgDIBFAAIBFABIBLADIBLAEIBIAGIBJAGIBBAIIBCAIIA9AIIA+AKIAjAGIAjAHIAzANQAgAJATAIQASAHATALQAVALAPALQARANAUATQATATAPASQAQAUAUAdQARAaAPAZQAQAcASAjQARAjANAeQAPAiAQAtQAQAqAMAlQAMAnAOAzQAOAvAKArIAWBhQAMA2AHArQAJAxAHAxQAIA4AEAqQADAoACA0QABAxAAArQgBA8gDBDQgDBIgFA3QgFA4gGA0QgIA/gKArQgOBHgPA6QgUBLgTAyQgTAwgbAzQgdA3gdAlQgeAogvAuQgrArgrAiQgwAlhHAtQg9AmhAAkQgwAbhDAfQg8Acg7AYQg+AahIAZQhMAbg8ASQg6ARhHAQQhJARg7AJQhFAMhYAJQhWAKhIAEQhAAEhUABIgrAAQg2AAgygCg");
	this.shape_18.setTransform(-9.3,-0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2EABB8").s().p("AKYWeQhBgDhQgGQhOgHhBgIQgxgGg7gMQg7gLgwgMQg3gNhDgUQhBgUg2gTQgzgSg/gaQg9gZgzgXQgvgWg5geQg4gdgugaQghgTgpgbQgngagggYQgkgbgpgiQgpgigggdQgfgdgmgnQgkglgeghQgZgdgeglQgdglgXggQgWgggagqQgagogUgkQgVgmgRgiQgWgrgMgfQgMgfgHgaQgJgiAAgZQAAgPAIgUQAJgQAKACQAbAWAmA8QArBGARASQCBCOAkAlQBnBsBLA5QB3BbBYA3QCCBQBhAaQBJATBggOQBhgPA+goQA8gmA2hVQAxhNAVhOQAXhVABiIQAAhSgLiPQgHhlgVh0QgVh6gchdQgThBgeg9QgjhHgmgoQgXgagsgOQgugPgfAKQgmAMgvAwIhKBPQgUAThZBgQhGBMgrAiQgtAig5AdQg9AfgyALQgsALg+gDQg5gDgwgNQgsgMhFgkIhsg7Ig4gqIgjgcIghgcIgggfIgeggQgVgZgWgcQgZgegRgYQgNgSgXgmIgjg4Igjg1QgXghgQgRQgXgYgcgWQgegYgZgOQgagOglgMQgigLgggGQgXgEgnAAIhAABIg9AEIg8AEIg9gBQgjgBgZgEQgbgDgegHQgggIgYgIQgagJgdgOQgfgOgWgOQgSgLgtglQgpgigXgMQgKgGgTgBQgOAAgQACIgFAGIgEAJIgKAJIgKACIgKgBIgGgDIgKgJIgMgPIgFgMIgCgJIAAgKIACgFIAEgEIAFgDIAGgDIANgCIAGAAIAUgCIALgFIATgMIAPgPIAKgQIARgiIALgnIAGgNIAHgLIAJgIIAKgDIAIAEIAKAMIAEAHIACAHIACAXIgDAXIgBAIIgDAHIgEAHIgIAHIgFADIgTAKIgHAKIgDAQQAEAMAMAOQAJALANALQAJAIAPAKIAbAPIAhARQAUAKAOAGQAPAFASAFQATAFAPACQAZAEAUABQAbACASgBQAbgCAigHQAhgGAbgIQAagIArgSIBEgcIBbgmIBcgkIBmgmQBAgWApgGQA9gKBmgEICkgFQAzgCCmAAQCQAABIgFQB2gHCngRQCJgOCUgRQBQgKCWgXIDngkICkgVQBtgOA4gJQAegFA/gNQBDgOAZgEIBDgKIBDgJIBMgJIBMgJIBOgIIBOgGIBIgEIBHgDIBFAAIBGABIBKADIBLAEIBIAFIBJAGIBBAHIBCAIIA9AJIA+AJIAjAGIAjAHIA0ANQAfAJATAHQASAHAUALQAUALAPALQARAOAUATQAUATAOARQARAUATAdQASAaAPAZQAQAbASAkQARAjANAeQAPAiAQAsQAQAqAMAmQANAmAOAzIAYBaIAWBhIAUBiQAIAwAHAxQAJA5ADApQAEAoACA0QACAygBArIgDB+QgEBIgEA3QgFA5gGAzQgIA/gJAsQgPBGgPA6QgTBMgUAyQgSAwgcAzQgdA2gcAmQgeAogvAuQgsArgqAhQgwAmhIAtQg8AmhBAkQgvAbhEAgQg8Abg7AYQg+AahIAZQhMAbg8ASQg6ARhIAQQhIAQg7AKQhGALhYAKQhWAJhIAFQhAADhUABIgaAAQg/AAg6gCg");
	this.shape_19.setTransform(-8.5,-0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2EABB8").s().p("AKiWeQhBgChPgHQhPgGhAgIQgxgGg7gMQg7gLgwgLQg3gOhDgUQhBgUg2gTQgzgShAgZQg8gZgzgYQgwgVg5geQg3gdgugaQghgUgpgaQgogbgfgXQgkgbgpgiQgqgigggeQgfgcgmgnQgkglgeghQgZgdgegmQgeglgWggQgXgggagpQgagpgTgkQgWgmgSgiQgWgrgLgfQgMgfgIgaQgJgjgBgYQABgQAHgTQAJgQAKABQAcAWAmA9QArBGARATQCBCNAlAmQBnBrBMA6QB1BaBaA3QCBBQBiAaQBIATBggOQBhgPA9goQA9gnA2hUQAxhOAVhOQAXhVAAiIQAAhTgKiOQgHhlgWh0QgVh6gchdQgThBgeg9QgjhHgmgoQgYgagsgOQgtgOggAKQgmALgvAxIhKBPQgTAThZBhQhGBNgsAhQgtAig5AdQg9AggxALQguAKg9gDQg6gCgwgNQgtgMhEglIhsg8Ig5gqIgigcIghgeIgggeIgeghQgVgZgWgdQgYgfgRgYQgNgSgWgnIgjg5Igjg2QgWghgPgSQgXgYgbgXQgdgZgZgOQgZgPgkgMQgigMgfgGQgYgFgmAAIg+ABQgSABgqAEQgrAEgSABIg8AAQgkAAgYgDQgcgDgfgGQghgGgZgIQgagHgggNQgfgNgZgNQgRgJgygiQgsgfgZgKQgLgFgSABQgQABgQAEIgEAIIgEAJIgEAFIgGAFIgEACIgFABIgFABIgGgBIgGgCIgLgIIgNgOIgHgLIgCgJIgCgKIADgFIADgFIAGgEIAMgFIAhgHIAUgNIASgRIAFgIIAVgqIALgzIAFgOIAGgMIAIgIIAKgFIAJADIANAMIADAGIAFAOIADAPIgBAYIgBAIIgCAIIgEAHIgHAIIgFAEIgUAMIgFALIgDAQQAGAMANANQAKAJAOALQAKAHAQAJIAdANIAjAPQAVAJAPAEQAQAFATADQAUAEAQACIAuADQAcABATgCQAcgDAhgHQAigIAbgIQAagIAsgTIBDgdIBbglQA6gXAhgMIBmgkQA/gUApgGQA8gIBngCICjgCIDXABQCNACBJgFQB0gHCogRQB+gNCegUQBRgKCVgYIDogkICkgWQBugPA2gIQAfgFA/gNQBDgOAZgEIBEgKIBCgJIBMgJIBNgJIBOgIIBOgGIBHgEIBHgCIBGgBIBGABIBKADIBKAEIBJAFIBIAHIBCAHIBCAIIA9AIIA9AJIAjAHIAkAHIAzANQAgAIATAIQARAHAVALQAUALAPALQARANAUAUQAUASAOASQARAUATAcIAgA0QAQAbASAkQASAjAMAeQAPAhARAtQAPAqANAmQAMAmAPAzQANAwAKAqQALAtAMA0IATBiQAIAwAIAxQAIA5ADApQAEAoACA0IABBdQAAA7gDBDQgDBIgFA3QgFA5gHAzQgHA/gJAsQgPBGgPA6QgUBMgTAyQgSAvgbA0QgdA2gdAmQgeAogvAuQgrArgrAhQgwAlhHAuQg8AmhBAkQgvAbhDAfQg9Acg6AYQg/AZhHAaQhNAbg7ARQg6ARhHARQhJAQg7AKQhGALhXAKQhWAJhJAFQg/AEhUAAIgaABQg/AAg6gDg");
	this.shape_20.setTransform(-9.2,-0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2EABB8").s().p("AK2WgQhBgChPgHQhPgGhAgIQgxgGg7gLQg6gLgwgLQg3gOhDgTQhCgUg1gTQgzgRg/gaQg9gZgzgXQgvgWg5gdQg5gdgtgaQgigTgogbQgogagggYQgjgagqgiQgpgigggeQgggdgmgmQgkglgegiQgagdgeglQgeglgWggQgXgggbgqQgagogVgkIgnhIQgWgsgNgfQgMgfgIgaQgKgjgBgYQAAgPAIgUIASgPQAcAXAmA9QAsBGASATQCACMAmAnQBpBrBLA6QB3BaBZA2QCCBQBhAZQBJATBggPQBhgPA9goQA8gnA1hVQAxhOAUhOQAXhVAAiJQAAhTgLiOQgHhlgWh0QgWh6gchdQgThBgeg8QgkhIgngoQgYgZgrgOQgugOggALQglAMgvAxIhKBQQgSAThaBjQhFBNgsAiQgtAig5AeQg+AfgyAMQgtAKg+gDQg6gCgwgOQgtgMhFglIhug9Ig4grIgigdIghgeIggggQgSgTgMgOIgrg4QgYgggQgZQgNgTgWgnIghg7Ighg5QgVgjgPgSQgVgagZgYQgdgcgXgQQgYgQgigOQghgOgdgHQgXgGgkgBQgRgBgsABQgTAAgoAEIg6AGIg+ACQgkABgZgCQgcgBghgEQgigEgbgFQgcgFgjgJQghgJgdgKQgQgFg9gbQgygWgcgGQgMgCgUAGQgOAFgQAJIgEAIIgCALIgEAGIgEAGIgEAEIgFADIgGACIgGAAIgGAAIgMgFIgHgDIgKgIIgIgIIgFgJIgDgKIABgGIADgFIAFgGIAFgFIANgIIATgIIAHgFIASgSIAPgWIAMgcIAIgoIgBgrIACgOIAFgOIAHgLIAJgHIAKABIAJAEIAHAEIAGAFIAEAGIAKAWIAFAgIgBAIIgCAIIgMAQIgSAQIgEAMIAAASQAIAKAQAKQAMAHARAIQALAGAUAFIAgAHIAoAKQAYAFAQACQARADAVABIAnABQAdAAAVgBQAdgCAUgDQAcgFAkgJQAhgJAdgJQAYgIAtgTIBFgdIBZgiQA3gVAjgLIBlgdQA/gQAogEQA6gFBnAEICgAGIDUAGQCHAEBMgFQBwgGCrgUQBcgLC+gaQBPgKCXgaIDngmIClgXQBwgPA1gJQAegEA/gNQBDgOAbgEIBDgKIBDgJIBNgJIBMgJIBOgIIBOgGIBIgEIBHgCIBFAAIBGABIBKADIBLAEIBJAFIBIAHIBCAHIBBAIIA+AJIA9AJIAjAGIAkAHIAzANQAfAJATAIQASAHAUAKQAVAMAOALQASANAUATQATATAPASQAQAUAUAcQARAbAPAZQAQAbASAkQARAjANAeQAOAiARAtQAQAqAMAlQAMAnAPAzIAXBaQALAsALA1QAMA2AIArQAIAxAHAxQAJA4ADAqQAEAoACA0QABAxAAArQgBA8gDBDQgDBHgFA4QgFA4gGAzQgIA/gJAsQgOBGgPA6QgUBMgTAyQgSAwgcAzQgdA2gcAmQgeAnguAuQgrArgrAiQgvAlhIAtQg8AmhAAkQgvAbhDAfQg8Acg6AYQg+AahHAZQhMAbg8ASQg6ARhHAQQhIARg7AJQhFAMhXAKQhWAJhIAFQg/AEhUAAIgrAAQg2AAgxgBg");
	this.shape_21.setTransform(-10.4,-0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2EABB8").s().p("AK/WfQhAgChPgGQhOgGhBgIQgwgGg7gKQg6gLgwgMQg3gNhDgTQhCgUg1gSQgygShAgZQg9gZgzgXQgvgWg5gdQg4gdgugaQghgTgpgaQgngagggYQgkgagpgiQgqgighgdQgfgdgngmQgkgmgeghQgbgdgeglQgeglgXggQgXgggcgpQgagpgVgkQgXgmgSgiQgXgrgNgfQgNgggIgZQgKgjgBgYQgBgPAIgTIARgPQAcAXAnA9QAtBGASATQCACKAoApQBpBrBNA5QB3BaBZA2QCDBPBhAZQBJATBfgQQBggPA9goQA8gnA1hVQAwhOAUhOQAXhWAAiIQgBhWgLiMQgIhkgWh1QgWh6gdhdQgUhBgfg8QgkhHgngoQgZgZgrgNQgugNgfALQgmAMgvAzIhJBRQgSAShZBmQhFBOgsAiQgtAjg5AeQg+AggyAMQguALg+gDQg7gDgxgNQgtgNhGgmIhvg/Ig5gsIgigeIghgfIggghIgdgjQgWgbgVgeQgYgigQgaQgMgVgVgoIgfg9Igfg8QgUglgOgUQgVgdgWgaQgagfgXgSQgWgSgfgSQgggSgbgJQgWgHgigEIg6gDQgUgBglAEIg5AEIg9AEIg9ADIhAAAIhAgCIhDgFIhEgHIhVgNQg3gJgfADQgOABgRAOQgMAIgPAQIgCAKIABALIgCAIIgDAIIgIAKIgKAGIgGACIgHAAIgNgBIgMgEIgLgFIgHgHIgFgJIAAgGIABgHIAHgOIAKgNIAXgXIAOgYIAJgcIAEgWIAAgpIgEgXIgJgeIgCgOIAAgPIAEgNIAIgLIALgCIALAAIAIACIAIADIAGAEIALALIAJAOIAKAWIABAJIAAAIIgFAMIgEAIIgPAWIgBANIAFASQAKAIAUAFIAgAFQANACAWAAIAigBIAsAAIAsgBIAqgEIApgFIA1gJQAfgFAVgFQAcgHAlgMIBAgVIBFgcQAvgTAWgIQAygRAngLQA1gRAlgIQA9gNAogHQA9gKApAAQA2AABnALQB9APAhABIDPAOQCAAHBOgFQBsgGCtgYIEXgqQBNgLCagdQCtgfA6gKQAygIBzgQQB1gQAxgIQAdgFBBgNIBegSIBEgKIBDgIIBNgJIBNgJIBOgHIBOgGIBIgEIBHgCIBGAAIBFABIBLADIBLAEIBIAGIBJAGIBBAIIBCAIIA+AJIA9AJIAjAGIAjAIIA0ANQAfAIATAIQASAHAUALQAUAMAPALQARANAUATQAUATAOASQARAUATAdQASAaAOAZQAQAcASAkQARAjANAeQAPAhAQAtQAQArAMAlQAMAnAOAyIAYBbQALAsALA1QAMA2AHArQAJAxAHAxQAIA4AEAqQADAoACA0QABAxAAArQgBA8gDBDQgDBHgFA4QgFA4gGAzQgIA/gJAsQgOBGgPA6QgUBLgTAyQgSAwgbAzQgdA2gcAmQgeAnguAuQgrAqgrAiQgvAlhGAtQg8AmhAAkQgvAahDAfQg7Acg6AYQg+AZhGAZQhMAcg7ARQg5ARhHAQQhIARg6AJQhFAMhXAKQhVAJhIAFQg/AEhTABIgrAAQg2AAgxgCg");
	this.shape_22.setTransform(-10.4,-1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2EABB8").s().p("AK7WdQhAgChOgGQhPgGhAgIQgwgGg7gKQg6gLgwgMQg2gNhDgTQhCgUg1gSQgzgSg/gZQg9gZgzgXQgvgVg5gdQg4gdgugaQgigTgogbQgogZgggYQgkgagqgiQgqgigggdQgggcgmgnQglgkgfghQgagdgfglQgeglgYggQgXgfgcgqQgbgogWgkQgXgmgSghQgYgrgNgfQgOgggIgZQgLgigCgYQgBgOAHgTIARgNQAcAWAoA+QAtBFATATQCACIAqAqQBrBrBMA5QB4BZBaA1QCDBPBhAZQBJASBfgPQBhgPA8goQA8gnA0hVQAwhNAVhOQAWhWAAiIQgBhXgLiKQgJhlgWh1QgXh5gehdQgUhBgfg8QglhGgogoQgYgYgsgNQgugMggALQglANgvA0QglAtgjAmQgRAShaBoQhEBPgsAjQgtAkg6AeQg+AhgzAMQguALg/gDQg8gDgwgOQgugMhHgoIhxhAIg5guIgigfQgVgTgNgNIgfgjQgSgUgMgQIgqg8QgYgjgPgbQgNgXgTgpIgehAIgdg/QgSgpgNgVQgUghgTgcQgZgigVgVQgVgWgdgVQgegXgZgMQgVgKghgHQgZgFgfgDQgUgDgjACIg3ADIg9AEIg8AFIhBAGIhAAGIhFAHQgsAEgZAEIhYALQg2AHgeAMQgOAGgNAUQgHAKgMAYIABALIAEALIAAARIgBAGIgDAHIgHAKIgLAHIgHACIgSACIgLgBIgIgEIgHgGIgDgGIAAgHIACgRIAFgRIAPggIADgOIAEguIgBgLIgEgWIgJgdIgKgVIgSgYIgGgOIgEgOIAAgOIAFgNIAKgHIAUgGIAJAAIAHABIAHADIAPAIIARARIAEAGIAEAIIACAIIgCAOIgKAkIACANIAJAPQAMAEAVgCIAhgFQANgCAWgHIAigLIAsgMIAtgMIAqgNIApgNIA2gRIA1gRIBCgYIBBgXIBFgbQAsgRAagHQAsgMAvgJQA0gLAngFQA1gGAwgCQA8gDAqAEQAxAEBqAWQBvAWAsAFQCRARA3AEQB7AKBOgFQBqgGCtgcIEVgxQBJgMCeggQCmghBBgMQA2gJBwgRQB6gRAsgIQAdgEBCgOIBfgSIBEgJIBEgIIBNgJIBNgIIBPgHIBOgGIBIgDIBIgDIBFAAIBGACIBLADIBKAEIBJAGIBJAGIBBAIIBCAIIA+AJIA9AKIAjAGIAkAIIAzANQAfAJATAHQASAIAUALQAVALAOALQASAOAUATQATATAOASQARAUATAdQASAaAOAZQAQAcASAkIAeBBQAPAiAQAtQAQAqAMAmQAMAnAOAyIAYBaIAVBiQAMA2AHArQAJAxAHAxQAIA4ADAqQAEAoACA0QABAxgBArQAAA8gEBDQgDBHgFA4QgFA4gGAzQgIA/gJAsQgOBGgPA5QgUBLgTAyQgSAvgbAzQgdA2gcAmQgdAnguAtQgrArgrAhQguAlhHAsQg7AmhAAjQgvAahCAfQg7Acg5AXQg+AZhGAZQhLAbg7ARQg5ARhGAQQhIARg6AJQhEALhXAKQhUAJhIAFQg/AEhSABIgsAAQg1AAgxgCg");
	this.shape_23.setTransform(-9.2,-1.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2EABB8").s().p("AK6WaQhAgChPgGQhOgHhAgIQgwgGg7gKQg7gLgvgMQg3gNhDgUQhCgTg1gTQgzgRg/gaQg9gYg0gYQgugVg6gdQg4gdgugaQghgTgpgaQgogagggXQgkgagqgiQgqgighgdQgggcgmgmQgmgkgeghQgbgdgfgkQgeglgYgfQgYgggcgpQgcgogWgjIgqhHQgYgqgOgfQgOgfgIgYQgMgigCgXQgBgNAIgSIAQgNQAcAXApA9QAuBFATATQB/CFAtAsQBrBpBNA5QB5BYBaA2QCDBNBiAZQBJATBfgPQBhgOA9goQA8gmA1hVQAwhNAVhNQAXhWgBiIQAAhZgLiHQgJhlgXh1QgYh5gehdQgVhBggg8QglhGgognQgZgYgtgMQgugMgfAMQgmAPguA1IhHBVQgQAQhaBrQhEBRgsAkQgtAkg6AfQg+Ahg0AMQgvALg/gCQg9gDgxgOQgvgNhJgpIhyhCIg6gvIgiggIgigiIgggjQgRgVgMgRQgWgegUggQgYglgPgcQgMgYgTgrIgchDIgbhDQgRgrgMgXQgTglgRgdQgXgngTgYQgVgagagYQgdgcgZgPQgUgNgggLQgagJgdgFQgVgEghgBIg3AAQgaAAghADIg8AHIg/ALIg+AOQgmAJgdAIQgnAMgaAKIhRAgQgxAWgaAVQgLAKgHAYIgIAnIAEAKIAHAKIADAIIACAPIgBAHIgDANIgIAKIgFAFIgFADIgJAFIgLADIgIgBIgIgDIgEgFIgDgHIgDgRIAAgSIAEglIgDgeIgHgfIgJgVIgOgaIgNgQIgIgIIgYgQIgJgKIgHgMIgEgOIABgOIAIgKIAKgIIAHgFIAJgEIAHgCIAQABIAIABIAaAPIAGAGIAEAHIABAOIgBAmIAFAMIAMALQANAAATgJIAegPQAKgGAVgNIAegUIApgXIAqgWIAngUIAngVIA0gYIA0gXIBBgbIBBgaIBGgZQAsgPAcgGQAqgIAzgGQA0gFAqgBQAwgBA3AEQA6AFAsAIQAsAIBtAgQBoAfAwAIQB1ATBOAIQB1ANBPgFQBogHCsgiIESg3QBGgNCigkQChgjBGgNQA4gLBvgRICngaIBggSIBfgSIBFgJIBFgIIBNgJIBOgIIBPgHIBOgFIBIgDIBIgCIBGAAIBFABIBLAEIBLAEIBJAGIBIAHIBCAHIBCAJIA+AJIA9AJIAjAHIAkAHIAzAOQAfAJATAIQASAHAUALQAVALAOAMQASANAUAUQATATAPASQAQAUATAdQASAaAOAaQAQAcASAjIAeBCQAPAiAQAtQAPAqAMAmQANAmAOAzQANAwAKAqQALAtALA1QALA2AIArIAPBiQAIA5ADApQAEAoABA0QACAxgBAsQgBA7gDBDQgEBHgFA4QgFA4gGAzQgIA/gJArQgPBGgPA6QgTBLgTAxQgSAvgbAzQgdA1gcAmQgeAmguAuQgqAqgrAgQguAlhHAsQg7Alg/AjQgvAahCAfQg7Abg5AXQg+AZhFAYQhLAbg7ARQg5AQhGAQQhHAQg6AJQhEALhWAKQhUAJhIAEQg/AEhSABIgfAAQg8AAg2gCg");
	this.shape_24.setTransform(-8.7,-2.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2EABB8").s().p("AKkWXQhAgChPgGQhOgHhAgIQgwgGg8gLQg6gKgxgMQg2gNhDgUQhCgUg2gSQgzgSg/gZQg+gZgzgXQgvgVg6gdQg4gdgugaQgigTgpgaQgogagggYQgkgZgqgiQgqghghgdQgggcgngmIhEhEQgbgdgfgkQgfgkgYgfQgYgfgcgpQgcgogWgiQgXglgTghQgZgqgOgfQgOgegIgYQgMghgCgXQgBgMAIgRIAQgMQAcAWApA+QAvBEATAUQB/CCAuAtQBsBoBOA4QB5BYBbA1QCEBNBiAZQBKASBfgOQBigOA+goQA8gmA1hUQAyhNAVhNQAXhWAAiHQABhbgMiGQgJhkgYh2QgYh4gfheQgVhAghg7QgmhGgngmQgagZgtgKQgvgMgfANQglAPguA2IhHBXQgOAQhaBuQhDBSgtAkQgsAlg7AgQg/Ahg0ANQgwALhAgCQg+gDgxgOQgwgNhKgpIhzhEIg7gwIgjghQgWgVgMgOQgRgSgPgSQgSgWgMgRQgWgggUghQgXgmgPgdQgNgZgRgrIgchGIgZhGQgRgugKgYIgihIQgWgqgSgaQgUgegZgcQgcgfgZgTQgTgPgfgOQgbgMgcgIQgWgHgggDQgagDgdAAQgaAAggACQghADgaAEQgbAFghAJQghAIgaAKQghAMgdANQgjAQgXAPQguAdgYASQgpAfgUAaQgJAMgBAZIACApIAGAIIAIAIIAEAHIAEAIIADANIABAHIgBAHIgBAGIgDAFIgGALIgHAHIgIAGIgIABIgHgBIgFgEIgEgFIgIgQIgFgRIgDgaIgHgZIgGgOIgSglIgNgQIgcgZIgJgFIgYgIIgLgHIgJgJIgHgMIgCgNIAFgNIANgSIAIgHIAGgDIAPgFIAIgBIAVAEIAGACIAGAFIAFAFIAGAVIAEAcIAIAKIANAIQAMgDAQgOIAYgWIAZgaIAagaIAjgdIAlgcIAjgaIAkgZIAwgdQAcgQAVgKQAhgQAfgOQAlgRAcgJIBHgYQAsgMAdgFQArgFA2gCQA1gCArAEQAvADA6AKQA5AKAvANQAnAKBuAqQBkAlAzALQBoAVBVALQByAOBNgGQBngHCrgmIEQg/QBAgNCpgoQCdglBKgQQA6gLBugSICogbIBggSIBggSIBGgJIBFgIIBOgJIBOgHIBPgHIBPgFIBIgDIBIgCIBGAAIBGACIBLADIBKAFIBJAGIBJAHIBCAIIBCAIIA9AJIA+AKIAjAHQAVAEAOAEIA0ANQAfAJATAIQASAHAUALQAVAMAOALQASAOAUAUQATATAPASQAQAUATAdQASAaAOAaQAQAcASAkIAeBBQAOAiARAtQAPArAMAmQAMAmAOAzQANAwAKAqQALAtALA1QALA2AIArIAPBiQAIA5ADApQADAoACA0QABAygBArQgBA7gDBDQgEBHgFA4QgFA4gGAzQgIA+gKAsQgOBGgPA5QgUBLgTAxQgSAvgbAyQgdA2gcAlQgdAmgvAtQgqAqgrAhQguAkhGArQg7AlhAAjQgvAahCAeQg6Abg6AXQg9AYhGAYQhLAag6ARQg5AQhGAQQhHAQg6AJQhEALhWAJQhUAJhHAEQg/AEhTAAIgZAAQg/AAg5gCg");
	this.shape_25.setTransform(-6.6,-3.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2EABB8").s().p("AKOWXQhBgDhPgGQhOgGhBgIQgwgGg8gLQg6gLgxgLQg3gNhDgUQhCgTg2gTQgzgRhAgaQg+gYgzgXQgwgVg5gdQg5gdgugaQgigSgpgbQgogZghgYQgkgZgqghQgqgighgcQgggcgngmQgmgkgfggQgagcgggkQgfgkgYgeQgYgfgcgpQgcgngWgiQgYglgTghQgYgpgOgeQgOgfgJgXQgLgggCgXQgBgMAIgRIARgLQAbAXAqA9QAvBDAUAUQB/CBAvAtQBtBoBOA3QB5BXBcA0QCEBNBjAYQBKASBggOQBjgOA/goQA7gmA3hUQAyhNAWhNQAYhXAAiHQABhegMiDQgIhkgZh2QgZh4ggheQgVhAghg7QgnhGgogmQgagXgtgLQgvgKgfANQglAQgtA3IhGBZQgOAPhaBwQhCBUgtAlQgsAlg8AgQg/Aig0ANQgwALhBgCQg/gBgygOQgwgNhLgpIh2hEIg7gxIgkgiIgigjIghglQgSgXgLgRQgWgggVgiQgXgngPgdQgNgagRgsIgbhIIgYhIQgQgxgKgXQgUgwgNgdQgVgtgRgcQgUgggXgeQgcgjgYgWQgTgRgfgRQgbgPgcgKQgVgIgggFQgbgFgdgCQgagBgfABQggABgZAFQgbAEgfAJQggAJgZALQgeAMgbAPQghASgUARQgkAcgZAaQgjAigQAdQgHANADAYIAIAnIAGAIIAJAGIAFAGIAHANIADAHIABAGIABANIgDALIgDAGIgFAIIgGAHIgGADIgHAAIgGgDIgEgEIgKgOIgHgQIgMgjIgVgnIgPgUIgUgTIgOgKIgSgHIgXgDIgMgEIgJgHIgIgKIgEgNIADgNIAKgVIAGgHIAGgFIAHgEIANgGIAHgBIAOABIAGABIAGADIAGAEIAFALIAKAjIAIAIIANAGQALgFANgQIAUgaIAVgcIAWgcIAfghIAhgeIAggcQATgQAOgKIAtgfQAbgQAVgLQAegPAggOQAlgQAbgJQAngNAigIQArgLAfgCQAsgEA2ACQA2ACAtAGQAtAHA9APQA2AOAyAQQAjALBwAxQBhArA0AMQBhAXBXAMQBvAOBMgGQBmgJCrgqIEOhFIDpg6QCagnBOgRQA7gMBtgSICogcIBigTQBAgNAhgFQAagEAsgFIBGgIIBOgIIBOgHIBQgHIBPgFIBIgDIBIgBIBGAAIBGACIBLADIBLAFIBJAGIBJAHIBCAIIBBAJIA+AJIA+AKIAjAHIAjAHIA0AOQAfAJATAIQASAIAUALQAVALAOAMQASANAUAUQATATAPASQAQAVATAdQASAaAOAaQAQAcASAkQARAjANAfQAOAiAQAtQAQAqAMAmQAMAnAOAzQANAvAKArIAVBhIATBiIAPBhQAHA5AEApQADApABA0QACAxgBArQgBA7gEBDQgDBIgGA3QgFA4gGAzQgJA/gJArQgOBGgQA5QgTBLgTAxQgTAvgbAyQgdA1gcAlQgdAnguAsQgrAqgqAgQgvAkhGAsQg7AkhAAjQguAZhCAeQg7Abg5AXQg9AYhGAYQhLAag6ARQg5AQhGAPQhHAQg6AJQhEALhWAJQhUAJhHAEQhAAEhSABIgaAAQg/AAg4gCg");
	this.shape_26.setTransform(-4.5,-3.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2EABB8").s().p("AKIWZQhAgChPgGQhPgGhAgIQgxgGg7gKQg7gLgxgLQg3gNhDgTQhCgTg3gSQgzgShAgZQg+gYg0gWQgvgVg6gdQg5gcgvgaQghgSgqgaQgogaghgXQgkgZgqghQgqghghgcQgggcgoglQglgkgfggQgbgcgfgjIg4hDQgYgegcgoQgcgogWgiQgYgkgTghQgZgpgOgeQgOgegIgXQgMghgCgWQgBgMAJgRIARgLQAcAXAqA8QAwBEATATQCACAAvAtQBtBnBPA2QB6BWBcA0QCFBLBiAXQBLASBhgPQBjgPA/goQA8gnA3hUQAzhOAVhOQAYhXABiHQAAhfgLiDQgJhkgZh2Qgah4ggheQgWhAgig7QgnhFgogmQgagXgtgKQgvgKgfANQglARgtA4QgkAwgiAqQgNAPhZByQhCBUgsAmQgsAmg8AhQg/Ajg0ANQgxAMhBgBQg/gCgzgMQgxgNhLgpIh3hDIg9gxIgkgiQgWgVgNgOIggglQgTgXgMgRQgWghgVgiQgYgngPgeQgNgagRgsIgbhJIgYhJQgQgygKgYIgghOQgUgvgRgdQgTgigXggQgagmgYgXQgTgSgegTQgbgSgcgMQgVgJgggIQgbgHgcgDQgagEgfAAQgggBgZADQgaADggAIQgfAHgYAKQgeALgbAOQggARgUAQQgiAcgaAaQgiAigPAcQgHANAEAYIAIAnIAGAHIAIAGIAGAGIAEAHIAFAMIADANIAAAGIgDAMIgCAFIgKAQIgGADIgHAAIgFgDIgKgLIgIgPIgQgqIgOgaIgWggIgOgMIgUgPIgRgGIgXgCIgLgEIgJgGIgIgLIgEgMIADgNIAFgNIAKgQIAGgFIANgIIAHgCIAGgBIAUAAIAGADIAFAEIAFAMIAKAiIAIAHIANAGQAKgGAMgQIAUgaIAUgcIAWgbQAMgOATgSIAggeIAggbQATgQAOgJQAWgPAXgNQAbgQAUgJQAfgPAggMQAlgOAcgHQAngLAigGQAsgJAfAAQAsgBA3AFQA1AFAtAJQAtAJA9ASQAzAQA0ATQAfALByA2QBeAsA1ANQBcAXBaALQBsAOBMgHQBlgKCrguIENhJIDpg9QCZgpBQgSQA7gNBtgTICpgdIBigTQA/gMAjgGIBGgJIBGgHIBPgIIBPgIIBPgGIBQgFIBIgDIBIgBIBGAAIBGACIBLAEIBLAFIBJAGIBJAHIBCAIIBCAJIA9AJIA+AKIAjAHIAkAIIAzAOQAfAJAUAIQASAHATALQAVAMAPALQARAOAUAUQAUATAOASQAQAUAUAeQARAaAPAaQAQAcARAkQASAkAMAeQAOAiARAtIAbBQIAaBaQANAwAKAqQAKAtALA1QALA2AHArQAJAxAGAxQAIA5ADApQADAoACA0IAABdQgBA7gEBDQgEBHgFA4QgFA4gHAzQgIA+gJAsQgPBFgPA5QgUBLgTAxQgSAvgbAyQgdA1gcAlQgeAnguAsQgqAqgrAgQguAkhGArQg7Alg/AiQgvAahCAeQg6Aag6AXQg9AYhFAZQhLAag6AQQg5ARhGAPQhGAQg6AJQhEALhXAKQhTAJhIAEQg/AEhSABIgyAAIhggBg");
	this.shape_27.setTransform(-3.8,-3.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2EABB8").s().p("AKiWfQhBgBhPgFQhPgFhAgHQgwgFg8gKQg7gKgwgKQg4gNhDgSQhCgSg3gSQgzgQhAgYQg/gYgzgWQgwgUg6gcQg5gcgvgYQgigTgpgZQgpgZghgXQgkgZgqggQgrghghgcQgggbgoglQglgjgfggQgcgcgfgjQgfgkgZgeQgYgfgdgoQgcgngWgiQgYglgTggQgZgpgOgeQgOgfgJgXQgLghgCgXQgBgMAJgRIASgMQAcAWArA9QAwBDAUATQCBB/AvAsQBuBlBPA2QB7BVBbAyQCGBKBiAVQBLARBigRQBigRA+gqQA9goA3hXQAyhPAVhPQAYhYAAiJQAAhggMiDQgJhkgah2Qgah4ghheQgWhAgig7QgohFgoglQgagYgugJQgvgKgfAOQglARgsA5QgkAwghArQgNAQhXBzQhBBVgsAnQgsAng7AiQg+Akg1ANQgwAOhCAAQg/AAgzgNQgxgLhMgnIh5hBIg9gwIglghQgWgUgOgOIghglQgUgVgMgRQgXghgVghQgZgngQgdQgOgbgSgsIgchHIgahKIgahJIghhPQgUgvgQgdQgUgkgWghQgZgmgXgZQgSgTgdgWQgbgUgbgPQgUgLgggMQgagJgcgHQgagHgfgFQghgFgZgBQgbgBggACQghADgaAFQggAGgeAJQgjALgXAMQgoAVgeAUQgoAagVAZQgJALgBAZIAAAoIAFAIIAHAIIAIAPIACANIABANIgHARIgDAFIgOANIgHABIgHgBIgEgEIgEgFIgHgQIgOhEIgQgpIgLgSIgQgUIgOgLIgIgFIgXgHIgKgHIgJgIIgFgMIgCgNIAFgMIAIgLIANgOIAOgHIAOgCIAHAAIAOADIAGACIAFAEIAFAGIADAMIADAkIAHAKIAMAIQALgEAQgMIAYgWIAagXIAagXIAlgaIAlgXIAkgVQAWgMAPgHIAygVQAdgLAWgGQAfgKAigHQAmgJAdgEQAogGAigCQAsgEAfACQAqADA3AKQAyAJAtALQAqALA9AVQAsAPA5AWQAVAIB5A4QBbArA1AMQBZAUBdAJQBqAKBMgJQBlgMCsgwQCNgqCAgkIDpg/QCXgqBSgTQA8gOBtgSIELgxQBAgNAjgFIBGgJIBHgIIBPgIIBPgHIBPgGIBQgFIBIgDIBJgBIBFAAIBGACIBMAEIBLAFIBJAGIBJAHIBCAIIBCAKIA9AJIA+AKIAkAHIAjAIIAzAOQAgAJATAIQASAHAUAMQAUALAPAMQARANAUAUQAUAUAOASQAQAUAUAdQARAbAPAaQAQAcARAkQARAjANAfQAOAiAQAtQAQAqALAmIAaBaIAXBaQALAtAKA1QALA2AHArQAJAxAGAxQAIA5ADApQADAoABA0QACAygBArQgCA7gDBDQgEBHgFA4QgFA4gHAzQgIA+gKAsQgOBFgPA5QgUBLgTAyQgTAugbAyQgcA2gcAlQgdAmguAtQgrApgqAhQguAkhGAsQg6AkhAAjQguAahCAeQg6Abg5AXQg9AYhFAZQhLAag5ARQg5ARhGAQQhGAQg6AKQhDALhWALQhUAJhHAFQg/AFhSABIhLABIhGgBg");
	this.shape_28.setTransform(-5.7,-3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2EABB8").s().p("AKvWqQhBgBhPgEQhOgDhAgGQgxgFg9gIQg7gJgwgKQg3gLhEgSQhDgRg3gQQgzgQhBgXQg+gWg0gWQgxgTg5gbQg7gbgugYQgjgSgpgYQgpgZghgWQglgYgqggQgrggghgcQghgbgogkQgmgjgeggQgcgbgggkQgfgjgYgeQgYgfgdgoQgdgngWgiQgZgmgSggQgZgqgOgeQgOgegIgYQgMgigBgXQAAgOAJgRIATgNQAdAWArA7QAyBEATATQCEB/AuApQBuBlBQA1QB8BTBbAwQCGBIBjATQBLAPBigUQBjgUA+gsQA9grA3hZQAyhRAWhRQAWhZAAiLQAAhigMiEQgLhjgah3Qgbh4gihfQgWg/gig7QgohFgoglQgbgXgtgJQgwgJgeAOQgmARgrA5QgjAxggArQgPAShUBzQhBBXgqAnQgrAog8AkQg9Amg1APQgwAOhCACQg/ABgzgLQgxgKhOgkIh6g9Ig/guIgmggIglghIgjgkQgTgVgNgQQgZgggWggQgagmgRgdQgPgagTgrIgehHQgKgWgTgyQgTgzgJgVIgihPQgVgvgQgeQgUglgVggQgYgogWgZQgQgVgdgZQgYgWgagSQgTgOgegRQgZgNgcgMQgZgMgegLQgggMgZgHQgcgIgggGQgjgHgbgCQghgDgggBQgngBgaAEQg0AHgdAHQgxAKgdAQQgMAHgKAXIgNAmIACAKIAFALIABAIIAAAJIAAAGIgDANIgEAGIgDAFIgFAFIgJAHIgTAGIgIgCIgGgEIgDgGIgCgGIgBgSIACgSIAIgkIABguIgFglIgPgiIgLgRIgUgRIgHgKIgGgMIgBgOIADgNIAJgJIALgIIAIgEIAJgDIAIgBIAPACIAIACIAGAEIAMAIIAEAFIAFAGIACAHIgBANIgIAkIADAMIAJANQAMACAUgGIAegLQALgDAWgJQAXgKAKgDIArgMIAsgLIApgJQAZgFAQgCIA2gHQAfgDAXgBQAggBAkAAQAngBAcACQArACAeADQArADAeAGQAlAIA2APIBbAcQAlAMA9AXIBgAlICMA8QBYAnA2AKQBVAQBgAFQBpAGBNgMQBlgOCrg0QCOgsCAglIDphCQCWgrBUgUQA9gOBsgUICqgeIBjgTIBjgTIBHgJIBHgHIBOgIIBQgIIBPgFIBRgFIBHgDIBJgBIBGAAIBGACIBLAEIBLAFIBJAGIBKAIIBCAIIBBAJIA+AKIA+AKIAkAHIAjAIIA0AOQAeAJAUAIQASAHATAMQAWALAOAMQASAOATATQAUAUAOASQARAUASAeQASAaAPAaQAQAcAQAkQASAkANAeQANAiARAtQAPArAMAmIAaBZIAWBbQAKAtALA0IATBiIAOBiQAHA4AEAqQADAoABA0QABAxgBAsQgBA6gEBEQgEBHgFA4QgFA3gHAzQgIA/gKArQgPBGgOA5QgUBLgTAyQgSAvgbAyQgdA2gcAkQgdAnguAtQgqAqgpAhQgvAkhFAsQg7Alg/AkQguAZhBAfQg6Abg5AYQg9AZhFAaQhKAbg6ARQg4ARhGARQhGARg5ALQhEAMhWALQhUALhGAGQg/AFhSADQhBACg6AAIgXAAg");
	this.shape_29.setTransform(-6.7,-2.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2EABB8").s().p("AIWXdQhQgChAgFQgygEg8gIQg8gHgxgJQg4gLhEgQQhDgQg3gQQg1gPhBgWQg/gVg1gUQgwgTg7gaQg6gagvgXQgjgRgqgZQgpgXgigWQgkgYgrgfQgrgggigbQghgbgngkQgngjgfgfQgbgcgfgjQgggjgYgeQgZgfgcgoQgcgngWgiQgYgmgTggQgYgqgNgeQgOgfgIgYQgKgiAAgYQAAgPAKgSQAKgPALABQAeAVArA8QAyBEATASQCHCAArAmQBvBkBQAzQB+BSBbAvQCHBGBjARQBNANBkgXQBjgYA/guQA/gtA3hcQAzhUAWhTQAYhbAAiMQAAhlgNiEQgKhjgch4Qgbh4gihfQgXg/gig7QgphEgpglQgagXgugJQgvgJgeAOQglASgrA6IhDBdQgPAThTB0Qg+BYgqAoQgsAqg6AkQg9Ang1ARQgwAQhCAEQg/ADg0gJQgygJhPgjIh9g4IhAgrIgogfQgXgSgPgNIgkgiQgVgVgNgQIgyg+QgcglgSgcQgQgZgVgqIgihGIgfhHIgfhHIglhNQgXgvgQgdQgWgngTgfQgYgpgUgbQgQgVgbgcQgWgXgZgXQgRgQgdgWIgvgjIgzgkIgzgjIg4ghQgggSgZgMIg+gdQglgRgagIIhRgaQgzgOggABQgPAAgSAQIgdAbIgCALIgBAMIgCAIIgDAIIgIAMIgKAIIgMAEIgGABIgGAAIgLgCIgKgEIgGgGIgEgHIAAgHIABgHIADgIIAJgQIAdgjIAVgqIAIgaIAEgVIABgeIgDgWIgKgaIgCgOIABgOIAFgNIAIgLIAMgEIANgBIAJAAIAJACIANAIIAGAFIAFAGIALAVIADAHIABAIIgBAIIgLATIgSAXIgDANIAEARQAJAIAUAEIAhAHIAjAEIAjADIAsAIIAsAJIAqAIIAqAIIA0ANIA0AOIBAASIBAASIBEAUQAqAMAZAJQAeAKA2AWIBUAiIBdAkIBeAkICKA0QBXAgA1AIQBUALBjgBQBoAABPgOQBkgSCtg3QCOgtCAgoIDqhFQCTgrBXgVQA9gPBtgUICqgfIBjgUQA/gMAlgGQAbgFAsgFIBHgHIBPgIIBQgHIBQgGIBQgFIBIgDIBJgBIBGABIBGACIBLADIBLAGIBJAGIBJAHIBDAJIBCAJIA+AKIA9AKIAkAHIAjAIIA0AOQAfAJATAIQASAIAUALQAVAMAOALQASAOAUAUQATATAOASQARAVATAdQARAbAPAZQAPAdASAkIAeBBQAOAjAQAtIAbBQIAZBaIAXBaQAKAtALA1QALA3AHArQAIAwAGAxQAIA5ADApQADApABA0QABAxgBArQgBA6gEBEQgEBIgFA3QgGA4gHAzQgIA/gJArQgPBHgPA5QgUBLgTAxQgSAvgbAzQgdA2gcAlQgdAngtAtQgrAqgqAiQguAkhGAtQg6Alg/AkQguAbhCAfQg5Acg6AYQg9AahEAaQhLAcg5ASQg5AShGARQhGASg6ALQhEANhWAMQhUAMhHAHQg/AGhTAEQhNAEhFAAIgXAAQg4AAhCgCg");
	this.shape_30.setTransform(-6.4,-5.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2EABB8").s().p("AHfZLQhRgChBgEQgzgEg9gHQg9gHgxgIQg5gKhEgQQhFgPg4gPQg1gPhCgVQhAgVg1gUQgygSg7gZQg7gagwgWQgjgRgqgYQgqgXgigWQgkgXgrgfQgsgggigbQgggagogkQgmgigfgfQgcgbgfgjQgfgjgYgeQgYgegcgoQgbgngVgiQgZgmgRgfQgYgqgMgeQgNgegHgZQgJgiABgXQABgQAMgTQAOgUAKAHQAeAUAsA7QAxBEATARQCKCBAoAkQBvBhBQAzQB+BQBdAuQCIBEBjAQQBPAMBngaQBlgZBCgwQA/guA6heQA1hWAXhVQAZhbABiOQABhngNiEQgJhjgch6Qgch2gjhgQgXg/gjg7QgohEgqglQgagXgugIQgwgJgeAPQglASgqA7IhBBdQgQAUhRB1Qg+BagpAoQgrAqg6AmQg+Apg1ATQgwARhCAFQhAAGg1gIQgzgIhQggIh/g1IhDgqIgogdIgogdIgmghQgWgUgOgPQgcgegZgeQgegkgTgbQgRgZgYgpIglhFIgkhFIgjhGIgphNIgrhMIgqhIQgagqgTgbQgQgWgaggIgrgzIgpgtIgqgtIgpgxIgpgwIgrg0IgrgzIgtg1QgdgigSgTIg7hBQgmgogcgQQgMgIgXADQgLACgaAHIgHAIIgGAKIgGAHIgGAFIgMAGIgNABIgGgBIgLgGIgGgEIgIgIIgGgKIgDgJIAAgJIAEgGIAEgGIAOgKIAxgSIAagQIAXgTIAQgSIAWgjIAJgWIAGgeIAFgNIAIgNIALgJIAMgFIAMADIARALIAGAHIAEAHIACAHIADAQIAAAJIgDAYIgEAIIgEAHIgTAMIgZALIgJALIgGASQAFAMAOAPIAYAYQAJAIATANIAcAVIAiAdIAjAcIAhAaIAiAaIAqAgIAqAgIA1AkQAfAVAXAOQAWANAkATIA7AfIBNAoQAwAZAeANQArASAwASQA1AUAoANICMArQBXAZA3AEQBTAHBmgHQBngHBSgRQBkgVCug6IEQhZIDrhHQCSgsBZgXQA9gQBtgUICqggIBkgUQA/gMAlgGQAbgFAsgFIBIgHIBQgJIBPgHIBQgGIBRgEIBIgDIBJgBIBGAAIBGACIBLAEIBLAFIBKAHIBJAHIBCAJIBCAJIA+AKIA+AKIAjAHQAWAEAOAEIAzAOQAgAKATAIQASAHAUAMQAVALAOAMQASAOAUATQATAUAOASQARAUATAeQARAaAPAaQAPAcASAkQARAkANAeQAOAiAQAtQAPArALAmQAMAnAOAzQANAvAJArQALAtAKA0QALA3AHArQAIAxAHAxQAHA5ADApQADAoABA0QABAxgBArQgBA7gEBEQgEBHgGA4QgFA4gHAzQgJA/gJArQgPBGgPA6QgUBLgTAyQgTAvgbAzQgdA2gcAlQgdAnguAuQgrAqgqAiQgvAkhGAuQg6AlhAAlQguAahCAgQg6Acg6AZQg+AahFAaQhLAdg6ASQg5AThGASQhHASg7AMQhEANhXANQhVAMhIAIQg/AGhUAFQhOAEhGABIg7ABIhXgBg");
	this.shape_31.setTransform(-2.8,-15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2EABB8").s().p("AFhZ0QhSgChCgEQgzgDg+gHQg+gIgxgIQg5gKhHgPQhFgQg5gPQg1gOhDgWQhAgUg3gUQgygTg8gZQg8gZgwgWQgjgRgrgYQgqgXghgVQglgYgrgeQgsgfgigbQgggagogjQgmgigfgfQgbgagfgiQgfgjgXgdQgYgegbgnQgbgmgUghQgYgmgRgeQgWgpgMgdQgMgegGgYQgIghADgXQABgQAOgRQAPgTALAGQAeAUArA5QAyBEASAQQCMCAAmAiQBwBgBPAxQB/BPBdAuQCJBDBjAOQBSAMBogZQBogaBEgwQBCguA7heQA4hXAZhVQAahbADiOQABhpgMiDQgJhigch7Qgch1gihhQgXg+gkg7QgphEgqglQgbgXgugIQgvgIgeAPQglASgqA7IhBBfQgPAUhQB2Qg9BZgpAqQgrArg6AnQg+Aqg1AUQgwAShDAGQhBAGg1gGQgzgHhSgeIiCgyIhEgoIgrgcIgpgdIgoggQgXgTgPgOIg3g6QgggjgVgbQgSgYgagpIgphDIgohGIgohGIguhOIgvhOIgthKIguhKIgog6Igpg6Igjg1QgWgggMgVIgdg5Igbg7IgXg/IgVg/IgUhFIgShFIgThXQgMg4gOgdQgGgMgTgKQgMgGgVgHIgJADIgKAHIgQADIgGAAIgLgEIgFgDIgEgFIgGgMIgEgTIAAgMIADgKIAFgIIAGgEIAGgCIAIgBIAQAAIAnALIAOABIAcgDIAZgGIALgEIAjgUIATgPIAWgXIAMgJIANgGIANgDIANACIAHAIIAEALIADARIgBAHIgJAYIgVAbIgHAFIgIAEIgMABIgIAAIgagCIgMAFIgOANQgDANADAVIAHAhQADANAIAUIANAhIAPApIAQAqIARAlIASAkIAYAtQAOAbALARIAkAxQAWAcARASQAUATAbAYQAaAVAZARQAlAaAhAVQAqAaAfAPQApATAzATQA0ATArALQBpAcAnAIQBZAUA5ABQBTABBrgNQBlgMBWgVQBkgYCwg8IEShcIDshKQCSgtBagYQA+gQBsgVICsggIBkgUQA/gNAlgGQAcgFAsgFIBIgHIBQgJIBQgHIBQgGIBRgFIBIgCIBJgBIBGAAIBGACIBLAEIBMAFIBJAHIBJAHIBDAJIBCAJIA+AKIA+ALIAjAHQAWAEAOAEIAzAOQAgAJATAIQASAIAUALQAVAMAOALQASAOAUAUQATAUAPASQAQAUAUAdQARAbAOAaQAQAcASAkQARAkAMAeQAPAiAQAtQAPArALAmQAMAnAOAyIAWBbIAVBhQALA3AHArQAIAxAGAxQAHA5ADApQADAoABA0QABAxgBArQgBA7gEBEQgFBHgFA4QgGA4gHAzQgIA/gKArQgPBGgPA6QgVBLgTAyQgTAvgbAyQgeA3gcAlQgeAnguAuQgsAqgqAhQgvAlhHAtQg7AmhAAkQgvAbhDAfQg6Acg6AZQg+AahHAbQhLAcg7ASQg6AThHASQhHASg7ALQhFAOhYANQhWAMhJAHQhAAHhVAFQhOAEhHABIg4AAIhcgBg");
	this.shape_32.setTransform(7.5,-19.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2EABB8").s().p("ADQZtQhSgDhDgFQg0gDg9gIQg+gIgygJQg6gKhHgQQhGgQg5gPQg1gPhEgVQhAgVg3gUQgygTg8gZQg8gagwgWQgkgRgrgYQgqgXgigVQglgXgrgeQgrgfgigbQgggZgogjQgmghgegeQgbgagfgiQgfgigXgcQgXgdgbgmQgbglgUggIgnhBQgXgogLgdQgLgcgGgXQgHggADgVQADgQAPgQQAQgSAKAHQAfATArA4QAyBCASAQQCMB+AmAgQBvBfBOAwQCBBOBcAtQCJBCBkAPQBSAMBqgYQBpgYBFgvQBEgtA+hcQA6hWAahUQAbhbAEiNQAChqgLiBQgJhigch6Qgch1gkhhQgXg+gkg7QgphEgrgkQgbgXgugIQgwgIgdAPQglATgqA7IhABfQgPAUhPB3Qg8BagpAqQgrArg6AoQg+Aqg1AUQgwAThEAHQhAAHg3gGQgzgGhTgdIiEgwIhGgmIgrgbIgrgdIgpgfQgXgSgQgPQgfgcgcgdQghgigWgaQgUgYgbgpIgthCIgshHIgrhHIgyhRIgzhRIguhPIgvhQIglhAQgYgogMgZIgdg6QgQgjgIgZQgJgbgIgjQgHgigEgdQgDgdgBglQAAgjACgeQABgeAGgoQAFgkAHghQADgRAVhFQAQg5ACgfQABgMgJgSQgGgNgMgOIgJgCIgLACIgHgCIgGgCIgFgEIgEgEIgDgFIgCgFIAAgGIACgOIACgGIAMgXIAHgHIAJgGIAGAAIAGABIANAGIAGAFIARAVIAGAGIAVANIAYAJIAVADIAngBIAXgEIAegJIAPgCIAOAAIALAEIAJAIIABAKIgDAKIgDAIIgEAHIgLALIgOAKIgfAOIgJABIgIAAIgKgEIgHgDIgTgOIgMAAIgSAFQgJAKgIATIgMAhQgEANgDAVIgFAiIgGAqIgFArIgBAnQAAAVACARIAEAwQADAdAFASQAHAbAKAbQAMAfAMAUQAOAXAVAbQAVAZAUATQAfAcAhAZQAnAdAfARQApAWA0AUQA1AUAsALQBYAVA+AKQBbAQA9gBQBSgCBwgTQBhgQBdgYQBjgaCzg/QDohRArgOIDthLQCRguBegYQA+gRBrgVICsghIBlgVIBlgTQAbgEAtgFIBIgIIBQgIIBRgIIBQgFIBRgFIBIgDIBJgBIBGABIBGACIBMAEIBLAFIBKAGIBJAIIBDAJIBCAJIA+AKIA+ALIAjAGIAkAJIA0AOQAfAJAUAIQASAIATALQAVAMAPAMQASAOAUATQATAUAPASQAQAUATAeQASAbAPAZQAPAdASAkQARAjANAfQAOAiAQAtIAbBRIAZBZIAWBbQALAtAKA0QALA3AHArQAIAxAGAxQAHA5ADApQADAoABAzQABAygBArQgCA7gEBEQgEBHgGA4QgFA4gIAzQgIA/gKArQgPBGgQA5QgVBLgUAyQgSAvgcAyQgeA2gcAlQgfAngvAtQgrAqgrAhQgvAkhIAtQg7AlhBAkQgvAahDAgQg7Abg7AYQg+AahHAaQhMAcg7ASQg6ARhIASQhIASg7ALQhFANhZAMQhWAMhJAGQhBAGhVAEQhQAEhHABIgWAAQg7AAhEgCg");
	this.shape_33.setTransform(20.3,-20.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2EABB8").s().p("AC2ZQQhTgDhCgFQgzgFg+gHQg+gJgzgJQg5gLhHgQQhGgRg5gQQg1gOhEgXQhAgVg3gVQgxgSg9gaQg8gZgwgXQgjgRgrgXQgqgXgigWQgkgXgrgeQgsgegigbQgggYgngiQgmghgfgeQgbgageghQgfgggXgcQgXgdgbglQgbgjgUggQgYgkgPgbQgXgmgLgcQgLgbgGgXQgHgeADgUQADgPAPgPQARgPAKAGQAeASAsA3QAyBAASAQQCNB9AlAeQBvBdBOAvQCBBOBcAtQCJBBBjAQQBTAMBpgVQBqgXBGguQBDgsA/haQA7hUAahUQAchZAEiMQAChpgLiAQgIhhgdh6Qgch0gkhhQgXg+glg8QgphDgrgkQgbgXgugHQgwgJgeAPQgkAUgqA6Ig/BgQgPAVhOB2Qg8BbgoAqQgrArg6AoQg9Aqg1AVQgxAShDAIQhBAIg3gHQgzgEhUgdIiEgvIhHglIgtgbQgagPgRgMIgqgeQgYgTgQgPQgggbgdgcQgigigXgbQgVgYgdgoIguhCQgTgcgcgrIguhIIg1hVIgzhVQgWglgZgwIgthVIgihFQgTgqgLgdQgMgfgJgfQgMglgEgbQgEgcgBgjQgBgiADgdQADgbAIgjQAIggAKgcQAKgcARgiQARggAQgaQANgTApgzQAnguANgZQAGgMACgRQAAgQgCgQIgHgEIgJgDIgFgDIgFgGIgCgEIgBgFIAAgFIABgGIADgFIAIgMIAFgEIAVgQIAJgEIAKgBIAGACIAEADIAEAEIAEAGIADAMIADAUIACAGIAFAKIAGAJIAQARIAQAKIAhAOIAWAFIAeAEIANADIAMAHIAIAIIAEAJIgEAJIgOAMIgHAFIgHACIgZAGIghgBIgHgCIgIgDIgKgMIgKgSIgLgFIgQgCQgNAGgPAOQgLAJgOAQQgJAJgMARIgSAcIgWAkIgUAkIgOAiIgLAjIgLArQgFAaAAARQgBAbADAaQAEAfAHAVQAJAZAQAcQAQAcAQATQAbAfAfAdQAkAgAeASQApAYA0AWQA2AXAtALQBRAVBJAKQBbAOBBgDQBRgEB0gWQBdgTBkgbQBigbC1hCQDghQA0gRQCcgzBSgaQCRgtBfgaQA+gQBsgWICsghIBlgVQA/gMAngHQAbgFAtgEIBJgIIBQgJIBRgHIBRgFIBQgFIBJgDIBJgBIBGABIBGACIBMADIBLAGIBKAHIBJAHIBDAIIBCALIA+AJIA+ALIAkAHIAjAIIA0AOQAgAKATAIQASAHAUAMQAVAMAPAMQARANAUAVQAUATAOASQARAVATAdQASAbAPAZQAQAdARAkQARAjANAfQAOAjAQAsQAPArAMAmQAMAnANAzQANAwAJAqQALAuAKA0QALA3AHArIAOBhQAHA5ADAqQADAoABA0QABAwgBArQgCA8gEBEQgFBHgFA4QgGA4gHAzQgJA+gKArQgPBGgQA5QgVBKgUAyQgTAvgcAyQgeA2gdAkQgeAngvAsQgsAqgrAgQgvAlhIArQg7AlhBAjQgvAahEAfQg7Abg6AXQg/AahHAZQhMAbg7ARQg6ARhIARQhIARg8ALQhFAMhZALQhWALhJAGQhBAGhWADQhPADhHAAQhDgBhSgDg");
	this.shape_34.setTransform(22.4,-19.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2EABB8").s().p("AFCYoQhDgBhSgDQhSgEhDgGQgxgEg/gJQg+gJgygJQg5gLhHgRQhFgRg5gQQg2gPhDgXQhAgVg2gVQgygTg8gZQg7gagwgXQgkgRgqgXQgqgXgigWQgkgWgrgeQgsgegigaQgggZgngiQgmghgfgdQgagZgfggQgfghgXgcQgXgbgbgkQgbgkgUgeQgZglgPgZQgXgmgLgbQgMgbgFgUQgIgeADgUQADgOAPgOQAQgPALAGQAeATArA2QAzA/ASAPICyCZQBvBcBOAuQCCBPBbArQCJBCBiAPQBTAOBogVQBqgWBFgsQBEgrA+hZQA7hTAahSQAchZAEiLQAChogLh/QgIhhgeh7QgchzgkhhQgXg+glg7QgphDgsgkQgbgXgugIQgvgIgeAQQglASgpA8Ig/BfQgPAVhNB3Qg7BbgpApQgqAsg6AoQg9Aqg1AVQgwAThEAHQhAAIg3gGQg0gFhTgcIiFgtIhIglIgsgaIgsgcIgrgeQgYgSgQgOQghgcgdgcQgjghgXgaQgWgZgdgnIgwhDQgVgdgcgrIguhJIg2hXQghg1gTgjIguhYQgYgxgSgpQgRglgNgjQgRgrgJgfQgJgggHggQgHgmgBgbQgCgcAEgiQADgiAHgbQAHgaANgfQANgeAOgYQAPgYAXgcQAWgcAVgTQATgSAygjQAygjATgSQAJgJAHgQQAHgOADgOIgFgGIgIgFIgDgEIgCgGIAAgEIABgFIACgFIACgEIAFgFIALgIIATgJIAMgDIAKgBIAKACIAEACIADAFIACAFIABAGIgCARIgEAMIgBAHIAEAUIAJATIAFAHIAMALIAdAWIAkARIALAHIAJAJIAFAJIAAAKIgHAGIgRAHIgPACIgZgDIgXgGIgOgHIgFgEIgEgIIgCgGIgDgSIgIgHIgPgGQgNACgTAIIgfARQgLAGgQANIgZAVIgdAcQgRAQgLANQgKAMgLAPQgLAQgHAOIgTAlQgKAXgDAQQgFAZgBAZQgCAdAEAVQAFAYAMAdQAMAdAPAUQAXAgAeAfQAhAjAdATQAoAbA0AYQA2AZAsALQBPAUBNALQBdAOBBgEQBSgFB1gZQBZgTBrgfQBhgcC2hCQDchQA5gTIDvhNQCQgtBhgaQA+gRBsgWICtgiIBlgVQA+gMAngHIBJgKIBJgHIBRgIIBQgIIBRgFIBRgFIBJgDIBJgBIBGABIBGACIBMAEIBLAFIBKAHIBJAIIBDAIIBCAKIA+AKIA+AKIAkAHIAjAJIA0AOQAgAKATAIQASAHAUAMQAVAMAPALQASAOAUAUQATAUAPASQARAVATAdQASAbAOAaQAQAcASAkIAeBDQAOAiAQAtQAPArALAmQAMAnAOAzQAMAvAKArQAKAtALA1IARBiIAOBhQAHA5ADAqQADAoABA0QABAwgBArQgCA7gEBEQgEBIgGA3QgGA4gHAzQgJA+gKAsQgPBFgQA5QgVBKgUAyQgTAugcAyQgeA1gdAlQgeAmgvAsQgsAqgrAgQgvAjhIAsQg7AkhBAjQgwAZhDAeQg7Abg7AXQg+AZhHAYQhMAbg7ARQg6ARhIAQQhIARg7AKQhFAMhZAKQhWALhJAFQhBAFhVADQg/ACg6AAIgdAAg");
	this.shape_35.setTransform(23.4,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

	// Layer 9
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E08DBF").s().p("Ak5B3QApjqEHhsQHmjIjpGkQh0DRirA7QhWAYg7AAQicAAAfiqg");
	this.shape_36.setTransform(8.5,89.3,1,1,0,0,0,0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(35));

	// Layer 4
	this.instance_2 = new lib.bilbomouthint("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-4.2,y:15.8},16,cjs.Ease.get(-1)).to({x:-0.2,y:10.8},18,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.2,-170.5,466.1,311.1);


(lib.biblobodywalkcycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bilbo-ear
	this.instance = new lib.bilboear("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(4.1,-58.6,1,1,0,0,0,-40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,scaleX:1,skewX:-0.2,skewY:-1,x:44.1,y:-57.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.9,skewY:-3.8,x:44.2,y:-54.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-1.8,skewY:-7.3,x:44.1,y:-51.6},0).wait(1).to({regX:-40.1,scaleX:1.01,skewX:-2.1,skewY:-8.4,x:4,y:-44.6},0).wait(1).to({regX:0,skewX:-2,skewY:-8,x:44.1,y:-51},0).wait(1).to({scaleX:1.01,skewX:-1.7,skewY:-7,y:-52.2},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-1.3,skewY:-5.4,x:44.2,y:-54.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.8,skewY:-3.1,y:-56.8},0).wait(1).to({regX:-40,scaleX:1,scaleY:1,skewX:0,skewY:0,x:4.1,y:-60.6},0).wait(1).to({regX:0,scaleX:1,skewY:-1.1,x:44.2,y:-59.5},0).wait(1).to({scaleX:1.01,skewY:-4.1,y:-56.2},0).wait(1).to({scaleX:1.01,skewY:-7.8,y:-52.3},0).wait(1).to({regX:-40,scaleX:1.01,skewY:-9.1,x:4.1,y:-44.6},0).wait(1).to({regX:0,scaleX:1.01,skewY:-8.1,x:44.1,y:-51.9},0).wait(1).to({scaleX:1.01,skewY:-5,x:44.2,y:-54.8},0).wait(1).to({scaleX:1,skewY:-1.3,y:-58.4},0).wait(1).to({regX:-40,scaleX:1,skewY:0,x:4.1,y:-59.6},0).wait(1).to({regX:0,scaleX:1,skewX:-0.4,skewY:-0.9,x:44.1,y:-58.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:-1.7,skewY:-3.4,x:44.2,y:-55.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-3.2,skewY:-6.5,x:44.1,y:-51.2},0).wait(1).to({regX:-40,scaleX:1.01,scaleY:1,skewX:-3.7,skewY:-7.5,x:4.1,y:-44.6},0).wait(1).to({regX:0,scaleY:1,skewX:-3.5,skewY:-7.2,x:44,y:-50.4},0).wait(1).to({scaleX:1,skewX:-3.1,skewY:-6.3,x:44.1,y:-51.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-2.4,skewY:-4.9,y:-53.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-1.4,skewY:-2.8,y:-56.6},0).wait(1).to({regX:-40,scaleX:1,scaleY:1,skewX:0,skewY:0,x:4.1,y:-60.6},0).wait(1).to({regX:0,scaleX:1,scaleY:1,skewX:-0.4,skewY:-1.1,x:44.1,y:-59.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:-1.7,skewY:-4.1,x:44.2,y:-56.2},0).wait(1).to({scaleX:1.01,scaleY:0.99,skewX:-3.2,skewY:-7.8,x:44.1,y:-52.2},0).wait(1).to({regX:-40,regY:0.1,scaleX:1.01,scaleY:0.99,skewX:-3.7,skewY:-9.1,x:4.1,y:-44.5},0).wait(1).to({regX:0,regY:0,scaleX:1.01,scaleY:0.99,skewX:-3.3,skewY:-8.1,x:44.1,y:-51.8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-2.1,skewY:-5,x:44.2,y:-54.4},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.5,skewY:-1.3,y:-57.6},0).wait(1).to({regX:-40,scaleX:1,scaleY:1,skewX:0,skewY:0,x:4.1,y:-58.6},0).wait(1));

	// bilbo-hat
	this.instance_1 = new lib.bilbohat("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63.7,-103.2,1.436,1.436,0,0,0,4.2,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-102.6},1).to({y:-99.4},1).to({y:-96},1).to({y:-89.3},1).to({y:-112.2},5,cjs.Ease.get(-1)).to({y:-114.6},1,cjs.Ease.get(1)).to({y:-115.6},1).to({y:-104.4},1).to({y:-97.2},1).to({regX:4.1,regY:12.6,rotation:3.3,x:-63.8,y:-99.2},1,cjs.Ease.get(-1)).to({regX:4.2,regY:12.5,rotation:5.8,y:-102.3},1).to({scaleX:1.44,scaleY:1.44,rotation:7.5,x:-63.7,y:-106.1},1).to({rotation:7.2,y:-107.2},1).to({y:-105.2},1).to({y:-102.2},1).to({y:-97.7},1).to({rotation:4.9,x:-63.8,y:-89.1},1).to({scaleX:1.44,scaleY:1.44,rotation:0,x:-63.7,y:-104.2},5,cjs.Ease.get(-1)).to({y:-108.6},1,cjs.Ease.get(1)).to({y:-110.6},1).to({y:-103.4},1).to({y:-93.7},1).to({y:-94.3},1,cjs.Ease.get(-1)).to({y:-97.4},1).to({y:-102},1).to({y:-102.9},1).wait(1));

	// bilbo-body
	this.instance_2 = new lib.bilbobody("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.4,159.4,1,1,0,0,0,102,145);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-8.8,startPosition:1},0).wait(1).to({y:-3.5,startPosition:2},0).wait(1).to({y:2.7,startPosition:3},0).wait(1).to({regX:102,regY:145,x:58.4,y:174.9,startPosition:4},0).to({y:156.1,startPosition:9},5,cjs.Ease.get(-1)).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-12.3,startPosition:10},0).wait(1).to({y:-7.8,startPosition:11},0).wait(1).to({y:-2.4,startPosition:12},0).wait(1).to({regX:102,regY:145,x:58.4,y:169.4,startPosition:13},0).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-1.7,startPosition:14},0).wait(1).to({y:-5.1,startPosition:15},0).wait(1).to({y:-9.2,startPosition:16},0).wait(1).to({regX:102,regY:145,x:58.4,y:159.4,startPosition:17},0).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-8.6,startPosition:18},0).wait(1).to({y:-2.8,startPosition:19},0).wait(1).to({y:4.2,startPosition:20},0).wait(1).to({regX:102,regY:145,x:58.4,y:176.5,startPosition:21},0).to({y:159.4,startPosition:26},5,cjs.Ease.get(-1)).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-9.4,startPosition:27},0).wait(1).to({y:-6,startPosition:28},0).wait(1).to({y:-2,startPosition:29},0).wait(1).to({regX:102,regY:145,x:58.4,y:169.4,startPosition:30},0).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-1.7,startPosition:31},0).wait(1).to({y:-5.1,startPosition:32},0).wait(1).to({y:-9.2,startPosition:33},0).wait(1).to({regX:102,regY:145,x:58.4,y:159.4,startPosition:0},0).wait(1));

	// bilbo-tail
	this.instance_3 = new lib.bilbotail("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(191.7,-92.1,1.436,1.436,0,0,0,-34.1,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-135.1,startPosition:1},0).wait(1).to({y:-131.7,startPosition:2},0).wait(1).to({y:-127.6,startPosition:3},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-82.1,startPosition:4},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-126.8,startPosition:5},0).wait(1).to({y:-127.9,startPosition:6},0).wait(1).to({y:-129.8,startPosition:7},0).wait(1).to({y:-132.5,startPosition:8},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-92.1,startPosition:9},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-135.1,startPosition:10},0).wait(1).to({y:-131.7,startPosition:11},0).wait(1).to({y:-127.6,startPosition:12},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-82.1,startPosition:13},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-127.3,startPosition:14},0).wait(1).to({y:-130.7,startPosition:15},0).wait(1).to({y:-134.8,startPosition:16},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-92.1,startPosition:17},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-135.1,startPosition:18},0).wait(1).to({y:-131.7,startPosition:19},0).wait(1).to({y:-127.6,startPosition:20},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-82.1,startPosition:21},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-126.8,startPosition:22},0).wait(1).to({y:-127.9,startPosition:23},0).wait(1).to({y:-129.8,startPosition:24},0).wait(1).to({y:-132.5,startPosition:25},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-92.1,startPosition:26},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-135.1,startPosition:27},0).wait(1).to({y:-131.7,startPosition:28},0).wait(1).to({y:-127.6,startPosition:29},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-82.1,startPosition:30},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-127.3,startPosition:31},0).wait(1).to({y:-130.7,startPosition:32},0).wait(1).to({y:-134.8,startPosition:33},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-92.1,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.8,-240.5,466.1,395.5);


// stage content:
(lib.SampleAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bilbo-foot
	this.instance = new lib.bilbofootwalkcycle("synched",4);
	this.instance.parent = this;
	this.instance.setTransform(478,537,1.175,1.175,0,0,0,1.6,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// Layer 20
	this.instance_1 = new lib.bilbofootwalkcycle("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(384,537,1.175,1.175,0,0,0,1.6,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// Layer 10
	this.instance_2 = new lib.biblobodywalkcycle("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(353.1,355.5,1.175,1.175);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// Layer 22
	this.instance_3 = new lib.bilbofootwalkcycle("synched",10);
	this.instance_3.parent = this;
	this.instance_3.setTransform(372.5,528.8,1.175,1.175,0,0,0,1.6,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// Layer 21
	this.instance_4 = new lib.bilbofootwalkcycle("synched",14);
	this.instance_4.parent = this;
	this.instance_4.setTransform(468.6,528.8,1.175,1.175,0,0,0,1.6,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// Layer 19
	this.instance_5 = new lib.shadow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(419.8,572.2,0.853,0.853);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(456,472.8,547.8,516.4);
// library properties:
lib.properties = {
	id: '3988E1E3B2F1425D95FBD658C80A9F71',
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
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
an.compositions['3988E1E3B2F1425D95FBD658C80A9F71'] = {
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