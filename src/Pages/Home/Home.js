import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Carousel from '../../Components/Carousel'
import FilterCard from '../../Components/FilterCard.jsx/FilterCard'
import { BsArrowBarUp } from 'react-icons/bs'
const Home = () => {
    const [showButton, setShowButton] = useState()
    useEffect(() => {
        const handleScrollTopVisible = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false)
        }

        window.addEventListener('scroll', handleScrollTopVisible);

        return () => {
            window.removeEventListener('scroll', handleScrollTopVisible)
        }
    }, [])
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className='pt-[90px]' style={{ overflow: 'hidden' }}>
            {
                showButton &&
                <button onClick={handleTop} style={{zIndex : '10', position: 'fixed', bottom: "20px", right: '10px', background: '#8b5cf6', padding: '10px', borderRadius: '40px', color: 'white', fontSize: '15px' }}><BsArrowBarUp /></button>
            }
            <Carousel />
            <div className='sm:mx-5  mb-5' >
                <FilterCard />
            </div>
        </div>
    )
}

export default Home