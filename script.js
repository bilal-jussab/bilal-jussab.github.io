document.addEventListener("DOMContentLoaded", function() {
  const name = "BILAL JUSSAB";
  const nameElement = document.getElementById("name");
  let i = 0;

  function typeWriter() {
    if (i < name.length) {
      nameElement.innerHTML += name.charAt(i);
      i++;
      setTimeout(typeWriter, 250); // Delay between characters (speed of typing)
    } else {
      nameElement.classList.remove("typing-cursor");
    }
  }

  nameElement.classList.add("typing-cursor");
  typeWriter();
});
