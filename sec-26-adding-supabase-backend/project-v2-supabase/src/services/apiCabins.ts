import supabase, { supabaseUrl } from "./supabase";

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

interface Cabin {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: any;
}

async function addCabin(newCabin: Cabin) {
  // 1. add a new cabin

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.log(error);

    throw new Error("cabin couldn't be added");
  }

  // 2. upload the image

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin?.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data!.id);
    console.log(storageError);
    throw new Error("image couldn't be uploaded and the cabin wasn't created");
  }

  return data;
}

export { getCabins, deleteCabin, addCabin };
