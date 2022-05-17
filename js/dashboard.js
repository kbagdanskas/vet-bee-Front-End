const table = document.querySelector("tbody");
fetch("http://localhost:8080/pet")
  .then((res) => res.json())
  .then((data) => {
    if (data.length > 0) {
      data.forEach((item) => {
        const tr = table.insertRow();

        const td1 = tr.insertCell();
        td1.textContent = item.name;
        td1.classList = "pet-list-name";
        const td2 = tr.insertCell();
        td2.textContent = item.year;
        td2.classList = "pet-list-inside";
        const td3 = tr.insertCell();
        td3.textContent = item.email;
        td3.classList = "pet-list-inside";
        const td4 = tr.insertCell();
        td4.classList = "btn-flex";
        let btnOrange = document.createElement("button");
        btnOrange.innerHTML = "View Log";
        btnOrange.classList = "btn-orange";
        td4.appendChild(btnOrange);
        let btnOrangeBorder = document.createElement("button");
        btnOrangeBorder.innerHTML = "Delete";
        btnOrangeBorder.classList = "btn-orange-border";
        td4.appendChild(btnOrangeBorder);
      });
    }
  });
