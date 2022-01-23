// Local Reviews Data
const reviews = [
   {
     id: 1,
     name: "Susan Smith",
     job: "Web Developer",
     img:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
     text:
       "Hello! I am a web Developer and currently working as a free lancer. I have worked with big companies like Fb,Google,Tesla etc.",
   },
   {
     id: 2,
     name: "Anna Johnson",
     job: "Web Designer",
     img:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
     text:
       "Hey, there! I do web designing in the company",
   },
   {
     id: 3,
     name: "Peter Jones",
     job: "Intern",
     img:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
     text:
       "Hi! I just started my internship and I'm looking forward to learn a lot of new things.",
   },
   {
     id: 4,
     name: "Bill Anderson",
     job: "CEO",
     img:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
     text:
       "Hello, there! I'm the owner of the company. :)",
   },
 ];

 // to select items
const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem)
});

//show person based on item
function showPerson(person){
    const item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click',function(){
   currentItem++;
   if(currentItem > reviews.length -1){
       currentItem = 0
   }
   showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
 });

// show random person
 randomBtn.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
 });