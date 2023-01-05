export const getToken = (email) => {

    fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {

            if (data.accessToken) {

                console.log(data)
                localStorage.setItem('token', data.accessToken)
            }

        })

}