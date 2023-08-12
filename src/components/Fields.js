import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import PropTypes from 'prop-types';

const Fields = ({name,email,index,handleRemove}) => {
const removeItem=()=>{
    handleRemove(index)
}
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
        <Button onClick={removeItem} variant="contained" color="error">
          <DeleteIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;
