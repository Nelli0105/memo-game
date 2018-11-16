let colors = ["rgb(255, 105, 180)","rgb(0, 17, 130)", "rgb(255, 215, 0)","rgb(112, 216, 124)","rgb(255, 73, 73)","rgb(128, 0, 128)","rgb(255, 140, 0)","rgb(140, 159, 255)"]
let cells = Array(16);
let col = 0;
// test
function getRandomIndex()
{
	let index = Math.floor(Math.random() * 16);
	while(cells[index] !== undefined)
	{
		index = Math.floor(Math.random() * 16);
	}
	return index;
}
for(let i = 0; i < colors.length; ++i)
{
	cells[getRandomIndex()] = colors[i];
	cells[getRandomIndex()] = colors[i];
}
let cell1 = null;
let cell2 = null;
const butt = document.querySelectorAll (".butt");
const Buttons = document.querySelector (".Buttons");
const main = document.querySelector (".main");
for(let i=0; i<butt.length; ++i)
{
butt[i].addEventListener ("click" , function(event) {
	if(event.target.style.background !== cells[i])
	{
	 	event.target.style.background = cells[i];
	 	if(colorsArrEmpty (cells, butt))
		{
			main.removeChild (Buttons);
			let win = document.createElement ("h1");
			win.innerHTML = "win!!!";
			win.id = "win";
			main.appendChild (win);
		}
		if(cell1 === null)
		{
			cell1 = event.target;
		}
		else if(cell2 === null)
		{
			cell2 = event.target;
		}
		else
		{
			if(cell1.style.background !== cell2.style.background)
			{
				cell1.style.background = "url(ezgif-4-89e93682e7fa.gif)";
				cell2.style.background = "url(ezgif-4-89e93682e7fa.gif)";
			}
			cell1 = null; 
			cell2 = null;
			cell1 = event.target;
			cell1.style.background = event.target.style.background;	
		}
	}	
	})
}

function colorsArrEmpty (colorsArr, butt)
{
	for (var i = 0; i < colorsArr.length; i++)
	 {
		if(colorsArr[i] !== butt[i].style.background)
			{
			return false;
			}
	}
	return true;
}
