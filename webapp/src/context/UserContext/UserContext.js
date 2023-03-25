import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { ApiBaseUrl } from '../../config.js'

const UserContext = createContext()

function UserContextProvider (props) {
  const [userLoggedIn, setUserLoggedIn] = useState(undefined)
  const [_id, setID] = useState(undefined)
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)

  async function getUserLoggedIn () {
    const loggedInRes = await axios.get(`${ApiBaseUrl}/profile/verify`)
    setUserLoggedIn(loggedInRes.data.authorized)
    setID(loggedInRes.data.id)
    setName(loggedInRes.data.name)
    setEmail(loggedInRes.data.email)
  }

  useEffect(() => {
    getUserLoggedIn()
  }, [])

  return (
    <UserContext.Provider value={{ userLoggedIn, _id, name, email, getUserLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext
export { UserContextProvider }