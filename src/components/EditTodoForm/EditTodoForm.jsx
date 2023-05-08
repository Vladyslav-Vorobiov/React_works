import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Field, useFormik, FormikProvider} from 'formik';
import * as Yup from 'yup';

const formValidationRules = Yup.object({
    title: Yup.string().trim()
        .min(3, 'Must be 3 characters or more')
        .max(50, 'Must be 30 characters or less')
        .required('This field is required'),
    description: Yup.string().trim()
        .min(3, 'Must be 3 characters or more')
        .max(200, 'Must be 200 characters or less')
        .required('This field is required'),
});

const EditTodoForm = ({item, handleSave, handleCancel}) => {

    const currentItem = {...item};
    const {title, description, id, completed} = currentItem;

    const formInitialValues = {
        title: title || "",
        description: description || "",
        completed: completed || false,
    };

    const formik = useFormik({
        initialValues: formInitialValues,
        enableReinitialize: true,
        validationSchema: formValidationRules,
        onSubmit: values => handleSave({id, ...values})
    });

    return (

        <FormikProvider value={formik}>
            <Form className='edit-form' onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="todoFormTitle">
                    <Form.Label className="fw-bold">Task title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Enter task title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="edit-form__errors-title">{formik.errors.title}</div>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="todoFormDescription">
                    <Form.Label className="fw-bold">Task description</Form.Label>
                    <Form.Control
                        className="edit-form__textarea"
                        name="description"
                        as="textarea"
                        placeholder="Enter task description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="edit-form__errors-title">{formik.errors.description}</div>
                    ) : null}
                </Form.Group>
                <div className="d-flex justify-content-center align-items-center">
                    <Field className="edit-form__checkbox"
                           type="checkbox"
                           name="completed"
                           checked={formik.values.completed}
                    />
                    <span>Done ?</span>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <Button type="submit" variant="success">Save changes</Button>
                    <Button type="button" variant="danger" onClick={handleCancel}>Cancel</Button>
                </div>
            </Form>
        </FormikProvider>
    );
};

export default EditTodoForm;
