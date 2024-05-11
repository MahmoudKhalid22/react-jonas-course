import supabase from "./supabase";

async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

async function deleteCabin(id: string | number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabin couldn't be deleted");
  }

  return data;
}

async function addCabin(newCabin: {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  cabinPhoto?: string;
}) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) {
    console.log(error);

    throw new Error("cabin couldn't be added");
  }
  return data;
}

export { getCabins, deleteCabin, addCabin };
