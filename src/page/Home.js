import { useContext, useState } from 'react'
import Login from '../components/Login'
import { cartContext } from '../context.js'

function Home() {
  const [name, setName] = useState("eiei")
  const { user_id, changUserID } = useContext(cartContext)
  console.log(changUserID);
  return (
    <div>
      <div>
        is Home page
        Your name is: {name}
      </div>
      <div>
        context:{user_id}<br />
        <button onClick={() => { changUserID('1223') }} >ChangContextValue</button>
      </div>
    </div>
  )
}

export default Home
