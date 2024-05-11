import {
  MutationFunction,
  QueryClient,
  useMutation,
} from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useEditCabin() {
  const queryClient = new QueryClient();

  const { isPending: isEditingLoading, mutate: editCabin } = useMutation({
    mutationFn: createEditCabin as MutationFunction<unknown, unknown>,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("new cabin successfully edited");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditingLoading, editCabin };
}

export default useEditCabin;
