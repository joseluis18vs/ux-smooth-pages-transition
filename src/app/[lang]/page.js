import main from "@/styles/_main.module.scss"
import Sections from "../../components/container/sections";

export default function Main({ params })
{

    const lang = params.lang
    console.log(lang);

    return(
        <div className={main.container}>
            <div className={main.wrapper}>
                
                {/* Header */}
                <div></div>

                {/* Nav */}
                <div></div>

                {/* Main Content */}
                <Sections />

            </div>
            Main
        </div>
    )
}
