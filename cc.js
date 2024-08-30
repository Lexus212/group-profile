function updateProfile() {
    const nameInput = document.getElementById('nameInput').value;
    const aboutInput = document.getElementById('aboutInput').value;

    document.getElementById('name').innerText = nameInput ? nameInput : "Your Name";
    document.getElementById('about').innerText = aboutInput ? aboutInput : "A short description about yourself.";
}

function toggleViewMore() {
    const moreText = document.getElementById('moreText');
    const viewMoreBtn = document.getElementById('viewMoreBtn');

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        viewMoreBtn.innerText = "View Less";
    } else {
        moreText.style.display = "none";
        viewMoreBtn.innerText = "View More";
    }
}
