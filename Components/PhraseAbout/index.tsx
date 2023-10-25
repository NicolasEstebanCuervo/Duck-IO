"use client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
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
            <TitleHeader>{currentPhrase}</TitleHeader>
    );
}
const TitleHeader = styled.h1`
    font-size: 50px;
    font-weight: 800;
    color: #ffffff;
    text-align: center;

    @media (max-width: 1250px) {
        font-size: 40px;
    }

    @media (max-width: 1000px) {
        font-size: 30px;
    }

    @media (max-width: 750px) {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        font-size: 7vw;
    }

    @media (max-width: 400px) {
        font-size: 8vw;
    }
`;
