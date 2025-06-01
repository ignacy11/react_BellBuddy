import './css/App.css'
import './css/Clock.css'
import Clock from "./components/Clock.tsx"
import AddStudentForm from "./components/AddStudentForm"
import StudentList from './components/StudentList.tsx'
import {useState} from "react"
import type {Student} from './Student.ts'

function App() {
    const [activeTab, setActiveTab] = useState("StudentList")
    const [studentItemsList, setStudentItemsList] = useState<Student[]>([])

    const addStudent = (formData: Student) => {
        setStudentItemsList((prevState) => [...prevState, formData])
    }


    return (
        <>
            <header>
                <button className="add-student header-button" onClick={() => setActiveTab("AddStudentForm")}>Dodaj ucznia do listy</button>
                <button className="open-student-list header-button" onClick={() => setActiveTab("StudentList")}>Otwórz listę uczniów</button>
                <h1>Bell Buddy</h1>
                <Clock/>
            </header>
            <main>
                {activeTab === "StudentList" && <StudentList studentItemsList={studentItemsList}/>}
                {activeTab === "AddStudentForm" && <AddStudentForm onSubmit={addStudent}/>}
            </main>
        </>
    )
}

export default App