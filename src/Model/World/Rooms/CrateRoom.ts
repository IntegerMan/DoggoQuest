import {CommandContext} from '../../CommandContext';
import {GameObject} from '../GameObject';
import {Room} from '../Room';
import {RoomBase} from './RoomBase';

export class CrateRoom extends RoomBase {
  objects: GameObject[];

  constructor() {
    super('In Crate', Room.InCrate);
    this.objects = [{
      name: 'door',
      look: 'It is just a metal door to the crate.',
      smell: 'It smells like metal.',
      taste: 'It tastes smooth, cold, and boring.',
      push: (context: CommandContext) => {
        if (context.world.isCrateOpen) {
          context.addText('The door is already open. In order to push it, you\'d have to leave the crate first.');
        } else {
          context.addText('You push the door and it flies open. You\'re free!');
          context.world.isCrateOpen = true;
          context.increaseScore(1);
        }
      }
    },
      {
        name: 'blanket',
        look: 'The blanket is soft and snuggly. You like it.',
        smell: 'It smells like you!',
        taste: 'It\'s not that interesting to taste. You lick it sometimes while you sleep in your crate, but it just tastes like blanket.'
      },
      {
        name: 'crate',
        look: 'The crate is big enough for you to fit comfortably in and not too much bigger. You do not like it in here.',
        smell: 'It smells like you!',
        taste: 'It\'s plastic and boring. I don\'t want to lick that.'
      }];
  }

  describe(context: CommandContext): void {
    context.addText(`You're in your crate yet again. It's a small crate large enough for you to rest comfortably, but not move around in.`);
    context.addText('There is a blanket on the floor and a door to the crate in front of you.');
    context.addText('You do not like it here.');
  }

}
