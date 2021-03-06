'use strict'
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  let mensaje='';
  let name;

  function success(pos) {
    var x = pos.coords;
    mensaje += 'Tu posición es: \n';
    mensaje += 'Latitud:' + x.latitude.toFixed(3);
    mensaje += ' Longitud:' + x.longitude.toFixed(3);
    mensaje += ' con una precision de ' + x.accuracy.toFixed(3) + " metros ";
    mensaje += ' a las ';
    var d = new Date();
    let hora=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    mensaje += hora;
    localStorage.setItem(name, mensaje);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  function borrar(){
      for (let clave in localStorage) {
        localStorage.removeItem(clave);
      }
  }

  function getCoords(){
    name=prompt("¿Cómo te llamas?");
    let message = 'Nombre: ';
    message += name;
    let output = localStorage.getItem(name);
    if (output) {
      navigator.geolocation.getCurrentPosition(success, error, options);
      console.log(output);
      return output;
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options);
      message+=localStorage.getItem(name);
      console.log(message);
      return message;
    }
  };
