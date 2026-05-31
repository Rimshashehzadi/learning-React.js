export function Exercise01() {
    return (
        <div>
            <h1 className="text-4xl">Exercise01</h1>
            <p>This is Exercise01</p>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="Placeholder Image" className="pt-4 w-70 h-48" />
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>

            <button className="p-4 cursor-pointer bg-amber-600 text-amber-50 rounded-2xl" onClick={allcall}>submit</button>

        </div>
    )
}
function allcall() {
    alert('function call')
}
