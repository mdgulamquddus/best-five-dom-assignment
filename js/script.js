// Selecte Single Player

document
  .getElementById("all-players")
  .addEventListener("click", function (event) {
    const targetButtonId = event.target.id;
    const targetPlayerElementId = document.getElementById(targetButtonId);
    const playerNameId = event.target.previousElementSibling.id;
    const playerElementId = document.getElementById(playerNameId);
    const playerInnerText = playerElementId.innerText;
    const li = document.createElement("li");
    li.innerText = playerInnerText;
    const ol = document.getElementById("five-players");
    ol.appendChild(li);
    targetPlayerElementId.disabled = true;
    const totalPlayer = ol.childNodes;
    if (totalPlayer.length >= 5) {
      alert("You Selected Five Players");
    }
  });

// Calculate Five Player Expenses

document.getElementById("calculate").addEventListener("click", function () {
  const fivePlayerSId = document.getElementById("five-players");
  const totalPlayerArray = fivePlayerSId.childNodes;
  const totalPlayer = totalPlayerArray.length;

  if (totalPlayer === 5) {
    const playerValue = getInputValue("single-player-expense");

    const getFivePlayerExpenseId = document.getElementById("five-expense");

    const totalFivePlayerExpense = totalPlayer * playerValue;
    getFivePlayerExpenseId.innerText = totalFivePlayerExpense;
  } else {
    return alert("Please Select Five Players");
  }
});

//Calculate Total Expenses

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerExpense = getInputValue("manager-expense");
    const coachExpense = getInputValue("coach-expense");

    const fivePlayerValue = getInnerValue("five-expense");
    const totalExpense = document.getElementById("total-expense");

    totalExpense.innerText = managerExpense + coachExpense + fivePlayerValue;
  });
