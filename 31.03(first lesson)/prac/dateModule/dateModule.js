function getDate() {
  const currDate = new Date();
  const year = currDate.getFullYear();
  const month = String(currDate.getMonth() + 1).padStart(2, 0);
  return `Year: ${year}, Month: ${month}`;
}

function getTime() {
  const currTime = new Date();
  return currTime.toLocaleTimeString();
}
console.log(getTime());
console.log(getDate());
