import { Inter } from "next/font/google";
import styl from "@/styles/sections/_one.module.scss"

const inter = Inter({
    weight: ["900"],
    subsets: ["latin"]
})

export default function SectionOne()
{

    return(
        <>
            <div className={styl.section_one}>
                <div className={`${inter.className} text-9xl text-gray-100`}>Section 1</div>
            </div>
        </>
    )
}
