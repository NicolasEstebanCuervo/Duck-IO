"use client"
import styled from "@emotion/styled";

export default function StatsAbout() {
    return (
        <AboutSection>
            <SubAboutContainer>
                <TextContainer>
                    <MainTitle>About Our Journey</MainTitle>
                    <Description>
                        Discover our inspiring journey at ASBD where we're
                        dedicated to creating smiles through exceptional
                        services. Our team's commitment to excellence and our
                        core values guide us on this exciting path. Discover our
                        inspiring journey at ASBD where we're dedicated to
                        creating smiles through exceptional services. Our team's
                        commitment to excellence and our core values guide us on
                        this exciting path. Discover our inspiring journey at
                        ASBD where we're
                    </Description>
                </TextContainer>
                <StatsContainer>
                    <ContainerIndividual>
                        <NumberStat>100</NumberStat>
                        <DescriptionStat>Proyectos unicos</DescriptionStat>
                    </ContainerIndividual>
                    <ContainerIndividual>
                        <NumberStat>200</NumberStat>
                        <DescriptionStat>Clientes felices</DescriptionStat>
                    </ContainerIndividual>
                    <ContainerIndividual>
                        <NumberStat>10</NumberStat>
                        <DescriptionStat>Empleados dedicados</DescriptionStat>
                    </ContainerIndividual>
                </StatsContainer>
            </SubAboutContainer>
        </AboutSection>
    );
}

const AboutSection = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubAboutContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 2vh;

    @media (max-width: 1000px) {
        align-items: center;
        flex-direction: column;
        width: 90%;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5%;
    width: 60%;

    @media (max-width: 800px) {
        width: 100%;
        gap: 1.5vh;
    }
`;

const MainTitle = styled.h1`
    font-size: 50px;
    font-weight: 800;
    color: #fff;

    @media (max-width: 1250px) {
        font-size: 40px;
        text-align: center;
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

const Description = styled.p`
    font-size: 18px;
    margin: 0;
    color: #fff;

    @media (max-width: 1250px) {
        font-size: 15px;
    }

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }
`;

const StatsContainer = styled.div`
    display: flex;
    gap: 5%;

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 2vh;
    }
`;

const ContainerIndividual = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;
`;

const NumberStat = styled.h2`
    text-align: center;
    font-size: 25px;
    font-weight: 800;
    color: #fff;

    @media (max-width: 1250px) {
        font-size: 30px;
    }

    @media (max-width: 1000px) {
        font-size: 25px;
    }

    @media (max-width: 750px) {
        font-size: 20px;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;

const DescriptionStat = styled.h3`
    text-align: center;
    font-size: 18px;
    margin: 0;
    color: #fff;

    @media (max-width: 1250px) {
        font-size: 15px;
    }

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }
`;
