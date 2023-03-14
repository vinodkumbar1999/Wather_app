let city = document.getElementById("city")
let country = document.getElementById("country")
let temp = document.getElementById("temp")
let user_ip=document.getElementById("user_ip")

let checkTemp = async() =>{
    let cityvalue = user_ip.value
    if (cityvalue == "") {
        alert("Please enter city name before search")
    } else {
       let response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
       let data = await response.json()
       city.textContent=data.name
       country.textContent=data.sys.country
       temp.textContent=data.main.temp
    
    }
}