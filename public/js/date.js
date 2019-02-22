let dateFormat = document.querySelector(".post-date");

if (dateFormat !== null) {
  let dateText = dateFormat.textContent;
  let localDate = new Date(dateText).toLocaleString('en-US');
  dateFormat.textContent = localDate;

}