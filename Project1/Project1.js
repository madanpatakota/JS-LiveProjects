function syncOperation(action, callback) {
    // Disable all buttons
    document.querySelectorAll('#sync-panel button').forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    });

    if (action === 'download') {
        const downloadBox = document.createElement('div');
        downloadBox.classList.add('sync-download-box');

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');

        const progressFill = document.createElement('div');
        progressFill.classList.add('progress');
        progressFill.id = 'progress';

        const progressText = document.createElement('div');
        progressText.id = 'progress-text';
        progressText.innerText = 'Please wait 🙂... 0% completed';

        progressBar.appendChild(progressFill);
        downloadBox.appendChild(progressBar);      // Only bar in gray
        downloadBox.appendChild(progressText);     // Message below, outside gray
        document.getElementById('sync-content').appendChild(downloadBox);

        let progress = 0;
        const interval = setInterval(() => {
            progress += 1.4286;
            progressFill.style.width = progress + '%';
            progressText.innerText = `Please wait 🙂... ${progress.toFixed(2)}% completed`;
            if (progress >= 100) {
                clearInterval(interval);
                progressText.innerText = 'Download 100% completed!';
                const successMessage = document.createElement('div');
                successMessage.innerHTML = `<span class="completed-download">Download completed successfully! 📥</span><br>`;
                downloadBox.appendChild(successMessage);
                if (callback) callback();
                else resetCursor();
            }
        }, 50); // 7 seconds
    }

    else if (action === 'instagram') {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('sync-instagram-box');

        const gif = document.createElement('img');
        gif.src = 'https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif';
        gif.alt = 'Instagram Reel';

        const waitText = document.createElement('div');
        waitText.innerText = 'Please wait 🙂... Instagram video playing...';

        videoContainer.appendChild(gif);
        videoContainer.appendChild(waitText);
        document.getElementById('sync-content').appendChild(videoContainer);

        setTimeout(() => {
            waitText.remove();
            const successMessage = document.createElement('div');
            successMessage.innerHTML = `<span class="completed-instagram">Instagram video played successfully! 🎬</span><br>`;
            videoContainer.appendChild(successMessage);
            if (callback) callback();
            else resetCursor();
        }, 10000);
    }

    else if (action === 'chat') {
        const chatContainer = document.createElement('div');
        chatContainer.classList.add('sync-chat-box');

        const waitText = document.createElement('div');
        waitText.innerText = 'Please wait 🙂... Chatting with friends 💬';

        chatContainer.appendChild(waitText);
        document.getElementById('sync-content').appendChild(chatContainer);

        setTimeout(() => {
            waitText.remove();
            const successMessage = document.createElement('div');
            successMessage.innerHTML = `<span class="completed-chat">Chat completed successfully! 💬</span><br>`;
            chatContainer.appendChild(successMessage);
            resetCursor();
        }, 5000);
    }
}

function syncAllWorks() {
    syncOperation('download', () => {
        syncOperation('instagram', () => {
            syncOperation('chat');
        });
    });
}

function resetCursor() {
    document.querySelectorAll('#sync-panel button').forEach(button => {
        button.disabled = false;
        button.style.cursor = 'pointer';
    });
}

function refreshSyncPanel() {
    document.getElementById('sync-content').innerHTML = '';
    document.getElementById('sync-allworks-content').innerHTML = '';
    document.querySelectorAll('#sync-panel button').forEach(button => {
        button.disabled = false;
        button.style.cursor = 'pointer';
    });
}
