import React from "react";
import emailjs from 'emailjs-com';
import { FormControl, Button, TextField, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './Contact.css';

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#BADFFF"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "& .MuiOutlinedInput-input": {
        color: "white"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#BADFFF"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "white"
      },
      "& .MuiInputLabel-outlined": {
        color: "white"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "#BADFFF"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "white"
      }
    }
});

function Contact () {

    const classes = useStyles();

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_0ild9a3', 'template_g87tkuh', e.target, 'user_hmdhXn2wu53yfNaHPlE1e')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <Container className='container' maxWidth="md">
            <h1 className='contactTitle'>Contact Form</h1>   
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: 20,
                        paddingBottom: 20,
                        }}
                    >
                    <form onSubmit={sendEmail} className='formSize'>

                    <FormControl margin="normal" fullWidth>
                        <TextField
                        className={classes.root}
                        required
                        id="outlined-required"
                        label="Subject"
                        variant="outlined"
                        placeholder='Subject'
                        name='subject'
                        />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <TextField
                        className={classes.root}
                        required
                        id="outlined-required"
                        label="Name"
                        variant="outlined"
                        placeholder='Name'
                        name='name'
                        />
                    </FormControl>

                    <FormControl className='formSize' margin="normal" fullWidth>
                        <TextField
                        className={classes.root}
                        required
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                        placeholder='Email'
                        name='email'
                        />
                    </FormControl>

                    <FormControl className='formSize' margin="normal" fullWidth>
                        <TextField
                        className={classes.root}
                        required
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        placeholder='Message'
                        variant="outlined"
                        name='message'
                        />
                    </FormControl>

                    <Button type='submit' className='formButton' variant="outlined" color="primary" size='medium'>
                        Send
                    </Button>
                    </form>
                    </div>
      </Container>
    );
  }

export default Contact;