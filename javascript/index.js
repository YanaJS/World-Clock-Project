function updateTime() {
  //Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date"); //document.querySelector("#los-angeles  .date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM, Do, YYYY");
  //losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} <small>${losAngelesTime.format("A")}</small>`;
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  /*Another aproach:

setInterval(function () {
  //Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date"); //document.querySelector("#los-angeles  .date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM, Do, YYYY");
  //losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} <small>${losAngelesTime.format("A")}</small>`;
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

*/
  //Rome

  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date"); //document.querySelector("#rome  .date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");
  romeDateElement.innerHTML = romeTime.format("MMMM, Do, YYYY");
  //romeTimeElement.innerHTML = `${romeTime.format("h:mm:ss")} <small>${romeTime.format("A")}</small>`;
  romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");

  //Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date"); //document.querySelector("#tokyo  .date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM, Do, YYYY");
  //tokyoTimeElement.innerHTML = `${tokyoTime.format("h:mm:ss")} <small>${tokyoTime.format("A")}</small>`;
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
