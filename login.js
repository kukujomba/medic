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

// function initCard(data) {
//   const listContent = document.getElementById("admin-content");
//   const card = document.createElement("div");
//   const cardTitle = document.createElement("div");
//   const cardDay = document.createElement("div");
//   const cardTime = document.createElement("div");
//   const cardDoctor = document.createElement("div");
//   const cardPhone = document.createElement("div");
//   const cardComment = document.createElement("div");
//   const cardButton = document.createElement("button");

//   card.className = "card";
//   cardTitle.className = "card-title";
//   cardDay.className = "card-day";
//   cardTime.className = "card-time";
//   cardDoctor.className = "card-doctor";
//   cardPhone.className = "card-phone";
//   cardComment.className = "card-comment";
//   cardButton.className = "card-delete";

//   cardTitle.innerHTML = data.get("name");
//   cardDay.innerHTML = `<b>День:</b> ${data.get("day")}`;
//   cardTime.innerHTML = `<b>Время:</b> ${data.get("hours")}:${
//     data.get("minutes") === "0" ? "00" : data.get("minutes")
//   }`;
//   cardDoctor.innerHTML = `<b>Категория:</b> ${data.get("category")}`;
//   cardPhone.innerHTML = `<b>Телефон:</b> ${data.get("phone") || "[Пусто]"}`;
//   cardComment.innerHTML = `<b>Комментарий:</b> ${
//     data.get("comment") || "[Пусто]"
//   }`;
//   cardButton.innerHTML = "УДАЛИТЬ";

//   cardButton.onclick = async () => {
//     if (confirm(`Удалить карточку ${data.get("name")}`)) {
//       const cards = new Parse.Object("Cards");
//       cards.set("objectId", data.id);
//       try {
//         await cards.destroy();
//         alert("Карточка удаленна, обновите страницу");
//         return true;
//       } catch (error) {
//         alert(error.message);
//         return false;
//       }
//     }
//   };

//   card.appendChild(cardTitle);
//   card.appendChild(cardDay);
//   card.appendChild(cardTime);
//   card.appendChild(cardDoctor);
//   card.appendChild(cardPhone);
//   card.appendChild(cardComment);
//   card.appendChild(cardButton);

//   listContent.appendChild(card);
// }

let data;
let loaded = false;
let category;

readData();

async function readData() {
  const parseQuery = new Parse.Query("Profile");

  try {
    let user = await parseQuery.find();
    data = user;
    // loaded = true;
    return true;
  } catch (error) {
    alert(error.message);
    return false;
  }
}

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

// function initCard(data) {
//   const listContent = document.getElementById("admin-content");
//   const card = document.createElement("div");
//   const cardTitle = document.createElement("div");
//   const cardDay = document.createElement("div");
//   const cardTime = document.createElement("div");
//   const cardDoctor = document.createElement("div");
//   const cardPhone = document.createElement("div");
//   const cardComment = document.createElement("div");
//   const cardButton = document.createElement("button");

//   card.className = "card";
//   cardTitle.className = "card-title";
//   cardDay.className = "card-day";
//   cardTime.className = "card-time";
//   cardDoctor.className = "card-doctor";
//   cardPhone.className = "card-phone";
//   cardComment.className = "card-comment";
//   cardButton.className = "card-delete";

//   cardTitle.innerHTML = data.get("name");
//   cardDay.innerHTML = `<b>День:</b> ${data.get("day")}`;
//   cardTime.innerHTML = `<b>Время:</b> ${data.get("hours")}:${
//     data.get("minutes") === "0" ? "00" : data.get("minutes")
//   }`;
//   cardDoctor.innerHTML = `<b>Категория:</b> ${data.get("category")}`;
//   cardPhone.innerHTML = `<b>Телефон:</b> ${data.get("phone") || "[Пусто]"}`;
//   cardComment.innerHTML = `<b>Комментарий:</b> ${
//     data.get("comment") || "[Пусто]"
//   }`;
//   cardButton.innerHTML = "УДАЛИТЬ";

//   cardButton.onclick = async () => {
//     if (confirm(`Удалить карточку ${data.get("name")}`)) {
//       const cards = new Parse.Object("Cards");
//       cards.set("objectId", data.id);
//       try {
//         await cards.destroy();
//         alert("Карточка удаленна, обновите страницу");
//         return true;
//       } catch (error) {
//         alert(error.message);
//         return false;
//       }
//     }
//   };

//   card.appendChild(cardTitle);
//   card.appendChild(cardDay);
//   card.appendChild(cardTime);
//   card.appendChild(cardDoctor);
//   card.appendChild(cardPhone);
//   card.appendChild(cardComment);
//   card.appendChild(cardButton);

//   listContent.appendChild(card);
// }

const loginBlock = document.getElementById("login-block");
const profileBlock = document.getElementById("profile-block");

async function createProfile() {
  let user = new Parse.Object("Profile");

  user.set("login", document.getElementById("login").value);
  user.set("password", document.getElementById("password").value);
  user.set("name", document.getElementById("name").value);

  user.set("gender", document.getElementById("gender").value);
  user.set("birthday", document.getElementById("birthday").value);
  user.set("city", document.getElementById("city").value);

  try {
    if (user !== null) {
      user = await user.save();
      alert("Профиль создан");
    }
  } catch (error) {
    alert(error.message);
  }
}

function login() {
  const loginValue = document.getElementById("login").value;
  const passwordValue = document.getElementById("password").value;

  let password = data
    .filter((f) => f.get("login") === loginValue)
    .map((a) => a.get("password"));

  let name = data
    .filter((f) => f.get("login") === loginValue)
    .map((a) => a.get("name"));

  let id = data.filter((f) => f.get("login") === loginValue).map((a) => a.id);

  let birthday = data
    .filter((f) => f.get("login") === loginValue)
    .map((a) => a.get("birthday"));

  let gender = data
    .filter((f) => f.get("login") === loginValue)
    .map((a) => a.get("gender"));

  let city = data
    .filter((f) => f.get("login") === loginValue)
    .map((a) => a.get("city"));

  if (password[0] === passwordValue) {
    loginBlock.style.display = "none";
    profileBlock.style.display = "block";

    const profilieName = document.getElementById("profile-name");
    const profilieLogin = document.getElementById("profile-login");
    const profilieAge = document.getElementById("profile-age");
    const profilieGender = document.getElementById("profile-gender");
    const profilieID = document.getElementById("profile-id");
    const profilieCity = document.getElementById("profile-city");

    profilieName.innerHTML = "Добро пожаловать," + name;
    profilieLogin.innerHTML = "<b>Логин на сайте:</b> " + loginValue;
    profilieID.innerHTML = "<b>Уникальный номер:</b> " + id;
    profilieAge.innerHTML = "<b>Дата рождения:</b> " + birthday;
    profilieCity.innerHTML = "<b>Район:</b> " + city;
    profilieGender.innerHTML = "<b>Пол:</b> " + gender;
  }
}

document.getElementById("loginBtn").addEventListener("click", function () {
  login();
});

document.getElementById("newProfileBtn").addEventListener("click", function () {
  createProfile();
});
