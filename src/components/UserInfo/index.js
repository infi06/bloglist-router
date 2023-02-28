// Write your JS code here
import './index.css'

const UserInfo = () => (
  <ul className="user-list">
    <li className="item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="Profile"
        className="img"
      />
    </li>
    <li>
      <h1 className="name">Wade warren</h1>
    </li>
    <li className="para">
      <p className="describe">Software developer at UK</p>
    </li>
  </ul>
)

export default UserInfo
