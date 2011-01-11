(function(){
	 function onReady(e)
	 {
		 var canvas = createCanvas();
		 var context = canvas.getContext('2d');
		 context.fillRect(100, 100, 50, 50);
	 }

	// Wait for when ready
	window.addEventListener('load', onReady, false)
})();

function createCanvas()
{
	var canvas = document.createElement('canvas');
	canvas.width = 640;
	canvas.height = 480;

	var container = document.getElementById('container');
	container.appendChild(canvas);

	return canvas;
}