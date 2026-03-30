console.log("GeminiEX extension loaded.");

// for stubborn auto-resizing widths
const enforceWidths = () => {
    const userBubbles = document.querySelectorAll('.user-query-bubble-with-background');
    userBubbles.forEach(bubble => {
        if (bubble.style.maxWidth || bubble.style.width) {
            bubble.style.removeProperty('max-width');
            bubble.style.removeProperty('width');
        }
    });

    const tables = document.querySelectorAll('.markdown-table-wrapper');
    tables.forEach(table => {
        if (table.style.maxWidth || table.style.width) {
            table.style.removeProperty('max-width');
            table.style.removeProperty('width');
        }
    });
};

const observer = new MutationObserver((mutations) => {
    let shouldEnforce = false;
    for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            shouldEnforce = true;
            break;
        }
    }
    if (shouldEnforce) {
        enforceWidths();
    }
});

const startObserving = () => {
    const chatContainer = document.querySelector('.conversation-container') || document.body;
    observer.observe(chatContainer, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });
};

setTimeout(startObserving, 1000);
