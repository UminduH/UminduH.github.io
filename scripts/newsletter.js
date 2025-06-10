import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  limit,
} from "https://www.gstatic.com/firebasejs/11.8.0/firebase-firestore.js";

export function newsletterFunctionality() {
  handleEmailSubscription();

  function handleEmailSubscription() {
    const form = document.getElementById("js-newsletter-form");
    const emailInput = document.getElementById("js-newsletter-email-input");
    const messageDiv = document.getElementById("js-newsletter-message");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Disable button for a short duration to prevent multiple clicks/submits
      form.querySelector("button").disabled = true;
      setTimeout(() => (form.querySelector("button").disabled = false), 2000);

      const email = emailInput.value.trim();
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValidEmail) {
        messageDiv.textContent = "Please enter a valid email address.";
        messageDiv.className = "newsletter-message error";
      } else {
        try {
          // Check if email already exists
          const querySnapshot = await getDocs(
            query(
              collection(db, "subscribers"),
              where("email", "==", email),
              limit(1)
            )
          );

          if (!querySnapshot.empty) {
            messageDiv.textContent = "You're already subscribed!";
            messageDiv.className = "newsletter-message info";
          } else {
            // Add new email
            await addDoc(collection(db, "subscribers"), {
              email: email,
              timestamp: new Date(),
            });

            messageDiv.textContent =
              "You're subscribed! Check your inbox for updates.";
            messageDiv.className = "newsletter-message success";
            emailInput.value = "";
          }

          if (window.messageTimeout) clearTimeout(window.messageTimeout);

          window.messageTimeout = setTimeout(() => {
            messageDiv.classList.add("fade-out");
          }, 4000);
        } catch (error) {
          console.error("Subscription failed: ", error);
          messageDiv.textContent = "Something went wrong. Please try again.";
          messageDiv.className = "newsletter-message error";
        }
      }
    });
  }
}
