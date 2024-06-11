import { useQuery } from "@tanstack/react-query";


import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;