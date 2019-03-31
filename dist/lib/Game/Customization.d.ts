import { Race } from './Race';
export interface Customization {
    players: {
        [rtcId in string]: {
            displayName: string;
            color: string;
            race: Race;
        };
    };
    mapOptions: {};
}
