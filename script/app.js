
const ui = new UI();
const weather = new Weather('London', 'UK');
const message=document.querySelector('#message');
const d=new Date();

const container=document.querySelector('.content-container');
const card=document.querySelector('.card-bottom');
const submit=document.querySelector('.btn');
document.addEventListener('DOMContentLoaded', () => {
  console.log('submit'+submit.classList);

currentHour=19;
  if(currentHour>7&&currentHour<16){
    console.log('sun');
//sun
  container.classList.add('bg-image-primary');
  card.classList.add('bgt-color-primary');
  submit.classList.add('bg-color-primary');
  
  }
  else if (currentHour>=16&&currentHour<19){
    console.log('blood');
//blood
container.classList.add('bg-image-secondary');
  card.classList.add('bgt-color-secondary');
  submit.classList.add('bg-color-secondary');
  }
  else{
    console.log('moon');
    container.classList.add('bg-image-tertiary');
    card.classList.add('bgt-color-tertiary');
    submit.classList.add('bg-color-tertiary');
  }
  

  let message=document.querySelector('#message');
  let lat,long;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
       lat= position.coords.latitude ;
      long= position.coords.longitude;
      getWeather(lat,long);
    },()=>{
      console.log('unable to read locaton');
       weather.changeLocation('Hyderabad','India');
       getWeather(null,null);
      message.innerHTML="Unable to read Location. please enter your location manually";
    });
  } else {
    message.innerHTML = "Geolocation is not supported by this browser.";
  }

  
  
  
});

function getWeather(lat,long){
weather.getWeather(lat,long).then(data => {
  message.innerHTML='';
  ui.displayData(weather);

}).catch(error => console.log(error));
}

//change unit of temperature
document.querySelector('#temp-scale').addEventListener('click', (e) => {
  // console.log('change scale')
  // console.log(e.target);
  // console.log(e.target.classList);
  const classlist= e.target.classList;
  
  let temperature={};
  if (classlist.contains('temp')) {
    // console.log('yes');

    if(classlist.contains('scale'))  {
      temperature.main_temp=e.target.previousElementSibling.textContent;
      scale=e.target.textContent;

    }
    else if(classlist.contains('temperature')){
        // console.log(e.target);
        temperature.main_temp=e.target.textContent
        scale=e.target.nextSibling.nextSibling.textContent;
    }
    else{
      // console.log(e.target.lastElementChild);
      temperature.main_temp=e.target.firstElementChild.textContent
      scale=e.target.lastElementChild.textContent;
    }

    // console.log('scale ' +scale);
    // console.log('temp ' +temp);
    temperature.min_temp=document.querySelector('#min-temp').textContent;
    temperature.max_temp=document.querySelector('#max-temp').textContent;
    temperature.feels_like=document.querySelector('#feels-like').textContent;
    console.log(temperature);
    let data=Weather.changeScale(temperature,scale);
    console.log(data);
    ui.updateScale(data);
  }

});

//change city

document.querySelector('#change-location').addEventListener('click',(e)=>{
  console.log(e.target);
  document.querySelector('#modal').classList.toggle("show-modal");
  console.log(document.querySelector('#modal-content').classList);
  document.querySelector('#modal-content').classList.toggle("show-modal-content");
  console.log(document.querySelector('#modal-content').classList);

});


document.querySelector('#close-modal').addEventListener('click',(e)=>{
  // document.querySelector('#modal')
  console.log(e.target);
  document.querySelector('#modal').classList.toggle("show-modal");
  console.log(document.querySelector('#modal-content').classList);
  document.querySelector('#modal-content').classList.toggle("show-modal-content");
  console.log(document.querySelector('#modal-content').classList);


});



document.querySelector('#submit-modal').addEventListener('click',(e)=>{
  console.log('submitting modal');
  let city=document.querySelector('#city').value;
  let country=document.querySelector('#country').value;
  console.log(city+'  '+country);
  weather.changeLocation(city,country);
  getWeather(null,null);
  document.querySelector('#modal').classList.toggle("show-modal");


});


