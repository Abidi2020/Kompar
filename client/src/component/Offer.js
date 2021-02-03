import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { getOfferById } from "../actions/form";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Offer({match}) {
  const [formData, setFormData] = useState({
    type: "",
    label: "",
    fullName: "med",
    monthlyPayment: "",
    adress: "",
    negothiablePayment: "",
    poneNumber: "",
    pdl: "",
    city: "",
    pce: "",
    postalCode: "",
    email: "",
    consomEstimation: "",
  });

  const {
    
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
    consomEstimation,
  } = formData;

  const classes = useStyles();

  const form = useSelector(state => state.form.form)
  const dispatch = useDispatch()
console.log(match.params.id)

dispatch(getOfferById(match.params.id))
  useEffect(() => {

      setFormData({
          fullName: form ? form.fullName : "",
          adress: form ? form.adress : "",
          city: form ? form.city : "",
          pce: form ? form.pce : "",
          pdl: form ? form.pdl : "",
          poneNumber: form ? form.poneNumber : "",
          postalCode: form ? form.postalCode : "",
          monthlyPayment: form ? form.monthlyPayment : "",
          consomEstimation: form ? form.consomEstimation : "",
          negothiablePayment: form ? form.negothiablePayment : "",
          email: form ? form.email : ""
      })
      return () => {
         
      }
  }, [form])

  return (
    <Container maxWidth="ls" fixed>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.pos}
            variant="h5"
            color="textSecondary"
            gutterBottom
          >
            1.Cooronnées
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Typography className={classes.pos} color="textSecondary">
                Nom et Prénom: <span>{form && fullName}</span>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Code postal: <span>{form && postalCode}</span>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Email: <span>{form && email}</span>
              </Typography>
            </div>
            <div>
              <Typography className={classes.pos} color="textSecondary">
                Adresse: <span>{form && adress}</span>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Ville: <span>{form && city}</span>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Télephone: <span>{form && poneNumber}</span>
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <hr />
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.pos}
            variant="h5"
            color="textSecondary"
            gutterBottom
          >
            2.Votre projet
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Typography className={classes.pos} color="textSecondary">
                Vous changez de fournisseur: <span></span>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Votre logement situé à: <span>{form && city}</span>
              </Typography>
            </div>
            <div>
              <Typography className={classes.pos} color="textSecondary">
                PDL: <span>{pdl}</span>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                PCE: <span>{form && pce}</span>
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      <hr />
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.pos}
            variant="h5"
            color="textSecondary"
            gutterBottom
          >
            3.Consommation
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Typography className={classes.pos} color="textSecondary">
                Estimation de la consomation actuelle: <span>{form && consomEstimation}</span>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Mensualité négociée: <span>{form && negothiablePayment}</span>
              </Typography>
            </div>
            <div>
              <Typography className={classes.pos} color="textSecondary">
                Mensualité actuelle: <span>{form && monthlyPayment}</span>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Economie actuelle: <span>dzhdakdz</span>
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
