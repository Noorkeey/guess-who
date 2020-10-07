console.log('Here are all the available people:', people);

let randomPerson = {}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function addClass(className, id) {
	$(`#${id}`).addClass(className)

	setTimeout(() => {
		$(`#${id}`).removeClass(className)
	}, 2000)
}

function updateGame() {
	randomPerson = people[randomNumber(0, people.length - 1)]
	$('#prompt').html(`Guess who? Pick ${randomPerson.name}`)
	console.log('Random person = ' + randomPerson.name)
}

$(document).ready(function(){
	updateGame()

	people.forEach(person => {
		let html = `<img id="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">`
		$('#images').append(html)
	})

	$('img').click(function() {
		let id = $(this).attr('id')

		if(id == randomPerson.name) {
			//addClass('success', id)
			alert('You guessed it right! Click OK to play again.')
			updateGame()

		} else {
			//addClass('error', id)
			alert('Ops! Try again.')
		}

	})
});
