import { useEffect, useState } from "react"

const useCustomer = email => {

    const [isCustomer, setIsCustomer] = useState(false);
    const [customerLoader, setCustomerLoader] = useState(true);

    useEffect(() => {

        fetch(`https://schedulo-server.vercel.app/user/customer/${email}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setIsCustomer(data.isCustomer);
                setCustomerLoader(false)
            })

    }, [email])
    return [isCustomer, customerLoader]
}

export default useCustomer