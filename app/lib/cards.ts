import { AlignmentType, Player } from '~/lib/types';
import type { Card } from '~/lib/types';

export const cards: Card[] = [
  {
    name: 'Dragon',
    firstPlayer: Player.red,
    text: 'Be swift as the thunder that peals before you have a chance to cover your ears, fast as the lightning that flashes before you can blink your eyes.',
    attackPattern: [
      { x: -2, y: 1 },
      { x: 2, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Giraffe',
    firstPlayer: Player.blue,
    text: 'Project your power, vaulting at oppenents\nwho believe themselves safely out of range.\nAgrression is subservient to surprise.',
    attackPattern: [
      { x: -2, y: 1 },
      { x: 0, y: -1 },
      { x: 2, y: 1 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Panda',
    firstPlayer: Player.red,
    text: 'Your opponent watches for your complacency, so show it to him. Lull him into an attack, then unleash your Art when he has already committed to his attack.',
    attackPattern: [
      { x: -1, y: -1 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Tiger',
    firstPlayer: Player.blue,
    text: "The power of your Art projects itself like a shadow. Sense your opponent's fear,\nand pounce with certainty and strength.",
    attackPattern: [
      { x: 0, y: 2 },
      { x: 0, y: -1 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Rat',
    firstPlayer: Player.red,
    text: 'Your opponent cannot attack when he cannot predict. Let your movements be immediate,\nyour attacks be unexpected.',
    attackPattern: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Viper',
    firstPlayer: Player.red,
    text: 'The Art of the Viper is to strike in the Moment.\nThis is the true Art.',
    attackPattern: [
      { x: -2, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Eel',
    firstPlayer: Player.blue,
    text: 'If your opponent strikes with fire, counter with water, becoming completely fluid and freeflowing.',
    attackPattern: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: 0 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Fox',
    firstPlayer: Player.red,
    text: 'Hurry your opponent through your Art,\ngive him no time to think, less time to act.',
    attackPattern: [
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Dog',
    firstPlayer: Player.blue,
    text: 'Deny your opponent his Art. Once you have blocked\nhis attack, do not let him go, but instead\nrelentlessly hamper his momentum.',
    attackPattern: [
      { x: -1, y: 1 },
      { x: -1, y: 0 },
      { x: -1, y: -1 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Ox',
    firstPlayer: Player.blue,
    text: "Pour your strength into the forms of your Art.\nIn it's punches, it's kicks, in the steady\nadvance of your agression.",
    attackPattern: [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Sea Snake',
    firstPlayer: Player.blue,
    text: 'There is no movement or opportunity wasted.\nStrike where you are not expected,\nflow where your opponent believes you cannot be.',
    attackPattern: [
      { x: -1, y: -1 },
      { x: 0, y: 1 },
      { x: 2, y: 0 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Bear',
    firstPlayer: Player.blue,
    text: 'Defend your ground. Do not be like those fools who are quick to run to attack from another position. They have lost the fight because they have already run from it.',
    attackPattern: [
      { x: -1, y: 1 },
      { x: 0, y: 1 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Rabbit',
    firstPlayer: Player.blue,
    text: 'Be near to your opponent, blinding him with your speed. The Art of the Rabbit is the Art of speed.',
    attackPattern: [
      { x: -1, y: -1 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Cobra',
    firstPlayer: Player.red,
    text: 'Attack violently when your opponents are not\nexpecting it - show leisure in the beginning,\nthen suddenly attack vigorously.',
    attackPattern: [
      { x: -1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Phoenix',
    firstPlayer: Player.blue,
    text: 'No opponent expects that which he believes is not there. Harness the shadows, bend the sun,\nstrike as the wind - from a place unseen.',
    attackPattern: [
      { x: -2, y: 0 },
      { x: -1, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Mouse',
    firstPlayer: Player.blue,
    text: 'All opponents have a hole in their Art, an opening of weakness. The Art of the Mouse is to find\nthat opening, enter it, and strike.',
    attackPattern: [
      { x: -1, y: -1 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Boar',
    firstPlayer: Player.red,
    text: "Watch for opportunity, for it will present itself. Then strike, focusing all your might into a single rush, trampling your opponent's Art under your own.",
    attackPattern: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Iguana',
    firstPlayer: Player.red,
    text: 'While your opponent wears himself out with unnecessary movement, you will gather your strength.\nA devastating sweep or fatal punch\nis the pinnacle of the Art.',
    attackPattern: [
      { x: -2, y: 1 },
      { x: 0, y: 1 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Crane',
    firstPlayer: Player.blue,
    text: 'Make no unnecessary movement, conserving your strength until the time is right to strike.\nThe true Art is a symphony of graceful strikes.',
    attackPattern: [
      { x: -1, y: -1 },
      { x: 0, y: 1 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Frog',
    firstPlayer: Player.red,
    text: "Do not fail to learn from the pure voice of an ever flowing mountain stream spashing over the rocks. Emulate it's flow, mimic it's power.",
    attackPattern: [
      { x: -2, y: 0 },
      { x: -1, y: 1 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Crab',
    firstPlayer: Player.blue,
    text: "Move with your opponent's movements,\nas if you are the mever-ceasing tide. When the\ntime is right, he will fall prey to your attack.",
    attackPattern: [
      { x: -2, y: 0 },
      { x: 0, y: 1 },
      { x: 2, y: 0 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Elephant',
    firstPlayer: Player.red,
    text: 'Only the strong may pursue your Art. This is why it is the true Art, the Art that cannot be stopped.',
    attackPattern: [
      { x: -1, y: 1 },
      { x: -1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Sable',
    firstPlayer: Player.blue,
    text: 'Be fluid, and control the battlefield with constant movement and precision strikes.',
    attackPattern: [
      { x: -2, y: 0 },
      { x: -1, y: -1 },
      { x: 1, y: 1 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Goose',
    firstPlayer: Player.blue,
    text: 'Your robes are your cloak of feathers; spread your wings to hide your intentions. Even then, as your opponent seeks to determine your motive, you shall strike.',
    attackPattern: [
      { x: -1, y: 1 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Tanuki',
    firstPlayer: Player.blue,
    text: 'The Art of the Tanuki is the Art of opportunity. Patience will open the door to the perfect angle of your strike.',
    attackPattern: [
      { x: -1, y: -1 },
      { x: 0, y: 1 },
      { x: 2, y: 1 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Horse',
    firstPlayer: Player.red,
    text: 'Lose yourself in the rhythm of your Art.\nAt times be swift and decisive, at other\ntimes measured and taunting.',
    attackPattern: [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Monkey',
    firstPlayer: Player.blue,
    text: 'Without deception you cannot carry out strategy, without strategy you cannot control the opponent.',
    attackPattern: [
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: 1 },
      { x: 1, y: -1 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Mantis',
    firstPlayer: Player.red,
    text: 'Your opponent sees, but does not understand.\nDistract the watchful, misguide the wary. This is the\nArt of the Mantis, the Art of the deceptive strike.',
    attackPattern: [
      { x: -1, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 1 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Rooster',
    firstPlayer: Player.red,
    text: 'Do not allow your enemy to rest, but focus your Art to deliver quick, sharp strikes whenever he lags.',
    attackPattern: [
      { x: -1, y: 0 },
      { x: -1, y: -1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
    ],
    alignment: AlignmentType.right,
  },
  {
    name: 'Otter',
    firstPlayer: Player.red,
    text: 'Who can stop the flowing stream? The Art of the Otter is the Art of Power, knocking away the advances of the opponent through sustained, powerful strikes.',
    attackPattern: [
      { x: -1, y: 1 },
      { x: 1, y: -1 },
      { x: 2, y: 0 },
    ],
    alignment: AlignmentType.left,
  },
  {
    name: 'Kirin',
    firstPlayer: Player.red,
    text: 'There is Art in grace, Art in discernment, Art in sensing the truth. Pierce the veil of the shadow, and strike your opponent from a place of enlightenment.',
    attackPattern: [
      { x: -1, y: 2 },
      { x: 0, y: -2 },
      { x: 1, y: 2 },
    ],
    alignment: AlignmentType.center,
  },
  {
    name: 'Turtle',
    firstPlayer: Player.red,
    text: 'Within your sphere of power, your Art remains supreme. Engage your opponent, and deflect his strikes.',
    attackPattern: [
      { x: -2, y: 0 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 2, y: 0 },
    ],
    alignment: AlignmentType.center,
  },
];
