
    const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Austin Texas",
    location: "Texas, United States",
    dedicated: "2024, August, 17",
    area: 30000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361-icon.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Utah, United States",
    dedicated: "1995, January, 8-14",
    area: 104000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
  },
  {
    templeName: "Oakland Carlifonia",
    location: "Oakland, Carlifonia",
    dedicated: "2019, June, 16",
    area: 80157,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg"
  },
];
function creatTempleCard(temple) {
  const card = document.createElement("figure");
  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";
  img.width = 400;
  img.height = 600;

  const caption = document.createElement("figcaption");
  caption.innerHTML = `<strong>${temple.templeName}</strong><br> 
  Location: ${temple.location}<br>
  Dedicated: ${temple.dedicated}<br>
  Area: ${temple.area.toLocaleString()} sq ft`;

  card.appendChild(img);
  card.appendChild(caption);
  return card;
}
function displayTemples(filteredTemples) {
  const container = document.getElementById("Temples");
  container.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = creatTempleCard(temple);
    container.appendChild(card);
  }); 
  }
  displayTemples(temples);
  document.getElementById("home").addEventListener("click", () =>
  displayTemples(temples));

  document.getElementById("menu").addEventListener("click", function () {
    document.querySelector(".navigation").classList.toggle("show");
  });

  document.getElementById("old").addEventListener("click", () => {
    displayTemples(temples.filter(t => new
      Date(t.dedicated).getFullYear() <1900));
  });

  document.getElementById("new").addEventListener("click", () => {
    displayTemples(temples.filter(t => new
      Date(t.dedicated).getFullYear() <2000));
  });
  
  document.getElementById("large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
  });

  document.getElementById("small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000))
  });
  document.getElementById("year").textContent = new
  Date().getFullYear();
  document.getElementById("lastModified").
  textContent = `Last Modified: ${document.lastModified}`;