import { Inter } from "next/font/google";
import styl from "@/styles/sections/_two.module.scss"

const inter = Inter({
    weight: ["900"],
    subsets: ["latin"]
})

export default function SectionTwo()
{
    return(
        <>
            <div className={styl.section_two}>
                <div className={`${inter.className} text-9xl text-gray-500`}>Section 2</div>
            </div>
        </>
    )
}
