//The Extra Feature that was added to the game was Multiple Background

$(document).ready(function()
{
	puzzlePieces = $("#puzzlearea div");
	var counter = 1;
	var blankX = "300px"; //Left Coordinates for empty space
	var blankY = "300px"; //Right Coordinates for empty space
	var tempX = "";
	var tempY = "";
	var list = [];
	var nList = new Object(); //a dictionary of the empty space's neighbor
	var mList = new Array ();
	var found = false;
	var button = $("#control input[type=button]"); // for Shuffle button

	
		
	selectPicture(); // Calling the selectPicture() function
	
	function selectPicture()
	{
		//var button = $("#control");
		var pictureChoice = prompt("Please Enter a Picture Choice by Typing a Letter"+'\n' + "A. Popeye" + '\n' + "B. Tinkerbell" + '\n' 
        + "C. Tom and Jerry"+ '\n' + "D. Tweety Bird"+ '\n');

		pictureChoice = pictureChoice.toUpperCase();

        switch (pictureChoice)
        {
        	case "A":
        		var a = "url('popeye.png')";
        		backgroundImage(a);
        		break;

        	case "B":
        		var b = "url('tinkerbell.jpg')";
        		backgroundImage(b);
        		break;

        	case "C":
        		var c = "url('tom-and-jerry.png')";
        		backgroundImage(c);
        		break;

        	case "D":
        		var d = "url('tweetybird.png')";
        		backgroundImage(d);
        		break;

        	default:
        		console.log("Please Try Again");
        		break;
        }
	}
	
	

	//for loop to apply background image
	function backgroundImage(img)
	{

		for (var i = 0; i < puzzlePieces.length; i++)
		{
			
			puzzlePieces[i].style.backgroundImage = img;
			puzzlePieces[i].className = "puzzlepiece";
			puzzlePieces.id = counter;
			$(puzzlePieces[i]).attr("id", counter);
			setBackground(i);
			list[i] = puzzlePieces.id; //Uncomment so that shuffle can take place
			counter++;
		}

		$(puzzlePieces[15]).attr("id", 0);

		list[15] = 0; //Uncomment so that shuffle can take place
	}
	

			
	// Function created to place puzzle pieces in the correct order
	function setBackground(i)
	{		
		puzzlePieces[i].style.left = (i % 4 * 100) +'px';
		puzzlePieces[i].style.top = (parseInt(i/4)*100) + 'px'; 
		puzzlePieces[i].style.backgroundPosition = '-' + puzzlePieces[i].style.left + ' ' + '-' + puzzlePieces[i].style.top;
    }
    
	

	//Shuffle the puzzles when the suffle button is clicked
	function shuffle()
	{

	}



	
	//To move puzzle piece to empty space
	function movePiece()
	{
		
		if ($(this).hasClass("puzzlepiece movablepiece"))//Puzzle piece should only move when it is a valid move
		{
			var x =  $(this).css("left");
			var y =  $(this).css("top");
			$(this).css("left", blankX); // setting the offset().left to equal empty space x-coordinates
			$(this).css("top", blankY); // setting the offset().top to equal empty space y-coordinates
			blankX = x;
			blankY = y;
		}
		else
		{
			$(this).removeClass("movablepiece");
		}

	}

	

	//Calling the movePiece function on the puzzle pieces
	puzzlePieces.click(movePiece);

	

	//Apply movablepiece class to the valid puzzle pieces 	
	puzzlePieces.mouseover(function() 
	{	
		var ID = $(this).attr("id");
		ID = parseInt(ID);
		index = $.inArray(ID, mList);
		$(".movablepiece").removeClass("movablepiece");
		if  (index !== -1)
		{
			$(this).addClass("movablepiece");
		}				
	});
	


	//Call the validMove on puzzlePieces
	puzzlePieces.mouseover(validMove); 


	/*Function that determines if a move is valid by keeping track of the 
	  empty space neighbors (ie storing all the values in nList) and returns 
	  true if the puzzle piece that is being hovered over is in nList */
	function validMove()
	{
		var lessThanZero = 0;
		var greaterThan300 = 300;
		var topNeighbor;
		var bottonNeighbor;
		var leftNeighbor;
		var rightNeighbor;
		var neighborList;

		var x =  $(this).css("left");
		var y =  $(this).css("top");
		x = parseInt(x);
		y = parseInt(y);
		blankY = parseInt(blankY);
		blankX = parseInt(blankX);


		//Empty the list before other neighbor coordinates are added
		nList = [];
		mList = [];

		topNeighbor = blankY - 100;
		if (topNeighbor >= lessThanZero)
		{
			nList["top"] = [blankX, topNeighbor];
		}

		bottonNeighbor = blankY + 100;
		if (bottonNeighbor <= greaterThan300)
		{	
			nList["bottom"] = [blankX, bottonNeighbor];
		}

		leftNeighbor = blankX - 100;
		if (leftNeighbor >= lessThanZero)
		{
			nList["left"] = [leftNeighbor, blankY];
		}

		rightNeighbor = blankX + 100;
		if (rightNeighbor <= greaterThan300)
		{
			nList["right"] = [rightNeighbor, blankY];
		}


		/*Going to through the empty space neighbor list (nList) and 
		   comparing it's x & y with the coordinates the mouse is over*/
		for (var key in nList)
		{
			var neighbor = nList[key];			
			if ((neighbor[0] == x) && (neighbor[1] == y))
			{
				found = true;
				return found;
			}

			/*Calling the findID to return all the Ids of the 
			  empty space neighbors*/
			findID(neighbor[0], neighbor[1]);
		}
	}



	/* This function definition takes the x & y coordinates,finds
	    the cooresponding ID then pushes the ID in the mList array*/
	function findID(x, y)
	{
		for (var i = 0; i < puzzlePieces.length; i++)
		{
			var iX = $(puzzlePieces[i]).css("left"); 
			var iY = $(puzzlePieces[i]).css("top");
			iX = parseInt(iX);
			iY = parseInt(iY);
			if ((iX === x) && (iY === y))
			{
				var ID = $(puzzlePieces[i]).attr("id");
				ID = parseInt(ID);
				mList.push(ID);
			}
		}
	}


});