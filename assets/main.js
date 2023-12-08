function isPalindrome(str) {
  const cleanedStr = removeNonAlphanumeric(str).toLowerCase ()
  return cleanedStr === reverseStr(cleanedStr)
}

function removeNonAlphanumeric(str) {
  const alphanumericChars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  return str.split('').filter(char => alphanumericChars.includes(char.toLowerCase ())).join('')
}

function reverseStr(str) {
  return str.split('').reverse ().join('')
}

function checkpalindrome () {
  const inputString = document.getElementById('input-string').value
  const resultElement = document.getElementById('result')

  if (inputString.trim () === '') {
    resultElement.textContent = 'Please enter a valid string.'
    return
  }

  if (isPalindrome(inputString)) {
    resultElement.textContent = `Yayy 😁 "${inputString}" is a palindrome!`
  } else {
    resultElement.textContent = `Oops 😔 "${inputString}" is not a palindrome.`
  }

  resultElement.classList.add('show')

  document.getElementById('container').style.transform = 'scale(1.02)'
  setTimeout(() => {
    document.getElementById('container').style.transform = 'scale(1)'
  }, 300);
}
