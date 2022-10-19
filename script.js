const meterFeet = 3.281;
const literGallon = 0.264;
const kiloPound = 2.204;

const input = document.querySelector('#input');
const convertBtn = document.querySelector('#convert-btn');

const length = document.querySelector('#length');
const volume = document.querySelector('#volume');
const mass = document.querySelector('#mass');

function convert(ratio) {
	let conversions = [];

	conversions.push(Number(input.value) * ratio);
	conversions.push(Number(input.value) / ratio);

	return conversions;
}

convertBtn.addEventListener('click', function () {
	let meterFeetConversion = convert(meterFeet);
	let literGallonConversion = convert(literGallon);
	let kiloPoundConversion = convert(kiloPound);

	//Length
	length.textContent = `${
		input.value
	} meters = ${meterFeetConversion[0].toFixed(3)} feet | ${
		input.value
	} feet = ${meterFeetConversion[1].toFixed(3)} meters`;

	//Volume
	volume.textContent = `${
		input.value
	} liters = ${literGallonConversion[0].toFixed(3)} gallons | ${
		input.value
	} gallons = ${literGallonConversion[1].toFixed(3)} liters`;

	//Volume
	mass.textContent = `${input.value} kilos = ${kiloPoundConversion[0].toFixed(
		3
	)} pounds | ${input.value} pounds = ${kiloPoundConversion[1].toFixed(
		3
	)} kilos`;
});

input.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		convertBtn.click();
	}
});
