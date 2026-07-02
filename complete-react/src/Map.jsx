import React, { useState } from 'react'
import Map2 from './Map2'
import ClockTask from './ClockTask'
import NestedMap from './NestedMap'

const userData = [
    {
        name: 'Rimsha',
        age: '24',
        city: 'lahore',
        id: 1,
    },
    {
        name: 'Ali',
        age: '22',
        city: ' Islamabad',
        id: 2,
    },
    {
        name: 'Bilal',
        age: '29',
        city: 'karachi',
        id: 3
    }
]


const Map = () => {
    const[color,setColor] = useState('red')
    return (
        <div>
            <h1>Loop in JSX using Map function</h1>
            <br />
            <table className="border border-black">
                <thead>
                    <tr>
                        <th className="border border-black px-4 py-2">ID</th>
                        <th className="border border-black px-4 py-2">Name</th>
                        <th className="border border-black px-4 py-2">Age</th>
                        <th className="border border-black px-4 py-2">City</th>

                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={userData.id}>
                            <td className="border border-black px-4 py-2">{user.id}</td>
                            <td className="border border-black px-4 py-2">{user.name}</td>
                            <td className="border border-black px-4 py-2">{user.age}</td>
                            <td className="border border-black px-4 py-2">{user.city}</td>

                        </tr>
                    ))}

                </tbody>
            </table>
            <h1>Reuse components in loop</h1>
            <br />
            {userData.map((user2) => (
                <div key={user2.id}>
                    <Map2 data={user2} />
                </div>
            ))}
            <br />
            <h1>Dropdown Menu with color</h1>
            <select onChange={(event) =>setColor(event.target.value)} className="border border-black px-4 py-2">
                <option value={'red'}>red</option>
                <option value={'blue'}>blue</option>
                <option value={'green'}>green</option>
            </select>
            <ClockTask color={color}/>
            
              <NestedMap/>
            
        </div>
    )
}

export default Map