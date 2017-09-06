import Dragon from './Dragon';
import NotFound from './NotFound';
import Swish from './Swish';
import Tiger from './Tiger';
import Viper from './Viper';

// Convert images to SVG - https://convertio.co/png-svg/

const getCharacterComponent = (name) => {
  console.log(name);
  switch (name.replace(' ', '')) {
    case 'Dragon':
      return Dragon;
    case 'Tiger':
      return Tiger;
    case 'Viper':
      return Viper;
    default:
      return NotFound;
  }
}

export {
  getCharacterComponent,
  Dragon,
  Swish,
  Tiger,
  Viper
}
