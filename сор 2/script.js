let like = document.getElementById('like');
let kolichestvo = document.getElementById('kolichestvo');
let count = 1;
like.addEventListener('click', function() {
    count++;
    kolichestvo.textContent = count;
});
function addComment() {
    let text = document.getElementById("pole").value;
    let newcomment = document.createElement("div");
    newcomment.textContent = text;

    let commentsContainer = document.getElementById("divcomment");
    commentsContainer.appendChild(newcomment);

    document.getElementById("pole").value = "";
}
