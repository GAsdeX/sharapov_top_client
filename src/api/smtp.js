import axios from "axios"
import {URL} from "../constants";

export const sendMessage = (data) =>
    axios({
        method: "POST",
        url: URL.SMTP,
        data: {
            ...data,
            user: "sharapov"
        }
    })