const fetchComments = async(id) => {
    await new Promise(resolve => setTimeout(resolve,5000))
    
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: { revalidate: 10 },
    }).then((res) => res.json());
};

export default async function Comments({ params }) {
    const { id } = params;

    const comments = await fetchComments(id);

    return (
        <>
            <div>
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <h4>{comment.name}</h4>
                        <h5>{comment.title}</h5>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
