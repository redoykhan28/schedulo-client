import { useEffect, useState } from "react"

const useCustomer = email => {

    const [isCustomer, setIsCustomer] = useState(false);
    const [customerLoader, setCustomerLoader] = useState(true);

    useEffect(() => {

        fetch(`http://localhost:5000/user/customer/${email}`)
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