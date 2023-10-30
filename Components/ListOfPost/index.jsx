import Link from "next/link";
import styles from "./ListOfPost.module.css"

const fetchPost = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 },
    }).then((res) => res.json());
};

export default async function ListOfPost() {
    const posts = await fetchPost();

    return posts.map((post) => (
        <div className={styles.article_container} key={post.id}>
            <Link style={{ textDecoration: 'none', color: '#000' }} href={`/post/${post.id}`}>
                <h2 className={styles.subtitle_our_services_index}>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
        </div>
    ));
}