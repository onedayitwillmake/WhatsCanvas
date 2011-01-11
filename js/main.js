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
	CanvasDemo.prototype.mouseGrow = null;
	CanvasDemo.prototype.mousePosition = null;


	// On Ready Callback
	CanvasDemo.prototype.onReady = function(e)
	{
		this.canvas = this.createCanvas();
		this.canvasContext = this.canvas.getContext('2d');
//		this.canvasContext.globalCompositeOperation = "lighter";
//		this.canvasContext.fillRect(100, 100, 50, 50);
//		this.drawTruck();

		this.initMouseEvents();
		this.initMouseGrow();

		// Start rendering loop
		var self = this;
		this.loopInterval = setInterval(function() {
		 self.loop();
		}, 30);
	};

	CanvasDemo.prototype.createCanvas = function()
	{
		var canvas = document.createElement('canvas');
		canvas.width = 1000;
		canvas.height = 1000;

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
	CanvasDemo.prototype.initMouseGrow = function()
	{
		 this.mouseGrow = new EffectsMouseGrow();
	};

	CanvasDemo.prototype.initMouseEvents = function()
	{
		var that = this;
		this.mousePosition = {x: this.canvas.width/2, y: this.canvas.height/2};

		// Listen for resize
		window.addEventListener("resize", function(e) {
			var edge = 10;
			that.canvas.width = window.innerWidth - edge*2;
			that.canvas.height = window.innerHeight - edge*2;
//			that.scene.setBounds(0, 0, that.director.canvas.width, that.director.canvas.height);
		}, true);

		// listen for the mouse
		window.addEventListener("mousemove", function(e) {
			that.mouseMove(e);
		}, true);
	};

	CanvasDemo.prototype.mouseMove = function(e)
	{
		var mouseX = e.clientX;
		var mouseY = e.clientY;
		this.mousePosition = {x: mouseX, y: mouseY}
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
		this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.canvasContext.fillStyle = "#09f";
    	this.canvasContext.fillRect(15,15,70,70);

//		this.drawRectangle();
		this.mouseGrow.onTick(this.canvasContext, this.mousePosition)
	};

	// Create instnace
	var aCanvasDemo = new CanvasDemo();

	// Wait for when ready
	window.addEventListener('load', function(){ aCanvasDemo.onReady() }, false);
})();