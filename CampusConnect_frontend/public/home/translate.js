document.getElementById("language-selector").addEventListener("change", function() {
    let targetLang = this.value;

    document.querySelectorAll(".translate").forEach(el => {
        let originalText = el.getAttribute("data-original") || el.textContent;
        
        el.setAttribute("data-original", originalText);

        let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(originalText)}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            el.textContent = data[0][0][0];
        })
        .catch(error => console.error("Translation error:", error));
    });
});
