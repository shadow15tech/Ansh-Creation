/* ==========================================
   shop.js - DYNAMIC SHOP & WHATSAPP LOGIC
   ========================================== */

window.addEventListener('load', () => {
    
    // SAFETY CHECK: Ensure the grid exists
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return; 



    
    // 1. The Product Database 
    const products = [
        {
            id: 1,
            title: "4-Leg Handmade Fabric Elephant",
            category: "toys",
            // price: "199",
            image: "Assets/img/Fabric Toys & keychains/photo 1.webp",
            categoryLabel: "Fabric Toys"
        },
        {
            id: 2,
            title: "4-Leg Handmade Fabric Giraffe",
            category: "toys",
            // price: "249",
            image: "Assets/img/Fabric Toys & keychains/photo 2.webp", 
            categoryLabel: "Fabric Toys"
        },
        {
            id: 3,
            title: "2-Leg Handmade Fabric Cat",
           category: "toys",
            // price: "599",
            image: "Assets/img/Fabric Toys & keychains/photo 3.webp", 
            categoryLabel: "Fabric Toys"
        },
        // {
        //     id: 4,
        //     title: "2-Leg Handmade Fabric Dinosaur",
        //    category: "toys",
        //     // price: "1,299",
        //     image: "Assets/img/Fabric Toys & keychains/photo 4.png", 
        //     categoryLabel: "Fabric Toys"
        // },
        // {
        //     id: 5,
        //     title: "4-Leg Handmade Fabric Rabbit",
        //     category: "toys",
        //     // price: "299",
        //     image: "Assets/img/Fabric Toys & keychains/photo 5.png", 
        //     categoryLabel: "Fabric Toys"
        // },
        {
            id: 6,
            title: "4-Leg Handmade Fabric Dog",
           category: "toys",
            // price: "799",
            image: "Assets/img/Fabric Toys & keychains/photo 6.webp",
            categoryLabel: "Fabric Toys"
        },
        // {
        //     id: 7,
        //     title: "4-Leg Handmade Fabric Camel",
        //    category: "toys",
        //     // price: "2,499",
        //     image: "Assets/img/Fabric Toys & keychains/photo 7.png", 
        //     categoryLabel: "Fabric Toys"
        // } ,

         {
            id: 8,
            title: " Handmade Fabric Keychains",
           category: "toys",
            // price: "2,499",
            image: "Assets/img/Fabric Toys & keychains/Keychains.webp", 
            categoryLabel: "Fabric Keychains"
        } ,


         {
            id: 9,
            title: "Handmade Fabric Keychains",
           category: "toys",
            // price: "2,499",
            image: "Assets/img/Fabric Toys & keychains/Keychains 1.webp", 
            categoryLabel: "Fabric Keychains"
        } ,








         {
            id: 10,
            title: "Handmade Fabric Laptop Cover Without Handle",
            category: "office",
            // price: "2,499",
            image: "Assets/img/Office supplies/photo 1.webp", 
            categoryLabel: "Office supplies"
        } ,
         
        //  {
        //     id: 11,
        //     title: "Handmade Fabric Purse",
        //     category: "office",
        //     // price: "2,499",
        //     image: "Assets/img/Office supplies/photo 2.png", 
        //     categoryLabel: "Office supplies"
        // },

         {
            id: 12,
            title: "Handmade Fabric Purse",
            category: "office",
            // price: "2,499",
            image: "Assets/img/Office supplies/photo 3.webp", 
            categoryLabel: "Office supplies"
        } ,

         {
            id: 13,
            title: "Handmade Fabric Laptop Cover With Handle",
            category: "office",
            // price: "2,499",
            image: "Assets/img/Office supplies/photo 4.webp", 
            categoryLabel: "Office supplies"
        } ,

        //  {
        //     id: 14,
        //     title: "Handmade Fabric Purse",
        //     category: "office",
        //     // price: "2,499",
        //     image: "Assets/img/Office supplies/photo 5.png", 
        //     categoryLabel: "Office supplies"
        // }  , 

         {
            id: 15,
            title: "Handmade Fabric Laptop Cover",
            category: "office",
            // price: "2,499",
            image: "Assets/img/Office supplies/photo 6.webp", 
            categoryLabel: "Office supplies"
        } ,

         {
            id: 16,
            title: "Handmade Fabric Laptop Cover",
            category: "office",
            // price: "2,499",
            image: "Assets/img/Office supplies/photo 7.webp", 
            categoryLabel: "Office supplies"
        } ,

         {
            id: 17,
            title: "Handmade Fabric Laptop Cover With Handle",
            category: "office",
            // price: "2,499",
            image: "Assets/img/Office supplies/photo 8.webp", 
            categoryLabel: "Office supplies"
        } ,
        
         {
            id: 18,
            title: "Handmade Fabric Laptop Cover With Handle",
            category: "office",
            // price: "2,499",
            image: "Assets/img/Office supplies/photo 9.webp", 
            categoryLabel: "Office supplies"
        } ,

        {
            id: 19,
            title: "Handmade Home Decor Elephant Family",
            category: "decor",
            // price: "2,499",
            image: "Assets/img/Home decore/photo 1.webp", 
            categoryLabel: "Home decore"
        } , 

        //  {
        //     id: 20,
        //     title: "Handmade Home Decor Elephant Family",
        //     category: "decor",
        //     // price: "2,499",
        //     image: "Assets/img/Home decore/photo 2.png", 
        //     categoryLabel: "Home decore"
        // } ,

         {
            id: 21,
            title: "Handmade Home Decor Cat Family",
            category: "decor",
            // price: "2,499",
            image: "Assets/img/Home decore/photo 3.webp", 
            categoryLabel: "Home decore"
        } ,
         {
            id: 22,
            title: "Handmade Home Decor Dinosaur Family",
           category: "decor",
            // price: "2,499",
            image: "Assets/img/Home decore/photo 4.webp", 
            categoryLabel: "Home decore"
        } ,

         {
            id: 23,
            title: "Handmade Home Decor Rabbit Family",
            category: "decor",
            // price: "2,499",
            image: "Assets/img/Home decore/photo 5.webp", 
            categoryLabel: "Home decore"
        } ,
         {
            id: 24,
            title: "Handmade Home Decor Duck Family",
            category: "decor",
            // price: "2,499",
            image: "Assets/img/Home decore/photo 6.webp", 
            categoryLabel: "Home decore"
        } ,
         {
            id: 25,
            title: "Handmade Home Decor Dragon Family",
            category: "decor",
            // price: "2,499",
            image: "Assets/img/Home decore/photo 7.webp", 
            categoryLabel: "Home decore"
        } ,

         {
            id: 26,
            title: "Handmade Home Decor ",
            category: "decor",
            // price: "2,499",
            image: "Assets/img/Home decore/photo 8.webp", 
            categoryLabel: "Home decore"
        } ,

          {
            id: 27,
            title: "Handmade Home Decor ",
            category: "decor",
            // price: "2,499",
            image: "Assets/img/Home decore/photo 9.webp", 
            categoryLabel: "Home decore"
        } ,

          {
            id: 28,
            title: "Handmade Home Decor ",
            category: "decor",
            // price: "2,499",
            image: "Assets/img/Home decore/photo 10.webp", 
            categoryLabel: "Home decore"
        } ,


         {
            id: 29,
            title: "Handmade Fabric accessories",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/photo 1.webp", 
            categoryLabel: "Accessories"
        },
         {
            id: 30,
            title: "Handmade Fabric accessories",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/photo 2.webp", 
            categoryLabel: "Accessories"
        },
         {
            id: 31,
            title: "Handmade Cotton Fabric Scrunchies ",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/photo 3.webp", 
            categoryLabel: "Accessories"
        } ,
         {
            id: 32,
            title: "Handmade Cottan fabric scrunchies",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/photo 4.webp", 
            categoryLabel: "Accessories"
        } ,

        //  {
        //     id: 33,
        //     title: "Handmade Fabric Hairband",
        //     category: "accessories",
        //     // price: "2,499",
        //     image: "Assets/img/Accessories/acc 1.png", 
        //     categoryLabel: "Accessories"
        // } ,

        //  {
        //     id: 34,
        //     title: "Handmade Fabric Hairband",
        //     category: "accessories",
        //     // price: "2,499",
        //     image: "Assets/img/Accessories/acc 2.png", 
        //     categoryLabel: "Accessories"
        // } ,

         {
            id: 35,
            title: "Handmade Fabric Hairband",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/acc 3.webp", 
            categoryLabel: "Accessories"
        } ,

         {
            id: 36,
            title: "Handmade Organza Scrunchies",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/acc 4.webp", 
            categoryLabel: "Accessories"
        } ,

         {
            id: 37,
            title: "Handmade Organza Scrunchies",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/acc 5.webp", 
            categoryLabel: "Accessories"
        } ,

         {
            id: 38,
            title: "Handmade Satin Scrunchies",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/acc 6.webp", 
            categoryLabel: "Accessories"
        } ,

        //  {
        //     id: 39,
        //     title: "Handmade Cotton Fabric Scrunchies",
        //     category: "accessories",
        //     // price: "2,499",
        //     image: "Assets/img/Accessories/acc 7.png", 
        //     categoryLabel: "Accessories"
        // } ,

        //  {
        //     id: 40,
        //     title: "Handmade Cotton Fabric Scrunchies",
        //     category: "accessories",
        //     // price: "2,499",
        //     image: "Assets/img/Accessories/acc 8.png", 
        //     categoryLabel: "Accessories"
        // } ,

         {
            id: 41,
            title: "Handprinted With Embroidary Diary",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/acc 9.webp", 
            categoryLabel: "Accessories"
        } ,

         {
            id: 42,
            title: "Clutch",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/clutch.jpeg", 
            categoryLabel: "Accessories"
        } ,

         {
            id: 43,
            title: "Handprinted With Embroidary Diary",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/diary 2.webp", 
            categoryLabel: "Accessories"
        } ,

         {
            id: 44,
            title: "Handprinted With Embroidary Diary",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/diary 3.webp", 
            categoryLabel: "Accessories"
        } ,

         {
            id: 45,
            title: " Handprinted With Embroidary Diary",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/diary 4.webp", 
            categoryLabel: "Accessories"
        } ,
         {
            id: 46,
            title: " Handmade Cotton Fabric Diary",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/diary 5.webp", 
            categoryLabel: "Accessories"
        } ,


          {
            id: 47,
            title: "Handmade Duffle Bag",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/duffal bag.jpeg", 
            categoryLabel: "Accessories"
        } ,



         {
            id: 48,
            title: "Handmade Fabric Slipers",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/slippers.jpeg", 
            categoryLabel: "Accessories"
        } ,
        

         {
            id: 49,
            title: "Handmade Mobile Sling",
            category: "accessories",
            // price: "2,499",
            image: "Assets/img/Accessories/mobile siling.jpeg", 
            categoryLabel: "Accessories"
        } ,
        
        //  {
        //     id: 50,
        //     title: "Handmade Fabric Purse",
        //     category: "bags",
        //     // price: "2,499",
        //     image: "Assets/img/Bags & pouches/photo 1.png", 
        //     categoryLabel: "Bags & pouches"
        // } ,
         {
            id: 51,
            title: "Handmade Fabric Coin Pouche",
            category: "bags",
            // price: "2,499",
            image: "Assets/img/Bags & pouches/photo 2.jpg", 
            categoryLabel: "Bags & pouches"
        } ,
         {
            id: 52,
            title: "Handmade Fabric Square Pouch",
            category: "bags",
            // price: "2,499",
            image: "Assets/img/Bags & pouches/photo 3.jpg", 
            categoryLabel: "Bags & pouches"
        } ,
         {
            id: 53,
            title: "Handmade Fabric Pouches",
            category: "bags",
            // price: "2,499",
            image: "Assets/img/Bags & pouches/photo 4.jpg", 
            categoryLabel: "Bags & pouches"
        } ,
         {
            id: 54,
            title: "Handmade Fabric Square Pouche",
            category: "bags",
            // price: "2,499",
            image: "Assets/img/Bags & pouches/photo 5.webp", 
            categoryLabel: "Bags & pouches"
        } ,
         {
            id: 55,
            title: "Set of Three toiletry pouches",
            category: "bags",
            // price: "2,499",
            image: "Assets/img/Bags & pouches/photo 6.webp", 
            categoryLabel: "Bags & pouches"
        } ,
         {
            id: 56,
            title: "Handmade Fabric Purse",
            category: "bags",
            // price: "2,499",
            image: "Assets/img/Bags & pouches/photo 7.webp", 
            categoryLabel: "Bags & pouches"
        } ,

         {
            id: 57,
            title: "Handmade Fabric Square  Pouch",
            category: "bags",
            // price: "2,499",
            image: "Assets/img/Bags & pouches/photo 8.webp", 
            categoryLabel: "Bags & pouches"
        } ,
         {
            id: 58,
            title: "Handmade Crochet",
            category: "crochet",
            // price: "2,499",
            image: "Assets/img/crochet/cro 1.jpeg", 
            categoryLabel: "Crochet Art"
        } ,

         {
            id: 59,
            title: "Handmade Crochet",
            category: "crochet",
            // price: "2,499",
            image: "Assets/img/crochet/cro 2.jpeg", 
            categoryLabel: "Crochet Art"
        } ,

        //  {
        //     id: 60,
        //     title: "Handmade Crochet",
        //     category: "crochet",
        //     // price: "2,499",
        //     image: "Assets/img/crochet/cro 3.jpeg", 
        //     categoryLabel: "Crochet Art"
        // } ,

         {
            id: 61,
            title: "Handmade Crochet",
            category: "crochet",
            // price: "2,499",
            image: "Assets/img/crochet/cro 4.jpeg", 
            categoryLabel: "Crochet Art"
        } ,

         {
            id: 62,
            title: "Handmade Crochet",
            category: "crochet",
            // price: "2,499",
            image: "Assets/img/crochet/cro 5.jpeg", 
            categoryLabel: "Crochet Art"
        } ,

        //  {
        //     id: 63,
        //     title: "Handmade Crochet",
        //     category: "crochet",
        //     // price: "2,499",
        //     image: "Assets/img/crochet/cro 6.jpeg", 
        //     categoryLabel: "Crochet Art"
        // } ,

         {
            id: 64,
            title: "Handmade Crochet",
            category: "crochet",
            // price: "2,499",
            image: "Assets/img/crochet/cro 7.jpeg", 
            categoryLabel: "Crochet Art"
        } ,

         {
            id: 65,
            title: "Handmade Crochet",
            category: "crochet",
            // price: "2,499",
            image: "Assets/img/crochet/cro 8.jpeg", 
            categoryLabel: "Crochet Art"
        } ,

         {
            id: 66,
            title: "Handmade Crochet",
            category: "crochet",
            // price: "2,499",
            image: "Assets/img/crochet/cro 9.jpeg", 
            categoryLabel: "Crochet Art"
        } ,

         {
            id: 67,
            title: "Handmade Crochet",
            category: "crochet",
            // price: "2,499",
            image: "Assets/img/crochet/cro 10.jpeg", 
            categoryLabel: "Crochet Art"
        } ,

        {
            id: 68,
            title: "Handmade fabric Plain Sunglasses Cover",
            category: "Sunglass",
            // price: "2,499",
            image: "Assets/img/sunglasses cover/sunglass 1.webp", 
            categoryLabel: "sunglasses"
        } ,

        //   {
        //     id: 69,
        //     title: "Handmade fabric Plain Sunglasses Cover",
        //     category: "Sunglass",
        //     // price: "2,499",
        //     image: "Assets/img/sunglasses cover/sunglass 2.png", 
        //     categoryLabel: "sunglasses"
        // } ,

        //   {
        //     id: 70,
        //     title: "Handmade febric Sunglasses Cover",
        //     category: "Sunglass",
        //     // price: "2,499",
        //     image: "Assets/img/sunglasses cover/sunglass 3.png", 
        //     categoryLabel: "sunglasses"
        // } ,

        //   {
        //     id: 72,
        //     title: "Handmade febric Sunglasses Cover",
        //     category: "Sunglass",
        //     // price: "2,499",
        //     image: "Assets/img/sunglasses cover/sunglass 4.png", 
        //     categoryLabel: "sunglasses"
        // } ,

        //   {
        //     id: 73,
        //     title: "Handmade febric Sunglasses Cover",
        //     category: "Sunglass",
        //     // price: "2,499",
        //     image: "Assets/img/sunglasses cover/sunglass 5.png", 
        //     categoryLabel: "sunglasses"
        // } ,

        //   {
        //     id: 74,
        //     title: "Handmade febric Sunglasses Cover",
        //     category: "Sunglass",
        //     // price: "2,499",
        //     image: "Assets/img/sunglasses cover/sunglass 6.png", 
        //     categoryLabel: "sunglasses"
        // } ,

        //   {
        //     id: 75,
        //     title: "Handmade febric Sunglasses Cover",
        //     category: "Sunglass",
        //     // price: "2,499",
        //     image: "Assets/img/sunglasses cover/sunglass 7.png", 
        //     categoryLabel: "sunglasses"
        // } ,

          {
            id: 76,
            title: "Handmade Fabric Box Pattern Sunglasses Cover",
            category: "Sunglass",
            // price: "2,499",
            image: "Assets/img/sunglasses cover/sunglass 8.webp", 
            categoryLabel: "sunglasses"
        } ,

          {
            id: 77,
            title: "Handmade fabric Box Pattern  Sunglasses Cover",
            category: "Sunglass",
            // price: "2,499",
            image: "Assets/img/sunglasses cover/sunglass 9.webp", 
            categoryLabel: "sunglasses"
        } ,

        //   {
        //     id: 78,
        //     title: "Handmade fabric Quelted Sunglasses Cover",
        //     category: "Sunglass",
        //     // price: "2,499",
        //     image: "Assets/img/sunglasses cover/sunglass 10.png", 
        //     categoryLabel: "sunglasses"
        // } ,

          {
            id: 79,
            title: "Handmade fabric Quelted Sunglasses Cover",
            category: "Sunglass",
            // price: "2,499",
            image: "Assets/img/sunglasses cover/sunglass 11.webp", 
            categoryLabel: "sunglasses"
        } ,

          {
            id: 80,
            title: "Handmade fabric Quelted Sunglasses Cover",
            category: "Sunglass",
            // price: "2,499",
            image: "Assets/img/sunglasses cover/sunglass 12.webp", 
            categoryLabel: "sunglasses"
        } ,
       
         {
            id: 81,
            title: "Gift Hamper",
            category: "Gift",
            // price: "2,499",
            image: "Assets/img/Gift hampers/photo 1.webp", 
            categoryLabel: "Gift Hamper"
        } ,
       
         {
            id: 82,
            title: "Gift Hamper",
            category: "Gift",
            // price: "2,499",
            image: "Assets/img/Gift hampers/photo 2.webp", 
            categoryLabel: "Gift Hamper"
        } ,
       
         {
            id: 83,
            title: "Gift Hamper",
            category: "Gift",
            // price: "2,499",
            image: "Assets/img/Gift hampers/photo 3.webp", 
            categoryLabel: "Gift Hamper"
        } ,
       
        {
            id: 84,
            title: "Gift Hamper",
            category: "Gift",
            // price: "2,499",
            image: "Assets/img/Gift hampers/photo 4.jpeg", 
            categoryLabel: "Gift Hamper"
        } ,
       









        
    ];

    const filterButtons = document.querySelectorAll('.filter-btn');

    // 2. Build the HTML Grid in Memory
    function renderProducts(productArray) {
        let htmlContent = ''; 

        productArray.forEach(product => {
            const whatsappNumber = "919509763013";
            const message = `Hello Ansh Creation! I am interested in buying the "${product.title}" 
          
          
            Is it currently available?`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            htmlContent += `
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <span class="product-category">${product.categoryLabel}</span>
                       <img src="${product.image}"alt="${product.title}"loading="lazy"decoding="async">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                      <p class="product-price">Contact Us for Price</p>
                        <a href="${whatsappURL}" target="_blank" class="buy-btn">
                            <i class="fab fa-whatsapp"></i> Buy via WhatsApp
                        </a>
                    </div>
                </div>
            `;
        });

        // Inject the final HTML into the grid
        productGrid.innerHTML = htmlContent;
    }

   




    // =========================
// Category Filter Function
// =========================
function filterCategory(category) {

    // Active button
    filterButtons.forEach(btn => btn.classList.remove("active"));

    const activeBtn = document.querySelector(
        `.filter-btn[data-filter="${category}"]`
    );

    if (activeBtn) {
        activeBtn.classList.add("active");
    }

    // Render products
    if (category === "all") {
        renderProducts(products);
    } else {
        const filteredProducts = products.filter(
            product => product.category === category
        );
        renderProducts(filteredProducts);
    }
}

// =========================
// Button Click Events
// =========================
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.filter;

        filterCategory(category);

        // Optional: update URL
        history.replaceState(null, "", `shop.html?cat=${category}`);

    });

});

// =========================
// Initial Load
// =========================
const params = new URLSearchParams(window.location.search);
const urlCategory = params.get("cat");

if (urlCategory) {

    filterCategory(urlCategory);

} else {

    // Default category when opening shop.html
    filterCategory("toys");

}
});



