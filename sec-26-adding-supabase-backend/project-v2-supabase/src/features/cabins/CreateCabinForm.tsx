import styled from "styled-components";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { Textarea } from "../../ui/Textarea";
import { Cabin } from "../../utils/types";
import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({ cabinToEdit = {} }?: Cabin) {
  const { id: editId, ...editValues } = cabinToEdit;

  // eslint-disable-next-line no-extra-boolean-cast
  const isEditing = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } =
    useForm<Cabin>({
      defaultValues: isEditing ? editValues : {},
    });

  const { errors } = formState;

  // ADD A NEW CABIN
  const { isPending, createCabin } = useCreateCabin();

  // FOR UPDATING AN EXISTING CABIN
  const { isEditingLoading, editCabin } = useEditCabin();

  // SUBMIT THE FORM

  const submitForm = (data: Cabin) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditing)
      editCabin(
        {
          newCabin: { ...data, image, id: editId },
        },
        {
          onSuccess: () => reset(),
        }
      );
    else
      createCabin(
        { newCabin: { ...data, image: image } },
        {
          onSuccess: () => reset(),
        }
      );
  };

  const isProcessing = isPending || isEditingLoading;
  // JSX
  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          disabled={isProcessing}
          id="name"
          {...register("name", {
            required: "this field is required",
          })}
        />
        {errors.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          disabled={isProcessing}
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this field is required",
          })}
        />
        {errors.maxCapacity?.message && (
          <Error>{errors.maxCapacity.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          disabled={isProcessing}
          {...register("regularPrice", {
            required: "this field is required",
          })}
        />
        {errors.regularPrice?.message && (
          <Error>{errors.regularPrice.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          disabled={isProcessing}
          defaultValue={0}
          {...register("discount", {
            validate: (value: number) =>
              value <= getValues().regularPrice ||
              "discount should be less than or equal regular price",
          })}
        />
        {errors.discount?.message && <Error>{errors.discount.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          disabled={isProcessing}
          defaultValue=""
          {...register("description", {
            required: "this field is required",
          })}
        />
        {errors.description?.message && (
          <Error>{errors.description.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditing ? false : "this field is required",
          })}
        />
        {errors.description?.message && (
          <Error>{errors.description.message}</Error>
        )}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isProcessing}>
          {isProcessing ? "loading..." : isEditing ? "Edit Cabin" : "Add Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
