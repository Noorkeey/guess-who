console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  console.log('jquery is loaded');
  for (people of people) {
    $('#guessWho').append(`

     <div>

     <img src= "src="https://github.com/${people.githubUsername}.png?size=250" alt="Profile image of Norbu"></img>

     </div>

     `);
  }
}
