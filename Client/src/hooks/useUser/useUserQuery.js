import { useQuery } from "@tanstack/react-query";
import { getAllUsers, getUserById } from "../../services/user";



const useUserQuery = (_id) => {
   const { data, ...rest } = useQuery({
        queryKey: ['USER_KEY', _id],
        queryFn: async () => {
            return _id ? await getUserById(_id ) : await getAllUsers(_id)
        }
    })
  return { data, ...rest }
}
export default useUserQuery;