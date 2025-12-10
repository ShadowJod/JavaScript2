function getUsers(){
  fetch("https://randomuser.me/api/?results=5")
  .then((raw) => raw.json())
  .then((data) => {
    document.querySelector('.container').innerHTML = '';
    data.results.forEach((user) => {
      // Create main profile card div
      const card = document.createElement("div");
      card.className = "profile-card";

      // Create image element
      const img = document.createElement("img");
      img.src = user.picture.large;
      img.alt = "Profile";

      // Create name
      const name = document.createElement("h2");
      name.textContent = user.name.first;

      // Create role
      const role = document.createElement("p");
      role.textContent = user.phone;

      // Create email
      const email = document.createElement("p");
      email.textContent = user.email;

      // Append all elements inside card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(email);

      // Finally, add card to page
      document.querySelector('.container').appendChild(card);
    });
  })
  .catch((err) => console.log(err));

}


document.querySelector('button')
.addEventListener('click',()=>{
  getUsers();
})