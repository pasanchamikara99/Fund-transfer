import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  ListItemText,
  Input,
  TextField,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SubBtn from "../components/SubBtn";
import Currencise from "../assets/countries.json";
import axios from "axios";
import Swal from "sweetalert2";

export const TransferPage = () => {
  const [selectedCountryFrom, setSelectedCountryFrom] = useState("");
  const [selectedCountryTo, setSelectedCountryTo] = useState("");
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const handleChangeTo = (event) => {
    setSelectedCountryTo(event.target.value);
    setAmount(0);
    setConvertedAmount(0);
  };

  const handleChangeFrom = async (event) => {
    setSelectedCountryFrom(event.target.value);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}${event.target.value}`
      );
      setExchangeRates(response.data.conversion_rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }

    setAmount(0);
    setConvertedAmount(0);
  };

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    setAmount(inputAmount);
    convertAmount(inputAmount, selectedCountryTo);
  };

  const convertAmount = (inputAmount, toCountry) => {
    const rate = exchangeRates[toCountry] || 1;
    const converted = inputAmount * rate;
    setConvertedAmount(converted.toFixed(2));
  };

  const handleClick = async () => {
    try {
      const data = {
        fromCountry: selectedCountryFrom,
        toCountry: selectedCountryTo,
        amount: amount,
        convertedAmount: convertedAmount,
      };

      const response = await axios.post(
        "http://localhost:4005/transfer/addtransfer",
        data
      );

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Found Transfer Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <Container align="center">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#e0f7fa",
          }}
        >
          <Box
            sx={{
              p: 4,
              boxShadow: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom sx={{ my: 5 }}>
              Currency Converter
            </Typography>
            <Box sx={{ gap: 1 }}>
              <FormControl sx={{ width: 250 }}>
                <InputLabel id="country-select-from-label">
                  From Country
                </InputLabel>
                <Select
                  labelId="country-select-from-label"
                  value={selectedCountryFrom}
                  label="From Country"
                  onChange={handleChangeFrom}
                >
                  {Currencise.map((currency) => (
                    <MenuItem key={currency.code} value={currency.code}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={currency.flag}
                          alt={`Flag of ${currency.country}`}
                          sx={{ width: 24, height: 24, marginRight: 1 }}
                        />
                        <ListItemText primary={currency.country} />
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <SwapHorizIcon sx={{ my: 2, fontSize: 30 }} />
              <FormControl sx={{ width: 250 }}>
                <InputLabel id="country-select-to-label">To Country</InputLabel>
                <Select
                  labelId="country-select-to-label"
                  value={selectedCountryTo}
                  label="To Country"
                  onChange={handleChangeTo}
                >
                  {Currencise.map((currency) => (
                    <MenuItem key={currency.code} value={currency.code}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={currency.flag}
                          alt={`Flag of ${currency.country}`}
                          sx={{ width: 24, height: 24, marginRight: 1 }}
                        />
                        <ListItemText primary={currency.country} />
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { my: 2, minWidth: 250 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Amount"
                  variant="outlined"
                  value={amount}
                  onChange={handleAmountChange}
                  required
                />
              </Box>
              <SwapHorizIcon sx={{ my: 2, fontSize: 30 }} />
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { my: 2, minWidth: 250 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Converted Amount"
                  variant="outlined"
                  value={convertedAmount}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
            </Box>

            <SubBtn onClick={handleClick} />
          </Box>
        </Box>
      </Container>
    </div>
  );
};
