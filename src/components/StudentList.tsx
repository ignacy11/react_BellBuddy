import '../css/StudentList.css'

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
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>example text</td>
                        <td>example text</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default StudentList