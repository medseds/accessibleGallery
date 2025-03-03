let selectedImage = null;

function upDate(previewPic) {
    const imageContainer = document.getElementById("image");
    imageContainer.textContent = previewPic.alt;
    imageContainer.style.backgroundImage = `url(${previewPic.src})`;
    console.log("Hover preview: " + previewPic.alt);
}

function unDo() {
    if (selectedImage) {
        const imageContainer = document.getElementById("image");
        imageContainer.textContent = selectedImage.alt;
        imageContainer.style.backgroundImage = `url(${selectedImage.src})`;
        console.log("Restoring selected image: " + selectedImage.alt);
        return;
    }

    const imageContainer = document.getElementById("image");
    imageContainer.textContent = imageContainer.getAttribute("data-default-text");
    imageContainer.style.backgroundImage = "none";
    console.log("Image reset to default");
}

function selectImage(previewPic) {
    selectedImage = previewPic;
    const imageContainer = document.getElementById("image");
    imageContainer.textContent = previewPic.alt;
    imageContainer.style.backgroundImage = `url(${previewPic.src})`;
    console.log("Image permanently selected: " + previewPic.alt);
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
        preview.addEventListener("click", () => selectImage(preview));

        preview.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                selectImage(preview);
            }
        });
    });
});
