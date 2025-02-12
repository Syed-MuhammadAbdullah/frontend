let a = document.getElementById("main");

a.addEventListener("click", () => {
    let heading = document.querySelector("#hero h1");

    heading.innerHTML = `Welcome to My Website <br> 
    <span id="name" style="font-size: 40px; color: yellow; opacity: 0; transform: translateY(-50px); transition: opacity 1.5s linear, transform 6s linear;">Syed Muhammad Abdullah</span>`;

setTimeout(() => {
    let name = document.getElementById("name");
    name.style.opacity = "1";
    name.style.transform = "translateY(0)"; // Slide from top
}, 100);


});
