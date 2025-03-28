window.navDropdownClicked = function() {
    var x = document.getElementById("dropdownNav");
    x.classList.toggle("show");
}

window.onload = function () {
    // header injection 
    fetch("/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").outerHTML = data;
        });

    // footer injection
    fetch("/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").outerHTML = data;

            //footer date
            document.getElementById("year").textContent = new Date().getFullYear();
        });
}