import LikeButton from "./LikeButton";
import Link from "next/link";

const fetchPost = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:10}})
        .then((res) =>
        res.json()
    );
};

export default async function ListOfPost() {
    console.log("Hola mundo");
    const posts = await fetchPost();

    return posts.slice(0, 5).map((post) => (
            <article key={post.id}>
        <Link href={`/post/${post.id}`}>

                <h2>{post.title}</h2>
                </Link>
                <p>{post.body}</p>
                <LikeButton />
            </article>

    ));
}
