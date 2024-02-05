document.addEventListener("DOMContentLoaded", function () {
  fetch("../js_files/retrieveInboxMails.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.userAndMsg.forEach((mail) => {
        const h1 = document.createElement("h1");
        h1.textContent = `Message from ${mail.Username}-->${mail.message}`;
        h1.style.fontFamily = "cursive";
        h1.style.color = "white";
        h1.style.fontSize = "40px";

        // Corrected ID to "inboxDiv"
        document.querySelector(".inboxDiv").appendChild(h1);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
