const table = document.querySelector("tbody");
fetch("http://localhost:8080/med")
  .then((res) => res.json())
  .then((data) => {
    if (data.length > 0) {
      data.forEach((item) => {
        const tr = table.insertRow();

        const td1 = tr.insertCell();
        td1.textContent = item.name;
        td1.classList = "med-list-name";
        const td2 = tr.insertCell();
        td2.textContent = item.desc;
        td2.classList = "med-list-inside";
        const td3 = tr.insertCell();
        td3.textContent = item.year;
        td3.classList = "med-list-inside";
      });
    }
  });
