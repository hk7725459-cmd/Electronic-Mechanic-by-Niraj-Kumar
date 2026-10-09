// upload.js
document.querySelector("#uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let response = await fetch("/upload", {
        method: "POST",
        body: formData
    });
    let result = await response.text();
    alert(result);
});
