class UI{

  // static container=document.querySelector('.content-container');
  // static card=document.querySelector('.card-bottom');
  // static submit=document.querySelector('.btn');

constructor(){
this.temp=document.querySelector('#temp');
this.feels_like=document.querySelector('#feels-like');
this.scale=document.querySelector('#scale');
this.desc_s=document.querySelector('#desc-s');


this.location=document.querySelector('#location');
this.icon=document.querySelector('#icon');
this.desc_l=document.querySelector('#desc-l');

this.min_temp=document.querySelector('#min-temp');
this.max_temp=document.querySelector('#max-temp');
this.pressure=document.querySelector('#pressure');
this.humidity=document.querySelector('#humidity');

this.container=document.querySelector('.content-container');
this.card=document.querySelector('.card-bottom');
this.submit=document.querySelector('.btn');


}


displayData(weather){
console.log(weather);
this.temp.innerHTML=weather.temp;
this.scale.innerHTML=weather.scale;
this.desc_s.innerHTML=weather.desc_s
this.desc_l.innerHTML=weather.desc_l;
this.min_temp.innerHTML=weather.min_temp;
this.max_temp.innerHTML=weather.max_temp;
this.humidity.innerHTML=weather.humidity;
this.pressure.innerHTML=weather.pressure;
this.location.innerHTML=`${weather.city},${weather.country}`;
this.icon.src=`http://openweathermap.org/img/wn/${weather.icon}.png`;
this.feels_like.innerHTML=weather.feels_like;





}


updateScale(data){
this.temp.innerHTML=data.temp.main_temp;
this.scale.innerHTML=data.scale;
this.max_temp.innerHTML=data.temp.max_temp;
this.min_temp.innerHTML=data.temp.min_temp;
this.feels_like.textContent=data.temp.feels_like;
}


 updatebgImage(currentHour){
  console.log('Current Hour'+currentHour);
  // console.log(isNaN(currentHour))
  
  if(currentHour>7&&currentHour<16){
    console.log('sun');
//sun
this.container.classList.remove('bg-image-secondary','bg-image-tertiary');
this.container.classList.add('bg-image-primary');

this.card.classList.remove('bgt-color-secondary','bgt-color-tertiary');
this.card.classList.add('bgt-color-primary');

this.submit.classList.remove('bg-color-secondary','bg-color-tertiary');
this.submit.classList.add('bg-color-primary');

  console.log(this.container.classList);
  }
  else if (currentHour>=16&&currentHour<19){
    console.log('blood');
//blood
this.container.classList.remove('bg-image-primary','bg-image-tertiary');
this.container.classList.add('bg-image-secondary');

this.card.classList.remove('bgt-color-primary','bgt-color-tertiary');
this.card.classList.add('bgt-color-secondary');

this.submit.classList.remove('bg-color-primary','bg-color-tertiary');
this.submit.classList.add('bg-color-secondary');

// 

console.log(this.container.classList)
  }
  else{
    console.log('moon');

    this.container.classList.remove('bg-image-primary','bg-image-secondary');
this.container.classList.add('bg-image-tertiary');

this.card.classList.remove('bgt-color-primary','bgt-color-secondary');
this.card.classList.add('bgt-color-tertiary');

this.submit.classList.remove('bg-color-primary','bg-color-secondary');
this.submit.classList.add('bg-color-tertiary');


    // this.container.classList.add('bg-image-tertiary');
    // this.card.classList.add('bgt-color-tertiary');
    // this.submit.classList.add('bg-color-tertiary');
    console.log(this.container.classList)
  }
}


}