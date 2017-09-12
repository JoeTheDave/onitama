import Bear from './Bear';
import Boar from './Boar';
import Cobra from './Cobra';
import Crab from './Crab';
import Crane from './Crane';
import Dog from './Dog';
import Dragon from './Dragon';
import Eel from './Eel';
import Elephant from './Elephant';
import FirstPlayerIcon from './FirstPlayerIcon';
import Fox from './Fox';
import Frog from './Frog';
import Giraffe from './Giraffe';
import Goose from './Goose';
import Horse from './Horse';
import Iguana from './Iguana';
import Kirin from './Kirin';
import Logo from './Logo';
import Mantis from './Mantis';
import Monkey from './Monkey';
import Mouse from './Mouse';
import NotFound from './NotFound';
import Otter from './Otter';
import Ox from './Ox';
import Panda from './Panda';
import Phoenix from './Phoenix';
import Rabbit from './Rabbit';
import Rat from './Rat';
import Rooster from './Rooster';
import Sable from './Sable';
import SeaSnake from './SeaSnake';
import Swish from './Swish';
import Tanuki from './Tanuki';
import Tiger from './Tiger';
import Turtle from './Turtle';
import Viper from './Viper';

// Convert images to SVG - https://convertio.co/png-svg/ (use incogneto to have unlimited access)

const getCharacterComponent = (name) => {
  switch (name.replace(' ', '')) {
    case 'Bear': return Bear;
    case 'Boar': return Boar;
    case 'Cobra': return Cobra;
    case 'Crab': return Crab;
    case 'Crane': return Crane;
    case 'Dog': return Dog;
    case 'Dragon': return Dragon;
    case 'Eel': return Eel;
    case 'Elephant': return Elephant;
    case 'Fox': return Fox;
    case 'Frog': return Frog;
    case 'Giraffe': return Giraffe;
    case 'Goose': return Goose;
    case 'Horse': return Horse;
    case 'Iguana': return Iguana;
    case 'Kirin': return Kirin;
    case 'Mantis': return Mantis;
    case 'Monkey': return Monkey;
    case 'Mouse': return Mouse;
    case 'Otter': return Otter;
    case 'Ox': return Ox;
    case 'Panda': return Panda;
    case 'Phoenix': return Phoenix;
    case 'Rabbit': return Rabbit;
    case 'Rat': return Rat;
    case 'Rooster': return Rooster;
    case 'Sable': return Sable;
    case 'SeaSnake': return SeaSnake;
    case 'Tanuki': return Tanuki;
    case 'Tiger': return Tiger;
    case 'Turtle': return Turtle;
    case 'Viper': return Viper;
    default: return NotFound;
  }
}

export {
  getCharacterComponent,
  Bear,
  Boar,
  Cobra,
  Crab,
  Crane,
  Dog,
  Dragon,
  Eel,
  Elephant,
  FirstPlayerIcon,
  Fox,
  Frog,
  Giraffe,
  Goose,
  Horse,
  Iguana,
  Kirin,
  Logo,
  Mantis,
  Monkey,
  Mouse,
  Otter,
  Ox,
  Panda,
  Phoenix,
  Rabbit,
  Rat,
  Rooster,
  Sable,
  SeaSnake,
  Swish,
  Tanuki,
  Tiger,
  Turtle,
  Viper
}
