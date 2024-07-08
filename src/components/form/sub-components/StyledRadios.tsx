import {
  FormControlLabel,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { defaultPreference, minWidth } from "../ContactForm";

export default function StyledRadios(props: {
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}) {
  return (
    <FormControl>
      <FormGroup
        sx={{
          minWidth: minWidth,
          marginRight: { md: 2 },
          marginBottom: { xs: 2, md: 0 },
        }}
      >
        <FormLabel component="legend" htmlFor="preference-type-radio">
          Work Preference
        </FormLabel>
        <RadioGroup
          aria-label="preference"
          id="preference-type-radio"
          name="preference"
          {...props}
        >
          <FormControlLabel
            label={defaultPreference}
            value={defaultPreference}
            control={<Radio />}
          />
          <FormControlLabel label="Hybrid" value="Hyrbid" control={<Radio />} />
          <FormControlLabel
            label="In Office"
            value="In Office"
            control={<Radio />}
          />
        </RadioGroup>
        <FormHelperText>WFH!</FormHelperText>
      </FormGroup>
    </FormControl>
  );
}
