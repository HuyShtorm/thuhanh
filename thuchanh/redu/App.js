import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store';
import reducer from './redux/reducer';
import inc from './redux/actions';
import { Provider } from 'react-redux';
import Counter from './Counter';


console.log(store);
console.log(store.getState());


store.dispatch(inc);
console.log(store.getState());
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
