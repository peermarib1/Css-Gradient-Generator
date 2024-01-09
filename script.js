
document.addEventListener("DOMContentLoaded", function () {
    function applyGradient() {
        const startColor = document.getElementById("startColor").value;
        const endColor = document.getElementById("endColor").value;
        const gradientBox = document.getElementById("gradientBox");
        gradientBox.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
        const generatedCSS = document.getElementById("generatedCSS");
        generatedCSS.textContent = `background-image: linear-gradient(to right, ${startColor}, ${endColor});`;
    }

    document.getElementById("applyGradient").addEventListener("click", applyGradient);

    document.getElementById("resetGradient").addEventListener("click", function () {
        document.getElementById("startColor").value = "#3b82f6";
        document.getElementById("endColor").value = "#10b981";
        applyGradient();
    });

    document.getElementById("copyButton").addEventListener("click", function () {
        const generatedCSS = document.getElementById("generatedCSS");
        navigator.clipboard.writeText(generatedCSS.textContent).then(() => {
            alert("Copied to clipboard!");
        }).catch((err) => {
            console.error('Failed to copy: ', err);
        });
    });

    applyGradient();
});
