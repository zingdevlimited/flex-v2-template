import {
  Column,
  Grid,
  Heading,
  Box,
  Separator,
  Button,
} from "@twilio-paste/core";
import React from "react";
import { renderSettingsPage } from "@build-now/core";
import { PAGE_NAME } from ".";

export const Settings: React.FC = () => {
  return renderSettingsPage(
    "buildNow",
    PAGE_NAME,
    <Box width="100%" padding={"space0"}>
      <Grid gutter={"space30"} vertical>
        <Column>
          <Heading as={"h6"} variant={"heading50"}>
            {{name}} Settings
          </Heading>
          <Separator orientation="horizontal" verticalSpacing="space20" />
        </Column>
       
        <Column>
          <Box textAlign={"right"}>
            <Button type="submit"variant={"primary"}>
              Save
            </Button>
          </Box>
        </Column>
      </Grid>
    </Box>
  );
};
