import {FETCH_USER_GROUPS} from "../../../store/types";

const token = localStorage.getItem('token');

let currentToken = `Bearer ${token}`;

export const fetchUserGroups = () => dispatch =>{
        console.log("user groups action called");
        fetch('https://gateway.stokisha.com/auth-service/v1/api/users/userGroups',{ method: "GET",headers: { "Content-Type": "application/json;charset=UTF-8", Authorization: currentToken}})
        .then(res => res.json())
        .then(userGroups => dispatch({
            type:FETCH_USER_GROUPS,
            payload:userGroups
        })
        );
};
