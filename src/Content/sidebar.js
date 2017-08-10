
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import StarIcon from 'material-ui-icons/Star';

const styleSheet = createStyleSheet(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
}));

function InsetList(props) {
    const classes = props.classes;
    return (
        <List className={classes.root}>
            <ListItem button>
                <Link to="/About"><ListItemText inset primary="Chelsea Otakan"/></Link>
            </ListItem>
            <ListItem button>
                <Link to="/"><ListItemText inset primary="Chelsea Otakan"/></Link>
            </ListItem>
            <ListItem button>
                <Link to="/"><ListItemText inset primary="Chelsea Otakan"/></Link>
            </ListItem>
            <ListItem button>
                <Link to="/"><ListItemText inset primary="Chelsea Otakan"/></Link>
            </ListItem>
            <ListItem button>
                <Link to="/"><ListItemText inset primary="Chelsea Otakan"/></Link>
            </ListItem>
            <ListItem button>
                <Link to="/"><ListItemText inset primary="Chelsea Otakan"/></Link>
            </ListItem>
            <ListItem button>
                <Link to="/"><ListItemText inset primary="Chelsea Otakan"/></Link>
            </ListItem>

        </List>
    );
}

InsetList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(InsetList);