import React from 'react'

const userData =[
    {
        name:'Rimsha',
        age: '24',
        city: 'lahore',
        id:1,
    },
    {
        name:'Ali',
        age:'22',
        city:' Islamabad',
        id: 2,
    },
    {
        name:'Bilal',
        age:'29',
        city:'karachi',
        id:3
    }
]

const Map = () => {
  return (
    <div>
        <h1>Loop in JSX using Map function</h1>
        <table border='1'>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>age</td>
                    <td>city</td>
                </tr>
            </thead>
            <tbody>
                 <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>age</td>
                    <td>city</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Map