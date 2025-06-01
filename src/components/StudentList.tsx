import '../css/StudentList.css'
import StudentItem from './StudentItem'
import type {Student} from '../Student.ts'

const StudentList = ({ studentItemsList }: { studentItemsList: Student[] }) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th className="name">Imię</th>
                    <th className="last-name">Nazwisko</th>
                    <th className="attendance">Obecność</th>
                </tr>
                </thead>
                <tbody>
                {
                    studentItemsList.map((item) => (
                            <StudentItem {...item} />
                        )
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export default StudentList;