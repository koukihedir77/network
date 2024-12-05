const ConsomationAPI=async()=>{
    try {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tunis,tn&APPID=584b4a7a31e71c8645f53d22222a0184')
    const data = await res.json


    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tunis,tn&APPID=584b4a7a31e71c8645f53d22222a0184')
    const data = res.data



    console.log(data.main.temp)
var tempSpan = document.getElementById('temp')

tempSpan.innerText = Math.round(data.main.tem-273,15)


var city = document.querySelector('.city')
city.innerText = data.name

var currentDate = new date ()
var currentDay = currentDate.getdate()
var currentYear = currentDate.getFullYear()

const months = [
    "January","February","March","April","May","June","July","August","september","Octobre","Novembre","Decembre"
];

var currentMonth = months[currentDate.getMonth()]

var date = document.querySelector('.date')
date.innerText = `${currentDay} ${currentMonth} ${currentYear}`


    
    } catch (error) {
        console.log(error)
    }
}  


ConsomationAPI()