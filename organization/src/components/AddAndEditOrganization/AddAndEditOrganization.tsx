import React, { ChangeEvent, FC, memo, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useFormik } from "formik";
import {
  useAddOrganizationMutation,
  useUpdateOrganizationMutation,
} from "../../redux/apiSlice";
import { AddAndEditOrganizationProps } from "./AddAndEditOrganization.props";
import style from "./AddAndEditOrganization.module.scss";
import { getOrganizationRequestModel } from "../../common/organization.helpers";
import { IFormValues } from "../../interfaces/organization.interface";

export const AddAndEditOrganization: FC<AddAndEditOrganizationProps> = memo(
  ({ organization, onClose, ...props }) => {
    const [img, setImg] = useState(organization?.image || "");

    const [add, { isLoading }] = useAddOrganizationMutation();
    const [update, { isLoading: isUpdateLoading }] =
      useUpdateOrganizationMutation();

    const formik = useFormik({
      initialValues: {
        title: organization?.title || "",
        tracking: organization?.licenses[0].assigned || "",
        protection: organization?.licenses[1].assigned || "",
      },
      onSubmit: async (values: IFormValues) => {
        if (organization && organization.id) {
          const model = getOrganizationRequestModel({img, values, organization, id: organization.id});
          await update(model);
          onClose();
        } else {
          const model = getOrganizationRequestModel({img, values});
          await add(model);
          onClose();
        }
      },
    });

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
          if (reader.result) {
            setImg(reader.result.toString());
          }
        };

        reader.readAsDataURL(file);
      }
    };

    return (
      <Modal
        aria-labelledby="Organization"
        aria-describedby="OrganizationDetail"
        onClose={onClose}
        {...props}
      >
        <Box className={style.container}>
          {(isLoading || isUpdateLoading) && (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          )}
          {img && (
            <img
              src={img}
              alt={"img"}
              loading="lazy"
              width={100}
              height={100}
            />
          )}
          <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <Stack direction="column" alignItems="center" spacing={2}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden type="file" onChange={handleImageUpload} />
                <PhotoCamera />
              </IconButton>
            </Stack>
            <TextField
              id="title"
              label="Name"
              placeholder="Name"
              fullWidth
              sx={{ marginBottom: 2 }}
              multiline
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <TextField
              id="tracking"
              label="Tracking"
              placeholder="Tracking"
              fullWidth
              sx={{ marginBottom: 2 }}
              multiline
              onChange={formik.handleChange}
              value={formik.values.tracking}
            />
            <TextField
              id="protection"
              label="Protection"
              placeholder="Placeholder"
              fullWidth
              sx={{ marginBottom: 2 }}
              multiline
              onChange={formik.handleChange}
              value={formik.values.protection}
            />
            <Button variant={"contained"} type="submit">
              {organization?.id ? "Update" : "Add"}
            </Button>
            <Button onClick={onClose}>Close</Button>
          </form>
        </Box>
      </Modal>
    );
  }
);
