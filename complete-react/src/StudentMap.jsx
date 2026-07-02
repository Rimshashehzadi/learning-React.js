import React from 'react'

const StudentMap = ({ student }) => {
    return (
        <div>

            {
                student.map((student) => (
                    <ul key={student.id} className="border border-black px-4 py-2">
                        <li>Student Name : {student.name}</li>
                        <li>Student Age : {student.age}</li>
                        <li>Student City : {student.city}</li>
                        <li>Student Email : {student.email}</li>
                        {/* <StudentMap student={student} /> */}
                    </ul>
                ))
            }

        </div>
    )
}

export default StudentMap