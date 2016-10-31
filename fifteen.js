$(document).ready(function()
{
	var puzzlePieces = $("#puzzlearea div");
	var counter = 1;
	var blankX = "300px"; //Left Coordinates for empty space
	var blankY = "300px"; //Right Coordinates for empty space
	var tempX = "";
	var tempY = "";
	// var list = [];
	var nList = new Object();

		
	
	//for loop to apply background image
	for (var i = 0; i < puzzlePieces.length; i++)
	{
		puzzlePieces[i].style.backgroundImage = "url('background.jpg')";
		puzzlePieces[i].className = "puzzlepiece";
		puzzlePieces.id = counter;
		setBackground(i, puzzlePieces);
		// list[i] = puzzlePieces.id; 
		// counter++;
	}
	//list[15] = 0;
	
	 

			

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

	
	//
	puzzlePieces.click(function()
	{
		
		x =  $(this).css("left");
		y =  $(this).css("top");
		$(this).css("left", blankX);
		$(this).css("top", blankY);
		blankX = x;
		blankY = y;
		puzzlePieces.hover(validMove());
		//puzzlePieces.hover = validMove(); //idk if being called correctly
		console.log(nList);
	});


	


	function validMove()
	{
		var lessThanZero = 0;
		var greaterThan300 = 300;
		var topNeighbor;
		var bottonNeighbor;
		var leftNeighbor;
		var rightNeighbor;
		var neighborList;
		blankY = parseInt(blankY);
		blankX = parseInt(blankX);


		//Empty the list before other neighbor coordinates are added
		x = nList.length;
		for (i = 0; i < x; i++) 
		{
			nList.pop();
		}


		topNeighbor = blankY - 100;
		//not calulating correct value
		if (topNeighbor >= lessThanZero)
		{
			nList["top"] = [blankX, topNeighbor];
			//nList.push(blankX);
			//nList.push(topNeighbor);
		}

		bottonNeighbor = blankY + 100;
		if (bottonNeighbor <= greaterThan300)
		{	
			nList["bottom"] = [blankX, bottonNeighbor]
			//nList.push(blankX);
			//nList.push(bottonNeighbor);
		}

		leftNeighbor = blankX - 100;
		if (leftNeighbor >= lessThanZero)
		{
			nList["left"] = [leftNeighbor, blankY]
			//nList.push(leftNeighbor);
			//nList.push(blankY);
		}

		rightNeighbor = blankX + 100;
		if (rightNeighbor <= greaterThan300)
		{
			nList["right"] = [rightNeighbor, blankY]
			//nList.push(rightNeighbor);
			//nList.push(blankY);
		}


		for (var key in nList)
		{
			var neighbor = nList[key];
			if (neighbor[0] == blankX && neighbor[1] == blankY)
			{
				console.log("X Value : " + neighbor[0] + " blankX Value:" + blankX);
				console.log("Y Value : " + neighbor[1] + " blankY Value:" + blankY);


			}
			//console.log(neighbor[0]);
		}

	}

	
	
		

});