import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import {
  Paper,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface FaqProps {}

const Faq: FC<FaqProps> = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.page}>
      <Typography variant="h4">Preguntas frecuentes</Typography>

      <br />

      <FlussAccordion title="¿Quiénes somos?">
        <Typography>
          Fluss es una organización sin fines del grupo que tiene la meta de
          obtener y facilitar información recolectada de los ríos de la
          República Dominicana.
        </Typography>
      </FlussAccordion>
      <FlussAccordion title="¿Qué parámetros recolectamos de los ríos?">
        <Typography>Los datos que recolectamos de los ríos son:</Typography>
        <br />
        <ul>
          <li>
            <Typography>El nivel de pH del agua</Typography>
          </li>
          <li>
            <Typography>El nivel de oxígeno total del agua</Typography>
          </li>
          <li>
            <Typography>La temperatura del agua</Typography>
          </li>
          <li>
            <Typography>El nivel de sólidos disueltos</Typography>
          </li>
          <li>
            <Typography>La turbidez del agua</Typography>
          </li>
        </ul>
      </FlussAccordion>
      <FlussAccordion title="¿En qué consiste la aplicación?">
        <Typography>
          Fluss es un término que deriva del alemán y se traduce al español como
          "río". La aplicación provee una plataforma para acceder a la
          información de cuerpos hídricos tales como:
        </Typography>
        <br />
        <ul>
          <li>
            <Typography>Ríos</Typography>
          </li>
          <li>
            <Typography>Cuencas</Typography>
          </li>
          <li>
            <Typography>Cañadas</Typography>
          </li>
          <li>
            <Typography>Entre otros</Typography>
          </li>
        </ul>
        <br />
        <Typography>
          La información que recolectamos y mostramos de estos cuerpos hídricos
          son:
        </Typography>
        <ul>
          <li>
            <Typography>El nivel de pH del agua</Typography>
          </li>
          <li>
            <Typography>El nivel de oxígeno total del agua</Typography>
          </li>
          <li>
            <Typography>La temperatura del agua</Typography>
          </li>
          <li>
            <Typography>El nivel de sólidos disueltos</Typography>
          </li>
          <li>
            <Typography>La turbidez del agua</Typography>
          </li>
        </ul>
        <Typography>
          La aplicación entonces sirve como una interfaz para acceder a estos
          datos, visualizarlos y tener la posibilidad de descargarlos.k r
        </Typography>
      </FlussAccordion>
    </Paper>
  );
};

interface FlussAccordion {
  title: string;
  children: JSX.Element | string | JSX.Element[];
}
const FlussAccordion: FC<FlussAccordion> = ({ title, children }) => {
  const classes = useStyles();
  const id = generateId("accordion");

  return (
    <Accordion variant="elevation">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={id}
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>{children}</div>
      </AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  page: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
}));

const generateId = ((): ((prefix: string) => string) => {
  let counter = 0;
  return (prefix: string): string => `${prefix}${++counter}`;
})();

export default Faq;

