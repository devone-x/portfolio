let i = 0,
    text = `BUAT WEBSITE SESUAI KEINGINANMU`;
    
function typing() {
  if(i < text.length) document.querySelector(".display-6").innerHTML += text.charAt(i++);
  setTimeout(typing, 60);
}
typing();