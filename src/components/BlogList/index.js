import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <ul className="blogs-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogItem={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
