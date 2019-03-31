import Protocol from "./Protocol";
import Coordinates from "./Coordinates";
import Game from "./Game";

export default { ...Protocol, ...Coordinates, ...Game };
export { Protocol, Coordinates, Game };
module.exports = { ...Protocol, ...Coordinates, ...Game };

export module ToneCore {
  Protocol;
  Coordinates;
  Game;
}
