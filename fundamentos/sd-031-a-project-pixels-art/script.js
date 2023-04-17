window.onload = () => {
    let palette = document.getElementsByClassName('color')
    let paletteColors = []
    let storedColors = localStorage.getItem('colorPalette')
    if(storedColors)
    {
        paletteColors = JSON.parse(storedColors)
    }
    else
    {
        paletteColors[0] = 'black'
        paletteColors[1] = 'blue'
        paletteColors[2] = 'yellow'
        paletteColors[3] = 'green'
    }
    for(index = 0; index < palette.length; index++)
    {
        palette[index].style.backgroundColor = paletteColors[index]
    }
    let buttonRandomColor = document.getElementById('button-random-color')
    buttonRandomColor.addEventListener("click", (event) => {
        for(index = 1; index<palette.length; index++)
        {
            let randomnum1 = randomNumberInterval(0, 254)
            let randomnum2 = randomNumberInterval(0, 254)
            let randomnum3 = randomNumberInterval(0, 254)
            let cor = `rgb(${randomnum1}, ${randomnum2}, ${randomnum3})`
            paletteColors[index] = cor
            palette[index].style.backgroundColor = cor
        }
        localStorage.setItem('colorPalette', JSON.stringify(paletteColors))
    })
    let quadro = document.getElementById('pixel-board')
    for(index = 0; index < 25; index++)
    {
        let pixel = document.createElement('div')
        pixel.style.backgroundColor = 'white'
        pixel.classList.add('pixel')
        quadro.appendChild(pixel)
    }
    let pixels = document.getElementsByClassName('pixel')
    for(index = 0; index < 25; index++)
    {
        pixels[index].addEventListener('click', paint)
    }
    palette[0].classList.add('selected')
    palette[0].addEventListener('click', () => {
        let selected = document.getElementsByClassName('selected')
        selected[0].classList.remove('selected')
        palette[0].classList.add('selected')
    })
    palette[1].addEventListener('click', () => {
        let selected = document.getElementsByClassName('selected')
        selected[0].classList.remove('selected')
        palette[1].classList.add('selected')
    })
    palette[2].addEventListener('click', () => {
        let selected = document.getElementsByClassName('selected')
        selected[0].classList.remove('selected')
        palette[2].classList.add('selected')
    })
    palette[3].addEventListener('click', () => {
        let selected = document.getElementsByClassName('selected')
        selected[0].classList.remove('selected')
        palette[3].classList.add('selected')
    })
    let frame = []
    let storedFrame = localStorage.getItem('pixelBoard')
    if(storedFrame)
    {
        frame = JSON.parse(storedFrame)
    }
    else
    {
        for(let index = 0; index < 25; index++)
        {
            frame[index] = 'white'
        }
    }
    for(index = 0; index < pixels.length; index++)
    {
        pixels[index].style.backgroundColor = frame[index]
    }
    function paint(event)
    {
        let color = document.getElementsByClassName('selected')[0].style.backgroundColor
        event.target.style.backgroundColor = color
        for(index = 0; index < 25; index++)
        {
            frame[index] = pixels[index].style.backgroundColor
        }
        localStorage.setItem('pixelBoard', JSON.stringify(frame))

    }
    let limpar = document.getElementById('clear-board')
    limpar.addEventListener('click', () => {
        for(index = 0; index < 25; index++)
        {
            pixels[index].style.backgroundColor = 'white'
            frame[index] = 'white'
        }
        localStorage.setItem('pixelBoard', JSON.stringify(frame))
    })
    
  }
  function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }