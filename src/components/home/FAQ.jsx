import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { faq } from "../../data/home/faq";
import { ExpandMore } from "@mui/icons-material";

function FAQ() {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        py: { xs: 1, sm: 8 },
        px: { xs: 2, sm: 4 },
        mb: { xs: 1, sm: 4 },
      }}
    >
      <Grid item xs={12} sm={6}>
        <Typography sx={{ typography: { xs: "h3", sm: "h2" } }}>
          Frequently Asked Question
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        {faq?.map((item) => (
          <>
            <Accordion
              key={item?.id}
              square
              sx={{
                py: 2,
                border: 0,
                backgroundColor: "#fffdf1",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={item?.id}
                id={item?.id}
              >
                  {item?.question}
              </AccordionSummary>{" "}
              <AccordionDetails>
                <Typography>{item?.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </Grid>
    </Grid>
  );
}

export default FAQ;
