document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const moreInfoButton = document.getElementById('more-info');
    const scriptsButton = document.getElementById('scripts');
    const closePopupButton = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    const haxhubPaidButton = document.getElementById('haxhub-paid');
    const closeHaxhubPopupButton = document.getElementById('close-haxhub-popup');
    const haxhubPopup = document.getElementById('haxhub-popup');

    // Show the scripts popup
    scriptsButton.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'block';
    });

    // Show the HaxHub popup
    haxhubPaidButton.addEventListener('click', (e) => {
        e.preventDefault();
        haxhubPopup.style.display = 'block';
    });

    // Close the scripts popup
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the HaxHub popup
    closeHaxhubPopupButton.addEventListener('click', () => {
        haxhubPopup.style.display = 'none';
    });

    // Close the popups when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
        if (e.target === haxhubPopup) {
            haxhubPopup.style.display = 'none';
        }
    });

    // Add click event to each script list item
    const scriptList = document.getElementById('script-list');
    const scriptItems = scriptList.getElementsByTagName('li');
    for (let i = 0; i < scriptItems.length; i++) {
        scriptItems[i].addEventListener('click', () => {
            const scriptCode = scriptItems[i].getAttribute('data-script');
            navigator.clipboard.writeText(scriptCode).then(() => {
                alert('Script copied to clipboard');
            }, () => {
                alert('Failed to copy script');
            });
        });
    }
});
