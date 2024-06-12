import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://micro-earn-serverside.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;