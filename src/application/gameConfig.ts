import { Size } from "../domain/size";
import { GameRenderer } from "../presentation/gameRenderer";
export interface GameConfig {
    renderer: GameRenderer;
    worldSize: Size;
}
