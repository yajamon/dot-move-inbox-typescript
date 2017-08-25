import { Game } from "../application/game";
export interface GameRenderer {
    render: (game: Game) => void;
}
