//EVEN 
//Use: to find out if a number is even or odd, and then asks the user if they want to run the program again.

//var keyboardInput = NaN;
playNow = true;
evenStart = 0

do {

		do {
			if ( evenStart == 0 ) {
				keyboardInput = window.prompt('Welcome to Even, please enter a number that\'s larger than zero to find out of it is even or odd, then press OK.');
				evenStart++;
			} else if ( isNaN(keyboardInput) ) {keyboardInput = window.prompt('Please enter a number, nothing else:');
			}	else if ( keyboardInput <= 0 ) {keyboardInput = window.prompt('The number must be larger than zero:');
			};
		} while ( isNaN(keyboardInput) || keyboardInput <= 0 );

		var toBeProcessed = keyboardInput;
		isODD = ( toBeProcessed % 2 );
		firstRun = false;

		if ( isODD == 0) {
			
			playNow = window.confirm("This number (" + keyboardInput + ") is Even.  Do you need to work with any other numbers?");
			
		} else if (isODD == 1) {
			
			playNow = window.confirm("This number (" + keyboardInput + ") is Odd.  Do you need to work with any other numbers?");
			evenStart = 0;
			
		} else {alert("ERROR");
		};
		
} while (playNow == true);








