// Set HTML Elements
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt media selection, pass video element, and then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => { videoElement.play(); }
    } catch (error) {
        console.log('Unable to select media.');
    }
}

button.addEventListener('click',async () => {
    //  Disable Button
    button.disabled = true;

    // Start Picture in Picture
    videoElement.requestPictureInPicture();

    //  Reset Button
    button.disabled = false;
})

// On Load
selectMediaStream();