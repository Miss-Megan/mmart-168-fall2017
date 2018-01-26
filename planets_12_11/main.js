const planetPix = () => {
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1

    document.getElementById('perspective').value = 'east'
    document.getElementById('month').value = month
    document.getElementById('day').value = day

    document.querySelectorAll('img').forEach(img => {
        img.style.display = 'none'
    })

}

const toggleLoadingIcon = (planetName) => {
    document.querySelector('.' + planetName + ' .loading').classList.toggle('hide')
}

const showPlanet = (planetName) => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const url = 'http://api.usno.navy.mil/imagery/' + planetName + '.png?date=' +
                    month + '/' + day + '/2017&time=12:00PM'

        toggleLoadingIcon(planetName)
        document.getElementById(planetName).style.display = 'none'
        fetch(url).then(function(response) {
            return response.blob()
        }).then(function(showIt) {
            toggleLoadingIcon(planetName)
            var objectURL = URL.createObjectURL(showIt);
            document.getElementById(planetName).src = objectURL;
            document.getElementById(planetName).style.display = 'block'
        });
}

const showEarth = () => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const direction = document.getElementById('perspective').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value



    const url = 'http://api.usno.navy.mil/imagery/earth.png?view=' +
    direction + '&date=' + month + '/' + day + '/2017&time=12:00PM'
    toggleLoadingIcon('earth')
    document.getElementById('earth').style.display = 'hide'
    fetch(url).then(function(response) {
        return response.blob();
    }).then(function(showIt) {
        toggleLoadingIcon('earth')
        var objectURL = URL.createObjectURL(showIt);
        document.getElementById('earth').src = objectURL;
        document.getElementById('earth').style.display = 'block'
    })
}

const FigCaption = document.getElementById('figcaption')


const showMoon = () => {
    showPlanet('moon')
}

const showMars = () => {
    showPlanet('mars')
}

const showMercury = () => {
    showPlanet('mercury')
}

const showVenus = () => {
  showPlanet('venus')
}

const showJupiter = () => {
    showPlanet('jupiter')
}

const showEuropa = () => {
    showPlanet('europa')
}

const showGanymede = () => {
    showPlanet('ganymede')
}

const showIo = () => {
    showPlanet('io')
}

const showAllPlanets = () => {
    showEarth()
    showMoon()
    showMars()
    showMercury()
    showMars()
    showJupiter()
    showEuropa()
    showGanymede()
    showIo()
    showVenus()
}


planetPix()
