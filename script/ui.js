class UI{

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


}