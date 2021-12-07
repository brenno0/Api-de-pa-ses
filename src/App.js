import { Router } from './routes'
import { StoreProvider, useStoreRehydrated } from 'easy-peasy'
import store from './store/index'

function WaitForStateRehydration({ children }) {
  const isRehydrated = useStoreRehydrated()
  return isRehydrated ? children : null
}

function App() {
  return (
    <StoreProvider store={store}>
      <WaitForStateRehydration>
          <Router />
      </WaitForStateRehydration>
    </StoreProvider>
  );
}

export default App;
