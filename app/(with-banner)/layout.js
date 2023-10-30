import "../../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";
import PhraseAbout from "../../Components/PhraseAbout";
const font = Space_Grotesk({
    weight: "400",
    subsets: ["latin"],
    variable: "--fuente",
});

export default function LayoutWithPhrase({ children }) {
    return (
        <>
            <PhraseAbout />
            {children}
        </>
    );
}
