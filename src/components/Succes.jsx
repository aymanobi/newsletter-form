import { useNavigate } from 'react-router-dom'
import check from '../assets/images/icon-list.svg'

const Succes = () => {

    const navigate = useNavigate()
    const value = sessionStorage.getItem('email');

    const handleClick = () => {
        navigate("/")
    }
    return (
        <article className="h-screen lg:h-[550px] p-10 bg-White lg:w-96 lg:rounded-lg">
            <img src={check} alt="check list" className='w-28 mb-10' />
            <h1 className='font-bold text-5xl my-6 text-DarkSlateGrey'>Thanks for subscribing!</h1>
            <p className='font-medium text-CharcoalGrey mb-10'>A confirmation email has been sent to <strong className='text-DarkSlateGrey'>{value}</strong>  Please open it and click the button inside to confirm your subscription.</p>
            <button
                className='w-full my-3 p-3 bg-DarkSlateGrey text-White border-0 outline-none rounded-lg font-bold hover:bg-gradient-to-r hover:from-[#eb280af1] hover:to-Tomato'
                onClick={handleClick}
            >Dismiss message</button>
        </article>
    )
}

export default Succes