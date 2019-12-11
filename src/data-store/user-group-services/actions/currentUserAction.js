import {encode} from "base-64";
import {GET_CURRENT_USER} from "../../../store/types";

let username = 'portal';
let  password = 'pin';
let token = localStorage.getItem('token');

export const getCurrentUser = () => dispatch =>{
    console.log("current user action called----------------");
    fetch(`https://gateway.stokisha.com/oauthservice/oauth/check_token?token=${token}`,{ method: "GET", headers: new Headers({
            'Authorization': 'Basic ' + encode(`${username}:${password}`),
        })})
        .then(res => res.json())
        .then(userGroups => dispatch({
                type:GET_CURRENT_USER,
                payload:userGroups
            })
        );
};
