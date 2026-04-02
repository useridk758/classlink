const requestForm = document.getElementById('request-form');
const mainUI = document.getElementById('main-ui');
const viewerContainer = document.getElementById('viewer-container');
const contentFrame = document.getElementById('content-frame');
const backBtn = document.getElementById('back-btn');

function launchContent(url) {
    // Check if input is a valid URL, if not, use Bing search
    let targetUrl = url.trim();
    const isUrl = /^(http|https):\/\/[^ "]+$/.test(targetUrl) || targetUrl.includes('.');

    if (!isUrl) {
        targetUrl = `https://www.bing.com/search?q=${encodeURIComponent(targetUrl)}`;
    } else if (!targetUrl.startsWith('http')) {
        targetUrl = `https://${targetUrl}`;
    }

    contentFrame.src = targetUrl;
    mainUI.classList.add('hidden');
    viewerContainer.classList.remove('hidden');
}

requestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('user-input').value;
    launchContent(input);
});

function quickLink(url) {
    launchContent(url);
}

backBtn.addEventListener('click', () => {
    contentFrame.src = "";
    viewerContainer.classList.add('hidden');
    mainUI.classList.remove('hidden');
});
