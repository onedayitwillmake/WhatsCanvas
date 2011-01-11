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
//		this.canvasContext.fillRect(100, 100, 50, 50);

//		this.drawTruck();

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

	CanvasDemo.prototype.drawTruck = function()
	{
		if(!this.truckImage)
		{
			this.truckImage = new Image();
			this.truckImage.src = "images/truck.png";

			var self = this;
			this.truckImage.onload = function()
			{
				self.canvasContext.drawImage(self.truckImage, 100, 200, self.truckImage.width, self.truckImage.height);
			};
		}
	};

	var startX = 100;
	CanvasDemo.prototype.drawRectangle = function()
	{
		startX += 4;
		var startY = 100;
		var rectangleWidth = 150;
		var rectangleHeight = 100;
		var ctx = this.canvasContext;

//		ctx.fillStyle = "#FF00FF";
		ctx.fillStyle = "rgba(255, 0, 255, 0.02)";
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(startX + rectangleWidth, startY);
		ctx.lineTo(startX + rectangleWidth, startY+rectangleHeight);
		ctx.lineTo(startX, startY+rectangleHeight);
		ctx.lineTo(startX, startY);
		ctx.fill();
		ctx.closePath();
	};


	// Loop
	CanvasDemo.prototype.loop = function()
	{
//		this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.drawRectangle();
	};

	// Create instnace
	var aCanvasDemo = new CanvasDemo();

	// Wait for when ready
	window.addEventListener('load', function(){ aCanvasDemo.onReady() }, false);
})();