const adviceUpdateButton = document.getElementById("btn-dado");
const adviceNumber = document.querySelector(".advice-id");
const adviceDescription = document.querySelector(".texto-conselho");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();




