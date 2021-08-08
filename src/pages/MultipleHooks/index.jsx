import { PostsProvider } from './contexts/PostsProvider';
import { Posts } from './components/Posts';
import { CounterProvider } from './contexts/CounterProvider';

function MultipleHooks() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default MultipleHooks;
