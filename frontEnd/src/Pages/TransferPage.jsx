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

import SubBtn from "../components/SubBtn";

export const TransferPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountryFrom, setSelectedCountryFrom] = useState("");
  const [selectedCountryTo, setSelectedCountryTo] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const filteredCountries = data.filter((country) =>
          ["India", "United States", "Australia", "Sri Lanka"].includes(
            country.name.common
          )
        );
        setCountries(filteredCountries);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleChangeTo = (event) => {
    setSelectedCountryTo(event.target.value);
  };

  const handleChangeFrom = (event) => {
    setSelectedCountryFrom(event.target.value);
  };

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Country Flags
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <FormControl sx={{ width: 250 }}>
            <InputLabel id="country-select-from-label">From Country</InputLabel>
            <Select
              labelId="country-select-from-label"
              value={selectedCountryFrom}
              label="From Country"
              onChange={handleChangeFrom}
            >
              {countries.map((country) => (
                <MenuItem key={country.cca3} value={country.name.common}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={country.flags.png}
                      alt={`Flag of ${country.name.common}`}
                      sx={{ width: 24, height: 24, marginRight: 1 }}
                    />
                    <ListItemText primary={country.name.common} />
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: 250 }}>
            <InputLabel id="country-select-to-label">To Country</InputLabel>
            <Select
              labelId="country-select-to-label"
              value={selectedCountryTo}
              label="To Country"
              onChange={handleChangeTo}
            >
              {countries.map((country) => (
                <MenuItem key={country.cca3} value={country.name.common}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={country.flags.png}
                      alt={`Flag of ${country.name.common}`}
                      sx={{ width: 24, height: 24, marginRight: 1 }}
                    />
                    <ListItemText primary={country.name.common} />
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { my: 2, width: "525px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            required
          />
        </Box>

        <SubBtn onClick={handleClick} />
      </Container>
    </div>
  );
};
