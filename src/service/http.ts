import axios from "axios";
import { FetchDataType } from "../BLL/loginUser/loginUser.slice";

class Service {
    async register(values: any) {

       return  await axios.post("http://localhost:8080/registration", {email: values.email, password: values.password}, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async login(values: FetchDataType) {

        return await axios.post("http://localhost:8080/login", {...values}, {});
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

    async deleteTodo(id: number) {
        return await axios.delete("http://localhost:8080/todo/delete", {
            params: {id}
        },).catch(err => console.log(err));
    }

    async importantTodo(id: number) {
        return await axios.put("http://localhost:8080/todo/important", {}, {params: {id}},).catch(err => console.log(err));
    }

    async completeTodo(id: number) {
        return await axios.put("http://localhost:8080/todo/completed", {}, {params: {id}},).catch(err => console.log(err));
    }
}

const ServiceInstance = new Service();
export default ServiceInstance;