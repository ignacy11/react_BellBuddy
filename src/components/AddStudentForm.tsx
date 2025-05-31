import '../css/AddStudentForm.css'
import {useState} from "react";

interface UserForm {
    firstName: string;
    lastName: string;
}

const AddStudentForm = () => {
    const [formData, setFormData] = useState<UserForm>({firstName: "", lastName: ""})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target as HTMLInputElement;
        setFormData((prev) => ({...prev, [name]: value}))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(`first name: ${formData.firstName}, last name: ${formData.lastName}`)
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
                        <input type="text" name={"firstName"} value={formData.firstName} onChange={handleChange}/>
                    </label>
                    <label>
                        <span>Nazwisko</span>
                        <input type="text" name={"lastName"} value={formData.lastName} onChange={handleChange}/>
                    </label>
                </section>
                <button className="form-button" type={"submit"}>Dodaj</button>
            </form>
        </>
    )
}

export default AddStudentForm;