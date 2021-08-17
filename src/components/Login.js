import React from 'react'


function Login(props) {
  return (
    <div>
      <button onClick={() => { props.setName("Panumars") }} >Login</button>
    </div>
  )
}

export default Login
