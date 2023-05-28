// let data;
// let loaded = false;
// let category;

// read();

// async function read() {
//   const parseQuery = new Parse.Query("Cards");

//   try {
//     let user = await parseQuery.find();
//     data = user;
//     loaded = true;
//     return true;
//   } catch (error) {
//     alert(error.message);
//     return false;
//   }
// }

// let t = setInterval(function () {
//   if (loaded) {
//     clearInterval(t);
//   }
//   load();
// }, 1000);

// function load() {
//   for (let i = data.length - 1; i >= 0; i--) {
//     initCard(data[i]);
//   }
// }

// function searchCards() {
//   const input = document.getElementById("input-search");
//   const filter = input.value.toUpperCase();
//   const cards = document.getElementsByClassName("card");
//   for (let i = 0; i < cards.length; i++) {
//     const title = cards[i].getElementsByClassName("card-id")[0];
//     const value = title.textContent || title.innerText;
//     if (value.toUpperCase().indexOf(filter) > -1) {
//       cards[i].style.display = "";
//     } else {
//       cards[i].style.display = "none";
//     }
//   }
// }

// function initCard(data) {
//   const listContent = document.getElementById("list-content");
//   const card = document.createElement("div");
//   const cardID = document.createElement("div");
//   const cardDay = document.createElement("div");
//   const cardTime = document.createElement("div");
//   const cardDoctor = document.createElement("div");

//   card.className = "card";
//   cardID.className = "card-id";
//   cardDay.className = "card-day";
//   cardTime.className = "card-time";
//   cardDoctor.className = "card-doctor";

//   cardID.innerHTML = `<b>Номер:</b> ${data.id}`;
//   cardDay.innerHTML = `<b>День:</b> ${data.get("day")}`;
//   cardTime.innerHTML = `<b>Время:</b> ${data.get("hours")}:${
//     data.get("minutes") === "0" ? "00" : data.get("minutes")
//   }`;
//   cardDoctor.innerHTML = `<b>Категория:</b> ${data.get("category")}`;

//   card.appendChild(cardID)
//   card.appendChild(cardDay);
//   card.appendChild(cardTime);
//   card.appendChild(cardDoctor);

//   listContent.appendChild(card);
// }
