import React from 'react';
import { Grid, Paper, GridSpacing, makeStyles, Theme, createStyles } from '@material-ui/core';

import { Title, ProjectContainer } from './styled';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: "100%",
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

const Projects: React.FC = () => {
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
    };

    // 
    const projects = [
        { "name": "GuideOn", "description": "Avaliação de professores", "src": "http://cdti.org.br/GuideOnHomolog/assets/icon_logo.png" },
        { "name": "Apostilas Interativas", "description": "Apostilas e testes de Oclusao e Radiografia", "src": "http://200.186.180.83/assets/apostila.png" },
        { "name": "Gih Cosméticos", "description": "E-commerce de cosméticos", "src": "https://www.suafranquia.com/views/sources/images/franquias/logos/43bf89c7aa57c3a90f2377afd2b781d9.png" },
        { "name": "Ivan Imóveis", "description": "Site para anuncio de imóveis", "src": "https://ivansiqueiraimoveis.com.br/wp-content/uploads/2019/12/Ivan-Siqueira-branca-scaled-e1575393364230.png" },
    ]

    return (
        <ProjectContainer>
            <div style={{ textAlign: "center", width: "100%" }}>
                <Title>Projetos</Title>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {projects.map((value) => (
                            <Grid key={value.name} item xs={4}>
                                <Paper>
                                    <img src={value.src} alt="" />
                                    <h3>{value.name}</h3>
                                    <p>{value.description}</p>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </ProjectContainer>
    )
}

export default Projects;