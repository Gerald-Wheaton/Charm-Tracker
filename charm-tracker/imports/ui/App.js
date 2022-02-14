import React from "react"
// import { UP_Collection_Access } from './../api/user_posts.js';
import Title from "./Title.js"
import Login from "./pages/Login.js"
import ResetPassword from "./pages/ResetPassword.js"
import PropTypes from "prop-types"
import PageRoutes from "./PageRoutes.js"

//export default class App extends React.Component {
//render() {
const App = props => {
  const { title } = props
  return (
    <>
      <PageRoutes />
      {/* <Title title={this.props.passedPropTitle} /> */}
      <Login />
    </>
  )
}
//}

// App.propTypes = {
//   passedPropTitle: PropTypes.string.isRequired,
// }

export default App
