import React from 'react'
import StudentMap from './StudentMap'

const CollegeMap = ({college}) => {
    return (
        <div>
            <h1>College Name : {college.name}</h1>
            <h2>CollegeWebsite : {college.website}</h2>
            <h2>Country : {college.country}</h2>
             <StudentMap student={college.student}/>
        </div>
    )
}

export default CollegeMap