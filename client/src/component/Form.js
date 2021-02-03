import React, { useState } from "react";
import {useDispatch} from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import { addForm } from "../actions/form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Form({history}) {
  const [formData, setFormData] = useState({
    type: "",
    label: "",
    fullName: "",
    monthlyPayment: "",
    adress: "",
    negothiablePayment: "",
    poneNumber: "",
    pdl: "",
    city: "",
    pce: "",
    postalCode: "",
    email: "",
    consomEstimation: ""
  });

  const { type,
    label,
    fullName,
    monthlyPayment,
    adress,
    negothiablePayment,
    poneNumber,
    pdl,
    city,
    pce,
    postalCode,
    email,
    consomEstimation} = formData;

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
      e.preventDefault()
      dispatch(addForm(formData, history))

    }

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Container maxWidth="ls" fixed className="container">
        <div style={{ display: "flex" }}>
          <div>
            <TextField
             
              id="outlined-required"
              label="Nom et Prenom"
              variant="outlined"
              name="fullName"
              value={fullName}
              onChange={handleChange}
            />
            <TextField
              id="outlined-disabled"
              label="Adresse"
              variant="outlined"
              name="adress"
              value={adress}
              onChange={handleChange}
            />
            <TextField
              id="outlined-password-input"
              label="Télephone"
              type="text"
              variant="outlined"
              name="poneNumber"
              value={poneNumber}
              onChange={handleChange}
            />
            <TextField
              id="outlined-read-only-input"
              label="Ville"
              variant="outlined"
              name="city"
              value={city}
              onChange={handleChange}
            />
            <TextField
              id="outlined-number"
              label="Code Postal"
              type="text"
              variant="outlined"
              name="postalCode"
              value={postalCode}
              onChange={handleChange}
            />
            <TextField
              id="outlined-search"
              label="Estimation de la consomation"
              type="text"
              variant="outlined"
              name="consomEstimation"
              value={consomEstimation}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              
              id="outlined-required"
              label="Mensualité actuelle"
              variant="outlined"
              name="monthlyPayment"
              value={monthlyPayment}
              onChange={handleChange}
            />
            <TextField
              id="outlined-disabled"
              label="Mensualité à Negocier"
              variant="outlined"
              name="negothiablePayment"
              value={negothiablePayment}
              onChange={handleChange}
            />
            <TextField
              id="outlined-password-input"
              label="PDL"
              type="text"
              variant="outlined"
              name="pdl"
              value={pdl}
              onChange={handleChange}
            />
            <TextField
              id="outlined-read-only-input"
              label="PCE"
              variant="outlined"
              name="pce"
              value={pce}
              onChange={handleChange}
            />
            <TextField
              id="outlined-number"
              label="Email"
              type="text"
              variant="outlined"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <input type="submit"/>
        <Button variant="contained" color="primary" >Envoyer + Voir l'offre</Button>
      </Container>
    </form>
  );
}
