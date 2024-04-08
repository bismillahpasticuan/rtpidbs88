function startjam() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkJam(m);
    s = checkJam(s);
    document.getElementById('timestamp').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startjam, 1000);
  }
  function checkJam(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
