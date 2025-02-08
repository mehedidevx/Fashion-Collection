let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "./images/white-tshirt.png",
      },
      {
        productName: "Classic Blue T-Shirt",
        category: "Topwear",
        price: "35",
        image: "./images/blue-tshirt.png",
      },
      {
        productName: "Graphic Printed Tee",
        category: "Topwear",
        price: "40",
        image: "./images/printed-tee.png",
      },
      {
        productName: "V-Neck Cotton Tee",
        category: "Topwear",
        price: "28",
        image: "./images/v-neck-tee.png",
      },
      {
        productName: "Striped Polo Shirt",
        category: "Topwear",
        price: "45",
        image: "./images/polo-shirt.png",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "./images/short-skirt.jpg",
      },
      {
        productName: "Denim Mini Skirt",
        category: "Bottomwear",
        price: "55",
        image: "./images/denim-skirt.jpg",
      },
      {
        productName: "Black Pencil Skirt",
        category: "Bottomwear",
        price: "60",
        image: "./images/pencil-skirt.jpg",
      },
      {
        productName: "Floral Printed Skirt",
        category: "Bottomwear",
        price: "52",
        image: "./images/floral-skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "./images/sporty-smartwatch.jpg",
      },
      {
        productName: "Casual Digital Watch",
        category: "Watch",
        price: "85",
        image: "./images/digital-watch.jpg",
      },
      {
        productName: "Luxury Gold Watch",
        category: "Watch",
        price: "199",
        image: "./images/gold-watch.jpg",
      },
      {
        productName: "Waterproof Fitness Watch",
        category: "Watch",
        price: "120",
        image: "./images/fitness-watch.jpg",
      },
      {
        productName: "Retro Analog Watch",
        category: "Watch",
        price: "150",
        image: "./images/retro-watch.jpg",
      },
      {
        productName: "Retro Analog Watch",
        category: "Watch",
        price: "150",
        image: "./images/retro-watch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "./images/knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "./images/Black-leather-jacket.jpg",
      },
      {
        productName: "Brown Suede Jacket",
        category: "Jacket",
        price: "159",
        image: "./images/suede-jacket.jpg",
      },
      {
        productName: "Hooded Winter Jacket",
        category: "Jacket",
        price: "175",
        image: "./images/winter-jacket.jpg",
      },
      {
        productName: "Casual Denim Jacket",
        category: "Jacket",
        price: "110",
        image: "./images/denim-jacket.jpg",
      },
      {
        productName: "Casual Denim Jacket",
        category: "Jacket",
        price: "110",
        image: "./images/denim-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "./images/pink-trousers.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "./images/Brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "./images/comfy-gray-pants.jpg",
      },
    ],
  };



 



products.data.forEach(i => {
    // কার্ড তৈরি
    let card = document.createElement("div");
    card.className = `card shadow-lg rounded-sm p-5 ${i.category} hidden`;

    // ইমেজ সংযুক্ত করা
    card.innerHTML = `
        <div class="image-container">
            <img class="w-full rounded-md" src="${i.image}" alt="${i.productName}">
        </div>
        <div class="container">
            <h5 class="product-name mt-2">${i.productName.toUpperCase()}</h5>
            <h5>$${i.price}</h5>
        </div>
    `;

    // DOM-এ যোগ করা
    document.getElementById("products").appendChild(card);

});



function filterProduct(value) {
    // বাটনের ক্লাস আপডেট
    document.querySelectorAll(".btn").forEach(button =>
        button.classList.toggle("bg-amber-500", value.toUpperCase() === button.innerText.toUpperCase())
    );

    // সব প্রোডাক্ট ফিল্টার করা
    document.querySelectorAll(".card").forEach(element => {
        element.classList.toggle("hidden", value !== "All" && !element.classList.contains(value));
    });

    // লোকাল স্টোরেজে "All" সেট করা (যাতে রিলোড হলে "All" থাকে)
    localStorage.setItem("selectedCategory", value);
}

// 🔹 পেজ রিফ্রেশ হলে **"All"** ক্যাটাগরি সেট করা
document.addEventListener("DOMContentLoaded", () => {
    filterProduct("All"); // সবসময় "All" ক্যাটাগরি থাকবে
});


document.getElementById("search-input").addEventListener("keyup", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    document.querySelectorAll(".card").forEach(card => {
        let name = card.querySelector(".product-name").innerText.toUpperCase();
        card.classList.toggle("hidden", !name.includes(searchInput));
    });
});



