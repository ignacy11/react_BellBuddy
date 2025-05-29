import './css/App.css'
import './css/Clock.css'
import Clock from "./components/Clock.tsx";
import StudentList from './components/StudentList.tsx';

function App() {

  return (
    <>
      <header>
          <button className="add-student">Dodaj ucznia do listy</button>
          <h1>Bell Buddy</h1>
          <Clock/>
      </header>
        <main>
            <StudentList/>
            {/*TODO: dynamically change main content*/}
        </main>
    </>
  )
}

export default App