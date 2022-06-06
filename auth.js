const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const handleSignup = async (e) => {
    let res
    try {
        res = await fetch("http://localhost:3000/signup", {
            method: "POST",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameInput.value,
                password: passwordInput.value
            })
        })
    } catch (e) {
        console.log(e)
    }

    if(res.statusCode === 201) {
        window.location.redirect("./main-part.html")
    }

}

const handleSignin = async () => {
    let res
    try {
        res = await fetch("http://localhost:3000/signin", {
            method: "POST",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameInput.value,
                password: passwordInput.value
            })
        })
    } catch (e) {
        console.log(e)
    }

    console.log(await res.json())

    if(res.status === 200) {
        window.location.replace("./main-part.html")
    }
}