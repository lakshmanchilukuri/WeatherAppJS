class Weather {

  #api_key;
  city;
  scale;
  country;

  temp;
  feels_like;
  humidity;
  pressure;
  min_temp;
  max_temp;

  icon;
  desc_s;
  desc_l;
  timezone_offset;
  constructor(city, country) {
    this.#api_key = '5362bf90e4d52a08dc4aff58014b7d86';
    this.city = city;
    this.country = country;
  }


  async getWeatherdata() {

    let promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.#api_key}`);

    let p = await promise;

    let data = await p.json();
    
    console.log('raw data1 '+data.timezone);
    return data;

  }

  async getWeatherdatabyl(lat,long) {

    let promise = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.#api_key}`);

    let p = await promise;

    let data = await p.json();
    console.log('raw data2 '+data.timezone);

    return data;

  }


  async getWeather(lat,long) {
    let data={};
    // console.log(`lat=${lat}&lon=${long}`);
    if(lat==null||long==null){
     console.log('in if');
      data = await this.getWeatherdata();
    }
         else 
       data=await this.getWeatherdatabyl(lat,long);
    this.timezone_offset=data.timezone;   
    this.city = data.name;
    this.country = data.sys.country;
    this.temp = this.convertKelvinToCelsius(data.main.temp);
    this.humidity = data.main.humidity;
    this.pressure = data.main.pressure;
    this.min_temp = this.convertKelvinToCelsius(data.main.temp_min);
    this.max_temp = this.convertKelvinToCelsius(data.main.temp_max);
    this.icon = data.weather[0].icon;
    this.desc_s = data.weather[0].main;
    this.desc_l = data.weather[0].description;
    this.feels_like = this.convertKelvinToCelsius(data.main.feels_like);

    // const currentHour=this.getcurrentHourbyTimeZone();
    // UI.updatebgImage(currentHour);


  }

  changeLocation(city,country){

  this.city=city;
  this.country=country;
}

  convertKelvinToCelsius(number) {
    this.scale = 'C';
    return Math.floor(number - 273);
  }

  static changeScale(temp) {
    console.log('temp' + temp)



    if (scale === 'C') {
      for (let [key, value] of Object.entries(temp)) {
        console.log(key, value);

        temp[key] = Math.round((value * 1.8) + 32);

      }

      
      scale = 'F';
    }
    else {
      for (let [key, value] of Object.entries(temp)) {
        temp[key] = Math.round((value - 32) * (5 / 9));
      }
      scale = 'C';
    }

    return {
      temp, scale
    }

  }



   getcurrentHourbyTimeZone(){
    var mydate = new Date();
  // ET timezone offset in hours.
  console.log('timezone '+this.timezone_offset);
    var timezone = Math.floor(this.timezone_offset/60);
    // Timezone offset in minutes + the desired offset in minutes, converted to ms.
    // This offset should be the same for ALL date calculations, so you should only need to calculate it once.
    var offset = (mydate.getTimezoneOffset() + timezone) * 60 * 1000;
    
    // Use the timestamp and offset as necessary to calculate min/sec etc, i.e. for countdowns.
    var timestamp = mydate.getTime() + offset,
        seconds = Math.floor(timestamp / 1000) % 60,
        minutes = Math.floor(timestamp / 1000 / 60) % 60,
        hours   = Math.floor(timestamp / 1000 / 60 / 60);
    
    // Or update the timestamp to reflect the timezone offset.
    mydate.setTime(mydate.getTime() + offset);
    // Then Output dates and times using the normal methods.
    // var date = mydate.getDate(),
     let   hour = mydate.getHours();

        return hour;
  }

}

