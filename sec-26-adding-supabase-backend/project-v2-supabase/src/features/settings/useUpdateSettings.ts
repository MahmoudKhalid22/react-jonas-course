import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

function useUpdateSettings() {
  const queryClient = new QueryClient();

  const { isPending: isUpdating, mutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      toast.success("setting updated successfully");
    },
  });

  return { isUpdating, mutate };
}

export default useUpdateSettings;
