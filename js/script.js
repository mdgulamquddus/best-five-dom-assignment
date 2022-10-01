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
  });
