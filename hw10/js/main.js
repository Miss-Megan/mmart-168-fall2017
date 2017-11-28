const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
  //url that asks the question you want to ask. In this case, give me a list of
  //Bart stations
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
          //here is where you do something cool with code
            json = json.root
            console.log(json)
            //console.log(json)
            console.log(json.stations.station)
            json.stations.station.forEach((station) => {
//1. Create the element you want to add to the DOM
          const option = document.createElement("option")
//2. Assign data to some part of the element
          option.innerHTML = station.name
          option.value = station.abbr
//3. Append the newly created element to the DOM (just somewhere)
          document.getElementById('station_list').appendChild(option)
    })

// How do i use the data returned from Bart to populate my dropdown menu?

        /*    // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
            const option1 = document.createElement("option")
            option1.value = 'DBRK'
            option1.innerHTML = 'Downtown Berkeley'
            document.getElementById('station_list').appendChild(option1) */
        })
        .catch((err) => {
            console.log(err)
        })
}

makeStationList()


const getArrivalTimes = () => {
  //go out and find the element with ID station list and store it in a vaiable called station list
    const stationList = document.getElementById('station_list')
    const bartStationCode = stationList.value
    //print to screen:
console.log(bartStationCode)
console.log('Selected Station Code:', bartStationCode)
let url = 'https://api.bart.gov/api/etd.aspx?key=MW9S-E7SL-26DU-VV8V&cmd=etd&orig=' +
bartStationCode + '&json=y'

fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
          json = json.root

          //1. clear out existing element
          document.getElementById('results').innerHTML = ' '

          //2. Add header that shows selected station name
          const header = document.createElement('h2')
          header.innerHTML = json.station[0].name
          document.getElementById('results').appendChild(header)

// Log all of the train lines:
          json.station[0].etd.forEach((line) => {
            console.log('Line:', line)
            const trainLine = document.createElement("p")
            trainLine.innerHTML = line.destination + ': Platform #' + line.estimate[0].platform
            document.getElementById('results').appendChild(trainLine)

            //4. log all of the estimates for each train line:
            line.estimate.forEach((estimate) => {
              console.log('Estimate:', estimate)

              //colored square and text are in same element. One option
              // is to separate the two into two different elements:

              //First element is just an empty span tag with some style:
              const square = document.createElement("i")
              square.className = "fa fa-train fa-3x"
              square.style.color = estimate.hexcolor
              document.getElementById('results').appendChild(square)

              //Second element is the label
              const departureTime = document.createElement("span")
              departureTime.innerHTML = estimate.minutes + ' (' + estimate.direction + ')'
              document.getElementById('results').appendChild(departureTime)
            })
          })
        })
}
    /*    .catch((err) => {
            console.log(err)
        })
}

        /*

            const results = document.getElementById('results')
            results.innerHTML = ''
            json.station = json.station[0]
            if (!Array.isArray(json.station.etd)) {
                json.station.etd = [ json.station.etd ]
            }
            json.station.etd.forEach(trainLine => {
                if (!Array.isArray(trainLine.estimate)) {
                    trainLine.estimate = [ trainLine.estimate ]
                }
                // PART III.B.2: Instead of printing this info to the console,
                // output it to the DOM
                console.log('------------------------------------------------------------------------')
                console.log('FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase())
                console.log('TO:', trainLine.destination.toUpperCase())
                console.log('------------------------------------------------------------------------')
                trainLine.estimate.forEach(estimate => {
                    // PART III.B.2. Instead of printing this info to the console,
                    // output it to the DOM
                    console.log(
                        ' * Direction:', estimate.direction,
                        ', Leaving: ', estimate.minutes,
                        ', Color: ', estimate.hexcolor,
                        ', Platform:', estimate.platform,
                        ', Delay?:', estimate.delay
                    )
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
*/
