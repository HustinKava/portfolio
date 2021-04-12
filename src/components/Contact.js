import React from "react";
import { FormControl, Button, TextField, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "blue"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "& .MuiOutlinedInput-input": {
        color: "white"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "blue"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "white"
      },
      "& .MuiInputLabel-outlined": {
        color: "white"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "blue"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "white"
      }
    }
});

function Contact () {

    const classes = useStyles();

    return (
        <Container id='Contact' className='container' maxWidth="md">
            <h1>Contact Form</h1>   
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: 20,
                        padding: 20
                        }}
                    >
                    <form style={{ width: "50%" }}>

                    <FormControl margin="normal" fullWidth>
                        <TextField
                        className={classes.root}
                        required
                        id="outlined-required"
                        label="Name"
                        variant="outlined"
                        placeholder='Name'
                        />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <TextField
                        className={classes.root}
                        required
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                        placeholder='Email'
                        />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <TextField
                        className={classes.root}
                        required
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        placeholder='Message'
                        variant="outlined"
                        />
                    </FormControl>

                    <Button variant="outlined" color="primary" size='medium'>
                        Send
                    </Button>
                    </form>
                    </div>


      </Container>
    );
  
}

export default Contact;