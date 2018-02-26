var hour = new Date().getHours();

if (hour >= 5 && hour < 12) {
  alert('Good morning');
}
else if (hour >= 12 && hour < 18) {
  alert('Good afternoon');
}
else if (hour >= 18 && hour > 24) {
  alert('Good evening');
}
else if (hour >= 24 && hour < 5) {
  alert('Good night');
}
