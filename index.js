const letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const char = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let characterSet = []
let randomNumber
let leftPasswordEl = document.getElementById("leftPassword-p")
let rightPasswordEl = document.getElementById("rightPassword-p")
let isNum = document.getElementById("num-checkbox")
let isChar = document.getElementById("char-checkbox")
let alertEl = document.getElementById("alertMsg")

//password length slider
let passLenRange = document.getElementById("passwordLen-range")
let passLenP = document.getElementById("passwordLen-p")
passLenP.textContent = passLenRange.value
passLenRange.oninput = function() {
  passLenP.textContent = passLenRange.value
  getStatus()
}

function resetPasswordField()
{
  leftPasswordEl.textContent = null
  rightPasswordEl.textContent = null
}

function getStatus() 
{
  characterSet = []
  if(isNum.checked === true && isChar.checked === true )
  {
      characterSet = letter.concat(number, char)
      console.log(characterSet)
  }
  else if (isNum.checked === true && isChar.checked === false)
  {
      characterSet = letter.concat(number)
      console.log(characterSet)
  }
  else if (isNum.checked === false && isChar.checked === true)
  {
      characterSet = letter.concat(char)
      console.log(characterSet)
  }
  else
  {
      characterSet = letter
      console.log(characterSet)
  }
  randomPassGenerator()
}

function randomPassGenerator() 
{
  resetPasswordField()
  for(let i = 0; i<(passLenRange.value); i++)
  {
      randomNumber = Math.floor( Math.random() * characterSet.length)
      leftPasswordEl.textContent += characterSet[randomNumber]
  }
  for(let i = 0; i<(passLenRange.value); i++)
  {
      randomNumber = Math.floor( Math.random() * characterSet.length)
      rightPasswordEl.textContent += characterSet[randomNumber]
  }
}

function copyLeftPassword()
{
  navigator.clipboard.writeText(leftPasswordEl.textContent);
  alertEl.setAttribute("style","color:#55F991")
  alertEl.textContent = "Copied to clipboard !!"
  setTimeout(function() {
    alertEl.setAttribute("style","color:#D5D4D8")
    alertEl.textContent = "Click on password to copy"
  }, 2000)
}

function copyRightPassword()
{
  navigator.clipboard.writeText(rightPasswordEl.textContent);
  alertEl.setAttribute("style","color:#55F991")
  alertEl.textContent = "Copied to clipboard !!"
  setTimeout(function() {
    alertEl.setAttribute("style","color:#D5D4D8")
    alertEl.textContent = "Click on password to copy"
  }, 2000)
}