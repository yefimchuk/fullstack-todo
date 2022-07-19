import axios from "axios";

class Service {
    async register(values: any) {
        await axios.post("/api/auth/registration", {...values}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res: any) => {
            console.log(res)
        }).catch(err => console.log(err));
    }
}

const
    ServiceInstance = new Service();
export default ServiceInstance;