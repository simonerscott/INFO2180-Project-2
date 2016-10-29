$(document).ready(function()
{
	var puzzlePieces = $("#puzzlearea div");
	var counter = 0

	
	//for loop to apply background image
	for (var i = 0; i < puzzlePieces.length; i++)
	{
		puzzlePieces[i].style.backgroundImage = "url('background.jpg')";
		puzzlePieces[i].className = "puzzlepiece";
		puzzlePieces.id = counter;
		setBackground(i, puzzlePieces);
		counter++;
	}


	// Function created to place puzzle pieces in the correct order
	function setBackground(index, array)
	{
		puzzlePieces[i].style.left = (i % 4 * 100) +'px';
		puzzlePieces[i].style.top = (parseInt(i/4)*100) + 'px';
		puzzlePieces[i].style.backgroundPosition = '-' + puzzlePieces[i].style.left + ' ' + '-' + puzzlePieces[i].style.top;
	}
});