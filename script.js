var wow = document.getElementById("title")
setInterval(function(){
    const strings = ["Hai!","Hallo!","Hejo!"];

const randomIndex = Math.floor(Math.random() * strings.length);
const randomString = strings[randomIndex];

wow.textContent = randomString
},2000)

const switchInput = document.getElementById('mySwitch');

  switchInput.addEventListener('change', () => {
    if (switchInput.checked) {
     

      // Add rainbow animation class to body (or all text elements)
      document.body.classList.add('rainbow-text');

    } else {
      // Remove rainbow animation class
      document.body.classList.remove('rainbow-text');
    }
  });
