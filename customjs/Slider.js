function Slider(timerInterval, autoPlay) {
	this.currentPosition = 0;
	this.show = function(e){
		e.style.dislay = "block";
	};
	this.hide = function(e){
		e.style.dislay = "none";
	};
	if(timerInterval && autoPlay === true) {
		var slider = this;
		this.timer = setInterval(function() {
			slider.goToNext();
		}, timerInterval);
	}
}
Slider.prototype.setItems = function(items) {
	this.items = items;
}
Slider.prototype.init = function (arrowLeft, arrowRight) {
	var self = this;
	arrowLeft.addEventListener("click", function(event) {
		if(self.timer) {
			clearInterval(self.timer);
		}
		self.goToPrevious();
	});
	arrowRight.addEventListener("click", function(event) {
		if(self.timer) {
			clearInterval(self.timer);
		}
		self.goToNext();
	});
	this.update();
}
Slider.prototype.goToNext = function () {
	this.currentPosition++;
	if(this.currentPosition > this.items.length - 1) {
		this.currentPosition = 0;
	}
	this.update();
}
Slider.prototype.goToPrevious = function () {
	this.currentPosition--;
	if(this.currentPosition < 0) {
		this.currentPosition = this.items.length - 1;
	}
	this.update();
}
Slider.prototype.update = function() {
	if(!this.items || this.items.length <= 0) {
		return;
	}
	var pos = this.currentPosition;
	for(var x = 0; x < this.items.length; x++) {
		this.hide(this.items[x]);
	}
	this.show(this.items[pos]);
}
Slider.prototype.setShowFunction = function (showFunction) {
	this.show = showFunction;
}
Slider.prototype.setHideFunction = function (hideFunction) {
	this.hide = hideFunction;
}
