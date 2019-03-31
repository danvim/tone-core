import Protocol from "./Protocol";
import Coordinates from "./Coordinates";
import Game from "./Game";
declare const _default: {
    Building: typeof import("./Game/Building");
    Customization: typeof import("./Game/Customization");
    FightingStyle: typeof import("./Game/FightingStyle");
    Race: typeof import("./Game/Race");
    UnitType: typeof import("./Game/UnitType");
    Tile: typeof import("./Game/Tile");
    Axial: typeof import("./Coordinates").Axial;
    Cartesian: typeof import("./Coordinates").Cartesian;
    HexCube: typeof import("./Coordinates").HexCube;
    PackageType: typeof import("./Protocol").PackageType;
};
export default _default;
export { Protocol, Coordinates, Game };
export declare module ToneCore {
}
