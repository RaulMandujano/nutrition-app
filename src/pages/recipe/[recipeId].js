import getRecipe from '../../apis/getRecipe';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const RecipePage = props => {
    console.log(props);
    return (
        <>

        <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1400,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 328, height: 228 }}>
            <Img alt="complex" src={props.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                vegan:
              </Typography>
              <Typography variant="body2" gutterBottom>
                Steps:
              </Typography>
            
            {props.analyzedInstructions[0].steps.map((instructions, index) => (
                <ul>
                    <li key={index}>{instructions.step}</li>
                </ul>
            ))}
    
            </Grid>

          </Grid>

          <Grid item>
            <Typography variant="subtitle1" component="div">
              Ready in {props.readyInMinutes} min
            </Typography>
          </Grid>

        </Grid>
      </Grid>
    </Paper>

    <h3>Ingredients</h3>

    <table style={{ width: 500 }}>

        <thead>
            <tr>
                {props.extendedIngredients.map((ingrediant, index) => (
                    <th key={index}>
                        {ingrediant.aisle}
                    </th>
                ))}
            </tr>
        </thead>

        <tbody>
            <tr>
                {props.extendedIngredients.map((ingrediant, index) => (
                    <td key={index}>
                        {ingrediant.originalName}
                    </td>
                ))}
            </tr>

            <tr>
                {props.extendedIngredients.map((ingrediant, index) => (
                    <td key={index}>
                        {ingrediant.measures.us.amount} {ingrediant.measures.us.unitLong}
                    </td>
                ))}
            </tr>

            <tr>
                {props.extendedIngredients.map((ingrediant, index) => (
                    <td key={index}>
                        {ingrediant.consistency}
                    </td>
                ))}
            </tr>
            
        </tbody>

    </table>


    </>
    )
}


export const getServerSideProps = async context => {
    const recipe = await getRecipe(context.query.recipeId)
    return {props: recipe}
}

export default RecipePage;