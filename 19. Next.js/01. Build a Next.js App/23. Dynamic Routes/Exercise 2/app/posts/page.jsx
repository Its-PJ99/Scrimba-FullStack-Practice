export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  /**
   * Challenge:
   * Add a Link to each blog post (surrounding the `h2` elements) that leads
   * to {`/posts/${post.id}`}
   * 
   * Note: these will lead to non-existing pages. We'll fix that next ⏳
   */

  return (
    <div className="posts-container">
      <h1>Blog Posts</h1>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}