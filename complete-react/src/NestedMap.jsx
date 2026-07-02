import React from 'react'
import CollegeMap from './CollegeMap'

const collegeData = [
    {
        name: 'ITE',
        website: 'ite.com',
        country: 'Pakistan',
        student: [
            {
                id: 1,
                name: 'Rimsha',
                age: 24,
                city: 'lahore',
                email: 'rimsha@example.com'
            },

        ]
    },
    {
        name: 'ITEEE',
        website: 'iteee.com',
        country: 'Pakistan',
        student: [
            {
                id: 2,
                name: 'Ali',
                age: 22,
                city: 'Islamabad',
                email: 'ali@example.com'
            },
        ]
    },
    {
        name: 'ITEAM',
        website: 'iteam.com',
        country: 'Pakistan',
        student: [
            {
                id: 3,
                name: 'Bilal',
                age: 29,
                city: 'karachi',
                email: 'bilal@example.com'
            }
        ]
    }
]

const NestedMap = () => {
    return (
        <div>
            <h1>Nested Loop</h1>
            {
                collegeData.map((college) => (
                    <div key={collegeData.id} className="border border-black px-4 py-2">
                        <CollegeMap college={college} />


                    </div>
                ))
            }
          

        </div>
    )
}

export default NestedMap