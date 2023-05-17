import { Inter } from "next/font/google";
import styl from "@/styles/sections/_three.module.scss"

const inter = Inter({
    weight: ["900"],
    subsets: ["latin"]
})

export default function SectionThree()
{
    return(
        <>
            <div className={styl.section_three}>
                <div className={`${inter.className} text-9xl text-gray-500`}>Section 3</div>
            </div>
        </>
    )
}
