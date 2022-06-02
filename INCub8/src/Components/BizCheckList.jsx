import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BizCheckList = ({ company }) => {
  console.log("company", company);
  return (
    <div style={{position:'relative', left:"0" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">{`${company?.entity_name}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" gutterBottom component="div">
            Entity Type: {company.entity_type}{" "}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Issuance Agency: {company.issuance_agency_id}
          </Typography>

          <Typography variant="h6" gutterBottom component="div">
            Reg. Postal Code: {company.reg_postal_code}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Reg. Street Name: {company.reg_street_name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            UEN: {company.uen}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            UEN Issue Date: {company.uen_issue_date}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            UEN Status: {company.uen_status}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default BizCheckList;
