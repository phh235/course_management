/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) => {
    const toggle = document.getElementById(toggleId),
        sidebar = document.getElementById(sidebarId),
        main = document.getElementById(mainId)

    if (toggle && sidebar && main) {
        toggle.addEventListener('click', () => {
            /* Show sidebar */
            sidebar.classList.toggle('show-sidebar')
            /* Add padding main */
            main.classList.toggle('main-pd')
        })
    }
}
showSidebar('header-toggle', 'sidebar', 'main')

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__link')

function linkColor() {
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))

// User cố tình truy cập Admin
document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra roleName trong localStorage
    const roleName = JSON.parse(localStorage.getItem('loggedInUser')).role.roleName;
    if (roleName === "User") {
        window.location.href = '/404';
    }
});

// Xóa loggedInUser trong localStorage
document.getElementById('logoutButton').addEventListener('click', function () {
    // Xóa thông tin người dùng khỏi localStorage
    localStorage.removeItem('loggedInUser');
    // Chuyển hướng đến trang đăng nhập
    window.location.href = '/account/dang-nhap';
});