import type {Student} from '../Student.ts'

const StudentItem = ({firstName, lastName}: Student) => {

    return (
        <>
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>
                    <input type="checkbox" name="attendance"/>
                </td>
            </tr>
        </>
    )
}

export default StudentItem