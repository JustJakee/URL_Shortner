document.getElementById('urlForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const API_ENDPOINT = process.env.API_ENDPOINT;
    var longURL = document.getElementById('longURL').value.trim();

    fetch(API_ENDPOINT + '/GenerateShortURL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ longURL })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response data:', data);
            document.getElementById('shortURL').innerHTML = `<strong>Short URL:</strong> <a href="${data.shortURL}" target="_blank">${data.shortURL}</a>`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('shortURL').innerHTML = '<span style="color: red;">Failed to generate short URL. Please try again.</span>';
        });
});

