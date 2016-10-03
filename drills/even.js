//EVEN 
//Use: to find out if a number is even or odd, and then asks the user if they want to run the program again.
//version 1.2 - testing.  Stable.



$(document).ready(function() {

	//click here to begin popups
	$("#launch").click(function() {
	playNow = true;
	evenStart = 0;
	
	//start of actualy Even application
	do { 				//while you still want to play/run app

		do {			//keep looping until you get a positive integer
			if ( evenStart == 0 ) {			//only show welcome message on first run
				keyboardInput = window.prompt('Welcome to Even, please enter a number that\'s larger than zero to find out of it is even or odd, then press OK.');
				evenStart++;		//immediately increment so it loops through the other 2 options if non-positive int
				if ( keyboardInput == null || evenStart == 5 ) {		//if user presses "Cancel"
					alert("You're hopeless...");
			evenStart = 0;
					return;
				};

				//if user inputs words or symbols
			} else if ( isNaN(keyboardInput) ) {
				evenStart++; 
				keyboardInput = window.prompt('Please enter a number, nothing else:');
				if ( keyboardInput == null || evenStart == 5 ) {
					alert("You're hopeless...");
			evenStart = 0;
					return;
				};

				//if user inputs 0 or -1/neg int
			} else if ( keyboardInput <= 0 ) {
				evenStart++; 
				keyboardInput = window.prompt('The number must be larger than zero:');
				if ( keyboardInput == null || evenStart == 5 ) {
					alert("You're hopeless...");
			evenStart = 0;
					return;
				};

				//funny message if a user just cannot get it
			};	

		//keep looping until you get a positive integer
		} while ( isNaN(keyboardInput) || keyboardInput <= 0 );

		if ( evenStart == 5 ) {
			alert("You're hopeless...");
			evenStart = 0;
		};

		//math to figure out if there is a remainder.  ex: 10 / 2 = 5.0, no remainder, evenly devided in two.
		isODD = ( keyboardInput % 2 );

		
		if ( isODD == 0) {		//even modulus result
			playNow = window.confirm("This number (" + keyboardInput + ") is Even.  Do you need to work with any other numbers?");
			evenStart = 0;
			
		} else if (isODD == 1) {		//odd modulus result
			playNow = window.confirm("This number (" + keyboardInput + ") is Odd.  Do you need to work with any other numbers?");
			evenStart = 0;
			
		} else {		//just in case... never seen it popup yet
			alert("ERROR");
		};
				
} while (playNow == true);
//end click-launch function
//extra space before close of click function
	});
 });
