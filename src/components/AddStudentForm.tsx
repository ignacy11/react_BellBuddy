import '../css/AddStudentForm.css'
import {useState} from "react"
import * as React from "react"
import type {Student} from '../Student.ts'

type FormSubmitHandler = (formData: Student) => void
interface FormProps {
    onSubmit: FormSubmitHandler
}

const AddStudentForm = ({ onSubmit }: FormProps) => {
    const [submittedFormData, setSubmittedFormData] = useState<Student>({
        firstName: "",
        lastName: "",
        studentAttendance: false
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = event.target as HTMLInputElement
        setSubmittedFormData((prev) => ({
            ...prev,
            [name]: type==="checkbox" ? checked : value
        }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(`first name: ${submittedFormData.firstName}, last name: ${submittedFormData.lastName}`)
        onSubmit(submittedFormData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="header-area">
                    <h2>Dodaj ucznia do listy</h2>
                </section>
                <section className="form-fields">
                    <label>
                        <span>Imię</span>
                        <input type="text" name={"firstName"} value={submittedFormData.firstName} onChange={handleChange}/>
                    </label>
                    <label>
                        <span>Nazwisko</span>
                        <input type="text" name={"lastName"} value={submittedFormData.lastName} onChange={handleChange}/>
                    </label>
                </section>
                <button className="form-button" type={"submit"}>Dodaj</button>
            </form>
        </>
    )
}

export default AddStudentForm