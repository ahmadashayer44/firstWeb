function sendEmail() {
  let name = document.getElementById("gmail");
  let info = document.getElementById("messageInfo");
  Email.send({
    SecureToken: "85a71cbc-0cd7-46e3-82cc-2a2b1b59e661",
    Host: "smtp.elasticemail.com",
    Username: "ashayera44@gmail.com",
    Password: "6D22E12F9D0FBB4F674DA73E7C3BE615FAE3",
    To: "ashayera44@gmail.com",
    From: "ashayera44@gmail.com",
    Subject: `Info about movie studio site from ${name.value}`,
    Body: info.value,
  }).then((message) => alert(message));

  fetch("../js_files/inboxMail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `msg=${info.value}`,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.success) {
        alert("Sent Email to the admin!");
      } else {
        alert("Already Sent!");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function back() {
  window.location.href = "showMenuForUsers.html";
}
