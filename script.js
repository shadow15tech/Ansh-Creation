// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the "active" class on the nav-links when menu is clicked
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Optional: Change the icon from 'bars' to 'times' (X)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked (useful for single-page scrolling)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
}

function nextSlide(){

    let next = current + 1;

    if(next >= slides.length){
        next = 0;
    }

    showSlide(next);
}

function prevSlide(){

    let prev = current - 1;

    if(prev < 0){
        prev = slides.length - 1;
    }

    showSlide(prev);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        showSlide(index);
    });
});

/* Auto Slide */

setInterval(()=>{
    nextSlide();
},5000);

/* Swipe */

let startX = 0;

document.querySelector(".hero-slider")
.addEventListener("touchstart",(e)=>{
    startX = e.changedTouches[0].screenX;
});

document.querySelector(".hero-slider")
.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].screenX;

    if(startX - endX > 50){
        nextSlide();
    }

    if(endX - startX > 50){
        prevSlide();
    }

});


/* ==========================================
   JS: VOCAL FOR LOCAL BADGE INTERACTION
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const badgeWrapper = document.querySelector('.circular-badge-wrapper');
    const rotatingRing = document.querySelector('.rotating-tags-ring');

    if (badgeWrapper && rotatingRing) {
        // When user hovers over the artisan graphic
        badgeWrapper.addEventListener('mouseenter', () => {
            // Speed up the text rotation slightly on hover for active feedback
            rotatingRing.style.animationDuration = '12s';
        });

        // When user leaves the container
        badgeWrapper.addEventListener('mouseleave', () => {
            // Restore smooth, slow continuous rotation
            rotatingRing.style.animationDuration = '25s';
        });
    }
});




/* ==========================================
   JS: CAREER CONTROLLER INTERACTION
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.mesh-pillar-card');
    const blocks = document.querySelectorAll('.narrative-content-block');

    if (cards.length > 0 && blocks.length > 0) {
        cards.forEach(card => {
            // Register interaction handlers for cross-platform modern displays
            const triggerEvent = 'click'; 

            card.addEventListener(triggerEvent, function() {
                // 1. Remove active state from current node selection layers
                cards.forEach(c => c.classList.remove('active'));
                blocks.forEach(b => b.classList.remove('active'));

                // 2. Set state parameters on active selection targets
                this.classList.add('active');
                
                const targetId = this.getAttribute('data-target');
                const targetBlock = document.getElementById(targetId);
                
                if (targetBlock) {
                    targetBlock.classList.add('active');
                }
            });
        });
    }
});



/* ==========================================
   JS: CAREER PAGE INTERACTION (SECTION 2)
   EMPOWERMENT JOURNEY STAGE SWAPPER
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('#empower-timeline .timeline-item');
    const visualDataBox = document.getElementById('visual-data-box');

    // Define stage data in an easily editable object (Backend emulation)
    const stageData = {
        1: {
            title: "Enrollment Day",
            desc: "Matching her potential with the collective's goal.",
            image: "https://images.unsplash.com/photo-1605650117075-8025251410f9?q=80&w=600"
        },
        2: {
            title: "Structured Skill Training",
            desc: "Learning the precision of crochet and traditional assembly.",
            image: "https://images.unsplash.com/photo-1597820300951-6c2e7f8fc6bc?q=80&w=600"
        },
        3: {
            title: "Fixed-Wage Production",
            desc: "Earning her first salary in a safe, dignified environment.",
            image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=600"
        },
        4: {
            title: "Financial Independence",
            desc: "Achieving true autonomy and supporting her family's future.",
            image: "https://images.unsplash.com/photo-1590483840742-b7e64ccba950?q=80&w=600"
        }
    };

    if (timelineItems.length > 0 && visualDataBox) {
        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                
                // 1. Update Timeline Active State
                timelineItems.forEach(t => t.classList.remove('active'));
                item.classList.add('active');

                // 2. Clear visualizer content and animate in new data
                visualDataBox.innerHTML = ''; 
                
                const stageNum = item.getAttribute('data-stage');
                const data = stageData[stageNum];

                const stageHTML = `
                    <div class="overlay-inner active">
                        <span class="overlay-stage-num">0${stageNum}</span>
                        <h3 class="overlay-stage-title">${data.title}</h3>
                        <p>${data.desc}</p>
                    </div>
                `;
                
                // Use setTimeout to ensure the fade-out/fade-in animation triggers correctly
                setTimeout(() => {
                    visualDataBox.innerHTML = stageHTML;
                }, 50); 
            });
        });
    }
});



/* ==========================================
   JS: CAREER PAGE INTERACTION (SECTION 3)
   RESELLER LEAD CAPTURE FORM CONTROLLER
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const resellerForm = document.getElementById('resellerForm');

    if (resellerForm) {
        resellerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload during form processing

            // 1. Gather Field Variables for Backend Processing (or email services like EmailJS)
            const formData = {
                name: document.getElementById('reseller-name').value,
                email: document.getElementById('reseller-email').value,
                phone: document.getElementById('reseller-phone').value,
                businessType: document.getElementById('reseller-type').value,
                message: document.getElementById('reseller-msg').value
            };

            // 2. Simple Client Feedback Simulation (Can be connected to your direct database later)
            console.log("Reseller Application Data Staged Successfully:", formData);

            // Turn button state to loading placeholder
            const submitBtn = resellerForm.querySelector('.submit-partner-btn');
            const originalBtnContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Processing Application...</span> <i class="fas fa-spinner fa-spin"></i>`;

            setTimeout(() => {
                // Restore button state and notify user
                submitBtn.innerHTML = `<span>Application Submitted!</span> <i class="fas fa-check-circle"></i>`;
                submitBtn.style.backgroundColor = '#27ae60'; // Success green background override

                alert(`Thank you, ${formData.name}! Your request has been received. Our wholesale distribution coordinator will review your business parameters and contact you via WhatsApp shortly.`);
                
                resellerForm.reset();
            }, 1800);
        });
    }
});

// Simple Reveal Animation for Agency Credit
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const credit = document.querySelector('.agency-credit');
if(credit) {
    credit.style.opacity = '0';
    credit.style.transform = 'translateY(20px)';
    credit.style.transition = 'all 0.8s ease-out';
    observer.observe(credit);
}


    document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('customOrderForm');

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const name = document.getElementById('clientName').value;
            
            alert(`Thank you, ${name}! Your custom order request has been received. Our team will contact you shortly.`);
            
            this.reset();
        });
    }
});