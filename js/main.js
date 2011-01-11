(function()
{
	var CanvasDemo = function()
	{
		return this;
	};

	// Canvas vars
	CanvasDemo.prototype.canvas = null;
	CanvasDemo.prototype.canvasContext = null;

	// Demo vars
	CanvasDemo.prototype.truckImage = null;


	// On Ready Callback
	CanvasDemo.prototype.onReady = function(e)
	{
		this.canvas = this.createCanvas();
		this.canvasContext = this.canvas.getContext('2d');
		this.canvasContext.fillRect(100, 100, 50, 50);

		this.loadTruck();

		// Start rendering loop
		var self = this;
		this.loopInterval = setInterval(function() {
		 self.loop();
		}, 30);
	};

	CanvasDemo.prototype.createCanvas = function()
	{
		var canvas = document.createElement('canvas');
		canvas.width = 640;
		canvas.height = 480;

		var container = document.getElementById('container');
		container.appendChild(canvas);

		return canvas;
	};

	CanvasDemo.prototype.loadTruck = function()
	{
		this.truckImage = new Image();
		this.truckImage.src = "images/truck.png";

		var self = this;
		this.truckImage.onload = function() {
			self.canvasContext.drawImage(self.truckImage, 100, 200, self.truckImage.width, self.truckImage.height);
		};
	};

	// Loop
	CanvasDemo.prototype.loop = function()
	{
//		 console.log('hi')
	};

	// Create instnace
	var aCanvasDemo = new CanvasDemo();

	// Wait for when ready
	window.addEventListener('load', function(){ aCanvasDemo.onReady() }, false);
})();