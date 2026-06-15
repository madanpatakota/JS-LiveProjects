function asyncOperation(action) {
    if (action === 'download') {
        // const progressBar = document.createElement('div');
        // progressBar.classList.add('progress-bar');
        const progressBar = document.createElement('div');
progressBar.classList.add('download-box');

        progressBar.innerHTML = `
            <div class="progress" id="progress-download"></div>
            <div id="progress-text-download">0% completed</div>
        `;
        document.getElementById('async-content').appendChild(progressBar);

        let progress = 0;
        const interval = setInterval(() => {
            progress += 1.25; // Adjusted for 8 seconds
            document.getElementById('progress-download').style.width = progress + '%';
            document.getElementById('progress-text-download').innerText = `Please wait 🙂... ${progress.toFixed(2)}% completed`;
            if (progress >= 100) {
                clearInterval(interval);
                document.getElementById('progress-text-download').innerText = 'Download 100% completed!';
                const successMessage = document.createElement('div');
                successMessage.innerHTML = `<span class="completed-download">Download completed successfully! 📥</span><br>`;
                progressBar.appendChild(successMessage);
            }
        }, 80); // 80ms interval for 8 seconds total duration
    } 
    
    else if (action === 'instagram') {
        const videoContainer = document.createElement('div');
        //videoContainer.classList.add('video-container');
        videoContainer.classList.add('instagram-box');

        videoContainer.style.marginTop = '20px';
        videoContainer.innerHTML = `
            <img src="https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif" alt="Instagram Reel">
            <div>Please wait 🙂... Watching Instagram video...</div>
        `;
        document.getElementById('async-content').appendChild(videoContainer);

        setTimeout(() => {
            videoContainer.querySelector('div').remove(); // Remove text message
            const successMessage = document.createElement('div');
            successMessage.innerHTML = `<span class="completed-instagram">Instagram video watched successfully! 🎬</span><br>`;
            videoContainer.appendChild(successMessage);
        }, 10000); // 10 seconds
    } 
    
    else if (action === 'chat') {
        const chatStatus = document.createElement('div');
        chatStatus.classList.add('chat-box');
        
        const waitingMessage = document.createElement('div');
        waitingMessage.innerText = "Please wait 🙂... Chatting with friends 💬";
        waitingMessage.style.marginTop = '20px';
        chatStatus.appendChild(waitingMessage);
        document.getElementById('async-content').appendChild(chatStatus);
    
        setTimeout(() => {
            waitingMessage.remove(); // ❌ remove the wait message
            const successMessage = document.createElement('div');
            successMessage.innerHTML = `<span class="completed-chat">Chat completed successfully! 💬</span><br>`;
            chatStatus.appendChild(successMessage);
        }, 7000); // 7 seconds
    }
    
}

function asyncAllWorks() {
    asyncOperation('download');
    asyncOperation('instagram');
    asyncOperation('chat');
}

function refreshAsyncPanel() {
    document.getElementById('async-content').innerHTML = '';
    document.getElementById('async-allworks-content').innerHTML = '';
    document.querySelectorAll('#async-panel button').forEach(button => {
        button.disabled = false;
        button.style.cursor = 'pointer';
    });
}
