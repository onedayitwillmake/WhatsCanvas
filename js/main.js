(function()
{
	var CanvasDemo = function()
	{
		return this;
	};

	// Variables
	CanvasDemo.prototype.canvas = null;
	CanvasDemo.prototype.canvasContext = null;

	// On Ready Callback
	CanvasDemo.prototype.onReady = function(e)
	{
		this.canvas = this.createCanvas();
		this.canvasContet = this.canvas.getContext('2d');
		this.canvasContet.fillRect(100, 100, 50, 50);

		var self = this;
		this.loopInterval = setInterval(function() {
		 self.loop();
		}, 30)
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

	// Loop
	CanvasDemo.prototype.loop = function()
	{
		 console.log('hi')
	};

	// Create instnace
	var aCanvasDemo = new CanvasDemo();

	// Wait for when ready
	window.addEventListener('load', function(){ aCanvasDemo.onReady() }, false);
})();