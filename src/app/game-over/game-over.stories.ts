import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppModule} from '../app.module';
import {GameOverComponent} from './game-over.component';
import { withA11y } from '@storybook/addon-a11y';

storiesOf('GameOver', module)
  .addDecorator(moduleMetadata({ imports: [ AppModule ]}))
  .addDecorator(withA11y)
  .add('Game Over', () => ({
    component: GameOverComponent,
    props: {
    },
  }));
