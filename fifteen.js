$(document).ready(function()
{
	var puzzleArea = $("puzzlearea");
	var puzzlePieces = puzzleArea.children();
	puzzleArea.style.backgroundImage = 'background.jpg';

	console.log(puzzlePieces.length);
	//puzzlePieces.style.backgroundImage("url('background.jpg')");

	for (var i = 0; i < puzzlePieces.length; i++)
	{
		
		puzzlePieces[i].addClass("puzzlepiece");
		puzzlepiece.id = i;
	}


	 function setBackground()
	 {
	 	
	 }
});