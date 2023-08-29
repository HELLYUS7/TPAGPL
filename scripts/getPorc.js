const params = new URLSearchParams(window.location.search);

const porc = params.get('porc');

document.getElementById('porc-label').innerHTML = `- ${porc}% -`;