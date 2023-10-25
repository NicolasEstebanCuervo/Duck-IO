"use client"
import styled from "@emotion/styled";

function Footer () {
    return (
        <FooterContainer>
            <SubContainerFooter>
                <TitleFooter>
                    Duck IO
                </TitleFooter>
                <IconsContainer>
                    <IconLink
                        href="mailto:gerenciadeproyectos@syrd.com.co"
                        target="_blank"
                    >
                        <i className="bi bi-envelope-fill"></i>
                    </IconLink>
                    <IconLink
                        href="https://www.facebook.com/profile.php?id=100054416340121&mibextid=ZbWKwL"
                        target="_blank"
                    >
                        <i className="bi bi-facebook"></i>
                    </IconLink>
                    <IconLink
                        href="https://api.whatsapp.com/send?phone=%2B573192238113&data=ARBmO1FtPb6jJQ729tuvg9wULolKc-_T_OTOw7Zno7Z8GHd3O6DAMwJS589xH-Xl87Os1yD7tKH5fwm39R9rybahrE8_B46KXdfx58-MNqYxL9QAtl9XSnBrQmGWei7MMKx6_VxvXHOOATR6_UabItiMkQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1dF6cBiJ7G8vHOM6CiER5tYSHYFuYKKHJ-r-iZuIUPOJ0lg2Kb2nzLRWY"
                        target="_blank"
                    >
                        <i className="bi bi-whatsapp"></i>
                    </IconLink>
                </IconsContainer>
                <CopyrightText>
                    &copy; {new Date().getFullYear()} Duck IO All Rights Reserved.
                </CopyrightText>
            </SubContainerFooter>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3% 0;
    background: #141414;
    font-family: "Quicksand", sans-serif;
`;

const SubContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleFooter = styled.h1`
    font-size: 40px;
    text-align: center;
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
        font-size: 7vw;
    }

    @media (max-width: 400px) {
        font-size: 8vw;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    margin: 1% 0;
`;

const IconLink = styled.a`
    color: #fff;
    font-size: 35px;
    margin: 0 10px;

    @media (max-width: 400px) {
        font-size: 10vw;
    }
`;

const CopyrightText = styled.p`
    font-size: 25px;
    text-align: center;
    color: #fff;

    @media (max-width: 1250px) {
        font-size: 20px;
    }

    @media (max-width: 1000px) {
        font-size: 15px;
    }

    @media (max-width: 750px) {
        font-size: 10px;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;
