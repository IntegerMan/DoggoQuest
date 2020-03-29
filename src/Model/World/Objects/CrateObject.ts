import {GameObject} from './GameObject';

export class CrateObject implements GameObject {
  constructor(private inCrate: boolean) {
    if (inCrate) {
      this.look = 'The crate is big enough for you to fit comfortably in and not too much bigger. You do not like it in here.';
      this.push = 'The crate rocks slightly, but not significantly. Maybe try pushing the door instead?';
      this.smell = 'It smells like you!';
    } else {
      this.look = `It's your crate. You don't like it, but you can go back in it if you want by going south.`;
      this.push = `The crate is fine where it is and you don't want to shut the door to it either.`;
      this.smell = `To really smell the crate, you need to be inside it.`;
    }
  }

  name = 'crate';

  look: string;
  push: string;
  smell: string;

  take = `It's too big to pull along with you. Besides, it's fine where it is.`;
  eat = 'Yuck. No thank you.';
  lick = 'It\'s plastic and boring. I don\'t want to lick that.';
}
