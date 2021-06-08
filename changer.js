const hexColor = document.querySelector("#color-changer h1");
const sixNumbers = document.querySelector("#color-changer h1 span");
const clickButtion = document.querySelector("#color-changer button");


  function hexGenerator() {
    const hexNumbers = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'A',
      'B',
      'C',
      'D',
      'E',
      'F'
    ];
  
    let result = "#";
    
    for (var i = 0; i < 6; i += 1) {
      const randomIndex = Math.floor(Math.random() * hexNumbers.length);
      result += hexNumbers[randomIndex];
    }
    
    return result;
  }

  document.body.style.backgroundColor = hexGenerator();
  sixNumbers.innerText = hexGenerator();

  function changeColor(){
    document.body.style.backgroundColor = hexGenerator();
    sixNumbers.innerText = hexGenerator();
  }
  
  clickButtion.addEventListener("click",changeColor)