function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
};
function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    document.querySelector('body').innerHTML =
    `
    <p> Welcome Holberton </p>
    <button id="Spooky">Spooky</button>
    <button id="Dark-Mode">Dark Mode</button>
    <button id="Scream-Mode">Scream Mode</button>
    `;
    document.getElementById("Spooky").addEventListener ("click", spooky);
    document.getElementById("Dark-Mode").addEventListener ("click", darkMode);
    document.getElementById("Scream-Mode").addEventListener ("click", screamMode);
};
main();

