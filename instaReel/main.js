const reelsData = [
  {
    profileImg:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "nikhil_codes",
    videoSrc: "videos/short1.mp4",
    caption: "Learning React everyday! 💻🔥",
    bgImage: "https://source.unsplash.com/random/800x1200/?coding,technology",
    likeCount: 1200,
    isliked : true,
    shareCount: 150,
    commentCount: 85,
    follow: false,
    isfollow: false,
    ismute : true,
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "tech_girl",
    videoSrc: "videos/short2.mp4",
    caption: "Frontend vibes ✨ #HTML #CSS #JS",
    bgImage: "https://source.unsplash.com/random/800x1200/?frontend,laptop",
    likeCount: 980,
    isliked : false,
    shareCount: 95,
    commentCount: 60,
    follow: true,
    isfollow : true,
    ismute : false,
  },
  // {
  //   profileImg:
  //     "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   username: "anime_world",
  //   videoSrc: "videos/vid3.mp4",
  //   caption: "Naruto is ❤️ Believe it! 🍥",
  //   bgImage: "https://source.unsplash.com/random/800x1200/?anime,art",
  //   likeCount: 4500,
  //   isliked : false,
  //   shareCount: 320,
  //   commentCount: 210,
  //   follow: false,
  // },
  // {
  //   profileImg:
  //     "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   username: "fitness_mania",
  //   videoSrc: "videos/vid4.mp4",
  //   caption: "Gym day — no excuses 💪🔥",
  //   bgImage: "https://source.unsplash.com/random/800x1200/?gym,fitness",
  //   likeCount: 2200,
  //   isliked : false,
  //   shareCount: 180,
  //   commentCount: 140,
  //   follow: false,
  // },
  // {
  //   profileImg:
  //     "https://plus.unsplash.com/premium_photo-1664875849194-0adbac28529f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   username: "travel_buddy",
  //   videoSrc: "videos/vid5.mp4",
  //   caption: "Exploring new places 🌍✈️",
  //   bgImage: "https://source.unsplash.com/random/800x1200/?travel,nature",
  //   likeCount: 3500,
  //   isliked : false,
  //   shareCount: 400,
  //   commentCount: 260,
  //   follow: true,
  // },
  // {
  //   profileImg:
  //     "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   username: "foodie_life",
  //   videoSrc: "videos/vid6.mp4",
  //   caption: "Pasta night 🍝❤️",
  //   bgImage: "https://source.unsplash.com/random/800x1200/?food,restaurant",
  //   likeCount: 1900,
  //   isliked : false,
  //   shareCount: 120,
  //   commentCount: 75,
  //   follow: false,
  // },
  // {
  //   profileImg:
  //     "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   username: "coder_boy",
  //   videoSrc: "videos/vid7.mp4",
  //   caption: "Debugging = Brain Exercise 🧠💡",
  //   bgImage: "https://source.unsplash.com/random/800x1200/?code,monitor",
  //   likeCount: 2500,
  //   isliked : false,
  //   shareCount: 160,
  //   commentCount: 110,
  //   follow: true,
  // },
  // {
  //   profileImg:
  //     "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ",
  //   username: "dance_vibes",
  //   videoSrc: "videos/vid8.mp4",
  //   caption: "Dance like nobody’s watching 💃✨",
  //   bgImage: "https://source.unsplash.com/random/800x1200/?dance,stage",
  //   likeCount: 4100,
  //   isliked : false,
  //   shareCount: 350,
  //   commentCount: 300,
  //   follow: false,
  // },
  // {
  //   profileImg:
  //     "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   username: "pet_lovers",
  //   videoSrc: "videos/vid9.mp4",
  //   caption: "My dog = My happiness 🐶❤️",
  //   bgImage: "https://source.unsplash.com/random/800x1200/?dog,cute",
  //   likeCount: 2800,
  //   isliked : false,
  //   shareCount: 200,
  //   commentCount: 130,
  //   follow: false,
  // },
  // {
  //   profileImg:
  //     "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   username: "motivator_daily",
  //   videoSrc: "videos/vid10.mp4",
  //   caption: "Stay consistent, success will follow 🚀🔥",
  //   bgImage: "https://source.unsplash.com/random/800x1200/?motivation,success",
  //   likeCount: 5200,
  //   isnCount: 350,
  //   follow: true,
  // },
];
let allreel = document.querySelector("#allReels");
let button =  document.querySelector("button")

function addData(){
    let count = "";
  reelsData.forEach((e, idx) => {
    count += `<div class="reel">
          <video ${e.ismute?'':'muted'} autoplay loop src="${e.videoSrc}">

        </video>
          <div id="bttm">
            <div id="fllwsec">
              <img
                src="${e.profileImg}"
                alt=""
              />

              <h2>${e.username}</h2>

              <button id='${idx}' class = 'bttn' >${e.isfollow? 'Unfollow':'Follow'}</button>
            </div>

            <div id="text">
              <p>${e.caption}</p>
            </div>
          </div>
          <div class='volume' id='${idx}'> ${e.ismute? '<i class="ri-volume-up-line"></i>':'<i class="ri-volume-mute-line"></i>'
          } </div>
         
          <div id="alllogo">
            <div id = "${idx}" class="likelogo">
            ${e.isliked?`<i class="ri-heart-fill"></i>`:`<i class="ri-heart-line"></i>`}
              <p>${e.likeCount}</p>
            </div>

            <div id="commentlogo">
              <i class="ri-chat-3-line"></i>
              <p>${e.commentCount}</p>
            </div>

            <div id="sharelogo">
              <i class="ri-share-forward-fill"></i>
              <p>${e.shareCount}</p>
            </div>

            <div id="menulogo">
              <i class="ri-more-2-fill"></i>
            </div>
          </div>
        </div>`;
  });

  let allreel = document.querySelector("#allReels");
  allreel.innerHTML = count;
}

addData();

allreel.addEventListener("click", (e)=>{
  if(e.target.className === 'likelogo'){
      if(reelsData[e.target.id].isliked){
    reelsData[e.target.id].likeCount--;
    reelsData[e.target.id].isliked = false;
  }
  else{
    reelsData[e.target.id].isliked = true;
    reelsData[e.target.id].likeCount++;
  }
  addData();
  }

  if(e.target.className === 'bttn'){
    if(reelsData[e.target.id].isfollow){
      reelsData[e.target.id].isfollow = false;
    }
    else{
      reelsData[e.target.id].isfollow = true;
    }
    addData();
  }

  if(e.target.className=== 'volume'){
    if(reelsData[e.target.id].ismute){
      reelsData[e.target.id].ismute = false;
    }
    else {
      reelsData[e.target.id].ismute = true;
    }
    addData();
  }
  
  
  
})



