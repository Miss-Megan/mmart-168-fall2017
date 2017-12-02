/*const getData = () => {
    fetch('someURL')
      .then(blob => blob.json())
      .then(response => {
          console.log(response)
      })
}*/



const setStuffUp = () => {
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1

    document.getElementById('perspective').value = 'east'
    document.getElementById('month').value = month
    document.getElementById('day').value = day
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
    document.getElementById('loading').className = "show"
    fetch(url).then(function(response) {
        return response.blob();
    }).then(function(myBlob) {
        document.getElementById('loading').className = "hide"
        var objectURL = URL.createObjectURL(myBlob);
        document.getElementById('earth').src = objectURL;
    });
}

const showMoon = () => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const direction = document.getElementById('perspective').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const url = 'http://api.usno.navy.mil/imagery/moon.png?view=' +
        direction + '&date=' + month + '/' + day + '/2017&time=12:00PM'

        document.getElementById('loading').className = "show"
        fetch(url).then(function(response) {
            return response.blob();
        }).then(function(myBlob) {
            document.getElementById('loading').className = "hide"
            var objectURL = URL.createObjectURL(myBlob);
            document.getElementById('moon').src = objectURL;
        });
}

const showMars = () => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const direction = document.getElementById('perspective').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const url = 'http://api.usno.navy.mil/imagery/mars.png?view=' +
        direction + '&date=' + month + '/' + day + '/2017&time=12:00PM'

        document.getElementById('loading').className = "show"
        fetch(url).then(function(response) {
            return response.blob();
        }).then(function(myBlob) {
            document.getElementById('loading').className = "hide"
            var objectURL = URL.createObjectURL(myBlob);
            document.getElementById('mars').src = objectURL;
        });
}

const showMercury = () => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const direction = document.getElementById('perspective').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const url = 'http://api.usno.navy.mil/imagery/mercury.png?view=' +
        direction + '&date=' + month + '/' + day + '/2017&time=12:00PM'

        document.getElementById('loading').className = "show"
        fetch(url).then(function(response) {
            return response.blob();
        }).then(function(myBlob) {
            document.getElementById('loading').className = "hide"
            var objectURL = URL.createObjectURL(myBlob);
            document.getElementById('mercury').src = objectURL;
        });
}

const showVenus = () => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const direction = document.getElementById('perspective').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const url = 'http://api.usno.navy.mil/imagery/venus-radar.png?view=' +
        direction + '&date=' + month + '/' + day + '/2017&time=12:00PM'

        document.getElementById('loading').className = "show"
        fetch(url).then(function(response) {
            return response.blob();
        }).then(function(myBlob) {
            document.getElementById('loading').className = "hide"
            var objectURL = URL.createObjectURL(myBlob);
            document.getElementById('venus').src = objectURL;
        });
}

const showJupiter = () => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const direction = document.getElementById('perspective').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const url = 'http://api.usno.navy.mil/imagery/jupiter.png?view=' +
        direction + '&date=' + month + '/' + day + '/2017&time=12:00PM'

        document.getElementById('loading').className = "show"
        fetch(url).then(function(response) {
            return response.blob();
        }).then(function(myBlob) {
            document.getElementById('loading').className = "hide"
            var objectURL = URL.createObjectURL(myBlob);
            document.getElementById('jupiter').src = objectURL;
        });
}

const showEuropa = () => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const direction = document.getElementById('perspective').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const url = 'http://api.usno.navy.mil/imagery/europa.png?view=' +
        direction + '&date=' + month + '/' + day + '/2017&time=12:00PM'

        document.getElementById('loading').className = "show"
        fetch(url).then(function(response) {
            return response.blob();
        }).then(function(myBlob) {
            document.getElementById('loading').className = "hide"
            var objectURL = URL.createObjectURL(myBlob);
            document.getElementById('europa').src = objectURL;
        });
}

const showGanymede = () => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const direction = document.getElementById('perspective').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const url = 'http://api.usno.navy.mil/imagery/ganymede.png?view=' +
        direction + '&date=' + month + '/' + day + '/2017&time=12:00PM'

        document.getElementById('loading').className = "show"
        fetch(url).then(function(response) {
            return response.blob();
        }).then(function(myBlob) {
            document.getElementById('loading').className = "hide"
            var objectURL = URL.createObjectURL(myBlob);
            document.getElementById('ganymede').src = objectURL;
        });
}

const showIo = () => {
    /*
      1.  Go out and see which menu option is selected, get its value, and store it
          in the variable "direction"
      2.  Update the image URL and replace the "view" parameter with the direction
          that the user asked for
    */
    const direction = document.getElementById('perspective').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const url = 'http://api.usno.navy.mil/imagery/io.png?view=' +
        direction + '&date=' + month + '/' + day + '/2017&time=12:00PM'

        document.getElementById('loading').className = "show"
        fetch(url).then(function(response) {
            return response.blob();
        }).then(function(myBlob) {
            document.getElementById('loading').className = "hide"
            var objectURL = URL.createObjectURL(myBlob);
            document.getElementById('io').src = objectURL;
        });
}

setStuffUp()

//changeEarth()
