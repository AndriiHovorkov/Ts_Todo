import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { formState } from "../../../../helpers/interface";
import { formStyles } from "./formStyles";

export const FormikMU:FC<formState> = ({thisInput, onSubmitTitle}) => {
    const classes = formStyles();

    const formik = useFormik({
        initialValues:thisInput ,
        onSubmit: (values, actions) => {
            onSubmitTitle(values);
            actions.resetForm();
        },
    });

    return (
        <div className={classes.formBlock}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Add new title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    rows={4}
                />
                <Button type ="submit" variant="contained" size="large" className="Add_Button">Save</Button>
            </form>
        </div>
    );
};
