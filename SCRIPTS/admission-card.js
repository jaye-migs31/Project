const deck = document.getElementById("deck");
    const nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", () => {
      const cards = deck.querySelectorAll(".card");
      if (cards.length === 0) return;

      const topCard = cards[0];
      topCard.classList.add("move-back");

      topCard.addEventListener("animationend", () => {
        topCard.classList.remove("move-back");
        deck.appendChild(topCard); // send to back
      }, { once: true });
    });