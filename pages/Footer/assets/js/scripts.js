fetch('/pages/Footer/index.html')
.then(res => res.text())
.then(data => {
  document.getElementById('footer-container').innerHTML = data;
});