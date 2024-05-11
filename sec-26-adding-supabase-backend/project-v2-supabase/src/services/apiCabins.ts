import { Cabin } from "../utils/types";
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

async function createEditCabin(newCabin: any) {
  // 1. add a new cabin

  newCabin = newCabin.newCabin;

  console.log(newCabin);
  const hasImagePath = typeof newCabin.image === "string";
  console.log(hasImagePath);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const query = supabase.from("cabins");
  let q;
  if (!newCabin?.id) {
    q = query.insert([{ ...newCabin, image: imagePath }]);
  }
  if (newCabin.id) {
    q = query.update({ ...newCabin, image: imagePath }).eq("id", newCabin.id);
  }

  const { data, error } = await q!.select().single();

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

export { getCabins, deleteCabin, createEditCabin };
