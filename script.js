document.getElementById('submitPrompt').addEventListener('click', function () {
    const fileInput = document.getElementById('fileUpload');
    const promptInput = document.getElementById('userPrompt');
    
    // Check if a file has been selected
    if (fileInput.files.length === 0) {
        alert("Please upload a file.");
        return;
    }

    // Create FormData to send file and prompt to backend
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('prompt', promptInput.value);

    // Send the file and prompt to the server (replace '/upload' with your backend endpoint)
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Display the response from the server
        document.getElementById('response').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = "An error occurred. Please try again.";
    });
});
