document.addEventListener('DOMContentLoaded', () => {
    const moreInfoButton = document.getElementById('more-info');
    const scriptsButton = document.getElementById('scripts');
    const haxhubPaidButton = document.getElementById('haxhub-paid');
    const closePopupButton = document.getElementById('close-popup');
    const closeHaxhubPopupButton = document.getElementById('close-haxhub-popup');
    
    const popup = document.getElementById('popup');
    const haxhubPopup = document.getElementById('haxhub-popup');
    
    const scriptListItems = document.querySelectorAll('#script-list li');
    
    moreInfoButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });
    
    scriptsButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });
    
    haxhubPaidButton.addEventListener('click', () => {
        haxhubPopup.style.display = 'block';
    });
    
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    
    closeHaxhubPopupButton.addEventListener('click', () => {
        haxhubPopup.style.display = 'none';
    });

    scriptListItems.forEach(item => {
        item.addEventListener('click', () => {
            const script = item.getAttribute('data-script');
            navigator.clipboard.writeText(script).then(() => {
                const originalText = item.textContent;
                item.textContent = 'Copied!';
                setTimeout(() => {
                    item.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
});
