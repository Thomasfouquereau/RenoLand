const nomImg = [
  {
    id: 0,
    nom: 'De Plomberie',
    url: './addon/img plomb.jpg'
  },
  {
    id: 1,
    nom: 'D\'Électricité',
    url: './addon/ing elec.jpg'
  },
  {
    id: 2,
    nom: 'De Pompe à Chaleur',
    url: 'https://i.ibb.co/0nQqZ1r/Plomberie.jpg'
  }
];

const classOffre = document.querySelector('.offres');
const classImg = document.querySelector('.img-offre');

let index = 0;

function changerOffre() {
  const tl = gsap.timeline({
    defaults: { duration: 0.3, ease: 'power2.inOut' }
  });

  tl.to(classOffre, { opacity: 0 }, "<0");
  tl.to(classImg, { opacity: 0 }, "<0");

  tl.call(() => {
    const item = nomImg.find(item => item.id === index);
    classOffre.innerHTML = item.nom;
    index = (index + 1) % nomImg.length;
    classImg.src = item.url;
    index = (index + 1) % nomImg.length;
  });

  tl.to(classOffre, { opacity: 1 }, "<0");
  tl.to(classImg, { opacity: 1 }, "<0");
}

changerOffre();

setInterval(changerOffre, 10000);



const loader = document.querySelector('.loader-div');

gsap.to(loader, {
  duration: 0.5,
  scale: 0,
  ease: 'power2.inOut',
  delay: 2
});

setTimeout(() => {
  loader.style.display = 'none';
}, 2500);


const nameClient = document.querySelector('.content-name');
const layout = document.querySelector('.content-layout');
const previewImg = document.querySelector('.preview-img');
const previewImg1 = document.querySelector('.preview-img1');
const previewImg2 = document.querySelector('.preview-img2');
const previewImg3 = document.querySelector('.preview-img3');

const client = [
  {
    id: 0,
    name: 'Sophie',
    layout: 'pour ça cuisine.',
    url: './addon/pexels-mark-mccammon-1080721.jpg'
  },
  {
    id: 1,
    name: 'Maxime',
    layout: 'pour son jardin.',
    url: './addon/pexels-mark-mccammon-2724748.jpg'
  },
  {
    id: 2,
    name: 'Nadia',
    layout: 'pour ces combles.',
    url: './addon/pexels-pixabay-210687.jpg'
  },
  {
    id: 3,
    name: 'Antoine',
    layout: 'pour ça salle de bain.',
    url: './addon/pexels-rene-asmussen-1358900.jpg'
  }
];


let indexClient = 0;
let indexClient1 = 3;
let indexClient2 = 2;
let indexClient3 = 1;

// Initialise les images avec les URL des clients correspondants
previewImg.src = client[0].url;
previewImg1.src = client[3].url;
previewImg2.src = client[2].url;
previewImg3.src = client[1].url;

function changerClient() {
  const tl = gsap.timeline({
    defaults: { duration: 0.7, ease: Power0.easeOut }
  });

  // Animation de sortie
  tl.to(nameClient, { opacity: 0 }, "<0");
  tl.to(layout, { opacity: 0 }, "<0");
  tl.to(previewImg, { opacity: 0.5 }, "<0");
  tl.to(previewImg1, { opacity: 0.5 }, "<0");
  tl.to(previewImg2, { opacity: 0.5 }, "<0");
  tl.to(previewImg3, { opacity: 0.5 }, "<0");

  tl.call(() => {
    // Met à jour le client affiché
    indexClient = (indexClient + 1) % client.length;
    const item = client.find(item => item.id === indexClient);
    nameClient.innerHTML = item.name;
    layout.innerHTML = item.layout;
    previewImg.src = item.url;

    // Met à jour les images en décalant l'index
    indexClient1 = (indexClient1 + 1) % client.length;
    const item1 = client.find(item => item.id === indexClient1);
    previewImg1.src = item1.url;

    indexClient2 = (indexClient2 + 1) % client.length;
    const item2 = client.find(item => item.id === indexClient2);
    previewImg2.src = item2.url;

    indexClient3 = (indexClient3 + 1) % client.length;
    const item3 = client.find(item => item.id === indexClient3);
    previewImg3.src = item3.url;
  });
  
  // Animation d'entrée
  tl.to(nameClient, { opacity: 1 }, "<0");
  tl.to(layout, { opacity: 1 }, "<0");
  tl.to(previewImg, { opacity: 1 }, "<0");
  tl.to(previewImg1, { opacity: 1 }, "<0");
  tl.to(previewImg2, { opacity: 1 }, "<0");
  tl.to(previewImg3, { opacity: 1 }, "<0");
}


changerClient();

setInterval(changerClient, 10000);