console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

function addComment() {
  const textComment = document.getElementById("comment-writing").value;
  if (textComment === "") {
    return;
  }
  const li = document.createElement("li");

  const commentItem = document.createElement("div");
  commentItem.className = "comment-item";

  const commentAuthor = createAuthor();
  const commentContent = createCommentContent(textComment);

  commentItem.appendChild(commentAuthor);
  commentItem.appendChild(commentContent);
  li.appendChild(commentItem);
  document.querySelector(".comment-list").appendChild(li);
  alert("댓글이 등록 되었습니다.");
  document.getElementById("comment-writing").value = "";
}

function createImage() {
  const img = document.createElement("img");
  img.src = "./images/comment-author-icon.png";
  img.alt = "사용자 프로필 이미지";
  return img;
}

function createSpan() {
  const span = document.createElement("span");
  span.textContent = "방문자";
  return span;
}

function createCommentContent(textComment) {
  const commentContent = document.createElement("div");
  commentContent.className = "comment-content";
  commentContent.textContent = textComment;
  return commentContent;
}

function createAuthor() {
  const commentAuthor = document.createElement("div");
  commentAuthor.className = "comment-author";

  const img = createImage();
  const span = createSpan();
  commentAuthor.appendChild(img);
  commentAuthor.appendChild(span);
  return commentAuthor;
}
