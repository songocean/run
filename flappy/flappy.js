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
// helper functions:

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


(lib.StartInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("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");
	this.shape_1.setTransform(-0.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.StartInstructions, new cjs.Rectangle(-125.1,-6.1,249.3,19.6), null);


(lib.ScreenFlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rectangle
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScreenFlash, new cjs.Rectangle(-151,-201,302,402), null);


(lib.GetReady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtXCHIgGgPQgKAGgLAEQgKADgJAAIgBAAIAAAAIgpgCQgXgCgSgMQgTgLgMgUQgKgTgBgXIAAhHQABgfAIgVQAIgVANgNQANgNAPgFQAPgFAPAAIAkAAQAUAAASALQATAMAMASQAMATAAAVIAAAZIgzACQAAgNgDgMQgEgMgIgHQgHgIgMAAIgDAAIgDABIgcAFQgMACgGAQQgGAQAAAgIAAAWQAAAOAFAPQAEAPAIAKQAHAKALAAIAYAAQADAAAGgDQAFgCADgFQADgEABgFIAAgCIgBgBIgfgDIgEggIBhAAIgBB2gANhCFIACiJIhKiGIBRAJIAmBTIAhhbIBRgBIhNCKIgMCFgAI2CFIAAkNIB3AAQAsABAVASQATATAAAhIAACQQAAANgCAKQgCAKgGAHQgIAHgOAEQgOADgYAAgAKDBcIAaAAQATAAAJgDQAIgDACgGQACgHAAgJIABghIACgqQACgXAAgZQAAgOgEgGQgDgHgGgBQgFgCgGAAIgxAAgAHPCFIgKhWIg9AAIgJBWIhHAAIA4kOIBnAAIBPEOgAGMgCIA1gDIgdhigABqCFIgBkOIC3AAIAAAyIhvAGIAAAvIBmAIIAAAyIhhAAIAAAkIByAIIAABBgAAPCFIAAhRQAAgJgHgGQgGgFgHgDIgPgEIgGgBIAABtIhKAAIAAkOIBuAAQAaAAAPAFQAPAEAIAJQAHAIADAMQACAMAAAPQAAAdgFASQgEATgOAHQgOAJgbAAIAGACIAQAHIATAJQAJAGAHAGQAGAFABAGIAABSgAgcgpIAiAAQALAAAEgCQAFgDABgEQACgEgBgGQAAgLgDgJQgFgJgOAAIgiAAgAoPCFIAKi2IhIgCIgFhWIDfACIABBPIhMAMIAACxgAshCFIAAkOIC3AAIAAAyIhwAGIAAAvIBmAIIAAAyIhgAAIAAAkIByAIIAABBg");
	this.shape.setTransform(-1.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("As7C7IgfgEQgIgBgHgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgCgYgQIgBAAQgYgQgPgZIgBgBQgOgZgBgfIAAgBIAAgjIAAgBIAAhHQABglAKgaIAAAAQAKgcASgQIAAgBQASgRAVgHIAAAAQAVgHATAAIAjAAIABAAQAcAAAaAQIAAAAQAJAFAIAHQAAgMAJgIQAJgJAMAAIC3AAQAHAAAFACQAGgCAGAAIDfACQANAAAIAJQAJAJAAAMIABBPIgBAGIABAeQAAALgHAJQgHAIgLACIg0AIIAACXQAAANgIAJQgJAIgNAAIhQAAQgIAAgIgEQgHgEgEgIQgDgHAAgIIABgaQgBgFAAgFIAGh0IgngBIgIgBIAAAbQAGACAEAFQAIAIAAAMIAABlQAAANgJAJQgJAIgMAAIi/AAIgFAAIgFADQgGADgHAAIgDAAgAImC1IhXAAQgLAAgJgHQgJgIgBgLIgHg8IgHAAIgGA7QgBAMgJAIQgJAHgLAAIhHAAIgHgBIgJABIi+AAQgGAAgEgBQgFABgGAAIhHAAQgMAAgHgIQgJAIgMAAIhKAAQgMAAgJgIQgJgJAAgNIAAkyQAAgNAJgIQAJgJAMAAIBuAAQAfAAATAGIABAAQAKAEAJAEIAEgFQAJgJAMAAIC3AAQANAAAJAJQAIAIAAANIAAAxIAAADIAAAiQAAAMgIAJIgBABIAAADIAAAbIAdiQQADgLAIgGQAIgHALAAIBnAAQAKAAAIAGQAIAGADAKIAkB8IAAhzQAAgMAJgJQAJgJAMAAIB3AAQA0ABAbAVIAAAAQACgMAJgGQAKgHALACIBRAIQAIABAGAFQAHAEADAIIAIARIAIgYQAEgJAHgFQAIgFAJAAIBRgBQALAAAIAHQAJAHACALQACAKgFAKIgCAEQAEAFABAHQACAKgFAKIhLCDIgLCAQgBAMgJAHQgIAIgMAAIhIAAQgIAAgHgEQgHgEgEgHQgEgHAAgIIABggIgBgEIABhfIglhDIAAAAIgBBsIAAABIAAAIIAAAEIAAAWIAAABQABARgDAMQgDATgNANIAAABQgMAMgXAGQgRAEgdAAIiFAAIgIgBIgIABIAAAAg");
	this.shape_1.setTransform(-1.1,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GetReady, new cjs.Rectangle(-106.7,-6.4,211.3,37.4), null);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtsCIIgGgPQgKAGgLADQgKAEgJAAIgBAAIgBAAIgogDQgXgBgTgMQgSgMgMgTQgKgTgBgXIAAhHQABgfAIgVQAIgWANgMQANgNAPgFQAPgGAPAAIAjAAQAVABASALQATAMAMASQAMASAAAWIAAAZIgzABQAAgNgEgLQgEgMgHgIQgIgHgLAAIgDAAIgEABIgbAFQgMACgGAQQgGAPAAAhIAAAVQAAAPAEAPQAFAOAHAKQAIALAKgBIAZAAQADABAFgDQAFgDAEgEQADgFABgEIgBgCIAAgBIgfgDIgFggIBhAAIAAB1gAo5CGIAAkPIBOAAIBBCeIAwieIBTADIAGEMIhPAAIAAh/IghB/IhBAAIgZh1IgGB6gAPRCGIAAhSQAAgIgGgGQgHgFgIgDIgOgFIgHAAIAABtIhJAAIAAkPIBuAAQAaAAAQAGQAPAEAHAIQAIAJACAMQACAMAAAOQAAAegEASQgFATgOAHQgNAJgcAAIAHACIAPAHIATAJQAKAGAGAFQAGAGABAGIAABSgAOlgoIAjAAQALAAAEgCQAFgDABgEQACgEgBgGQABgLgEgJQgFgJgOAAIgjAAgAKPCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAIwCGIgTgBIgYgBIgUAAIgKgBIhOkMIBQAIIArDPIAfjXIBQgCIhLERIgIAAgAE1CGIgBAAIgpgDQgXgBgSgMQgTgLgLgUQgLgSAAgYIAAhGQAAggAIgVQAIgWANgMQANgMAPgGQAQgGAPAAIAjAAQAUABATAMQASAKAMATQAMASABAWIAABjQgBAVgHARQgIAQgMAMQgMALgNAGQgOAGgNAAIgBAAgAEihLIgUACQgMABgFAQQgGAQgBAhIAAAWQAAAOAFAOQAEANAIAKQAIAIAKABIAQAAQAMgBAHgHQAIgIADgKQAEgLAAgHIgBgoQAAgagGgOQgGgPgJgFQgJgGgJAAIgBAAgAkLCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAqgCGIgKhWIg9AAIgJBWIhGAAIA3kPIBnAAIBPEPgArigCIA0gCIgdhig");
	this.shape.setTransform(-1.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AtQC9IgfgDQgJgBgGgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgDgZgPIAAgBQgYgPgQgaIAAAAQgOgagBgeIAAgBIAAgnIAAgBIAAghIAAgBIAAglQABglAKgaIAAAAQAKgcARgRIABAAQASgSAVgGIAAAAQAUgIAUABIAjAAIABAAQAcAAAZAPIABABQAYAOAQAYIAAABQAOAWADAYIAQhOQACgLAIgHQAJgGAKAAIBnAAQAKAAAIAGQAIAGADAJIAkB9IAAh0QAAgNAJgJQAJgIAMAAIBOAAQAJgBAIAGQAIAFADAIIAhBRIAXhOQAEgKAIgGQAIgGAKABIBTACQAFAAAFACQAHgEAKAAIC3AAQAMAAAJAIQAJAJAAANIAAAwIAAAEIAAAmQAAAMgJAJIgBABIAAAlIAAAEIAAAYQAFADAFAEQAIAJAAAMIAAAoIAAACIAAA/QAAAMgJAJQgJAJgMAAIi/AAQgGAAgFgCQgFACgGAAIhPAAQgJAAgHgFQgIAFgJAAIhBAAQgGAAgFgCIgHAEQgHAEgIgBIhIgFIgGgBIgIABIhXAAQgLAAgJgIQgIgHgCgLIgHg8IgHAAIgGA7QgBALgJAIQgIAIgMAAIhGAAIgFAAIgFADQgGACgHAAIgDAAgAIuC4IgRgBIgCAAIgXAAIgTgBIgCAAIgIAAQgKAAgIgGQgIgHgDgJIgmiFIAAAmIAAABQgBAbgKAWQgKAWgQAPQgQAQgSAIIgBAAQgUAIgSAAIgBAAIgBAAIgCAAIgogCIgBAAQgegDgZgPIgBgBQgYgPgPgZIgBgBQgNgZgBgfIAAgBIAAgnIAAgBIAAhHQAAglAKgaIAAAAQALgcARgQQASgSAVgHIAAAAQAVgIAUABIAjAAIABAAQAcABAZAPQAJAFAIAHQAAgFACgGQAEgJAJgGQAIgFAKABIBQAJQAKABAHAGQAIAHACAKIAHAmIAHgtQACgLAIgHQAIgHALAAIBQgCQAGgBAFADIACAAIC3AAQAGAAAGACQAFgCAHAAIBuAAQAfAAATAGIABAAQAYAHAMAPQANAOADAVQADAOAAASIgBAaIAAAAIAAABIABAMIAAABQAAAigFATIgCAHQAHAKAAALIAAACIAAAmIAAAFIAABPQAAAMgJAJQgJAJgMAAIhHAAQgMAAgJgIQgJAIgMAAIhJAAIgIgBIgIABIi/AAQgMAAgJgJQgJgJAAgMIAAheIgcBmQgCAKgJAGQgIAGgKAAIgIAAIgBAAIgBAAg");
	this.shape_1.setTransform(-1.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOver, new cjs.Rectangle(-108.9,-6.6,215.6,37.9), null);


(lib.LowerPipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6BDB12").ss(5,1,1).p("AAAg7IAAB3");
	this.shape.setTransform(6,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#85D93D").ss(5,1,1).p("AAAs9IAAZ7");
	this.shape_1.setTransform(13,116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(55,126,0,0.4)").s().p("AkrAPIAAgPQAAgFAHgFQAHgEALAAIIkAAQAMAAAGAEQAIAFAAAFIAAAPg");
	this.shape_2.setTransform(30,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Pipe Top
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#59C900","#459E00"],[0,1],-30,0,30,0).s().p("AkICCQgjAAAAggIAAjDQAAggAjAAIIRAAQAjAAAAAgIAADDQAAAggjAAg");
	this.shape_3.setTransform(30,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(55,126,0,0.4)").s().p("AjvgNIAAgoIHfAAIAABrg");
	this.shape_4.setTransform(30,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Pipe Bottom
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#59C900","#459E00"],[0,1],-24,0,24,0).s().p("AjvN/IAA79IHfAAIAAb9g");
	this.shape_5.setTransform(30,113.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.LowerPipe, new cjs.Rectangle(0,0,60,203), null);


(lib.GroundSlice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Edges
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B841D").s().p("AvEAKIAAgTIeJAAIAAATg");
	this.shape.setTransform(96.5,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85D93D").s().p("AvEAKIAAgTIeJAAIAAATg");
	this.shape_1.setTransform(96.5,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Grass
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5AA11F").s().p("AOXANQgHgHgBgHIgKABQgKAAgHgGIgFAGQgGAFgIAAQgIAAgHgFQgCgDgBgDIgBAAQgCAGgFADQgKAKgOAAQgOAAgKgKQgEgDgCgGIgDAAIgEAFQgHAGgLABQgLgBgIgGIgDgEQgBADgDACQgDAEgGAAQgEAAgFgEQgDgCAAgEIgBAAQgCAHgGAGQgJAJgNAAQgNAAgJgJQgGgGgCgHIgCAAIgBACQgJAHgKAAQgMAAgHgHIgCgCIgCAAQgCAGgFAEQgJAKgNAAQgNAAgKgKQgEgEgCgGIgDAAQgCAGgFAEQgMAMgQAAQgQAAgMgMQgFgEgCgGIgFAAQgFAFgIAAQgJAAgGgFIgDAAIAAACQAAAIgHAHQgHAHgJAAQgJAAgIgHQgGgHAAgIIAAgCIgBAAIgEAFQgPAOgUAAQgVAAgOgOIgEgFIgDAAQgCAGgEAFQgJAIgMAAQgMAAgJgIQgFgFgCgGQgBAGgFAFQgGAGgIAAQgJAAgHgGQgEgFgBgGIAAAAQgVATgbAAQgbAAgVgTIgBAAIAAACQAAAEgDADQgEAEgFAAQgFAAgEgEQgDgDgBgEIAAgCIAAAAIgDAFQgGAFgIAAQgHAAgFgFIgEgFIgCAAQgBAKgIAHQgIAJgNAAQgMAAgJgJQgFgEgCgFIAAgBIgBgHIAAAAIAAANIgGAGQgIAIgKAAQgMAAgHgIQgIgHAAgHIgLABQgJAAgIgGIgFAGQgFAFgIAAQgJAAgGgFQgDgDAAgDIgBAAQgDAGgEADQgLAKgOAAQgOAAgJgKQgFgDgCgGIgCAAIgEAFQgIAGgLABQgKgBgJgGIgCgEQgCADgDACQgDAEgFAAQgFAAgEgEQgDgCAAgEIgBAAQgDAHgFAGQgKAJgNAAQgNAAgIgJQgGgGgDgHIgBAAIgCACQgIAHgLAAQgLAAgIgHIgBgCIgCAAQgDAGgFAEQgIAKgNAAQgNAAgKgKQgEgEgDgGIgCAAQgCAGgFAEQgMAMgRAAQgQAAgMgMQgFgEgCgGIgEAAQgGAFgIAAQgIAAgGgFIgDAAIAAACQgBAIgGAHQgHAHgKAAQgJAAgHgHQgHgHAAgIIAAgCIgBAAIgEAFQgOAOgVAAQgUAAgPgOIgDgFIgDAAQgCAGgFAFQgJAIgMAAQgMAAgIgIQgFgFgCgGQgBAGgFAFQgHAGgIAAQgJAAgGgGQgFgFAAgGIgBAAQgUATgcAAQgbAAgUgTIgBAAIAAACQAAAEgEADQgDAEgFAAQgGAAgDgEQgEgDAAgEIAAgCIgBAAIgDAFQgGAFgHAAQgHAAgGgFIgEgFIgBAAQgCAKgHAHQgJAJgMAAQgNAAgJgJQgIgHAAgKIgBAAIAAgOIABAAQAAAKAIAGQAJAHANAAQAMAAAJgHQAHgGACgKIABAAIAEAEQAGAFAHAAQAHAAAGgFIADgEIABAAIAAABQAAAFAEADQADADAGAAQAFAAADgDQAEgDAAgFIAAgBIABAAQAUARAbAAQAcAAAUgRIABAAQAAAGAFAEQAGAGAJAAQAIAAAHgGQAFgEABgGQACAGAFAEQAIAIAMAAQAMAAAJgIQAFgEACgGIADAAIADAEQAPANAUAAQAVAAAOgNIAEgEIABAAIAAABQAAAJAHAGQAHAFAJAAQAKAAAHgFQAGgGABgJIAAgBIADAAQAGAEAIAAQAIAAAGgEIAEAAQACAFAFAFQAMAKAQgBQARABAMgKQAFgFACgFIACAAQADAGAEAEQAKAIANAAQANAAAIgIQAFgEADgGIACAAIABABQAIAIALAAQALAAAIgIIACgBIABAAQADAHAGAFQAIAIANAAQANAAAKgIQAFgFADgHIABAAQAAAEADACQAEADAFABQAFgBADgDQADgCACgDIACADQAJAHAKAAQALAAAIgHIAEgEIACAAQACAEAFAFQAJAIAOABQAOgBALgIQAEgFADgEIABAAQAAADADACQAGAFAJAAQAIAAAFgFIAFgFQAIAFAJAAIALgBQAAAHAIAHQAHAFAMABQAKgBAIgFIAGgGIAAgMIAAAAIABAHIAAAAQACAFAFAEQAJAHAMAAQANAAAIgHQAIgGABgKIACAAIAEAEQAFAFAHAAQAIAAAGgFIADgEIAAAAIAAABQABAFADADQAEADAFAAQAFAAAEgDQADgDAAgFIAAgBIABAAQAVARAbAAQAbAAAVgRIAAAAQABAGAEAEQAHAGAJAAQAIAAAGgGQAFgEABgGQACAGAFAEQAJAIAMAAQAMAAAJgIQAEgEACgGIADAAIAEAEQAOANAVAAQAUAAAPgNIAEgEIABAAIAAABQAAAJAGAGQAIAFAJAAQAJAAAHgFQAHgGAAgJIAAgBIADAAQAGAEAJAAQAIAAAFgEIAFAAQACAFAFAFQAMAKAQgBQAQABAMgKQAFgFACgFIADAAQACAGAEAEQAKAIANAAQANAAAJgIQAFgEACgGIACAAIACABQAHAIAMAAQAKAAAJgIIABgBIACAAQACAHAGAFQAJAIANAAQANAAAJgIQAGgFACgHIABAAQAAAEADACQAFADAEABQAGgBADgDQADgCABgDIADADQAIAHALAAQALAAAHgHIAEgEIADAAQACAEAEAFQAKAIAOABQAOgBAKgIQAFgFACgEIABAAQABADACACQAHAFAIAAQAIAAAGgFIAFgFQAHAFAKAAIAKgBQABAHAHAHQAIAFALABQALgBAIgFQAGgGACgHIAAAFIAAAFIAAAFQgCAHgGAGQgIAIgLAAQgLAAgIgIg");
	this.shape_2.setTransform(96.5,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#665025").s().p("AOXAOQgHgIgBgJIgKACQgKAAgHgHIgFAHQgGAGgIAAQgIAAgHgGQgCgDgBgEIgBAAQgCAGgFAEQgKAMgOAAQgOAAgKgMQgEgEgCgGIgDAAIgEAFQgHAIgLAAQgLAAgIgIIgDgEQgBAEgDADQgDADgGAAQgEAAgFgDQgDgDAAgFIgBAAQgCAIgGAHQgJAKgNAAQgNAAgJgKQgGgHgCgIIgCAAIgBACQgJAIgKAAQgMAAgHgIIgCgCIgCAAQgCAHgFAEQgJALgNAAQgNAAgKgLQgEgEgCgHIgDAAQgCAHgFAEQgMANgQAAQgQAAgMgNQgFgEgCgHIgFAAQgFAFgIAAQgJAAgGgFIgDAAIAAACQAAAKgHAHQgHAIgJAAQgJAAgIgIQgGgHAAgKIAAgCIgBAAQgCAEgCABQgPAQgUAAQgVAAgOgQIgEgFIgDAAQgCAHgEAFQgJAKgMAAQgMAAgJgKQgFgFgCgHQgBAIgFAEQgGAHgIAAQgJAAgHgHQgEgEgBgIIAAAAQgVAVgbAAQgbAAgVgVIgBAAIAAACQAAAFgDADQgEAFgFAAQgFAAgEgFQgDgDgBgFIAAgCIAAAAQgBAEgCABQgGAGgIAAQgHAAgFgGQgCgBgCgEIgCAAQgBALgIAJQgIAKgNAAQgMAAgJgKQgFgGgCgGQgBAIgGAGQgIAIgKAAQgMAAgHgIQgIgIAAgJIgLACQgJAAgIgHIgFAHQgFAGgIAAQgJAAgGgGQgDgDAAgEIgBAAQgDAGgEAEQgLAMgOAAQgOAAgJgMQgFgEgCgGIgCAAIgEAFQgIAIgLAAQgKAAgJgIIgCgEQgCAEgDADQgDADgFAAQgFAAgEgDQgDgDAAgFIgBAAQgDAIgFAHQgKAKgNAAQgNAAgIgKQgGgHgDgIIgBAAIgCACQgIAIgLAAQgLAAgIgIIgBgCIgCAAQgDAHgFAEQgIALgNAAQgNAAgKgLQgEgEgDgHIgCAAQgCAHgFAEQgMANgRAAQgQAAgMgNQgFgEgCgHIgEAAQgGAFgIAAQgIAAgGgFIgDAAIAAACQgBAKgGAHQgHAIgKAAQgJAAgHgIQgHgHAAgKIAAgCIgBAAQgBAEgDABQgOAQgVAAQgUAAgPgQIgDgFIgDAAQgCAHgFAFQgJAKgMAAQgMAAgIgKQgFgFgCgHQgBAIgFAEQgHAHgIAAQgJAAgGgHQgFgEAAgIIgBAAQgUAVgcAAQgbAAgUgVIgBAAIAAACQAAAFgEADQgDAFgFAAQgGAAgDgFQgEgDAAgFIAAgCIgBAAQgBAEgCABQgGAGgHAAQgHAAgGgGQgCgBgCgEIgBAAQgCALgHAJQgJAKgMAAQgNAAgJgKQgIgJAAgLIgBAAIAAgNIABAAQAAAKAIAIQAJAIANAAQAMAAAJgIQAHgIACgKIABAAIAEAEQAGAGAHAAQAHAAAGgGIADgEIABAAIAAABQAAAFAEADQADAEAGAAQAFAAADgEQAEgDAAgFIAAgBIABAAQAUATAbAAQAcAAAUgTIABAAQAAAGAFAFQAGAGAJAAQAIAAAHgGQAFgFABgGQACAGAFAFQAIAIAMAAQAMAAAJgIQAFgFACgGIADAAIADAEQAPAPAUAAQAVAAAOgPIAEgEIABAAIAAABQAAAKAHAGQAHAGAJAAQAKAAAHgGQAGgGABgKIAAgBIADAAQAGAEAIAAQAIAAAGgEIAEAAQACAFAFAFQAMALAQAAQARAAAMgLQAFgFACgFIACAAQADAGAEAEQAKAKANAAQANAAAIgKQAFgEADgGIACAAIABABQAIAIALAAQALAAAIgIIACgBIABAAQADAHAGAGQAIAIANAAQANAAAKgIQAFgGADgHIABAAQAAADADADQAEAEAFAAQAFAAADgEQADgCACgEIACAEQAJAIAKAAQALAAAIgIIAEgEIACAAQACAFAFAEQAJAKAOAAQAOAAALgKQAEgEADgFIABAAQAAADADACQAGAGAJAAQAIAAAFgGIAFgFQAIAFAJAAIALgBQAAAIAIAHQAHAHAMAAQAKAAAIgHIAGgGIAAgNIAAAAIABAHIAAABQACAFAFAFQAJAIAMAAQANAAAIgIQAIgIABgKIACAAIAEAEQAFAGAHAAQAIAAAGgGIADgEIAAAAIAAABQABAFADADQAEAEAFAAQAFAAAEgEQADgDAAgFIAAgBIABAAQAVATAbAAQAbAAAVgTIAAAAQABAGAEAFQAHAGAJAAQAIAAAGgGQAFgFABgGQACAGAFAFQAJAIAMAAQAMAAAJgIQAEgFACgGIADAAIAEAEQAOAPAVAAQAUAAAPgPIAEgEIABAAIAAABQAAAKAGAGQAIAGAJAAQAJAAAHgGQAHgGAAgKIAAgBIADAAQAGAEAJAAQAIAAAFgEIAFAAQACAFAFAFQAMALAQAAQAQAAAMgLQAFgFACgFIADAAQACAGAEAEQAKAKANAAQANAAAJgKQAFgEACgGIACAAIACABQAHAIAMAAQAKAAAJgIIABgBIACAAQACAHAGAGQAJAIANAAQANAAAJgIQAGgGACgHIABAAQAAADADADQAFAEAEAAQAGAAADgEQADgCABgEIADAEQAIAIALAAQALAAAHgIIAEgEIADAAQACAFAEAEQAKAKAOAAQAOAAAKgKQAFgEACgFIABAAQABADACACQAHAGAIAAQAIAAAGgGIAFgFQAHAFAKAAIAKgBQABAIAHAHQAIAHALAAQALAAAIgHQAGgGACgHIAAADIAAAFIAAAGQgCAIgGAHQgIAIgLAAQgLAAgIgIg");
	this.shape_3.setTransform(96.5,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72BE32").s().p("AOXA6QgHgGAAgHIgLABQgKAAgHgGIgFAGQgFAFgJAAQgIAAgGgFQgDgCgBgEIgBAAQgCAFgFAEQgKAJgOAAQgOAAgKgJQgEgEgCgFIgDAAIgDAFQgIAGgLABQgLgBgIgGIgDgEQgBADgDACQgDAEgFAAQgFAAgEgEQgDgCAAgEIgCAAQgCAHgGAGQgJAHgNABQgNgBgJgHQgGgGgCgHIgCAAIgBACQgIAHgLAAQgLAAgIgHIgBgCIgCAAQgDAGgFAEQgJAJgNgBQgNABgJgJQgFgEgCgGIgCAAQgDAGgFAEQgLAKgRAAQgQAAgMgKQgFgEgCgGIgEAAQgGAFgIAAQgIAAgGgFIgEAAIAAACQAAAJgHAFQgGAGgKABQgJgBgHgGQgHgFAAgJIAAgCIgBAAIgEAFQgOANgVgBQgUABgPgNIgEgFIgCAAQgCAGgFAEQgJAIgMAAQgMAAgIgIQgFgEgCgGQgCAHgFADQgGAGgIAAQgJAAgGgGQgFgDgBgHIAAAAQgUASgcgBQgbABgUgSIgBAAIAAABQAAAFgEADQgEAEgFAAQgFAAgEgEQgDgDAAgFIAAgBIgBAAIgDAFQgGAEgHAAQgIAAgFgEIgEgFIgBAAQgCAKgHAGQgJAJgNgBQgMABgJgJQgFgDgCgFIAAgBIgBgHIAAAAIAAAMIgFAGQgIAHgLAAQgLAAgIgHQgHgGgBgHIgLABQgJAAgIgGIgEAGQgGAFgIAAQgJAAgGgFQgCgCgBgEIgBAAQgDAFgEAEQgKAJgOAAQgOAAgKgJQgFgEgCgFIgCAAIgEAFQgHAGgLABQgLgBgIgGIgDgEQgBADgDACQgEAEgFAAQgFAAgEgEQgDgCAAgEIgBAAQgCAHgGAGQgJAHgNABQgNgBgJgHQgGgGgCgHIgCAAIgCACQgIAHgLAAQgLAAgIgHIgBgCIgCAAQgCAGgFAEQgJAJgNgBQgNABgKgJQgEgEgDgGIgCAAQgCAGgFAEQgMAKgQAAQgRAAgLgKQgFgEgDgGIgEAAQgGAFgIAAQgIAAgGgFIgDAAIAAACQAAAJgHAFQgHAGgJABQgKgBgHgGQgGgFAAgJIAAgCIgBAAIgFAFQgOANgUgBQgVABgOgNIgEgFIgDAAQgCAGgFAEQgIAIgMAAQgMAAgJgIQgFgEgCgGQgBAHgFADQgGAGgJAAQgIAAgHgGQgEgDgBgHIgBAAQgUASgbgBQgcABgUgSIgBAAIAAABQAAAFgEADQgDAEgFAAQgFAAgEgEQgEgDAAgFIAAgBIAAAAIgEAFQgFAEgIAAQgHAAgGgEIgDgFIgCAAQgBAKgIAGQgJAJgMgBQgNABgJgJQgHgGgBgKIgBAAIAAhoIeJAAIAABuQgCAHgGAFQgIAHgLAAQgLAAgIgHg");
	this.shape_4.setTransform(96.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Dirt
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B6233").s().p("AvED6IAAnzIeJAAIAAHzg");
	this.shape_5.setTransform(96.5,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.GroundSlice, new cjs.Rectangle(0,0,193,50), null);


(lib.Wing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90101").s().p("ABpB/IhegxQhIgphFgsIhJg0IgIgIQgDgFgCgGQgEgKABgNQADgaAUgVQATgVAagEQAOgBAKACQAFACAFADQAFACAEAEIC0DLIBEBBIBQBDg");
	this.shape.setTransform(-56.8,-36.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90101").s().p("AB8C9IhShKIgDgEIgEgDIglgoQg2g6g1hDIgjgwIgRgZIgEgKIgCgMQABgMAFgKQALgZAZgMQAagOAZAFQAMADAKAGIAIAHIAHAJIBaDbIAnBPIAuBNIACADIAcAng");
	this.shape_1.setTransform(-51.6,-41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90101").s().p("ABTDmQgUgWgLgRIgKgOIgcgwIgihLQgfhKgWhNIgVhUQgBgGABgFQABgGACgFQADgGADgEIADgEIAFgFQATgRAdgCQAcgDAVAOIAFADIAEAEQAFAEADAEIAFAJIACALIgBBRQgBBcAFA7IAFAxIATBfQAIAbAJASIAFANIADAEg");
	this.shape_2.setTransform(-44.4,-43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90101").s().p("ABpB/IhegxQhIgphFgsIhBgtIgIgHIgIgIQgDgFgCgGQgEgKABgNQADgaAUgVQATgVAagEQAOgBAKACQAFACAFADQAFACAEAEIC0DLIBEBBIBQBDg");
	this.shape_3.setTransform(-56.8,-36.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90101").s().p("AjLBFQgVgDgNgWQgMgWADgcQAEgcASgTQARgSAWACQASACDRA+IDOA9IjXAIQisAGgvAAIgRgBg");
	this.shape_4.setTransform(-59.6,-25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C90101").s().p("ABTDmQgUgWgLgRIgKgOIgcgwIgihLQgfhKgWhNIgVhUQgBgGABgFQABgGACgFQADgGADgEIADgEIAFgFQATgRAdgCQAcgDAVAOIAFADIAEAEQAFAEADAEIAFAJIACALIgBBRQgBBcAFA7IAFAxIATBfQAIAbAJASIAIARg");
	this.shape_5.setTransform(-44.5,2.7,1,1,0,180,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C90101").s().p("AjKBFQgWgDgMgWQgNgWADgcQAEgdASgSQASgSAVACQAdAEGUB4QlfAPhPAAIgUgBg");
	this.shape_6.setTransform(-59.6,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{skewX:0,x:-51.6,y:-41.7}},{t:this.shape}]}).to({state:[{t:this.shape_1,p:{skewX:0,x:-51.6,y:-41.7}},{t:this.shape_3,p:{skewX:0,x:-56.8,y:-36.9}}]},1).to({state:[{t:this.shape_3,p:{skewX:0,x:-56.8,y:-36.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{skewX:180,x:-56.9,y:-4.2}}]},1).to({state:[{t:this.shape_1,p:{skewX:180,x:-51.7,y:0.6}},{t:this.shape_3,p:{skewX:180,x:-56.9,y:-4.2}}]},1).to({state:[{t:this.shape_5,p:{skewX:180,x:-44.5,y:2.7}},{t:this.shape_1,p:{skewX:180,x:-51.7,y:0.6}},{t:this.shape_3,p:{skewX:180,x:-56.9,y:-4.2}}]},1).to({state:[{t:this.shape_1,p:{skewX:180,x:-51.7,y:0.6}},{t:this.shape_3,p:{skewX:180,x:-56.9,y:-4.2}}]},2).to({state:[{t:this.shape_3,p:{skewX:180,x:-56.9,y:-4.2}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_3,p:{skewX:0,x:-56.8,y:-36.9}}]},1).to({state:[{t:this.shape_1,p:{skewX:0,x:-51.6,y:-41.7}},{t:this.shape_3,p:{skewX:0,x:-56.8,y:-36.9}}]},1).to({state:[{t:this.shape_5,p:{skewX:0,x:-44.4,y:-43.8}},{t:this.shape_1,p:{skewX:0,x:-51.6,y:-41.7}},{t:this.shape_3,p:{skewX:0,x:-56.8,y:-36.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.8,-68,44,48.6);


(lib.Tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag9CIQgOgQgLgbQgKgcAAgVQgBgWAJgDQAIgDBogCIAjgBIAAgFIgigIQhmgbgHgEQgIgGAFgVQAGgVAQgYQAPgYASgNQARgNAJAFQAGAFBABVIAiAtIAAAzQh9BrgLAFIgEAAQgIAAgLgOg");
	this.shape.setTransform(12.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tail, new cjs.Rectangle(2.8,-4.6,19.5,30.1), null);


(lib.Feet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE054").s().p("AgFBGQgSgMgUgVQgUgVgKgSQgKgSAFgFQAFgFBNgYIBMgXQg4CSgHAHQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgHAAgLgIg");
	this.shape.setTransform(4.4,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5C223").s().p("AgFBGQgSgMgUgVQgUgVgKgSQgKgSAFgFQAFgFBNgYIBMgXQg4CSgHAHQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgHAAgLgIg");
	this.shape_1.setTransform(11.4,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Feet, new cjs.Rectangle(-3.7,0,23.1,16.4), null);


(lib.Eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA/IgEgDIgLgJQgVgVAAgeQAAgdAVgWQAWgVAdAAQAeAAAVAVIABABQAVAWAAAcIAAAAQAAAegWAVQgVAWgeAAQgTAAgRgKg");
	this.shape.setTransform(16.3,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#410000").s().p("AhhBfQgig7gFhOIAQAGQA+AVA9ggIAYgNQA/gnAkg/QALArAAAyQAABggoBEQgoBEg5AAQg4AAgphEg");
	this.shape_1.setTransform(24.1,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D0000").s().p("AhzCBIgPgGIgBgbQAAhCATg0IAEADQAQALAVAAQAeAAAVgWQAVgVAAgeIAAgBQAAgdgUgVQAMgEANAAQA5AAAoBEQATAhAKAmQgkA/g/AnIgYANQglATglAAQgZAAgZgIg");
	this.shape_2.setTransform(23.6,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA/QgIgFgHgHQgVgVAAgeQAAgdAVgWQAWgVAdAAQAeAAAVAVQAWAWAAAdIAAAAQAAAegWAVQgVAWgeAAQgTAAgRgKg");
	this.shape_3.setTransform(16.3,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D4EBFF").s().p("AhdCvQgNgEgMgHQgvgXgdgkQAHhuA4hTQBAheBaAAQBaAABABeIASAdQgJAjgNAgQgkBchSAzIgYANQglATgmAAQgYAAgZgIgAhlhXQgWAVAAAeQAAAfAWAUQAHAHAIAEQAQALAVAAQAeAAAUgWQAWgUAAgeIAAgBQAAgegWgVQgUgWgeAAQgfAAgVAWg");
	this.shape_4.setTransform(21.4,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AECCE7").s().p("AiaCnQgNgTgLgWQgohRAAhqQAAgRABgSQAeAkAuAXQAMAHANAEQA/AVA9ggIAYgNQBSgzAlhbQAMgiAJgjQAbAxAMA8QAIArAAAwQAACFhBBfQhABfhaAAQhaAAhAhfg");
	this.shape_5.setTransform(23.7,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Eye, new cjs.Rectangle(1.8,2.6,43.8,64.7), null);


(lib.Crest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AABB1IgchCIgDgMIgBgCIAAgCIAAAAIAAgBIgDgPQgEgQgCgYIAAgmIAEgnIABgEIADgGIADgEIAGgDIABgBIABgBIADAAQAOgDAPAGQAPAGAIAKIADAFIADAGIABAEIgBAFIgBADIgGAMIgCAGIgGALQgHAQgEAPQgHATgCAPIgCAJIgBAEIAAABIAAAAIAAAEIgCASIABA3IABAJg");
	this.shape.setTransform(1.5,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhPA9IABgCIABgHIABgCIABgCIABgCIADgIQAGgOAIgLIAHgKIAQgPQANgMAPgKQAQgKAMgGQAOgGAKgCIAHgDIAEAAIAFAAIACABIACACIAFAFIACACIABACIAAACQAFANABAWQAAATgGAPIAAACIgBABIAAABIgBADIgDAEIgDADIgDABIgDAAIgFgBIgpgGIgPAAIgJABIgbAGIgWALIgPAKIgEADIgBACg");
	this.shape_1.setTransform(6.5,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Crest, new cjs.Rectangle(-2.6,3.1,17.1,23.8), null);


(lib.CollisionPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CollisionPoint, new cjs.Rectangle(-2,-2,4,4), null);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjcBNIgDAAQhOgahDgrQgqgagggfQB3AxCVALQgnguABhJQBGBLCmAlQBaAUBKgEIASgCQBKgBBBgLQAzgIAvgPQglAZguAWIhDAdIgFACIACAAIgRAGIgPAFIgTAGIgoALIgLACQhTAShdAAIgIAAQh5AAhnggg");
	this.shape.setTransform(55.6,72.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90101").s().p("AAgFWQimgmhGhLQgBBKAnAvQiVgMh3gxQghgfgYgiQBgAsB5AYIAaivQCWB6CeAwQgTgRgRgXQgog1gag0Qgcg3gchWQAVhPAfhAQAcg5Aqg3QBQhoByAAQBxAABQBoQBRBoAACTQAACShRBoQgjAtgoAaQBKgGBMgUQgQAPgTAOQgvAPgzAJQhCALhJABIgSABIgbABQg/AAhKgRg");
	this.shape_1.setTransform(54.8,38.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AGHEaQBRhoAAiTQAAiShRhoQhQhohxAAQhyAAhQBoQgqA4gcA5QgfA/gVBPQAcBWAcA3QAaA0AoA1QARAXATASQiegxiWh6IgaCvQh5gYhggsQgpg7gMhEQgaiSDCiRQDCiRC7ghQCrgeCbAdIANADIAOADQAkAIAeAVQClBfgBEuIAAAFQAECHhqBeQhMAUhLAFQApgZAjgug");
	this.shape_2.setTransform(56.8,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE054").s().p("AAeBsQgIgEhWhZIgWAFIAMgOIgMgMIAWADIAigmQA5g+AGgDQAHgEAMAKQAMAKALASQAKARACAQQACAQgHAEQgHAEhWASQBQAMAGADQAHAEgBAQQgCAPgJATQgKASgLALQgJAIgGAAIgEgBg");
	this.shape_3.setTransform(116.5,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Body, new cjs.Rectangle(0,0,125.3,83.7), null);


(lib.Trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CD241").s().p("AiPEwIgJgIQgqATgxAAQhaAAhAg+QgvAqhAAAQg6AAgrgiQgyAig/AAQhIAAg2grQgcAIgfAAQgpAAgkgOQgnAXgxAAQhIAAg0gzQgWgWgNgaIgLAAIgFAAQgUApgiAjQhPBPhwAAQhwAAhPhPQgPgQgNgQIAApOQAcgIAgAAQBaAABBBBQAwAwAMA/QBBANA0AsQAjgSAqAAQBGAAAyAxQATAUAMAXQAJgCAKAAIAKABIAKgLQA8g8BVAAQBIAAA2ArQAbgIAgAAQBVAAA7A8IAQASQAZgIAdAAQAkAAAgANIAMgIQALgPAOgOQBDhCBdAAQBCAAA0AiQBLhABkAAQByAABRBQIADAEQA4goBHAAQBYAABAA9QAfgOAlAAQBGAAAyAxQAOAOALAQQARguAmgnQBGhGBkAAQBjAABGBGQAZAaARAdQAJgQAOgOQAygyBGAAQBGAAAyAyQATATAMAXIAFgCIgBgPQAAhhBFhFQBFhEBhAAIADAAIAAHTIgDAAIgcgBQgMAlgeAdQgyAzhGAAQhGAAgzgzQgTgTgLgWQgXAGgaAAQhGAAgygyIgJgKQgSAvgmAmQhGBGhjAAQhkAAhGhGQgkgkgRgrQgLATgQAQQgyAxhGAAQgiAAgcgLIgCACQhBBBhbAAQhAAAgzggIgPAQQhRBRhyAAQhxAAhQhRg");
	this.shape.setTransform(162.1,352.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Middle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5BE7AB").s().p("AN8EcQgXgXgOgaIgLAMQgqAqg6AAQg8AAgqgqQgcgcgKgkQggAhgvAAQgvAAghgiQgIgIgFgIQgNAUgSASQg2A3hOAAQhNAAg4g3QgbgcgNgiQgTAIgWAAQgpAAgdgdQgIgJgGgJQgLAtgiAkQgxAwhEAAQguAAgngXQgKAcgWAWQgsArg9AAQg9AAgrgrQgcgcgJghIgUAAQhMAAg1g1IgHgHIgIAIQgrArg8AAQgpAAgggTQgKAOgMALQg2A3hOAAQhOAAg2g3QgmgmgMgwQgaAIgeAAQhGAAgxgyQgygxAAhGIAAgCQgTAKgWAAQgkAAgagaQgRgSgGgWQgfAWgpAAQgfAAgagNIAAjiQAagNAfAAQA1AAAkAkQAmAlgBA1IAAAAQAPgFAQAAQAkAAAZAaQAOAOAHARIAJgKQAxgyBGAAQBHAAAxAyQAeAdAMAkQAjgQApAAQBNAAA2A1QAogjA4AAQAyAAAmAdQALgUATgRQA1g2BMAAQBLAAA2A2QA0AzACBGQAWADAUAJQALgmAegfQAxgwBEAAQBEAAAxAwQAaAbAMAgQAIgQANgOQAdgdApAAQAhAAAZASQALgPAMgOQA4g2BNAAQBOAAA2A2QAjAjANAsQAggdAsAAQAvAAAhAgQARARAIATQAFgHAHgHQAqgpA8AAQA6AAAqApIALANQAOgbAXgXQA5g4BRAAQBPAAA3A1QAZgJAcAAQATAAASAFQANguAjgjQA3g3BNAAQAnAAAgAOQAGgrAegeQAlglA0AAQAvAAAiAdIAADCQgiAcgvAAIgLAAQADAPgBAQQABBOg3A2Qg3A3hOAAQg/AAgwgkIgOAQQglAmg3AAQgMAAgKgCQgMAQgPAPQg5A5hRAAQhRAAg5g5g");
	this.shape_1.setTransform(162,341.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Back
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6FFFC").s().p("AK0E0QgQgQgKgRQgoAng5AAQg6gBgpgpQgIgHgGgJQgVAFgWAAQhDAAgwgvQgbgcgLgiIgRABQg1AAgngiQgEAlgbAaQgeAfgrAAQgYAAgTgIIgDACQgRATgbAAQgbAAgTgTIgJgLQgjARgpAAQhHAAg0gzIAAgBIgEAEQgsAshAAAQg/AAgtgsQgYgZgLgeQgKAZgWAVQgmAog5AAQgsAAgjgaIgGAGQgtAvhBAAQhBAAgvgvQgMgMgIgNIgUABQg1AAglglQgkglAAg0IAAgMQgdAVgkgBQgmABgdgWQgbAbglAAQgKgBgJgCQgHAJgIAHQgqArg7AAQg8AAgpgrQgrgpAAg7IABgRQgvgBglgcIAAjkQAlgeAzgBQA7ABAqAqQAqAqABA7IgBASQA4ABApApIAJAJQAMgDANAAQASAAAQAGQAHgLAKgKQAhghAvAAQAuAAAhAhQAiAhgBAvIAAAFQAigbAtAAQAsAAAhAbQAfgRAkgBIAAgJQAAg/AsgtQAtgsA/AAQA/AAAtAsQAiAkAIAuIALAAQAoAAAbAcQAKAKAIANQAhgVAqABQA2gBApAhQAHgLAKgKQA0gyBHgBQBIABAzAyQArArAHA4QAVgLAbAAQAdAAAXANIAAgJQAAg6AqgqQArgqA7gBQA7ABAqAqQARARAKATQAUgEAWgBQBCAAAvAwQAXAUAKAaIABAAQAJgmAfgeQArgrA9AAQA9AAAsArQASATALAVQAUgJAYAAQAqAAAdAcQAFgrAhghQAngoA5ABQAuAAAjAaIACgDQApgpA6AAQAvAAAjAbQAHgMALgLQAfgeAogDQgBgLAAgMQAAgvAggiQAiggAvAAQAuAAAiAgQAdAdAEAnQATAIARARIAKAMIAAChIgKALQgmAmg2AAQgnAAgegTIgFAGQgjAjgwAAQgdAAgYgNQgKAagVAVQgkAjgvAFQgGAhgaAZQghAhguAAQgvAAghghQgWgWgIgcQgqgHgfggIgNgOQgGAWgTATIgEADQADAPAAAQQAABAgsAsQgtAsg/AAQg/AAgtgsg");
	this.shape_2.setTransform(162,332.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Trees, new cjs.Rectangle(-9.1,297,342.5,94.1), null);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF8FF").s().p("A6cIRIgKiKIAAtrQAUgFAXAAQBBAAAuAtQAkAkAJAvQBrAIBOBNQBNBNAJBoQAJgNAMgLQA3g3BPAAQAbAAAYAHIAAgOQAAhUA8g7QA8g7BVAAQBUAAA8A7QApAoAOAzQAygeA/AAQA1AAAsAUIACgCQArgqA7AAQA7AAAqAqQAqApAAA7IAAACQANgUARgRQBDhBBcAAQBdAABCBBQAiAiARApQALgUASgSQAzgxBHAAQAYAAAWAFIgBgVQgBhmBKhIQBIhIBnAAQBnAABJBIQA8A7ALBPQAlAHAeAXIAAgLQAAhCAvgvQAwgvBCAAQBDAAAwAvQARARALAUQADhcBDhCQBFhFBhAAQBiAABGBFIADADIAAPZg");
	this.shape.setTransform(-0.4,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0EFFF").s().p("A5hIRIAAwfIANgBIAUgBQBiAABFBFQBDBCACBcQALgUASgRQAvgvBDAAQBCAAAwAvQAvAvAABCIAAALQAegXAmgHQALhPA7g7QBJhIBnAAQBnAABJBIQAtAtARA3IAOgPQBQhPBwAAQBxAABPBPQAZAZARAcQBNAHA6A5QASARAMAUIAAgCQAAg7AqgpQAqgqA7AAQA8AAAqAqIACACQAsgUA1AAQA/AAAzAeQAOgzAogoQA8g7BUAAQA1AAArAXQAKgMAMgMQBVhVB5AAQB4AABWBVIADAEQAogiA2AAQAlAAAfAQQALgZAVgVQAugtBCAAQAWAAAUAFIAANrIgKCKg");
	this.shape_1.setTransform(-8.8,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(-172.2,-66.3,342.2,109.4), null);


(lib.Pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Upper Pipe
	this.instance = new lib.LowerPipe();
	this.instance.parent = this;
	this.instance.setTransform(26.7,-150.8,1,1,0,180,0,29.7,101.8);
	this.instance.cache(-2,-2,64,207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Lower Pipe
	this.instance_1 = new lib.LowerPipe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.7,150.8,1,1,0,0,0,29.7,101.8);
	this.instance_1.cache(-2,-2,64,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pipe, new cjs.Rectangle(-3,-252,60,504), null);


(lib.Bird = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Collision Points
	this.hit8 = new lib.CollisionPoint();
	this.hit8.parent = this;
	this.hit8.setTransform(-10.8,-21);

	this.hit7 = new lib.CollisionPoint();
	this.hit7.parent = this;
	this.hit7.setTransform(-27.5,-12);

	this.hit6 = new lib.CollisionPoint();
	this.hit6.parent = this;
	this.hit6.setTransform(-17.7,25.6);

	this.hit5 = new lib.CollisionPoint();
	this.hit5.parent = this;
	this.hit5.setTransform(1.5,23.2);

	this.hit4 = new lib.CollisionPoint();
	this.hit4.parent = this;
	this.hit4.setTransform(28,17.8);

	this.hit3 = new lib.CollisionPoint();
	this.hit3.parent = this;
	this.hit3.setTransform(42.2,1.9);

	this.hit2 = new lib.CollisionPoint();
	this.hit2.parent = this;
	this.hit2.setTransform(34.5,-16.4);

	this.hit1 = new lib.CollisionPoint();
	this.hit1.parent = this;
	this.hit1.setTransform(26.3,-32.7);

	this.hit0 = new lib.CollisionPoint();
	this.hit0.parent = this;
	this.hit0.setTransform(6.7,-27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit0},{t:this.hit1},{t:this.hit2},{t:this.hit3},{t:this.hit4},{t:this.hit5},{t:this.hit6},{t:this.hit7},{t:this.hit8}]}).to({state:[]},14).wait(1));

	// Wing
	this.instance = new lib.Wing("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-22,-19.3,0.609,0.609,0,0,0,-55.7,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(1));

	// Eye
	this.instance_1 = new lib.Eye();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.8,-4.6,0.609,0.609,0,0,0,23.7,34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},14).wait(1));

	// Body
	this.instance_2 = new lib.Body();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.2,-2,0.609,0.609,0,0,0,50.5,41.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},14).wait(1));

	// Crest
	this.instance_3 = new lib.Crest();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26.9,-30.3,0.609,0.609,0,0,0,8.4,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},14).wait(1));

	// Feet
	this.instance_4 = new lib.Feet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-17.6,20.7,0.609,0.609,0,0,0,9.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},14).wait(1));

	// Tail
	this.instance_5 = new lib.Tail();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-36.8,-3.8,0.609,0.609,0,0,0,10.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-35.6,85.8,64.4);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Trees
	this.instance = new lib.Trees();
	this.instance.parent = this;
	this.instance.setTransform(162.1,344,1,1,0,0,0,162.1,344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Clouds
	this.instance_1 = new lib.Clouds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.7,309.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#70C6CE").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
	this.shape.setTransform(150,200.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#56CCFF","#E7F7FF"],[0,1],0,-199.9,0,200).s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_1.setTransform(150,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-9.6,-0.9,342.9,402), null);


// stage content:
(lib.flappy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var queue = new createjs.LoadQueue();
		queue.loadManifest([
			"bird.js",
			"pipes.js",
			"ground.js",
			"ui.js",
			"main.js"
		]);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Screen Flash
	this.screenFlash = new lib.ScreenFlash();
	this.screenFlash.parent = this;
	this.screenFlash.setTransform(150,200);
	this.screenFlash.cache(-153,-203,306,406);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

	// Score
	this.score = new cjs.Text("0", "bold 24px 'Arial Black'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 36;
	this.score.lineWidth = 121;
	this.score.parent = this;
	this.score.setTransform(150,9);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Game Over
	this.gameOverPrompt = new lib.GameOver();
	this.gameOverPrompt.parent = this;
	this.gameOverPrompt.setTransform(151.5,85.9);

	this.timeline.addTween(cjs.Tween.get(this.gameOverPrompt).wait(1));

	// Get Ready
	this.getReadyPrompt = new lib.GetReady();
	this.getReadyPrompt.parent = this;
	this.getReadyPrompt.setTransform(151.5,85.9);
	this.getReadyPrompt.cache(-109,-8,215,41);

	this.timeline.addTween(cjs.Tween.get(this.getReadyPrompt).wait(1));

	// Start Instructions
	this.startInstructions = new lib.StartInstructions();
	this.startInstructions.parent = this;
	this.startInstructions.setTransform(151.5,243.9);
	this.startInstructions.cache(-127,-8,253,24);

	this.timeline.addTween(cjs.Tween.get(this.startInstructions).wait(1));

	// Bird
	this.bird = new lib.Bird();
	this.bird.parent = this;
	this.bird.setTransform(94,173.9,0.375,0.374,0,0,0,-0.2,-3);

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(1));

	// Ground
	this.ground2 = new lib.GroundSlice();
	this.ground2.parent = this;
	this.ground2.setTransform(470,375.1,1,1,0,0,0,96,24.1);
	this.ground2.cache(-2,-2,197,54);

	this.ground1 = new lib.GroundSlice();
	this.ground1.parent = this;
	this.ground1.setTransform(283,375.1,1,1,0,0,0,96,24.1);
	this.ground1.cache(-2,-2,197,54);

	this.ground0 = new lib.GroundSlice();
	this.ground0.parent = this;
	this.ground0.setTransform(96,375.1,1,1,0,0,0,96,24.1);
	this.ground0.cache(-2,-2,197,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground0},{t:this.ground1},{t:this.ground2}]}).wait(1));

	// Pipes
	this.pipe2 = new lib.Pipe();
	this.pipe2.parent = this;
	this.pipe2.setTransform(330.5,250,1,1,0,0,0,27.5,0);

	this.pipe0 = new lib.Pipe();
	this.pipe0.parent = this;
	this.pipe0.setTransform(-29.5,100,1,1,0,0,0,27.5,0);

	this.pipe1 = new lib.Pipe();
	this.pipe1.parent = this;
	this.pipe1.setTransform(150.5,200,1,1,0,0,0,27.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pipe1},{t:this.pipe0},{t:this.pipe2}]}).wait(1));

	// Background
	this.instance = new lib.Background();
	this.instance.parent = this;
	this.instance.setTransform(161.3,200.1,1,1,0,0,0,161.3,200.1);
	this.instance.cache(-12,-3,347,406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90,48,627,654);
// library properties:
lib.properties = {
	id: '288D9B7E436949E6B6DEF11BB00A6E93',
	width: 300,
	height: 400,
	fps: 60,
	color: "#CCCCCC",
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
an.compositions['288D9B7E436949E6B6DEF11BB00A6E93'] = {
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