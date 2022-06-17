import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import Link from "@mui/material/Link";

const Footer = () => {
  const style = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  };
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__contacts">
            <Link target="_blank" href="https://github.com/DarBaala">
              Github
            </Link>
            <Link target="_blank" href="http://t.me/nmteg">
              Telegram
            </Link>
          </div>
          <div className="footer__socity">
            <Link target="_blank" href="https://facebook.com/trebianeronia">
              Facebook
            </Link>
            <Link target="_blank" href="https://instagram.com/nmteg">
              Instagram
            </Link>
            <Link target="_blank" href="https://twitter.com/nmteg">
              Twitter
            </Link>
          </div>
          <div className="footer__email">
            <form className="footer__form" name="email">
              <TextField
                autoComplete="off"
                type="email"
                style={{
                  color: "white",
                  marginRight: "20px",
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                sx={{
                  ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "2px solid white",
                    },
                    "&:hover": {
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                      },
                    },
                    "&:label.Mui-focused": {
                      color: "white",
                    },
                    color: "white",
                    fontFamily: "Mulish",
                  },
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />

              <Button
                sx={{
                  color: "#fff",
                  fontFamily: "Mulish",
                  fontWeight: "500",
                  fontSize: "16px",
                  textTransform: "none",
                }}
                variant="text"
              >
                Напиши мне
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
