// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="order-container">
      {blogsList.map(each => (
        <BlogItem key={each.id} listItem={each} />
      ))}
    </ul>
  )
}

export default BlogList
