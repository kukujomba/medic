let data;
let loaded = false;
let category;

read();

async function read() {
  const parseQuery = new Parse.Query("Cards");

  try {
    let user = await parseQuery.find();
    data = user;
    loaded = true;
    return true;
  } catch (error) {
    alert(error.message);
    return false;
  }
}

let t = setInterval(function () {
  if (loaded) {
    clearInterval(t);
  }
  load();
}, 1000);

function load() {
  for (let i = data.length - 1; i >= 0; i--) {
    initCard(data[i]);
  }
}

function initCard(data) {
  const listContent = document.getElementById("admin-content");
  const card = document.createElement("div");
  const cardTitle = document.createElement("div");
  const cardDay = document.createElement("div");
  const cardTime = document.createElement("div");
  const cardDoctor = document.createElement("div");
  const cardPhone = document.createElement("div");
  const cardComment = document.createElement("div");

  const cardAge = document.createElement("div");
  const cardGender = document.createElement("div");
  const cardTarget = document.createElement("div");
  const cardCity = document.createElement("div");
  const cardButton = document.createElement("button");

  card.className = "card";
  cardTitle.className = "card-title";
  cardDay.className = "card-day";
  cardTime.className = "card-time";
  cardDoctor.className = "card-doctor";
  cardPhone.className = "card-phone";
  cardComment.className = "card-comment";

  cardAge.className = "card-time";
  cardGender.className = "card-doctor";
  cardTarget.className = "card-phone";
  cardCity.className = "card-comment";

  cardButton.className = "card-delete";

  cardTitle.innerHTML = data.get("name");
  cardDay.innerHTML = `<b>День:</b> ${data.get("day")}`;
  cardTime.innerHTML = `<b>Время:</b> ${data.get("hours")}:${
    data.get("minutes") === "0" ? "00" : data.get("minutes")
  }`;
  cardDoctor.innerHTML = `<b>Категория:</b> ${data.get("category")}`;
  cardPhone.innerHTML = `<b>Телефон:</b> ${data.get("phone") || "[Пусто]"}`;
  cardComment.innerHTML = `<b>Комментарий:</b> ${
    data.get("comment") || "[Пусто]"
  }`;

  cardAge.innerHTML = `<b>Возраст:</b> ${data.get("age")}`;
  cardGender.innerHTML = `<b>Пол:</b> ${data.get("gender")}`;
  cardTarget.innerHTML = `<b>Цель обращения:</b> ${data.get("target")}`;
  cardCity.innerHTML = `<b>Район:</b> ${data.get("city")}`;

  cardButton.innerHTML = "УДАЛИТЬ";

  cardButton.onclick = async () => {
    if (confirm(`Удалить карточку ${data.get("name")}`)) {
      const cards = new Parse.Object("Cards");
      cards.set("objectId", data.id);
      try {
        await cards.destroy();
        alert("Карточка удаленна, обновите страницу");
        return true;
      } catch (error) {
        alert(error.message);
        return false;
      }
    }
  };

  card.appendChild(cardTitle);
  card.appendChild(cardGender);
  card.appendChild(cardAge);
  card.appendChild(cardTarget);
  card.appendChild(cardCity);
  card.appendChild(cardDay);
  card.appendChild(cardTime);
  card.appendChild(cardDoctor);
  card.appendChild(cardPhone);
  card.appendChild(cardComment);
  card.appendChild(cardButton);

  listContent.appendChild(card);
}
