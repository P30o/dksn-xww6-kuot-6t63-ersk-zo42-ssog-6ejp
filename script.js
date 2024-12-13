
function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

function displayMemorialCard(data) {
    preloadImage(data.imageUrl);
    const card = `
        <div class="memorial-card">
            <div class="memorial-header" style="background-image: url('${data.imageUrl}');"></div>
            <div class="memorial-content">
                <h3>${data.name}</h3>
                <p>${data.description}</p>
                <div class="memorial-footer">
                    <span class="date">تاريخ الاستشهاد: ${data.date}</span>
                    <span class="status">${data.status}</span>
                </div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
}



			
function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    const navToggleIcon = document.querySelector('.nav-toggle i');
    
    // تغيير حالة عرض الروابط
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        navToggleIcon.classList.remove('fa-times');  // إزالة أيقونة الإغلاق
        navToggleIcon.classList.add('fa-bars');     // إضافة أيقونة القائمة
    } else {
        navLinks.style.display = 'flex';
        navToggleIcon.classList.remove('fa-bars');  // إزالة أيقونة القائمة
        navToggleIcon.classList.add('fa-times');    // إضافة أيقونة الإغلاق
    }
}


// منع تكبير الصفحة عند الضغط مرتين
document.addEventListener("dblclick", function(event) {
    event.preventDefault();  // منع الحدث الافتراضي (التكبير)
});



