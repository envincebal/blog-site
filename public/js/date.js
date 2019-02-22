let dateFormat = document.getElementsByClassName("post-date");
// Turns date elements into array
let dateArr = Array.prototype.slice.call(dateFormat);

// Loops through posts and formats them based on local time and date
dateArr.forEach(date => {
  let dateText = date.textContent;
  console.log(dateText);
  let localDate = new Date(dateText).toLocaleString('en-US');

  date.textContent = localDate;
});

