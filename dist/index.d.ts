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
        Building: typeof import("./Game/Building");
        Customization: typeof import("./Game/Customization");
        FightingStyle: typeof import("./Game/FightingStyle");
        Race: typeof import("./Game/Race");
        UnitType: typeof import("./Game/UnitType");
        Tile: typeof import("./Game/Tile");
    };
};
export default _default;
export { Protocol, Coordinates, Game };
