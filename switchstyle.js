// switchstyle.js - toggles between main and alternate stylesheets

(function() {
    // Set style before DOMContentLoaded to prevent flash
    const savedStyle = localStorage.getItem('site-style');
    var mainStyle = document.getElementById('main-style');
    var altStyle = document.getElementById('alt-style');
    if (mainStyle && altStyle) {
        if (savedStyle === 'alt') {
            mainStyle.disabled = true;
            altStyle.disabled = false;
        } else {
            mainStyle.disabled = false;
            altStyle.disabled = true;
        }
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('switch-style-btn');
    const mainStyle = document.getElementById('main-style');
    const altStyle = document.getElementById('alt-style');

    if (!btn || !mainStyle || !altStyle) return;

    // Set button text after style is set
    if (mainStyle.disabled) {
        btn.textContent = 'Default Style';
    } else {
        btn.textContent = 'Switch Styles';
    }

    btn.addEventListener('click', function() {
        if (mainStyle.disabled) {
            mainStyle.disabled = false;
            altStyle.disabled = true;
            btn.textContent = 'Switch Styles';
            localStorage.setItem('site-style', 'main');
        } else {
            mainStyle.disabled = true;
            altStyle.disabled = false;
            btn.textContent = 'Default Style';
            localStorage.setItem('site-style', 'alt');
        }
    });
});
