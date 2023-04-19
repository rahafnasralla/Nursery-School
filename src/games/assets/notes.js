import a  from './a.wav';
import b  from './b.wav';
import c2 from './c2.wav';
import c  from './c.wav';
import d1 from './d1.wav';
import e1 from './e1.wav';
import f  from './f.wav';
import g  from './g.wav';

// To play a note, for example, the first one
// new Audio(notes[0].file).play();

const notes = [
  {
    name: '♩',
    file: c
  },
  {
    name: '♪',
    file: d1
  },
  {
    name: '♫',
    file: e1
  },
  {
    name: '♭',
    file: f
  },
  {
    name: '𝄫',
    file: g
  },
  {
    name: '𝄞',
    file: a
  },
  {
    name: '𝄢',
    file: b
  },
  {
    name: '♯',
    file: c2
  },
];

export default notes;
