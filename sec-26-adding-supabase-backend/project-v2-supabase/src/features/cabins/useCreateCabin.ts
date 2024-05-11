import {
  MutationFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useCreateCabin() {
  const queryClient = useQueryClient();

  // FOR ADDING A NEW CABIN

  const { isPending, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin as MutationFunction,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("new cabin successfully created");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isPending, createCabin };
}

export default useCreateCabin;
