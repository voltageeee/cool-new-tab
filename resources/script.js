document.addEventListener('DOMContentLoaded', function() {
    const buttons = [
        { button: document.getElementById('youtubeButton'), text: document.getElementById('youtubeText') },
        { button: document.getElementById('gmodButton'), text: document.getElementById('gmodText') },
        { button: document.getElementById('twitterButton'), text: document.getElementById('twitterText') },
    ];

    function hideAllText() {
        buttons.forEach(item => {
            item.text.style.display = 'none';
        });
    }

    buttons.forEach(item => {
        item.button.addEventListener('mouseover', function() {
            hideAllText();
            item.text.style.display = 'block';
        });

        item.button.addEventListener('mouseout', hideAllText);
    });
});
