import Form from "./components/Form/Form";
import Header from "./components/Header/header";
import TodoList from "./components/TodoList/TodoList";
import { TodoProvider } from "./contexts/Todocontext";


function App() {
  return (
    <TodoProvider>
      <Header/>
      <Form/>
      <TodoList/>
    </TodoProvider>
    
      
    
  );
}

export default App;
