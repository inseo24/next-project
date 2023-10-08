import PostHead from '../../components/PostHead';
import posts from '../../data/post'

export function getServerSideProps({ params }) {
    const { slug } = params;
    const post = posts.find(post => post.slug === slug)
    return { props: { post } }
}

function Post({ post }) {
    return (
        <dib>
            <PostHead {...post} />
            <h1>{post.title}</h1>
            <p>{post.subtitle}</p>
        </dib>
    )
}

export default Post;