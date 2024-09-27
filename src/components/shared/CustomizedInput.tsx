import { TextField } from "@mui/material";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField
      margin="normal"
      slotProps={{
        input: {
          style: {
            width: "400px",
            borderRadius: 10,
            fontSize: 20,
            color: "white",
          },
        },
        inputLabel: { style: { color: "white" } },
      }}
      name={props.name}
      label={props.label}
      type={props.type}
    ></TextField>
  );
};

export default CustomizedInput;
