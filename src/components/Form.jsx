import { useState } from "react"
import { useNavigate } from 'react-router-dom'


const Form = () => {

    const [emailInput, setEmailInput] = useState('')
    const [isValid, setIsValid] = useState(null)
    const navigate = useNavigate()

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleClick = () => {
        console.log(emailInput)
        if (emailInput === '' || !isValidEmail(emailInput)) {
            setIsValid(true)
        } else if (emailInput !== '') {
            sessionStorage.setItem('email', emailInput);
            setIsValid(false)
            setTimeout(() => {
                navigate("/success")
            }, 200);
        }
    }

    return (
        <div className='relative flex flex-col items-start mt-5'>
            <p className={`${isValid ? 'text-Tomato absolute right-0 font-semibold' : 'hidden'}`}>Valid email required</p>
            <label htmlFor="email" className='font-semibold text-DarkSlateGrey'>Email address</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder='email@company.com'
                className={`${isValid ? 'border border-Tomato bg-[#ff666686] placeholder:text-CharcoalGrey' : 'border border-Grey'} outline-none w-full p-3 mt-1 mb-3 rounded-lg`}
                onChange={(e) => setEmailInput(e.target.value)}
                required
            />
            <button
                className='w-full my-3 p-3 bg-DarkSlateGrey text-White border-0 outline-none rounded-lg font-bold hover:bg-gradient-to-r hover:from-[#eb280af1] hover:to-Tomato'
                onClick={handleClick}
            >
                Subscribe to monthly newsletter
            </button>
        </div>
    )
}

export default Form