let UserName=prompt("Adınızı Giriniz:")

document.querySelector("#myname");

myName.innerHTML=`${UserName ? UserName : alert("Lütfen Boş Değer Girmeyiniz.") }`

document.querySelector("#myClock");


const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function showTime() {
    
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = weekday[today.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    setTimeout(showTime, 1000); 
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + " - " + d;
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  
  myClock.innerHTML=`${showTime()}`
