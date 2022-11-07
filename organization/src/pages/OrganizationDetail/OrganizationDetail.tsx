import React, { FC } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useNavigate, useParams } from "react-router-dom";
import style from "./OrganizationDetail.module.scss";
import { OrganizationDetailProps } from "./OrganizationDetail.props";
import { useGetOrganizationDetailQuery } from "../../redux/apiSlice";

const OrganizationDetail: FC<OrganizationDetailProps> = ({ ...props }) => {
  const navigate = useNavigate();
  const { idOrganization } = useParams();

  const {
    data: detail = {
      image: "",
      title: "",
    },
    isLoading,
  } = useGetOrganizationDetailQuery({ id: idOrganization });

  return (
    <div {...props}>
      {isLoading ? (
        <Box className={style.loader}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Button startIcon={<ReplyAllIcon />} onClick={() => navigate("/")}>
            back
          </Button>
          <Box className={style.detail}>
            <img
              src={detail?.image}
              alt={"img_org"}
              width={200}
              height={"auto"}
            />
            <h2>{detail.title}</h2>
          </Box>
        </>
      )}
    </div>
  );
};

export default OrganizationDetail;
