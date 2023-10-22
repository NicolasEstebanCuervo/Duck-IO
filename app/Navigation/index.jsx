import Link from "next/link";
import style from "./index.module.css";

const links = [
    {
        label: "Home",
        route: "/",
    },
    {
        label: "About",
        route: "/about",
    },
    { label: "Post", route: "/post" },
];

export default function Navigation() {
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.ul}>
                    {links.map(({ label, route }) => (
                        <li className={style.link} key={route}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
