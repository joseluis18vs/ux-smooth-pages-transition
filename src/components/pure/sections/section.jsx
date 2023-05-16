import styl from "@/styles/_main.module.scss"

export default function Section({content, is_active})
{
    return(
        <li className={`${styl.section} ${is_active ? styl.is_active : ""}`}>
            <div>{content}</div>
        </li>
    )
}