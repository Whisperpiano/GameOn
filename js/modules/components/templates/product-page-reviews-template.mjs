export function oneReviewTemplate(
  username,
  comment_title,
  video_game_comment,
  verified_purchase,
  avatar
) {
  updateAvatar(avatar);
  
}

function updateAvatar(avatar) {
  const productPageReviews = document.querySelector(
    ".reviews-slide-1"
  );
  const avatars = productPageReviews.querySelectorAll(".avatar");
  for (let i = 0; i < avatars.length; i++) {
    avatars[i].src = avatar;
  }
  
}
