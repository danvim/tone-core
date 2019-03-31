import { Race } from "./Race";
export declare type Customization = {
    players: {
        [rtcId in string]: {
            displayName: string;
            color: string;
            race: Race;
        };
    };
    mapOptions: {};
};
