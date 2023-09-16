const scriptURL = 'https://script.google.com/macros/s/AKfycbwFUI1ZHTv46JeYSgao5EfTg4vLpSjHshPPTspFqrgYkEqKpnGp2DycIjrrUW4HEznUcw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then()
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  setTimeout(function() {
      window.location.href = "./thank-you/thank_you.html"; // Replace with your thank you page's URL
  }, 1000); 
});