const openHam = document.getElementById('openHam');
const closeHam = document.getElementById('closeHam');
const menu = document.querySelector('.menu-lists');
const menuLinks = document.querySelectorAll('.item');
const projectsSide = document.getElementById('projects');
const modal = document.getElementById('modal');

openHam.addEventListener('click', () => {
  menu.classList.toggle('show');

  openHam.classList.add('hide');
  closeHam.classList.remove('hide');
});

closeHam.addEventListener('click', () => {
  menu.classList.toggle('show');

  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
});

menuLinks.forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('show');
  openHam.classList.remove('hide');
}));

const projects = [
  {
    id: 1,
    name: 'Tonic',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featureImg: 'assets/images/snapshoot-portfolio.png',
    technology: ['html', 'css', 'javascript'],
    platform: 'CANOPY',
    stack: 'Back End Dev',
    year: 2015,
    liveLink: '#',
    linkSource: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featureImg: 'assets/images/Snapshoot-portfolio-4.png',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2015,
    liveLink: '#',
    linkSource: '#',
  },
  {
    id: 3,
    name: 'Facebook 360',
    desc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featureImg: 'assets/images/Snapshoot-portfolio-1.png',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2015,
    liveLink: '#',
    linkSource: '#',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featureImg: 'assets/images/Snapshoot-portfolio-2.png',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'Uber',
    stack: 'Lead Developer',
    year: 2018,
    liveLink: '#',
    linkSource: '#',
  },

  {
    id: 5,
    name: 'Portfolio Website',
    desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featureImg: 'assets/images/Snapshoot-portfolio-3.png',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'Instagram',
    stack: 'Full Stack Dev',
    year: 2016,
    liveLink: '#',
    linkSource: '#',
  },

];

function generateProduct() {
  projectsSide.innerHTML = projects.map((product) => `
<div class="projects">
<img src=${product.featureImg} alt="project 1" class="project-image">
<div>
    <div class="project-details">
        <h2 class="project-tile">${product.name}</h2>
        <div class="stack-year">
            <h3 class="title">${product.platform}</h3>
            <img src="assets/icons/Counter.png" alt="counter">
            <h4 class="lang-year">${product.stack}</h4>
            <img src="assets/icons/Counter.png" alt="counter">
            <h4 class="lang-year">${product.year}</h4>
        </div>
    </div>
    <p class="detail-text">${product.desc}</p>
    <ul class="btns">
    ${product.technology.map((x) => `<li class="btn">${x}</li>`).join('')}
    </ul>
    <button class="detail-btn see-p" id=${product.id}>See project</button>
</div>
</div>
`).join('');
}

projectsSide.addEventListener('click', (e) => {
  modal.classList.remove('hide');
  if (e.target.classList.contains('detail-btn')) {
    const id = parseFloat(e.target.id);
    const search = projects.find((x) => x.id === id);
    if (search !== undefined) {
      modal.innerHTML = `
    <div class="card">
    <div class="card-top">
        <h2>${search.name}</h2>
        <img src="assets/icons/Iconclosepop.png" alt="close pop" id="closePop">
    </div>
    <div class="card-middle">
        <h3>${search.platform}</h3>
        <ul>
            <li>${search.stack}</li>
            <li>${search.year}</li>
        </ul>
    </div>
  
   
        <img src=${search.featureImg} alt="portfolio image" class="card-feature-image">
        <div class="card-center">
        <p class="details">${search.desc}</p>
    <div class="card-bottom">
        <ul class="card-library">
        ${search.technology.map((x) => `<li class="library-stack">${x}</li>`).join('')}
        </ul>

        <div class="card-button">
            <a class="card-button-live" href=${search.liveLink}>
                See live
                <img src="assets/icons/live-Icon.png" alt="link" class="test">
            </a>

            <a class="card-button-source" href=${search.linkSource}>
                See source
                <img src="assets/icons/sourcecode-vector.png" alt="link" class="test">
            </a>
        </div>
    </div>
    </div>
</div>
    
    `;
    }
  }
  generateProduct();
});

modal.addEventListener('click', (e) => {
  if (e.target.id === 'closePop') {
    modal.classList.add('hide');
  }
  generateProduct();
});

generateProduct();