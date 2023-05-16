"use client"
import styl from "@/styles/_main.module.scss"
import Section from "../pure/sections/section"
import { useEffect, useState } from "react"

export default function Sections()
{
    // STATES
    const [active, setActive] = useState(1)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    // COMPONENT LIFE CYCLE
    useEffect(() => {
        
            window.addEventListener('wheel', handleScroll)
            window.addEventListener('keydown', handleArrowKey)
            window.addEventListener('touchstart', handleTouchStart)
            window.addEventListener('touchmove', handleTouchEnd)

        return () => {

            window.removeEventListener('wheel', handleScroll)
            window.removeEventListener('keydown', handleArrowKey)
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchmove', handleTouchEnd)
        }

    }, [active, touchStart, touchEnd])

    // FUNCTIONS

    //------------------- Scroll -------------------//
    function handleScroll(e){
        const delta = e.deltaY

        if (delta < 0) {

            setTimeout(() => {

                if (active > 1) {
                    setActive(active - 1)
                } else {
                    setActive(3)
                }
            }, 400)
        }

        if (delta > 0) {

            setTimeout(() => {

                if (active < 3) {
                    setActive(active + 1)
                } else {
                    setActive(1)
                }

            }, 400)
        }
    }

    //------------------- Touch -------------------//

    function handleTouchStart(e)
    {
        const touch = e.touches[0]

        setTouchStart(touch.clientY)
    }
    
    function handleTouchEnd(e) 
    {    
        const touch = e.touches[0]
        
        setTouchEnd(touch.clientY)
        
        setTimeout(() => {
            touchAction()
        }, 400)
    }

    function touchAction()
    {
        const delta = touchStart - touchEnd

        if (delta < 0) {

            if (active > 1) {
                setActive(active - 1);
            } else {
                setActive(3)
            }

        }

        if (delta > 0) {

            if (active < 3) {
                setActive(active + 1)
            } else {
                setActive(1)
            }
        }
    }

    //------------------- Arrow Key -------------------//
    function handleArrowKey(e)
    {
        if (e.keyCode === 38) // up
        {
            if (active > 1) {
                setActive(active - 1);
            } else {
                setActive(3)
            }
        }

        if (e.keyCode === 40) // down
        {
            if (active < 3) {
                setActive(active + 1)
            } else {
                setActive(1)
            }
        }
    }

    return(
        <ul className={styl.main_content}>
            <Section is_active={active === 1 ? true : false} content={"Content 1"} />
            <Section is_active={active === 2 ? true : false} content={"Content 2"} />
            <Section is_active={active === 3 ? true : false} content={"Content 3"} />
        </ul>
    )
}
