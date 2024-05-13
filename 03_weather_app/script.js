const cityBtn = document.getElementById("city-button");
const cityInput = document.getElementById("city-input");

const writeData = (data) => {
  const bodyElement = document.querySelector("body");
  const placeHeading = document.createElement("h1");
  placeHeading.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}.`;
  bodyElement.appendChild(placeHeading);

  const tempCHeading = document.createElement("h2");
  tempCHeading.innerHTML = `${data.current.temp_c} &#8451;`;
  const tempFHeading = document.createElement("h2");
  tempFHeading.innerHTML = `${data.current.temp_f} &#8457;`;
  bodyElement.append(tempCHeading, tempFHeading);

  const timeHeading = document.createElement("h3");
  timeHeading.innerText = `${data.location.localtime}`;
  bodyElement.append(timeHeading);
};

async function getData(lat, long) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=2dab12ef7131454b8f2115915240105&q=${lat},${long}&aqi=yes`
  );
  writeData(await res.json());
}

async function onLocationSuccess(position) {
  await getData(position.coords.latitude, position.coords.longitude);
}

function onLocationFailure() {
  console.log("Location permission failed!");
}

cityBtn.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(
    onLocationSuccess,
    onLocationFailure
  );
});
