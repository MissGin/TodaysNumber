// fetch('http://numbersapi.com/random/math?json')
//   .then(response => response.json())
//   .then(data => {console.log(data.text)
//     document.querySelector('#p').innerText = data.text
//   })

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd45900726msh5adf0f5eab08713p173487jsnae5ddad7eca7',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

fetch('https://numbersapi.p.rapidapi.com/random/math?min=10&max=20&fragment=true&json=true', options)
	.then(response => response.json())
	.then(data=> { console.log(data)
        document.querySelector('#p').innerText = data.number + ' is ' + data.text
    })
	.catch(err => console.error(err));

fetch('https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true', options)
        .then(response => response.json())
        .then(data => {console.log(data)
            document.querySelector('#p2').innerText = data.number + ' is ' + data.text
          })
        .catch(err => console.error(err));

//   fetch('http://numbersapi.com/random/trivia?json')
//   .then(response => response.json())
//   .then(data => {console.log(data.text)
//     document.querySelector('#p2').innerText = data.text
//   })
  
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

