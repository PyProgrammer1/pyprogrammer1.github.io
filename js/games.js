class Game {
    constructor(name, desc, url, coverIcon) {
        this.name = name;
        this.desc = desc;
        this.url = url;
        this.coverIcon = coverIcon;
    }
}

const GameTiles = {
    "minecraft18":new Game(
        "Eaglercraft 1.8",
        "Minecraft 1.8, but in a web browser!",
        "/games/games/eaglercraft1.8/",
        "/images/games/eaglercraft/cover.png"
    ),
    "minecraft112":new Game(
        "Eaglercraft 1.12",
        "Minecraft 1.12, but in a web browser!",
        "/games/games/eaglercraft1.12/",
        "/images/games/eaglercraft/cover.png"
    ),
    "minecraft18wasm": new Game(
        "Eaglercraft 1.8 WASM",
        "Minecraft 1.8, but in a web browser! Also uses WASM for performance.\nNot supported on WebKit devices like iPad or iPhone.",
        "/games/games/eaglercraft1.8wasm/",
        "/images/games/eaglercraft/cover.png"
    ),
    "minecraft112wasm": new Game(
        "Eaglercraft 1.12 WASM",
        "Minecraft 1.12, but in a web browser! Also uses WASM for performance.\nNot supported on WebKit devices like iPad or iPhone.",
        "/games/games/eaglercraft1.12wasm/",
        "/images/games/eaglercraft/cover.png"
    ),
    "beamng": new Game(
        "BeamNG.Drive",
        "BeamNG.Drive, at least something comparable to it",
        "/games/games/beamng/",
        "/images/games/beamng/cover.png"
    ),
    "deltarune": new Game(
        "DELTARUNE",
        "All 5 chapters of DELTARUNE. (painstakingly) Ported by me. It does save locally, if you're wondering.",
        "/games/games/deltarune/",
        "/images/games/deltarune/cover.png"
    )
}
tiles = document.getElementById(`tiles`);
for (const game of Object.values(GameTiles)) {
    tiles.innerHTML += `
    <a href="${game.url}">
        <div class="tile">
            <img src="${game.coverIcon}" class="tile-image">
            <h3>${game.name}</h3>
            <p>${game.desc}</p>
        </div>
    </a>
    `;
}