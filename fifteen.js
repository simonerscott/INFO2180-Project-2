$(document).ready(function()
{
	var puzzleArea = $("#puzzlearea div");
	//puzzleArea.style.backgroundImage = 'background.jpg';

	console.log(puzzleArea.length);
	
	for (var i = 0; i < puzzleArea.length; i++)
	{
		count = 1;
		puzzlePieces[i].style.backgroundImage("url('background.jpg')");
		puzzlePieces[i].addClass("puzzlepiece");
		puzzlepiece.id = count;
		count++;
	}


	 function setBackground()
	 {
	 	
	 }
});