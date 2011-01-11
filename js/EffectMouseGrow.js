(function() {
	EffectsMouseGrow = function() {
		this.lineArray = [];
		this.dotArray = [];
		return this;
	};

	EffectsMouseGrow.prototype = {
		dep: 0,
		trailLength: 45,
		lineArray: null,
		dotArray: null,

		/**
		 * Updates the trail to follow the mouse
		 * @param {CAAT.Point} mousePosition
		 */
		onTick: function(ctx, mousePosition) {
			var aPosition = {x: mousePosition.x, y: mousePosition.y};
			this.dotArray.push(aPosition);

			// LIFO
			if(this.dotArray.length > this.trailLength) {
				this.dotArray.shift();
			}

			var dotLength = this.dotArray.length,
				prevPoint = null;

			if(dotLength <= 0) return;


			for(var i = 1; i < dotLength; ++i)
			{
				ctx.beginPath();
				ctx.lineWidth = i / 0.1;
				var prevObj = this.dotArray[i-1],
					currentObj = this.dotArray[i];

				// Midpoint
				var point = {x:prevObj.x + (currentObj.x - prevObj.x) * .5,
							y: prevObj.y + (currentObj.y - prevObj.y) * .5};


				/**
				 * Draw a quadratic bezier curve to the next point in the path
				 */
				if(prevPoint) // All except the first one
				{
					ctx.moveTo(prevPoint.x, prevPoint.y);
					ctx.quadraticCurveTo(prevObj.x, prevObj.y,point.x, point.y);
				} else {
					ctx.moveTo(prevObj.x, prevObj.y);
					ctx.lineTo(point.x, point.y);
				}

				prevPoint = point;

				var r = i/dotLength*255,
					g = 0,
					b = 255;

				ctx.strokeStyle = "rgb("+r+","+g+","+b+")";
				ctx.stroke();
			}


		}
	};
})()