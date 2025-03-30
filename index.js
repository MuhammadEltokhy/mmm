document.getElementById("btn").addEventListener("click", function(e) {
    e.preventDefault(); 
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.currentTime = 0;
    audioPlayer.play().catch(error => {
      console.error("Error playing audio:", error);
    });

    document.getElementById("cont-tem").style.display="flex";
    document.getElementById("landpage").style.display ="flex";

    const name = document.getElementById("text").value;
    const animTextElement = document.querySelector(".anim-text pre:nth-child(1) p");
    animTextElement.textContent = `أهلًا ${name}`;
  });
  document.getElementById("btn").addEventListener("click", function(e) {
    setTimeout(function() {
      window.location.href="index2.html";
    }, 18000);
  });
  