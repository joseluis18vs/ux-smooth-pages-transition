import styl from "@/styles/_main.module.scss"

export default function Section({ content, effect, is_active})
{
    return(
        <li 
            className={`
                ${styl.section}
                ${is_active ? `${styl.is_active} ${effect === "up" ? styl.fade_in_up : ""} ${effect === "down" ? styl.fade_in_down : ""}` : "" }
                ${effect === "up" ? styl.fade_out_down : ""}
                ${effect === "down" ? styl.fade_out_up : ""}
            `}>
            {content}
        </li>
    )
}
