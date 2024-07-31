import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProvider from "../../components/Hook-Form/FormProivder";
import { RHFTextField } from "../../components/Hook-Form";
import RHFAutocomplete from "../../components/Hook-Form/RHFAutocomplete";
import { useSelector } from "react-redux";

const MEMBERS = ["Name 1", "Name 2", "Name 3"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have at least 2 members"),
  });

  const defaultValues = {
    title: "",
    tags: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // submit data to backend
      console.log("DATA", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex flex-column gap-3">
        <RHFTextField name={"title"} label="Title" />
        <RHFAutocomplete
          name={"members"}
          label="Members"
          multiple
          freeSolo
          options={MEMBERS.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />
        <div className="d-flex align-items-center justify-content-end gap-3">
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};

export default function CreateGroup({ open, handleClose }) {
  const { mode } = useSelector((state) => state.app);
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
    >
      {/* Title */}
      <DialogTitle
        sx={{
          pb: 3,
          backgroundColor: !mode ? "#fbfaff" : "#161C24",
          color: !mode ? "black" : "white",
        }}
      >
        Create New Group
      </DialogTitle>
      {/* Content */}
      <DialogContent
        sx={{
          backgroundColor: !mode ? "#fbfaff" : "#161C24",
          color: !mode ? "black" : "white",
        }}
      >
        {/* form */}
        <CreateGroupForm  handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
