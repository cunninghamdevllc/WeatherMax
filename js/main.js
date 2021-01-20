let button = document.getElementById('button-addon2');


let url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
let inputValue = document.querySelector('.inputValue');
let api ="&appid=faa7157ed80b7221cc4c56247358bf18";
let units = '&units=I';


let cityName = document.querySelector('#cityName');
let mainTemp = document.querySelector('#mainTemp');
let hiTemp = document.querySelector('#HiTemp');
let loTemp = document.querySelector('#LoTemp');
let flTemp = document.querySelector('#flTemp');

let windSpd = document.querySelector('#windSpd');
let humid = document.querySelector('#humid');
let dew = document.querySelector('#dew');
let vis = document.querySelector('#vis');
let phase = document.querySelector('#phase');
let pres = document.querySelector('#pres');

console.log(inputValue);

   button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=faa7157ed80b7221cc4c56247358bf18').then(response => response.json()).then(data => {
       let nameValue = data['name'];
       let theTemp = data['main']['temp'];
       let low = data['main']['temp_min'];
       let high = data['main']['temp_max'];
       let feels = data['main']['feels_like'];

       cityName.innerHTML = nameValue;
       mainTemp.innerHTML = theTemp + ' &deg F';
       hiTemp.innerHTML = high + ' &deg F';
       loTemp.innerHTML = low + ' &deg F';
       flTemp.innerHTML = feels + ' &deg F'
    })

    .catch(err => alert("wrong city name"))
   })