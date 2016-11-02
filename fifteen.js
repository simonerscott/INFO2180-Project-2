$(document).ready(function()
{
	puzzlePieces = $("#puzzlearea div");
	var counter = 1;
	var blankX = "300px"; //Left Coordinates for empty space
	var blankY = "300px"; //Right Coordinates for empty space
	var tempX = "";
	var tempY = "";
	// var list = [];
	var nList = new Object();
	var found = false;
	var button = $("#control input[type=button]"); // for Shuffle button

	

	//button.click(selectPicture);
	selectPicture();
	
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
		sampleImg = "url('background.jpg')";

		for (var i = 0; i < puzzlePieces.length; i++)
		{
			
			puzzlePieces[i].style.backgroundImage = img;
			puzzlePieces[i].className = "puzzlepiece";
			puzzlePieces.id = counter;
			$(puzzlePieces[i]).attr("id",counter);
			setBackground(i, puzzlePieces);
			// list[i] = puzzlePieces.id; 
			 counter++;
		}
		$(puzzlePieces[15]).attr("id", 0);
		//list[15] = 0;
	}
	
	
	 

			

	// Function created to place puzzle pieces in the correct order
	function setBackground(i, array)
	{		
		puzzlePieces[i].style.left = (i % 4 * 100) +'px';
		puzzlePieces[i].style.top = (parseInt(i/4)*100) + 'px'; // recalculate y coordinate it is assuming the value the y 
		puzzlePieces[i].style.backgroundPosition = '-' + puzzlePieces[i].style.left + ' ' + '-' + puzzlePieces[i].style.top;
    }

    
	

	function shuffle()
	{

	}

	
	
	//
	puzzlePieces.click(function()
	{	
		if (validMove)
		{
			var x =  $(this).css("left");
			var y =  $(this).css("top");
			$(this).css("left", blankX); // setting the offset().left to equal empty space x-coordinates
			$(this).css("top", blankY); // setting the offset().top to equal empty space y-coordinates
			blankX = x;
			blankY = y;
		}
		
	});

	
	/*puzzlePieces.mouseover(function()
	{
		console.log($(this));
		if (validMove())
		{
			$(this).addClass("movablepiece");
		}
		else
		{
			$(this).removeClass("movablepiece");
		}

	});*/
	

	puzzlePieces.mouseover(validMove);

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


		topNeighbor = blankY - 100;
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
			if (neighbor[0] == x && neighbor[1] == y)
			{
				console.log(found);
				found = true;
				return found;
			}
		}
	}
	

		

});