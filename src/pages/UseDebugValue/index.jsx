import { UseMediaQuery } from '../UseMediaQuery';

function UseDebugValue() {
  const huge = UseMediaQuery('(min-width: 980px)');
  const big = UseMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = UseMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = UseMediaQuery('(max-width: 320px)');
  const background = huge ? 'green' : big ? 'red' : medium ? 'yellow' : small ? 'purple' : null;

  return <h1 style={{ background }}>Oi</h1>;
}

export default UseDebugValue;
