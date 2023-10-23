import axios from "axios";
import { useState } from "react";
import { Alert, Button, Form, FormGroup, Input } from "reactstrap";
import { Navigate } from "react-router-dom";

const CreateForm = (props) => {
    const BASE_URL = ""

    const [field, setField] = useState("")
    const [isError, setIsError] = useState(false)

    const create = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/api/${props.tableName}`, props.data)

            if (res.status === 201) {
                //handle success here
            }
        } catch (error) {
            console.log(error)
            setIsError(true)
        }
    }
}