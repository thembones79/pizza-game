import "./style.css";
import { init } from "./init";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="game-container">
    <canvas class="game-canvas" width="352" height="198"></canvas>
  </div>
`;

init();
