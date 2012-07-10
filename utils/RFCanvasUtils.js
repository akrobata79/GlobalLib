function  RFCircle(ctx) {
				ctx.beginPath();
				ctx.fillStyle = fiveColors[0];
				ctx.arc(that.x, that.y, that.radius, 0, Math.PI * 2, true);
				ctx.fill();
				ctx.strokeStyle = '#000';
				ctx.lineWidth = 3;
				ctx.stroke();
				ctx.closePath();

				return;
			};