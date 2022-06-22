import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { signOut } from '../../store/actions/authAction';


const SignedInLink = (props) => {
        const {userInitials} = props;

        console.log(userInitials);
    return (
        <ul className="right">
            <li><NavLink to= '/create'>New Project</NavLink></li>
            <li><a  onClick={props.signOut}> Log out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{userInitials.initials}</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        userInitials: state.firebase.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLink);