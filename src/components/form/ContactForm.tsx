import {
  Paper,
  Stack,
  MenuItem,
  ListItemText,
  useTheme,
  Dialog,
  Alert,
  AlertTitle,
  Checkbox,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { contactData, FormValues } from "../../data/ContactData";
import { useState } from "react";
import StyledTextField from "./sub-components/StyledTextField";
import StyledAutoComplete from "./sub-components/StyledAutoComplete";
import StyledRadios from "./sub-components/StyledRadios";
import StyledSelect from "./sub-components/StyledSelect";
import { StyledFormGroup } from "./sub-components/StyledFormGroup";
import StyledDatePicker from "./sub-components/StyledDatePicker";

export const minWidth = 300;
export const defaultPreference = "Work From Home";
const skills = ["React", "Angular", "Python", "NodeJS", "Machine Learning"];

const today = new Date();

const getDefaultFormValues = () => {
  return {
    id: contactData.length + 1,
    name: "",
    role: "",
    skills: ["React"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    preference: defaultPreference,
  };
};

const paperInputsStyle = {
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { border: "1px solid", borderColor: "primary.main" },
    "&:hover": {
      "& > fieldset": { borderColor: "primary.light" },
    },
  },
  "& .MuiFormLabel-root": {
    color: "primary.dark",
  },
};

export default function ContactForm() {
  const theme = useTheme();

  const [formValues, setFormValues] = useState<FormValues>(() =>
    getDefaultFormValues()
  );
  const [alertOpen, setAlertOpen] = useState(false);

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setFormValues({
      ...formValues,
      role: value || "",
    });
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => {
    const { value } = event.target;
    setFormValues({
      ...formValues,
      skills: typeof value === "string" ? value.split(", ") : value,
    });
  };

  const handleDatePickerChange = (value: string | null | undefined) => {
    console.log(value);
    const startDate = value as unknown as {
      month: () => string;
      date: () => string;
      year: () => string;
    };
    setFormValues({
      ...formValues,
      startDate: `${
        startDate.month() + 1
      }/${startDate.date()}/${startDate.year()}`,
    });
  };

  const handleSubmit = () => {
    contactData.push(formValues);
    setAlertOpen(true);
    console.log(contactData);
    clearValues();
  };

  const handleClearClick = () => {
    clearValues();
  };

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() });
    console.log(formValues);
  };

  const handleAlertClick = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Paper
        sx={{
          ...paperInputsStyle,
          margin: { xs: 1, sm: 2 },
          zIndex: theme.zIndex.appBar + 1,
          "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
          backgroundColor: "grid.dark",
          // "& button.MuiButton-text": { backgroundColor: "primary.light" },
        }}
      >
        <form>
          <StyledFormGroup row paddingtop={10}>
            <StyledTextField
              value={formValues.name}
              onChange={handleTextFieldChange}
            />
            <StyledAutoComplete
              value={formValues.role || ""}
              onInputChange={handleAutoCompleteChange}
            />
          </StyledFormGroup>
          <StyledFormGroup row>
            <StyledSelect
              value={formValues.skills || ""}
              onChange={handleSelectChange}
            >
              {skills.map((skillName) => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <Checkbox
                      checked={formValues.skills?.includes(skillName)}
                    />
                    <ListItemText primary={skillName} />
                  </MenuItem>
                );
              })}
            </StyledSelect>

            <StyledDatePicker
              value={formValues.startDate}
              onChange={handleDatePickerChange}
            />
          </StyledFormGroup>
          <StyledFormGroup row>
            <StyledRadios
              value={formValues.preference}
              onChange={handleRadioChange}
            />

            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{ minWidth: minWidth }}
            >
              <Button
                variant="contained"
                sx={{ height: 56, width: 100 }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                variant="beautiful"
                sx={{ height: 56, width: 100 }}
                onClick={handleClearClick}
              >
                Clear
              </Button>
            </Stack>
          </StyledFormGroup>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClick}>
        <Alert onClose={handleAlertClick}>
          <AlertTitle>Success!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  );
}
