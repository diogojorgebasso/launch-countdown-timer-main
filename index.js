function getDate(){
  let time = new Date()
  let pickerDay = document.getElementById('day')
  pickerDay.innerHTML = time.getDate()
  //pickerDay.style.fontSize = "x-large";
  let pickerHour = document.getElementById('hour')
  pickerHour.innerHTML = time.getHours()
  let pickerMinute = document.getElementById('minute')
  pickerMinute.innerHTML = time.getMinutes()
  let pickerSecond = document.getElementById('second')
  pickerSecond.innerHTML = time.getSeconds()
setTimeout(getDate, 1000)}
getDate()