import { useEffect, useState } from "react"

const useAdmin = email => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoader, setAdminLoader] = useState(true);

    useEffect(() => {

        fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setIsAdmin(data.isAdmin);
                setAdminLoader(false)
            })

    }, [email])
    return [isAdmin, adminLoader]
}

export default useAdmin