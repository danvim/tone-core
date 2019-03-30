import Protocol from "./Protocol";
import Coordinates from "./Coordinates";
import Game from "./Game";
declare const _default: {
    Protocol: typeof Protocol;
    Coordinates: {
        Axial: typeof import("./Coordinates").Axial;
        Cartesian: typeof import("./Coordinates").Cartesian;
        HexCube: typeof import("./Coordinates").HexCube;
    };
    Game: {
        Tile: typeof import("./Game/Tile");
    };
};
export default _default;
export { Protocol, Coordinates, Game };
