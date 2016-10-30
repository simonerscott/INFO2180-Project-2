$(document).ready(function()
{
	var puzzlePieces = $("#puzzlearea div");
	var counter = 1;
	var blankX = "300px";
	var blankY = "300px";
	var tempX = "";
	var tempY = "";
	var list = [];

	
	
	//for loop to apply background image
	for (var i = 0; i < puzzlePieces.length; i++)
	{
		puzzlePieces[i].style.backgroundImage = "url('background.jpg')";
		puzzlePieces[i].className = "puzzlepiece";
		puzzlePieces.id = counter;
		setBackground(i, puzzlePieces);
		list[i] = puzzlePieces.id; 
		counter++;
	}
	list[15] = 0;
	 

			

	// Function created to place puzzle pieces in the correct order
	function setBackground(index, array)
	{		
		puzzlePieces[i].style.left = (i % 4 * 100) +'px';
		puzzlePieces[i].style.top = (parseInt(i/4)*100) + 'px';
		puzzlePieces[i].style.backgroundPosition = '-' + puzzlePieces[i].style.left + ' ' + '-' + puzzlePieces[i].style.top;
    }

    
	

	function shuffle()
	{

	}

	

	/*puzzlePieces.onclick = movePiece();
	function movePiece()
	{
		console.log("Tester");
		var id = puzzlePieces.id;
		console.log(id);
	}*/

	puzzlePieces.click(function(event)
	{
		console.log("Tester");
		//var id = event.currentTarget.id;
		console.log(this.id);
		
	});
		

});