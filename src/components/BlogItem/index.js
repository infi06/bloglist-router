// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listItem} = props
  const {title, description, publishedDate} = listItem

  return (
    <li className="list-container">
      <div className="blog-cont">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}

export default BlogItem
