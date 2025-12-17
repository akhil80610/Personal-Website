/*
function copyEmail(element) {
    const email = "akhilthudumel@email.com";
    navigator.clipboard.writeText(email).then(() => {
        const tooltip = element.querySelector(".tooltip-text");
        tooltip.textContent = "Copied!";
        setTimeout(() => {
            tooltip.textContent = "Click to copy";
        }, 1500);
    });
}
*/
function copyEmail(element) {
    const email = element.childNodes[0].textContent.trim();

    navigator.clipboard.writeText(email).then(() => {
        const tooltip = element.querySelector(".tooltip-text");
        tooltip.textContent = "Copied!";
        setTimeout(() => {
            tooltip.textContent = "Click to copy";
        }, 1500);
    }).catch(err => {
        console.error("Copy failed", err);
    });
}