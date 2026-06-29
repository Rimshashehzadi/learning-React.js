import Button from "./Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
// import Button from "./Button";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count,setCount] = useState(0)
    return (
        <div>
            <div className=" flex items-center justify-between p-4 bg-gray-200 rounded-lg mb-4">
                {/* logo */}
                <div>
                    <h1>logo</h1>
                </div>
                {/* items */}
                <div className=' hidden md:block'>
                    <ul className="flex gap-4">
                         <li>
                            <Link to='/'>
                                Home
                            </Link>
                            </li>
                        <li>
                            <Link to='/hooks'>
                                Hooks
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* button */}
                <div className=" hidden lg:block">
                    <Button text='login' />
                </div>
                {/* hamburger menu */}
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />
                    }
                </div>
                <div className={`absolute top-16 left-0 w-full bg-gray-200 rounded-lg p-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                            </li>
                        <li>
                            <Link to='/hooks'>
                                Hooks
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <Button text='login' />
                    </div>
                </div>

            </div>
            <Button text='login' />
<div>
    <h1>{count}</h1>
    <button className="p-4 rounded-2xl text-amber-50 bg-amber-700" onClick={()=>{setCount(count+1)}}>increase</button>
{
    count ==0 ? <h1>counter 0</h1>
    :count ==1 ? <h1> Counter 1</h1>
    :count ==2 ? <h1>Counter 2</h1>
    :count ==3 ? <h1>Counter 3</h1>
    :<h1>Others</h1>
}

</div>

        </div>
    )
}
export default Header;