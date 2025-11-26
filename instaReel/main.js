const reelsData = [
  {
    profileImg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "nikhil_codes",
    videoSrc : "vid1.m",
    caption: "Learning React everyday! 💻🔥",
    bgImage: "https://source.unsplash.com/random/800x1200/?coding,technology",
    likeCount: 1200,
    shareCount: 150,
    commentCount: 85,
    follow: false
  },
  {
    profileImg: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "tech_girl",
    videoSrc : "vid2.mp4",
    caption: "Frontend vibes ✨ #HTML #CSS #JS",
    bgImage: "https://source.unsplash.com/random/800x1200/?frontend,laptop",
    likeCount: 980,
    shareCount: 95,
    commentCount: 60,
    follow: true
  },
  {
    profileImg: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "anime_world",
    videoSrc : "vid3.mp4",
    caption: "Naruto is ❤️ Believe it! 🍥",
    bgImage: "https://source.unsplash.com/random/800x1200/?anime,art",
    likeCount: 4500,
    shareCount: 320,
    commentCount: 210,
    follow: false
  },
  {
    profileImg: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "fitness_mania",
    videoSrc : "vid4.mp4",
    caption: "Gym day — no excuses 💪🔥",
    bgImage: "https://source.unsplash.com/random/800x1200/?gym,fitness",
    likeCount: 2200,
    shareCount: 180,
    commentCount: 140,
    follow: false
  },
  {
    profileImg: "https://plus.unsplash.com/premium_photo-1664875849194-0adbac28529f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "travel_buddy",
    videoSrc : "vid5.mp4",
    caption: "Exploring new places 🌍✈️",
    bgImage: "https://source.unsplash.com/random/800x1200/?travel,nature",
    likeCount: 3500,
    shareCount: 400,
    commentCount: 260,
    follow: true
  },
  {
    profileImg: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "foodie_life",
    videoSrc : "vid6.mp4",
    caption: "Pasta night 🍝❤️",
    bgImage: "https://source.unsplash.com/random/800x1200/?food,restaurant",
    likeCount: 1900,
    shareCount: 120,
    commentCount: 75,
    follow: false
  },
  {
    profileImg: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "coder_boy",
    videoSrc : "vid7.mp4",
    caption: "Debugging = Brain Exercise 🧠💡",
    bgImage: "https://source.unsplash.com/random/800x1200/?code,monitor",
    likeCount: 2500,
    shareCount: 160,
    commentCount: 110,
    follow: true
  },
  {
    profileImg: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ",
    username: "dance_vibes",
    videoSrc : "vid8.mp4",
    caption: "Dance like nobody’s watching 💃✨",
    bgImage: "https://source.unsplash.com/random/800x1200/?dance,stage",
    likeCount: 4100,
    shareCount: 350,
    commentCount: 300,
    follow: false
  },
  {
    profileImg: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "pet_lovers",
    videoSrc : "vid9.mp4",
    caption: "My dog = My happiness 🐶❤️",
    bgImage: "https://source.unsplash.com/random/800x1200/?dog,cute",
    likeCount: 2800,
    shareCount: 200,
    commentCount: 130,
    follow: false
  },
  {
    profileImg: "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "motivator_daily",
    videoSrc : "vid10.mp4",
    caption: "Stay consistent, success will follow 🚀🔥",
    bgImage: "https://source.unsplash.com/random/800x1200/?motivation,success",
    likeCount: 5200,
    shareCount: 480,
    commentCount: 350,
    follow: true
  }
];

let count = ''
reelsData.forEach((e)=>{
    count+=`<div class="reel">
          <video muted autoplay loop src="${e.videoSrc}">

        </video>

          <div id="bttm">
            <div id="fllwsec">
              <img
                src="${e.profileImg}"
                alt=""
              />

              <h2>${e.username}</h2>

              <button>Follow</button>
            </div>

            <div id="text">
              <p>${e.caption}</p>
            </div>
          </div>

          <div id="alllogo">
            <div id="likelogo">
              <i class="ri-heart-line"></i>
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
          </div>
        </div>`
    
})

let allreel = document.querySelector("#allReels");
allreel.innerHTML = count;