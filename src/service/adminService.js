import axios from "axios";

const AdminService = () => {

    const http = axios.create({
        baseURL: process.env.BASE_URL,

        headers: {
            "Content-type": "application/json",
        },
    });

    // Admin Login
    const Login = async (loginForm) => {
        try {
            const login = await http.post("/staff/login", loginForm);
            if (login) {
                return login;
            }
        } catch (error) {
            console.log("Error in Admin Login Part", error);
        }
    }


    return {
        Login
    }
}

export default AdminService