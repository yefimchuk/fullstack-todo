import axios from "axios";
import { FetchDataType } from "../BLL/loginUser/loginUser.slice";

class Service {
    async register(values: any) {
        await axios.post("/api/auth/registration", {...values}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res: any) => {
            return res;
        }).catch(err => console.log(err));
    }

    async login(values: FetchDataType) {

        return await axios.post("http://localhost:8080/login", {...values}, {}).catch(err => console.log(err));
    }

    async todos(userId: string) {
        return await axios.get("http://localhost:8080/todo", {
            params: {
                userId
            }
        },).catch(err => console.log(err));
    }

    async addTodos({text, userId}: { text: string, userId: string }) {
        return await axios.post("http://localhost:8080/todo/add", {
            text, userId
        },).catch(err => console.log(err));
    }
}

const ServiceInstance = new Service();
export default ServiceInstance;