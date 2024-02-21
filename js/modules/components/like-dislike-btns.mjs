export function likeDislikeBtns() {
  const likeBtns = document.querySelectorAll(".like-btn");
  const dislikeBtns = document.querySelectorAll(".dislike-btn");
  const reportBtns = document.querySelectorAll(".report-btn");

  likeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const span = btn.querySelector("span");
      if (span.textContent === "1") {
        span.textContent = "0";
        btn.style.border = "1px solid rgba(241, 241, 241, 0.20)";
        btn.style.backgroundColor = "transparent";
      } else {
        span.textContent = "1";
        btn.style.border = "2px solid #4CAF50";
        btn.style.backgroundColor = "#4CAF50";
      }
    });
  });

  dislikeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const span = btn.querySelector("span");
      if (span.textContent === "1") {
        span.textContent = "0";
        btn.style.border = "1px solid rgba(241, 241, 241, 0.20)";
        btn.style.backgroundColor = "transparent";
      } else {
        span.textContent = "1";
        btn.style.border = "2px solid #EF5350";
        btn.style.backgroundColor = "#EF5350";
      }
    });
  });

  reportBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Reported! Thank you for your feedback.");
    });
  });
}
