// MOSTRAR WINDOW ALERT

function showAlert() {
    alert("Digite a cidade desejada e procure pelo Clima!");
}

// RESTO DAS FUNCIONALIDADES DO JAVASCRIPT

document.getElementById('fetchWeather').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'FAZER UMA API AQUI'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`;


    // MENSAGEM DE ERRO

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Cidade não encontrada');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;
    
    weatherDiv.innerHTML = `
    <h2>${city}</h2>
    <p>Temperatura: ${temperature}°C</p>
    <p>Descrição: ${description}</p>
    `;
}
