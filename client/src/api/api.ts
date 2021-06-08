import axios, {AxiosResponse} from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000',
});

export const userAPI = {
  getProfile(userID: number){
    return instance.get(`users/${userID}`).then((response: AxiosResponse) => {
      return response.data;
    })
  }
};

export const authAPI = {
  getMe(id: number){
    return instance.get(`users/${id}`).then((res: AxiosResponse) => {
      return res;
    })
  },
  postLogin(email: string, password: string){
    return instance.post('/auth/login', {email, password});
  },
  postRegistr(form){
    console.log("You in api",form)
    return instance.post("/api/auth/register", {form});
  }
}

export const pollsAPI = {
  getPolls(userID: number){
    return instance.get('polls/').then((response: AxiosResponse) => {
      return response.data;
    })
  }
};