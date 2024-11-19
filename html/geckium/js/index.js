function radioboxes() {
    
    let radiobox1 = document.getElementById("func1");
    let radiobox2 = document.getElementById("func2");
    let radiobox3 = document.getElementById("func3");
    let radiobox4 = document.getElementById("func4");
    let radiobox5 = document.getElementById("func5");

    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let chromeimg = document.getElementById("chromeimg");
    let us_button = document.getElementById("dl_us");

    if (radiobox1.classList.contains("ok")) { radiobox1.style.pointerEvents = "none"; }
    if (radiobox2.classList.contains("ok")) { radiobox2.style.pointerEvents = "none"; }
    if (radiobox3.classList.contains("ok")) { radiobox3.style.pointerEvents = "none"; }
    if (radiobox4.classList.contains("ok")) { radiobox4.style.pointerEvents = "none"; }
    if (radiobox5.classList.contains("ok")) { radiobox5.style.pointerEvents = "none"; }

    radiobox1.addEventListener("click", function() {
        radiobox2.classList.remove("ok");
        radiobox2.style.pointerEvents = "all";
        radiobox3.classList.remove("ok");
        radiobox3.style.pointerEvents = "all";
        radiobox4.classList.remove("ok");
        radiobox4.style.pointerEvents = "all";
        radiobox5.classList.remove("ok");
        radiobox5.style.pointerEvents = "all";
        radiobox1.classList.add("ok");

        title.innerHTML = "Multiple Designs";
        description.innerHTML = "Your choice matters, if it depends on your passed legacy. Includes designs that were majorly updated, such as: Chrome 1, 6, 11, and more.";
        chromeimg.src = "/img/design.gif";
        us_button.style.display = "none";
    });
    radiobox2.addEventListener("click", function() {
        radiobox1.classList.remove("ok");
        radiobox1.style.pointerEvents = "all";
        radiobox3.classList.remove("ok");
        radiobox3.style.pointerEvents = "all";
        radiobox4.classList.remove("ok");
        radiobox4.style.pointerEvents = "all";
        radiobox5.classList.remove("ok");
        radiobox5.style.pointerEvents = "all";
        radiobox2.classList.add("ok");

        title.innerHTML = "Dark Mode";
        description.innerHTML = "To keep your eyes brightness away. It hadn't been existed, so we built it.";
        chromeimg.src = "/img/dark.png";
        us_button.style.display = "none";
    });
    radiobox3.addEventListener("click", function() {
        radiobox1.classList.remove("ok");
        radiobox1.style.pointerEvents = "all";
        radiobox2.classList.remove("ok");
        radiobox2.style.pointerEvents = "all";
        radiobox4.classList.remove("ok");
        radiobox4.style.pointerEvents = "all";
        radiobox5.classList.remove("ok");
        radiobox5.style.pointerEvents = "all";
        radiobox3.classList.add("ok");

        title.innerHTML = "Chromium Themes support";
        description.innerHTML = "With this userscript, it can support Chromium/Edge themes. (not extensions, unfortunately)";
        chromeimg.src = "/img/theme.png";
        us_button.style.display = "block";
    });
    radiobox4.addEventListener("click", function() {
        radiobox1.classList.remove("ok");
        radiobox1.style.pointerEvents = "all";
        radiobox2.classList.remove("ok");
        radiobox2.style.pointerEvents = "all";
        radiobox3.classList.remove("ok");
        radiobox3.style.pointerEvents = "all";
        radiobox5.classList.remove("ok");
        radiobox5.style.pointerEvents = "all";
        radiobox4.classList.add("ok");

        title.innerHTML = "Cancelled Chromium features";
        description.innerHTML = "Discover the 'Chrome You' theme, discover of what you had seened.";
        chromeimg.src = "/img/discover.png";
        us_button.style.display = "none";
    });
}
function appear() {
    title.style.animation = "0.5s appear linear";
    description.style.animation = "0.5s appear linear";
    chromeimg.style.animation = "0.5s appear linear";
}