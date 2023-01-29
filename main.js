fetch('http://numbersapi.com/random/math?json')
  .then(response => response.json())
  .then(data => {console.log(data.text)
    document.querySelector('#p').innerText = data.text
  })

  fetch('http://numbersapi.com/random/trivia?json')
  .then(response => response.json())
  .then(data => {console.log(data.text)
    document.querySelector('#p2').innerText = data.text
  })
  
  fetch('https://api.math.tools/numbers/nod')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.querySelector('#number').innerHTML = `<mark>${data.contents.nod.numbers.number}</mark>`
      
    document.querySelector('#nominal').innerText = data.contents.nod.numbers.names.nominal.display
    document.querySelector('#cardinal').innerText = data.contents.nod.numbers.names.cardinal.display
    document.querySelector('#ordinal').innerText = data.contents.nod.numbers.names.ordinal.display
    
    document.querySelector('#Roman').innerHTML = data.contents.nod.numbers.numerals.roman.display 
    document.querySelector('#egyptian').innerHTML = data.contents.nod.numbers.numerals.egyptian.display 
    document.querySelector('#chinese').innerHTML = data.contents.nod.numbers.numerals.chinese.display

    //document.querySelector('#reverse').innerHTML = data.contents.nod.numbers.recreational.reverse.display
    document.querySelector('#digitssum').innerHTML = data.contents.nod.numbers.recreational.digitssum.display
    document.querySelector('#noofdigits').innerHTML = data.contents.nod.numbers.recreational.noofdigits.display
})

