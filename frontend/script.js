async function getBackendMessage() {

  try {

    const response = await fetch(
      "https://your-render-url.onrender.com"
    );

    const data = await response.json();

    document.getElementById("api-message").innerText =
      data.message;

  } catch (error) {

    document.getElementById("api-message").innerText =
      "Backend connection failed.";

  }

}


window.addEventListener("scroll", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    const position = card.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});