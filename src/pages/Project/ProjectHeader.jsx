import React, { useState } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import Image from "../../components/Image";
import Rashid from "../../Assets/Ellipse 68.png";
import Yogesh from "../../Assets/Ellipse 47.png";
import Smily from "../../Assets/Ellipse 48.png";
import Thompson from "../../Assets/Ellipse 54.png";
import lastimage from "../../Assets/Ellipse 61.png";
import Addpersons from "../../Assets/addperson.png";

const ProjectHeader = () => {
  const [assigneeDialogOpen, setAssigneeDialogOpen] = useState(false);
  const [issueTypeDialogOpen, setIssueTypeDialogOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleClickOpen = () => setAssigneeDialogOpen(true);
  const handleCloseAssigneeDialog = () => setAssigneeDialogOpen(false);
  const handleCloseIssueTypeDialog = () => setIssueTypeDialogOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
        borderRadius: "8px",
        marginTop: "-35px",
        gap: 1,
        flexWrap: isMobile ? "wrap" : "nowrap",
      }}
    >
      {/* Left Section: Search and Avatars */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          flex: 1,
        }}
      >
        {/* Search Field */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search this board"
          InputProps={{
            style: {
              borderRadius: "4px",
              width: isMobile ? "100%" : "300px",
              height: "38px",
              marginRight: isMobile ? 0 : "18px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#4D4D4D",
              },
              "&:hover fieldset": {
                borderColor: "#FFFFFF",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FFFFFF",
              },
            },
          }}
        />

        {/* Avatars - Hidden in mobile mode */}
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          {[Rashid, Yogesh, Smily, Thompson, lastimage].map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index}`}
              style={{
                width: "39px",
                height: "35px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          ))}
          <Box
            sx={{
              backgroundColor: "#4D4D4D",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            +2
          </Box>

          <IconButton
            onClick={handleClickOpen}
            sx={{
              backgroundColor: "#171717",
              color: "gray",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              },
            }}
          >
            <Image src={Addpersons} />
          </IconButton>
        </Box>
      </Box>

      {/* Right Section: Dropdowns */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
          flex: 1,
          justifyContent: isMobile ? "space-evenly" : "flex-end",
        }}
      >
        {["Assignee", "Priority", "Issue Type"].map((label, index) => (
          <select
            key={index}
            style={{
              backgroundColor: "transparent",
              height: "32px",
              borderRadius: "7px",
              width: isMobile ? "100%" : "7vw",
              borderWidth: "1px",
              borderStyle: "solid",
              color: "gray",
              padding: "5px 10px",
              fontSize: "13px",
            }}
          >
            <option>{label}</option>
          </select>
        ))}
      </Box>

      {/* Assignee Dialog */}
      <Dialog open={assigneeDialogOpen} onClose={handleCloseAssigneeDialog}>
        <DialogTitle sx={{ color: "white", backgroundColor: "#333333" }}>
          Create Assignee
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#333333" }}>
          <TextField
            label="Assignee Name"
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#A0A0A0" },
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": {
                  borderColor: "#4D4D4D",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#333333" }}>
          <Button onClick={handleCloseAssigneeDialog} sx={{ color: "white" }}>
            Cancel
          </Button>
          <Button onClick={handleCloseAssigneeDialog} sx={{ color: "white" }}>
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* Issue Type Dialog */}
      <Dialog open={issueTypeDialogOpen} onClose={handleCloseIssueTypeDialog}>
        <DialogTitle sx={{ color: "white", backgroundColor: "#333333" }}>
          Create Issue
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#333333" }}>
          <TextField
            label="Issue Title"
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#A0A0A0" },
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": {
                  borderColor: "#4D4D4D",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#333333" }}>
          <Button onClick={handleCloseIssueTypeDialog} sx={{ color: "white" }}>
            Cancel
          </Button>
          <Button onClick={handleCloseIssueTypeDialog} sx={{ color: "white" }}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectHeader;
