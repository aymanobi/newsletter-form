import imgDesk from '../assets/images/illustration-sign-up-desktop.svg'
import imgMob from '../assets/images/illustration-sign-up-mobile.svg'
import check from '../assets/images/icon-list.svg'
import Form from './Form'

const MainCard = () => {

    const listArr = [
        {
            id: 1,
            text: 'Product discovery and building what matters'
        },
        {
            id: 2,
            text: 'Measuring to ensure updates are a success'
        },
        {
            id: 3,
            text: 'And much more!'
        },
    ]

    return (
        <article className="h-screen lg:h-[550px] bg-White flex flex-col lg:items-center justify-between gap-4 lg:w-3/5 lg:rounded-lg lg:py-2 lg:px-5 lg:flex-row-reverse">

            <div>
                <picture>
                    <source media="(min-width:1022px)" srcSet={imgDesk} />
                    <img src={imgMob} alt="illustration sign up" className='w-full h-full object-cover' />
                </picture>
            </div>

            <div className='p-4'>

                <h1 className='text-DarkSlateGrey font-bold text-5xl mb-8'>Stay updated!</h1>
                <p className='text-DarkSlateGrey font-medium mb-5'>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul>
                    {listArr.map(list => {
                        return (
                            <li key={list.id} className='flex items-center gap-3 text-DarkSlateGrey my-3 font-medium'><img src={check} alt="check list" /> {list.text}</li>
                        )
                    })}
                </ul>
                <Form />
            </div>
        </article>
    )
}

export default MainCard