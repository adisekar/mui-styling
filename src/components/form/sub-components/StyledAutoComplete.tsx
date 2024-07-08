import { Autocomplete, TextField } from "@mui/material";
import { minWidth } from "../ContactForm";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];

export default function StyledAutoComplete(props: {
  value: string;
  onInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => void;
}) {
  return (
    <Autocomplete
      {...props}
      options={roles}
      sx={{ minWidth: minWidth }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      renderInput={(params) => {
        return (
          <TextField
            name="role"
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused": {
                color: "primary.dark",
              },
            }}
            {...params}
          />
        );
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      ListboxProps={{
        //@ts-ignore
        sx: {
          height: 100,
          color: "primary.dark",
          // "& li.MuiAutocomplete-option:nth-of-type(even)": {
          //   backgroundColor: "green",
          // },
          "& li.MuiAutocomplete-option:hover": { backgroundColor: "gold" },
          "& li.MuiAutocomplete-option[aria-selected='true']": {
            color: "white",
            backgroundColor: "primary.main",
            "&.Mui-focused": {
              backgroundColor: "primary.main",
            },
          },
        },
      }}
      // onChange={() => {}} // can add debugger;
    />
  );
}
