import * as protobuf from 'protobufjs';
import AttackMessage from '../../lib/Protocol/messages/AttackMessage';
import { BuildingType } from '../../lib/Game';
import { Axial } from '../../lib/Coordinates';
import { BuildMessage, AxialMessage } from '../../lib/Protocol/messages';

describe('typescript decorators', () => {
  it('AttackMessage', () => {
    // language=PROTO
    const proto = `
    syntax = "proto3";
    message AttackMessage {
      string sourceUid = 1;
      string targetUid = 2;
    }
    `;

    const root = protobuf.parse(proto).root;
    const protoType = root.lookupType('AttackMessage');
    const content = {
      sourceUid: 'k',
      targetUid: 'm',
    };

    const protoTypeMessage = protoType.create(content);
    const decoratorTypeMessage = AttackMessage.create(content);

    global.console.log(protoTypeMessage);
    expect(protoTypeMessage).toEqual(decoratorTypeMessage);
  });

  it('BuildMessage', () => {
    // language=PROTO
    const proto = `
    syntax = "proto3";
    message AxialMessage {
      int32 q = 1;
      int32 r = 2;
    }
    message BuildMessage {
      int32 playerId = 1;
      string uid = 2;
      int32 buildingType = 3;
      repeated AxialMessage axialCoords = 4;
      uint32 progress = 5;
    }
    `;

    const root = protobuf.parse(proto).root;
    const protoType = root.lookupType('BuildMessage');
    const content = {
      playerId: 0,
      uid: 'k',
      buildingType: BuildingType.RECLAIMATOR,
      axialCoords: [{ q: 1, r: 2 }],
      progress: 6,
    };

    const protoTypeMessage = protoType.create(content);
    const decoratorTypeMessage = BuildMessage.create(content);

    global.console.log(protoTypeMessage);
    expect(protoTypeMessage).toEqual(decoratorTypeMessage);
  });

  it('Reconstruct Axial from AxialMessage', () => {
    const q = 1;
    const r = 2;

    const axialMessage = AxialMessage.create({ q, r });
    const axial = new Axial(q, r);

    expect(AxialMessage.fromObject(axialMessage.toJSON()).toAxial()).toEqual(
      axial,
    );
  });
});
