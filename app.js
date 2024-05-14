const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];
let choosenPr= products[0]
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productImg = document.querySelector(".productImg");
const productColors = document.querySelectorAll(".color");
const productSizes = document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

     choosenPr = products[index];


      productTitle.textContent=choosenPr.title;
      productPrice.textContent="$"+choosenPr.price;
      productImg.src=choosenPr.colors[0].img;

      productColors.forEach((color,index) =>{
      color.style.backgroundColor=choosenPr.colors[index].code;
      });
      });
    });

productColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        productImg.src = choosenPr.colors[index].img;
    })
})

productSizes.forEach((size,index)=>
size.addEventListener("click",()=>{
    productSizes.forEach((size)=>{
        size.style.backgroundColor="#f5f5f5";
    size.style.color="black";
    })
    size.style.backgroundColor="black";
    size.style.color="white";
}))

let buyButton = document.querySelector(".productButton")
let payment = document.querySelector(".payment");
let Close =document.querySelector(".close");

buyButton.addEventListener("click",()=>{
    payment.style.display="flex";
})
Close.addEventListener("click",()=>{
    payment.style.display="none";
})