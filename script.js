const quotes = [
    "Believe in yourself!",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You miss 100% of the shots you don't take.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream big and dare to fail."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').innerText = quotes[randomIndex];
}

function uploadMedia() {
    const mediaInput = document.getElementById('media-input');
    const mediaDisplay = document.getElementById('media-display');
    
    if (mediaInput.files.length > 0) {
        for (let file of mediaInput.files) {
            const url = URL.createObjectURL(file);
            const mediaElement = document.createElement(file.type.startsWith('image/') ? 'img' : 'video');
            mediaElement.src = url;
            mediaElement.controls = true;
            mediaElement.width = 400; // You can set the width
            mediaDisplay.appendChild(mediaElement);
        }
        
        mediaInput.value = ""; // Clear the input after upload
    }
}

function createHighlightReel() {
    const highlightsDisplay = document.getElementById('highlights-display');
    const newReel = document.createElement('div');
    newReel.innerText = "Highlight Reel Created!";
    highlightsDisplay.appendChild(newReel);
}