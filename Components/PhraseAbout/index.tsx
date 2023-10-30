"use client"
import { useEffect, useState } from "react";
import styles from "./PhraseAbout.module.css"
export default function PhraseAbout() {

    const titlePhrases = [
        "Innovación Tecnológica para un Mundo Conectado",
        "Desarrollamos Soluciones Digitales de Vanguardia",
        "Transformando el Futuro con Tecnología",
        "Explora las Posibilidades Infinitas de la Tecnología",
        "Tu Socio en el Viaje Tecnológico",
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentPhrase, setCurrentPhrase] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (isTyping) {
            const phraseTimeout = setTimeout(() => {
                if (
                    currentPhrase.length <
                    titlePhrases[currentPhraseIndex].length
                ) {
                    const nextCharIndex = currentPhrase.length;
                    setCurrentPhrase(
                        titlePhrases[currentPhraseIndex].substring(
                            0,
                            nextCharIndex + 1
                        )
                    );
                } else {
                    setIsTyping(false);
                    setTimeout(() => {
                        setCurrentPhrase("");
                        setCurrentPhraseIndex(
                            (prevIndex) => (prevIndex + 1) % titlePhrases.length
                        );
                        setIsTyping(true);
                    }, 3000);
                }
            }, 50);

            return () => clearTimeout(phraseTimeout);
        }
    }, [currentPhrase, currentPhraseIndex, isTyping, titlePhrases]);

    return (
            <h1 className={styles.title_header}>{currentPhrase}</h1>
    );
}
