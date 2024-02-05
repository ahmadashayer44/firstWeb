function add() {
  let urlInput = document.getElementById("urlInput");
  let type = document.getElementById("typeSelector");

  let arr1 = JSON.parse(localStorage.getItem("arr1")) || [];
  let arr2 = JSON.parse(localStorage.getItem("arr2")) || [];
  let arr3 = JSON.parse(localStorage.getItem("arr3")) || [];

  const selectedValue = type.value;

  const url = urlInput.value;

  if (selectedValue === "American") {
    arr1.push(url);
  } else if (selectedValue === "Turkish") {
    arr2.push(url);
  } else {
    arr3.push(url);
  }

  localStorage.setItem("arr1", JSON.stringify(arr1));
  localStorage.setItem("arr2", JSON.stringify(arr2));
  localStorage.setItem("arr3", JSON.stringify(arr3));
}

function back() {
  window.location.href = "showMenu.html";
}
