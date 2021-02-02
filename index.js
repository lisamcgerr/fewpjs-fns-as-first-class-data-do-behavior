/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

handleClick(e)
/* End Given Code, don't edit above here...*/

function greet(time) {
  if (parseInt(time, 10) < 12) {return 'Good Morning'}
  if (parseInt(time, 10) > 17 ) {return 'Good Evening'}
  return 'Good Afternoon'
}

function displayMessage(string) {
document.getElementById('greeting').innerText = string
}