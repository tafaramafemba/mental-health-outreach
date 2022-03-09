const toggleButton = document.getElementsByClassName('menu')[0];
const navbarLinks = document.getElementsByClassName('nav-div')[0];
const x = document.querySelector('.cancel-img');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.add('active');
  toggleButton.style.display = 'none';
  x.style.display = 'block';
});

function closer() {
  x.style.display = 'none';
  navbarLinks.classList.remove('active');
  toggleButton.style.display = 'block';
}
x.addEventListener('click', closer);

const speakers = [
  {
    Images: ['Images/Tafara.png', 'Images/Mudiwa.PNG', 'Images/Anne.PNG', 'Images/lj.PNG', 'Images/Josh.PNG', 'Images/Tanya.PNG'],
    name: ['Tafara Mafemba', 'Mudiwa Biti', 'Anne Rose', 'Livingstone Mavunga', 'Rodney Mukonori', 'Tanya Ndiyamba'],
    role: ['Founder of "My Brothers Keeper Mental Health"', 'Mental Health Nurse', 'School Guidance Counsellor', 'HR Consultant', 'Mental Health Advocate', 'Pediatrician and Counsellor'],
    about: ['Tafara focuses on opening a safe space for men to open up about mental health issues.',
      'Mudiwa has been working with mental health patients for 12 years and has a plethora of experience under his belt.',
      'Anne has a lot of experience dealing with young adults trying to figure out life and protecting their mental health.',
      'As a former HR Manager at Microsoft, Livingstone has worked with all kinds of people from all over the world and has seen all kinds of mental health issues in the workplace.',
      'Rodney is the founder of AllKidsHealth, which is an organization that focuses on mental health for children.',
      'As a Pediatrician, Tanya has had experience dealing with parents who have had to deal with having children with terminal illnesses.',
    ],

  },
];

const container = document.querySelector('.speakers-container');
for (let i = 0; i < 6; i += 1) {
  container.innerHTML = `<div class="speaker">
  <img src="${speakers[0].Images[0]}" class="speaker-img">
  <div class="sp-info">
    <h2 class="sp-name"><b>${speakers[0].name[0]}</b></h2>
    <h3 class="sp-role">${speakers[0].role[0]}</h3>
    <hr class="sp-hr">
    <p class="sp-descrip">${speakers[0].about[0]}</p>
  </div>
  
</div>
<div class="speaker ">
  <img src="${speakers[0].Images[1]}" class="speaker-img-one">
  <div class="sp-info">
    <h2 class="sp-name"><b>${speakers[0].name[1]}</b></h2>
    <h3 class="sp-role">${speakers[0].role[1]}</h3>
    <hr class="sp-hr">
    <p class="sp-descrip">${speakers[0].about[1]}</p>
  </div>
  
</div>
<div class="speaker one">
<img src="${speakers[0].Images[2]}" class="speaker-img">
  <div class="sp-info">
    <h2 class="sp-name"><b>${speakers[0].name[2]}</b></h2>
    <h3 class="sp-role">${speakers[0].role[2]}</h3>
    <hr class="sp-hr">
    <p class="sp-descrip">${speakers[0].about[2]}</p>
  </div>
  
</div>
<div class="speaker two">
<img src="${speakers[0].Images[3]}" class="speaker-img">
  <div class="sp-info">
    <h2 class="sp-name"><b>${speakers[0].name[3]}</b></h2>
    <h3 class="sp-role">${speakers[0].role[3]}</h3>
    <hr class="sp-hr">
    <p class="sp-descrip">${speakers[0].about[3]}</p>
  </div>
</div>
<div class="speaker three">
<img src="${speakers[0].Images[4]}" class="speaker-img">
  <div class="sp-info">
    <h2 class="sp-name"><b>${speakers[0].name[4]}</b></h2>
    <h3 class="sp-role">${speakers[0].role[4]}</h3>
    <hr class="sp-hr">
    <p class="sp-descrip">${speakers[0].about[4]}</p>
  </div>
</div>
<div class="speaker four">
<img src="${speakers[0].Images[5]}" class="speaker-img">
  <div class="sp-info">
    <h2 class="sp-name"><b>${speakers[0].name[5]}</b></h2>
    <h3 class="sp-role">${speakers[0].role[5]}</h3>
    <hr class="sp-hr">
    <p class="sp-descrip">${speakers[0].about[5]}</p>
  </div>
</div>`;
}
