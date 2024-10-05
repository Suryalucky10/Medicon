// Get access to the camera
const video = document.getElementById('video');

// Start the video stream
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        });
}

// Capture image from the video stream
document.getElementById('capture').addEventListener('click', function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Show the captured image
    const img = document.getElementById('capturedImage');
    img.src = canvas.toDataURL('image/png');
    img.style.display = 'block';

    // Decode the QR code from the image
    decodeQRCode(canvas);
    
    // Optionally stop the video stream
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
});

// Function to decode QR code
function decodeQRCode(canvas) {
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    // Clear the extracted URL display
    document.getElementById('extractedURL').innerText = "";

    if (code) {
        // If QR code is found, extract the URL
        const url = code.data.trim();
        console.log("QR Code URL: ", url);
        
        // Check if the extracted data is a valid URL
        if (isValidURL(url)) {
            // Show the extracted URL on the page
            document.getElementById('extractedURL').innerText = url;
            // Try to share the profile
            shareProfile(url);
        } else {
            alert("QR code does not contain a valid URL.");
        }
    } else {
        // No QR code found
        alert("No QR code detected in the image.");
    }
}

// Function to check if the extracted string is a valid URL
function isValidURL(string) {
    const urlPattern = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/; // Regular expression for URL validation
    return urlPattern.test(string);
}

// Function to share the profile to the extracted URL
function shareProfile(url) {
    // Simulate a request to check if the URL is accepting
    fetch(url, { 
        method: 'POST', 
        body: JSON.stringify({ message: "Sharing profile data" }), 
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            alert("Profile shared successfully!");
        } else {
            alert("Unable to share. URL is not accepting requests.");
        }
    })
    .catch(error => {
        alert("Error: Unable to share. URL is not accepting requests.");
        console.error('Fetch error:', error);
    });
}
