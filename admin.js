/* ==========================================
   JS: ADMIN DASHBOARD INTERACTIONS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    // Open Sidebar on Mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    // Close Sidebar on Mobile
    if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Optional: Close sidebar if user clicks outside of it on mobile
    document.addEventListener('click', (event) => {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggle && window.innerWidth <= 992) {
            sidebar.classList.remove('active');
        }
    });
});


// --- MODAL POPUP LOGIC ---
const addProductBtn = document.querySelector('.add-new-btn');
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelBtn');

// Open Modal
if (addProductBtn && productModal) {
    addProductBtn.addEventListener('click', () => {
        productModal.classList.add('active');
    });
}

// Close Modal Functions
function closeModal() {
    productModal.classList.remove('active');
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

// Close Modal when clicking outside the card
window.addEventListener('click', (event) => {
    if (event.target === productModal) {
        closeModal();
    }
});

// Prevent form submission page reload (for layout testing)
const addProductForm = document.getElementById('addProductForm');
if (addProductForm) {
    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Product details processed (Front-end only).');
        closeModal();
        addProductForm.reset();
    });
}


// --- DYNAMIC TABLE UPDATE LOGIC ---
const productForm = document.getElementById('addProductForm');
const tableBody = document.querySelector('.data-table tbody');

if (productForm) {
    productForm.addEventListener('submit', (e) => {
        e.preventDefault(); // पेज को रिफ्रेश होने से रोकेगा

        // 1. फॉर्म से डेटा (Values) लेना
        const name = document.getElementById('productName').value;
        const categorySelect = document.getElementById('productCategory');
        const category = categorySelect.options[categorySelect.selectedIndex].text;
        const price = document.getElementById('productPrice').value;
        const imageUrl = document.getElementById('productImage').value;
        const statusValue = document.getElementById('productStatus').value;

        // 2. स्टेटस बैज (Badge) के लिए क्लास और टेक्स्ट सेट करना
        let statusClass = 'status-active';
        let statusText = 'In Stock';
        
        if (statusValue === 'low_stock') {
            statusClass = 'status-warning';
            statusText = 'Low Stock';
        } else if (statusValue === 'out_of_stock') {
            statusClass = 'status-danger'; // इसके लिए CSS में एक क्लास जोड़ देंगे
            statusText = 'Out of Stock';
        }

        // 3. टेबल के लिए नई Row (<tr>) बनाना
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><img src="${imageUrl}" alt="Product" class="table-thumb"></td>
            <td><strong>${name}</strong></td>
            <td>${category}</td>
            <td>₹${price}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="action-btn edit"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete" onclick="this.closest('tr').remove()"><i class="fas fa-trash"></i></button>
            </td>
        `;

        // 4. नई Row को टेबल में सबसे ऊपर जोड़ना
        tableBody.insertBefore(newRow, tableBody.firstChild);

        // 5. फॉर्म क्लियर करना और मोडल बंद करना
        productForm.reset();
        closeModal();
        
        alert(`${name} has been added to your inventory!`);
    });
}



/* ==========================================
   JS: TAB NAVIGATION SYSTEM
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabSections = document.querySelectorAll('.tab-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // Check if link has a target section (Prevents errors on empty links)
            const targetId = this.getAttribute('data-target');
            if(!targetId) return; 

            e.preventDefault();

            // 1. Remove 'active' class from all Sidebar links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // 2. Add 'active' class to the clicked link
            this.classList.add('active');

            // 3. Hide all content sections
            tabSections.forEach(section => section.classList.remove('active'));
            // 4. Show the matching content section
            document.getElementById(targetId).classList.add('active');

            // Optional: Auto-close sidebar on mobile after clicking a link
            if (window.innerWidth <= 992) {
                document.getElementById('sidebar').classList.remove('active');
            }
        });
    });
});