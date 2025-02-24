const nameInfo = document.querySelector("#nomInfo");
const prenomInfo = document.querySelector("#prenomInfo");
const emailInfo = document.querySelector("#emailInfo");
const roleInfo = document.querySelector("#roleInfo");
const nbClientsInfo = document.querySelector("#nbClientsInfo");
const nbProspectsInfo = document.querySelector("#nbProspectsInfo");

emailInfo.innerHTML += localStorage.getItem("email");
roleInfo.innerHTML += localStorage.getItem("role");