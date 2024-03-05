import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import contact from "../../Assets/contactUs.svg";
import InputAdornment from "@mui/material/InputAdornment";
import Person4Icon from "@mui/icons-material/Person4";
import MailIcon from "@mui/icons-material/Mail";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ServiceForm = () => {
  const theme = createTheme({
    components: {
      // Inputs
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: `2px solid #080D0E`,
              },
            },
          },
        },
      },
    },
  });

  const SubmitButton = styled(Button)(() => ({
    backgroundColor: "#080D0E",
    color: "#E1E0DE",
  }));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="px-20 py-10 w-full h-full flex flex-row bg-[#9B9A9E] text-[#080D0E]">
      <div className="w-full h-full flex flex-row border-[15px] rounded-[75px] border-[#080D0E]">
        <div className="h-full w-1/2 flex flex-col bg-[#FEFEFE] rounded-l-[60px] ">
          <div className="p-[2.5rem] h-1/4 w-full flex flex-wrap  bg-white text-start rounded-tl-[60px] font-semibold text-3xl">
            <div className="pl-[2.5rem]"> We'd love to hear from you</div>
          </div>
          <div
            style={{ backgroundImage: `url(${contact})` }}
            className="h-full bg-center rounded-bl-[60px] bg-contain bg-no-repeat"
          ></div>
        </div>
        <div className="w-1/2 h-full pl-[2.5rem] flex flex-col bg-[#E1E0DE] rounded-r-[65px]">
          <div className="pt-[1.5rem] h-1/4 w-full flex flex-col rounded-tl-[60px]">
            <div className="h-full font-semibold text-3xl flex-wrap">
              Get in touch.
            </div>
            <div className="h-full font-semibold flex-wrap">
              Fill up the form our team will get back to you in 24 hrs.
            </div>
          </div>
          <div className="w-full flex h-3/4">
            <div className="h-full w-full pr-[8rem]">
              <form
                className="h-full flex flex-col justify-start"
                onSubmit={handleSubmit(onSubmit)}
              >
                <p>Your name</p>
                <ThemeProvider theme={theme}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person4Icon />
                        </InputAdornment>
                      ),
                    }}
                    id="name"
                    variant="outlined"
                  />
                  <br></br>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailIcon />
                        </InputAdornment>
                      ),
                    }}
                    id="email"
                    variant="outlined"
                    placeholder="Your mail ID"
                  />
                  <br></br>
                  <TextField
                    id="message"
                    variant="outlined"
                    placeholder="Message"
                    multiline
                    rows={3}
                    maxRows={3}
                  />
                </ThemeProvider>
                <br></br>
                <div className="pr-3">
                  <SubmitButton variant="contained">Submit</SubmitButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
