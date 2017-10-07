

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
	allNames = femaleNames.concat(maleNames),
	theButton = document.getElementById('the-button'),
	answer = true;


console.log(allNames);

theButton.addEventListener('click', startAdding);

function startAdding() {

	answer = true;
	keepAdding();
} 


function keepAdding() {


	while (answer) {

		var newName = prompt('Please enter a new name');

		if (newName === null) {	 // w wypadku anulowania prompta zwraca on wartosc null, 
								 // ktora sie dopisuje do tablicy, w tym wypadku opuszczamy fcję   
			return;

		}	else if ( /^\s*$/.test(newName) ) {	//  /^\s*$/ is the regex(RegExp) for empty string or string with only spaces 
										//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

			alert('Name cannot be empty!');
			answer = confirm('Do you wish to add a new name?');			

		}	else if (allNames.indexOf(newName) === -1) {		// jesli newName nie ma w tablicy to zwracana jest wartosc -1, tak dziala indexOf

			allNames.push(newName);
			console.log('The name ' + '"' + newName + '"' + ' has been added to the array. The array\'s total length is now ' + allNames.length + '.');
			answer = confirm('Do you wish to add a new name?');

		}	else{

			alert('The array already contains name ' + '"' + newName + '"' + '.');
			answer = confirm('Do you wish to add a new name?');
			
		}
	}
}

