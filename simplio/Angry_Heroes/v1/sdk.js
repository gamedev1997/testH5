// Parse the query parameters to extract the simplioApiUrl and userId
const urlParams = new URLSearchParams(window.location.search);
const simplioApiUrl = urlParams.get('env');
const simplioUserId = urlParams.get('userId');

// Unique game ID provided by Simplio Team (replace 'yourGameId' with your actual game ID)
const simplioGameId = "2RhSh3xTg9WIUd4mhb4vOcvaNyXsz6x-ImBLjmPYkehiAzFuvcRgAA==";

// Initialize the SimplioUserInfoSDK
const simplio = new SimplioUserInfoSDK(simplioApiUrl, simplioGameId);

// Function to send the score
async function sendScore(score) {
    try {
        await simplio.SetScore(simplioUserId, score);
        console.log('Score sent successfully!');
    } catch (error) {
        console.error('Error sending score:', error);
    }
}