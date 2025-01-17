const btnNeg = document.getElementById("btn-neg");
const btnPos = document.getElementById("btn-pos");
const countDisplay = document.getElementById("count");
const totalDisplay = document.querySelector(".total");

const prixUnitaire = 249.99;

function updateTotal(quantity) {
  const total = prixUnitaire * quantity;
  totalDisplay.textContent = `Total ${total.toFixed(2)} €`;
}

btnNeg.addEventListener("click", () => {
  let count = parseInt(countDisplay.textContent);
  if (count > 1) {
    count--;
    countDisplay.textContent = count;
    updateTotal(count);
  }
});

btnPos.addEventListener("click", () => {
  let count = parseInt(countDisplay.textContent);
  count++;
  countDisplay.textContent = count;
  updateTotal(count);
});
