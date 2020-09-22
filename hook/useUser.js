import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { onAuthChanged } from "firebase/client";


export const USER_STATES = {
NOT_LOGGED: null,
NOT_KNOWN: undefined,
}

export default function useUser() {
const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
const router = useRouter()

useEffect(() => {
onAuthChanged(setUser)
}, [])

useEffect(() => {
user === USER_STATES.NOT_LOGGED && router.push("/login")
}, [user])

return user
}