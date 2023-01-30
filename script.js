const usersDiv = document.querySelector(".usersDiv");

const allUsers = [{
        id: 1,
        name: "BaeChu",
        image: "https://i.pinimg.com/564x/a1/eb/cb/a1ebcbf863ac437636c14909b2891fb9.jpg",
    },
    {
        id: 2,
        name: "Kim KAI",
        image: "https://i.pinimg.com/564x/80/75/e0/8075e08788c3a04afd004608d01e6044.jpg",
    },
    {
        id: 3,
        name: "LILI",
        image: "https://i.pinimg.com/564x/94/92/a9/9492a92d800a410acce07081baf621dd.jpg",
    },
    {
        id: 4,
        name: "RUTO",
        image: "https://i.pinimg.com/564x/5a/51/fc/5a51fca617cb8b83f05ee82403aa525b.jpg",
    },
    {
        id: 5,
        name: "MINJI",
        image: "https://i.pinimg.com/564x/d9/82/e2/d982e2ea72418d1aff5fcd5d70c10d9e.jpg",
    },
    {
        id: 6,
        name: "Joo Hyuk",
        image: "https://i.pinimg.com/564x/ef/0c/64/ef0c64291ed76a4119820983ff7c3549.jpg",
    },
    {
        id: 7,
        name: "HYO",
        image: "https://i.pinimg.com/564x/6b/f1/23/6bf12391ddc9b387682cf75bc172d3f9.jpg",
    },
    {
        id: 8,
        name: "Hyunsukie",
        image: "https://i.pinimg.com/564x/ab/0a/c3/ab0ac375bf3c98f560878fa719db44d3.jpg",
    },
    {
        id: 9,
        name: "BoA",
        image: "https://i.pinimg.com/564x/e1/f0/87/e1f0878d2996331b2d7685331c710d8b.jpg",
    },
    {
        id: 10,
        name: "In Yeop",
        image: "https://i.pinimg.com/736x/a0/7a/ea/a07aeac49b602958618505ffbe1bd62f.jpg",
    },
];

for (let i = 0; i < 10; i++) {
    const userDiv = document.createElement("div");
    userDiv.classList.add("userDiv");
    const img = document.createElement("img");
    img.src = allUsers[i].image;
    img.classList.add("img");
    const userName = document.createElement("div");
    userName.textContent = allUsers[i].name;
    userName.classList.add("userName");
    const piniconsDiv = document.createElement("div");
    piniconsDiv.classList.add("iconDiv");
    const pinicons = document.createElement("i");
    pinicons.classList.add("fa-solid", "fa-thumbtack", "icon");
    const miciconsDiv = document.createElement("div");
    miciconsDiv.classList.add("iconDiv");
    const micicons = document.createElement("i");
    micicons.classList.add("fa-solid", "fa-microphone", "icon");
    const removeiconsDiv = document.createElement("div");
    removeiconsDiv.classList.add("iconDiv");
    const removeicons = document.createElement("i");
    removeicons.classList.add("fa-solid", "fa-circle-minus", "icon");
    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");
    piniconsDiv.append(pinicons);
    miciconsDiv.append(micicons);
    removeiconsDiv.append(removeicons);
    iconsDiv.append(piniconsDiv, miciconsDiv, removeiconsDiv);
    console.log(iconsDiv);
    userDiv.append(img, userName, iconsDiv);
    console.log(usersDiv);
    usersDiv.append(userDiv);
};