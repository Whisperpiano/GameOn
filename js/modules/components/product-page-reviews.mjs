import { createRandomStars } from "./templates/main-slider-template.mjs";
import { randomTime } from "../utils/random-time.mjs";
export function updateUserReviews(usersArray) {
    const usersAvatars = document.querySelectorAll(".avatar");
      usersAvatars.forEach((avatar, index) => {
        avatar.src = usersArray[index].avatar;
      });
  
      const userNicknames = document.querySelectorAll(".user-nickname");
      userNicknames.forEach((nickname, index) => {
        nickname.textContent = usersArray[index].username;
      });
  
      const userTimeReviews = document.querySelectorAll(".user-time");
      const randomTimes = [...userTimeReviews].map(() => randomTime());
      const orderedTimes = randomTimes.sort((a, b) => a - b);
      userTimeReviews.forEach((userTime, index) => {
        userTime.textContent = `${orderedTimes[index]} minutes ago`;
      });
  
      const userReviews = document.querySelectorAll(".user-quantity");
      userReviews.forEach((review) => {
        review.textContent = `Reviews: ${randomTime()}`;
      });
  
      const userReviewsTitle = document.querySelectorAll(".review-title");
      userReviewsTitle.forEach((title, index) => {
        title.textContent = usersArray[index].comment_title;
      });
  
      const userReviewsComment = document.querySelectorAll(".review-comment");
      userReviewsComment.forEach((comment, index) => {
        comment.textContent = usersArray[index].video_game_comment;
      });
  
      const starsContainer = document.querySelectorAll(".stars-container");
      starsContainer.forEach((container, index) => {
        const randomNumber1to5 = Math.floor(Math.random() * 4) + 2;
        const stars = createRandomStars();
        for (let i = 0; i < randomNumber1to5; i++) {
          const star = createRandomStars();
          container.appendChild(star);
        }
      });
  }