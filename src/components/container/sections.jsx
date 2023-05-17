"use client"
import styl from "@/styles/_main.module.scss"
import Section from "../pure/sections/section"
import { useEffect, useState } from "react"
import SectionOne from "../pure/sections/one"
import SectionTwo from "../pure/sections/two"
import SectionThree from "../pure/sections/three"

export default function Sections()
{
    // STATES
    const [active, setActive] = useState(1)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [effect, setEffect] = useState("")

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

    function handleScroll(e) {
        const delta = e.deltaY;
        handleSectionChange(delta);
    }

    function handleTouchStart(e) {
        const touch = e.touches[0];
        setTouchStart(touch.clientY);
    }

    function handleTouchEnd(e) {
        const touch = e.changedTouches[0];
        setTouchEnd(touch.clientY);
        touchAction();
    }

    function handleArrowKey(e) {
        if (e.keyCode === 38) {
            // up
            handleSectionChange(-1);
        }
        if (e.keyCode === 40) {
            // down
            handleSectionChange(1);
        }
    }

    function touchAction() {
        const delta = touchStart - touchEnd;
        if (delta < 0) {
            handleSectionChange(-1);
        }
        if (delta > 0) {
            handleSectionChange(1);
        }
    }

    // 
    function handleSectionChange(delta) {
        setTimeout(() => {
            if (delta < 0) {
                if (active > 1) {
                    setEffect("up");
                    setTimeout(() => {
                        setEffect("");
                        setActive(active - 1);
                    }, 300);
                } else {

                    setActive(1)

                    /* setEffect("up");
                    setTimeout(() => {
                        setEffect("");
                        setActive(3);
                    }, 300); */

                }
            }
            if (delta > 0) {
                if (active < 3) {
                    setEffect("down");
                    setTimeout(() => {
                        setEffect("");
                        setActive(active + 1);
                    }, 400);
                } else {
                    setEffect("down");
                    setTimeout(() => {
                        setEffect("");
                        setActive(1);
                    }, 400);
                }
            }
        }, 200);
    }

    return(
        <ul className={styl.main_content}>
            
            <Section 
                is_active={active === 1 ? true : false} 
                effect={effect} 
                content={<SectionOne />} 
            />

            <Section 
                is_active={active === 2 ? true : false} 
                effect={effect} 
                content={<SectionTwo />} 
            />

            <Section 
                is_active={active === 3 ? true : false} 
                effect={effect} 
                content={<SectionThree />} 
            />

        </ul>
    )
}
