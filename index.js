// ............ display heart .....................
let displayHeartPoints = 0;
const heartIcons = document.querySelectorAll(".heart-icon");
for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", function () {
    displayHeartPoints++;
    document.getElementById("heart-points").innerText = displayHeartPoints;
  });
}

// ............... call btn ...............
const btnCalls = document.querySelectorAll(".btn-call");

for (const btn of btnCalls) {
  btn.addEventListener("click", function () {
    const parentCard = this.closest(".card");
    const text = parentCard.querySelector("p.text-sm").innerText;
    const callNumber = parentCard.querySelector(".phone-number").innerText;

    let coins = Number(document.getElementById("coins").innerText);

    if (coins >= 20) {
      alert(`Calling ${text} ${callNumber}....`);
      document.getElementById("coins").innerText = coins - 20;

      const container = document.getElementById("history-container");
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="flex gap-1">
          <div>
            <h2>${text}</h2>
          <p>${callNumber}</p>
          </div>
          <div>
            <p>11:36:58 AM</p>
          </div>
        </div>
      `;
      container.appendChild(div);
    } else {
      alert("You Have Not Sufficient Balance. You Need 20 Coins To Call.");
    }
  });
}

// ............... clear btn ...............
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-container").innerText = "";
});

// ............... copy btn ...............
const copyBtns = document.getElementsByClassName("copy-btn");

let displayCopyCount = 0;
for (const btn of copyBtns) {
  btn.addEventListener("click", function () {
    const copyCount = Number(document.getElementById("copy-count").innerText);

    const parentCard = this.closest(".card");
    const callNumber = parentCard.querySelector(".phone-number").innerText;

    navigator.clipboard
      .writeText(callNumber)
      .then(() => {
        alert(`Number ${callNumber} copied to clipboard`);
      })
      .catch((err) => {
        alert(`Failed to copy: `, err);
      });

    displayCopyCount++;
    document.getElementById("copy-count").innerText = displayCopyCount;
  });
}

// ---- call time -----
function showTime() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(showTime, 1000);
showTime();
