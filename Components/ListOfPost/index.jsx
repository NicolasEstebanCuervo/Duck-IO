import styles from "./ListOfPost.module.css";
import Image from "next/image";

function generateRandomID() {
    return Math.floor(Math.random() * 10) + 1;
}

const fetchPost = async (postIds) => {
    const postPromises = postIds.map(async (postId) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        return response.json();
    });
    return Promise.all(postPromises);
};

const fetchUsers = async (userIds) => {
    const userPromises = userIds.map(async (userId) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        return response.json();
    });
    return Promise.all(userPromises);
};

const fetchComments = async (commentIds) => {
    const commentPromises = commentIds.map(async (commentId) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/comments/${commentId}`
        );
        return response.json();
    });
    return Promise.all(commentPromises);
};

// Función para generar una URL de imagen de perfil aleatoria basada en el correo electrónico
function generateProfileImageURL(email) {
    return `https://api.dicebear.com/7.x/pixel-art/svg?seed=${email}.svg`;
}

export default async function ListOfPost() {
    const postIds = Array.from({ length: 5 }, () => generateRandomID());
    const userIds = Array.from({ length: 5 }, () => generateRandomID());
    const commentIds = Array.from({ length: 5 }, () => generateRandomID());

    const posts = await fetchPost(postIds);
    const users = await fetchUsers(userIds);
    const comments = await fetchComments(commentIds);

    return posts.map((post, index) => {
        const user = users[index];

        return (
            <article className={styles.article_container} key={post.id}>
                <div className={styles.container_post}>
                    <div className={styles.container_profile}>
                        <Image
                            className={styles.image_profile}
                            width={50}
                            height={50}
                            src={generateProfileImageURL(user.email)}
                        />
                        <div>
                            <h1 className={styles.name_profile}>{user.name}</h1>
                            <h3 className={styles.username_profile}>
                                @{user.username}
                            </h3>
                        </div>
                    </div>
                    <div className={styles.container_body}>
                        <h1 className={styles.title_post}>{post.title}</h1>
                        <p className={styles.description_post}>{post.body}</p>
                    </div>
                </div>

            <hr className={styles.hr_line}></hr>

                <div className={styles.container_comments}>
                    {comments.slice(0, 2).map((comment) => (
                        <div className={styles.container_comment}>
                            <div className={styles.container_profile}>
                                <Image
                                    className={styles.image_profile}
                                    width={50}
                                    height={50}
                                    src={generateProfileImageURL(user.email)}
                                />
                                <div>
                                    <h1 className={styles.name_profile}>
                                        {user.name}
                                    </h1>
                                    <h3 className={styles.username_profile}>
                                        @{user.username}
                                    </h3>
                                </div>
                            </div>
                            <div className={styles.container_body}>
                                <h1 className={styles.title_post}>
                                    {comment.name}
                                </h1>
                                <p className={styles.description_post}>
                                    {comment.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        );
    });
}
