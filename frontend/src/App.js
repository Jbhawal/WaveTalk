import { Button } from '@chakra-ui/react';
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      {/* <Button colorScheme='blue'>Button</Button> */}
      <Route path='/' component={Homepage} exact/>  {/* need to give exact at the end bc chatpage path also contains / which is there in homepage path. so it gets rendered twice */}
      <Route path='/chats' component={ChatPage} />
    </div>
  );
}

export default App;
