import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';

import {
    Button,
    Typography,
    TextField, Container,
    CircularProgress, Box
} from '@material-ui/core';

import validationSchema from '../../utils/validationSchema';

import { fetchCreateText, removeOutputForm, wordsSelector } from '../../store/wordsSlice';

import useStyles from './styles';

const CreateText = () => {
    const classes = useStyles();

    const {
        text,
        output,
        loading,
        errorMessage
    } = useSelector(wordsSelector);

    const dispatch = useDispatch();

    const onSubmit = (values, resetForm) => {

        resetForm({
            values: {
                ...values,
                input: '',
            }
        });

        dispatch(fetchCreateText({ text: values.input.trim() }));
    };

    const handleResetForm = () => {
        dispatch(removeOutputForm());
    };

    return (
        <Container component="section" maxWidth="xs" className={classes.root} >
            <Typography variant="h4" align="center" >
                Please enter the text in the input field
            </Typography >
            <Formik
                initialValues={{
                    input: text,
                    output: output
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    onSubmit(values, resetForm);
                }}
                onFocus={(values, { resetForm }) => {
                    handleResetForm(values, resetForm);
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    handleReset,
                    values,
                    errors,
                    isValid,
                    touched,
                }) => (
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                        onKeyDown={(e) => {
                            if (((e.ctrlKey || e.metaKey) && (e.keyCode === 13 || e.keyCode === 10))) {
                                handleSubmit();
                            }
                        }}
                    >
                        <TextField
                            error={touched.input && Boolean(errors.input)}
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.textField}
                            id="input"
                            label="Input"
                            helperText={errors.input ? errors.input : ''}
                            name="input"
                            type="text"
                            value={values.input ? values.input : text}
                            multiline
                            minRows={3}
                            maxRows={10}
                            onFocus={handleResetForm}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            autoComplete="off"
                        />

                        <TextField
                            error={Boolean(errorMessage)}
                            variant="outlined"
                            required
                            fullWidth
                            className={classes.textField}
                            id="output"
                            disabled={true}
                            label="Output"
                            helperText={errorMessage ? errorMessage : ''}
                            name="output"
                            type="text"
                            value={output ? output : ''}
                            multiline
                            minRows={5}
                            maxRows={20}
                        />

                        <Box component="div" className={classes.wrapperButton} >
                            <Button
                                fullWidth
                                disabled={!isValid || loading || Boolean(text)}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                size="large"
                            >
                                Proceed
                            </Button >
                            {loading && <CircularProgress
                                thickness={5}
                                size={36}
                                color="secondary"
                                className={classes.preloader} />}
                        </Box >
                    </form >
                )}
            </Formik >
        </Container >
    );
};

export default CreateText;
