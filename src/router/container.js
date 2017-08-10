
import React from 'react';
import PropTypes from 'prop-types';
import  './style.css';
import {Link} from 'react-router';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import StarIcon from 'material-ui-icons/Star';
import Header from '../Header/Header';
const styleSheet = createStyleSheet(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
}));

function Container(props) {
    const classes = props.classes;
    return (
        <div className="container">
            <Header/>
            <div className="sidebar">
                <List className={classes.root}>
                    <ListItem button>
                        <Link activeClassName="link--active" to="/about/user">
                            <ListItemText inset primary="Chelsea Otakan"/>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link activeClassName="link--active" to="/abouts/user">
                            <ListItemText inset primary="Chelsea Otakan"/>
                        </Link>
                    </ListItem>
                </List>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Container);