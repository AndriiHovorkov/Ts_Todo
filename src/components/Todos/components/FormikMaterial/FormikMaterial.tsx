import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { IFormState } from '../../../../helpers/interface';
import { formStyles } from './formStyle';

export const FormikMaterial: FC<IFormState> = ({ input, onSubmitTitle }) => {
  const classes = formStyles();

  const formik = useFormik({
    initialValues: input,
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
        <Button type="submit" variant="contained" size="large">Save</Button>
      </form>
    </div>
  );
};
