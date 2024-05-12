import { useState } from "react";
import CabinTable from "./CabinTable";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <CabinTable />
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Collapse" : "Add new cabin"}
      </Button>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CreateCabinForm onClose={() => setShowForm(false) as void} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
