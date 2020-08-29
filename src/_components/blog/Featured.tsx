import React from 'react'
import { Grid, CardMedia, Card, CardContent, Typography, CardActionArea } from '@material-ui/core'
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles'
import { imageUrl } from '@/_plugins/unsplash'
import { randomPost } from '@/_plugins/faker-helper'

const useStyles = (theme: Theme) => ({
    featuredContainer: {
        backgroundColor: theme.palette.primary.light,
        minHeight: '200px',
        margin: theme.spacing(2),
        position: 'relative' as const,
    },
    featureImage: {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    featureText: {
        zIndex: 9,
        color: theme.palette.secondary.main,
    },
})
type PropsWithStyles = WithStyles
class Featured extends React.Component<PropsWithStyles> {
    render(): React.ReactNode {
        const { classes } = this.props
        const unsplash = imageUrl({ width: 2048, height: 300 })
        const post = randomPost()
        return (
            <Grid container>
                <Grid container>
                    <Grid item xs={12}>
                        <Card className={classes.featuredContainer}>
                            <CardMedia className={classes.featureImage} image={unsplash.img}></CardMedia>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography className={classes.featureText} component="h2" variant="h5">
                                                {post.title}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography className={classes.featureText} component="h2" variant="h5">
                                                {post.summary}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Card className={classes.featuredContainer}>
                            <CardMedia className={classes.featureImage} image={unsplash.img}></CardMedia>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className={classes.featuredContainer}>
                            <CardMedia className={classes.featureImage} image={unsplash.img}></CardMedia>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(useStyles)(Featured)
