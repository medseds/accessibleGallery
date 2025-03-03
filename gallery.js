function upDate(previewPic) {
    const imageContainer = document.getElementById("image");
    imageContainer.textContent = previewPic.alt;
    imageContainer.style.backgroundImage = `url(${previewPic.src})`;
    console.log("Image updated: " + previewPic.alt);
}

function unDo() {
    const imageContainer = document.getElementById("image");
    imageContainer.style.backgroundImage = "none";
    imageContainer.textContent = imageContainer.getAttribute("data-default-text");
    console.log("Image reset");
}

function tabFocus(event) {
    upDate(event.target);
    console.log("Tab focus on image: " + event.target.alt);
}

function tabBlur(event) {
    unDo();
    console.log("Tab blur event");
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded");
    const previews = document.querySelectorAll(".preview");
    
    previews.forEach(preview => {
        preview.addEventListener("mouseover", () => upDate(preview));
        preview.addEventListener("mouseout", unDo);
        preview.addEventListener("focus", tabFocus);
        preview.addEventListener("blur", tabBlur);
    });
});