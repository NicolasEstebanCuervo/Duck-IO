"use client"
import LikeButton from "../Basics/LikeButton";
import Link from "next/link";
import styled from "@emotion/styled";

const fetchPost = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 },
    }).then((res) => res.json());
};

export default async function ListOfPost() {
    const posts = await fetchPost();

    return posts.map((post) => (
        <ArticleContainer key={post.id}>
            <Link style={{ textDecoration: 'none', color: '#000' }} href={`/post/${post.id}`}>
                <SubtitleOurServicesIndex>{post.title}</SubtitleOurServicesIndex>
            </Link>
            <p>{post.body}</p>
            <LikeButton />
        </ArticleContainer>
    ));
}

const ArticleContainer = styled.article`
    margin: 20px;
    background: #e8e5e5;
    border-radius: 10px;
    padding: 1% 3%;

    @media (max-width: 750px) {
        padding: 1% 10%;
    }
`;

const SubtitleOurServicesIndex = styled.h1`
    font-size: 22px;
    font-weight: 800;

    @media (max-width: 1250px) {
        font-size: 25px;
    }

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 4vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }
`;