import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  console.log(blogItem.title)
  return (
    <div className="blog-container">
      <div className="blog-info-container">
        <h1 className="blog-title">{blogItem.title}</h1>
        <p className="blog-date">{blogItem.publishedDate}</p>
      </div>
      <p className="blog-description">{blogItem.description}</p>
      <hr />
    </div>
  )
}

export default BlogItem
