import '../css/StudentList.css'
import StudentItem from './StudentItem'

const StudentList = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th className={"name"}>Imię</th>
                        <th className={"last-name"}>Nazwisko</th>
                        <th className={"attendance"}>Obecność</th>
                    </tr>
                </thead>
                <tbody>
                    {/*TODO: StudentListItem components*/}
                <StudentItem/>
                </tbody>
            </table>
        </>
    )
}

export default StudentList