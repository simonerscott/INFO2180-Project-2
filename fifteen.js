$(document).ready(function()
{
	var puzzleArea = $("puzzlearea");
	var puzzlePieces = puzzleArea.children();
	//puzzleArea.style.backgroundImage = 'background.jpg';

	console.log(puzzlePieces.length);
	
	for (var i = 0; i < puzzlePieces.length; i++)
	{
		puzzlePieces.style.backgroundImage("url('background.jpg')");
		puzzlePieces[i].addClass("puzzlepiece");
		puzzlepiece.id = i;
	}


	 function setBackground()
	 {
	 	
	 }
});