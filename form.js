var form = document.getElementById('form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    // window.location.reload();

    alert("Your Form Submitted Successfuly");
    location.reload();

  });
});


