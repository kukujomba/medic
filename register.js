let data;
let loaded = false;

async function createUser() {
  let user = new Parse.Object("Cards");

  user.set("name", document.getElementById("name").value);
  user.set("category", document.getElementById("category").value);
  user.set("day", document.getElementById("day").value);
  user.set("hours", document.getElementById("hours").value);
  user.set("minutes", document.getElementById("minutes").value);
  user.set("phone", document.getElementById("phone").value);
  user.set("comment", document.getElementById("comment").value);
  user.set("gender", document.getElementById("gender").value);
  user.set("age", document.getElementById("age").value);
  user.set("city", document.getElementById("city").value);
  user.set("target", document.getElementById("target").value);

  try {
    if (user !== null) {
      if (checkIsAvailableTime()) {
        user = await user.save();
        alert("Запись добавлена");
        read();
      } else {
        alert(
          `Данный день ${document.getElementById("day").value} или время ${
            document.getElementById("hours").value
          }:${document.getElementById("minutes").value} уже заняты`
        );
      }
    }
  } catch (error) {
    alert(error.message);
  }
}

const registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener("click", async function () {
  createUser();
});

read();

function checkIsAvailableTime() {
  let out = true;
  const d = document.getElementById("day").value;
  const h = document.getElementById("hours").value;
  const m = document.getElementById("minutes").value;

  for (let i = 0; i < data.length; i++) {
    if (
      data[i].get("day") + data[i].get("hours") + data[i].get("minutes") ===
      d + h + m
    ) {
      out = false;
    }
    console.log(data[i].get("day") + data[i].get("hours") + data[i].get("minutes") ===
    d + h + m)
  }
  return out;
}

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
}, 1000);

window.addEventListener("load", () => {
  const hourSelect = document.getElementById("hours");
  for (var i = 8; i <= 14; i++) {
    hourSelect.add(createOption(i, i));
  }

  const minutesSelect = document.getElementById("minutes");
  for (let i = 0; i < 60; i += 15) {
    minutesSelect.add(createOption(i, i));
  }
});

function createOption(value, text) {
  let option = document.createElement("option");
  option.text = text;
  option.value = value;
  return option;
}
