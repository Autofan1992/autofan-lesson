import styles from './FormControls.module.scss';
import {Field} from "redux-form";

function FormControl({meta: {touched, error}, children}) {
    const hasError = touched && error

    return (
        <div>
            {children}
            {hasError &&
            <span className={styles.errorLabel}>{error}</span>
            }
        </div>
    )
}

export const Textarea = ({input, ...props}) => {
    return (
        <FormControl {...props}>
            <textarea
                {...input} {...props}
                className={`form-control ${(!props.meta.valid && props.meta.touched) && 'is-invalid'}`}
            />
        </FormControl>
    )
}

export const Input = ({input, ...props}) => {
    return (
        <FormControl {...props}>
            <input
                {...input} {...props}
                className={`form-control ${(!props.meta.valid && props.meta.touched) && 'is-invalid'}`}
            />
        </FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props) => (
    <Field
        name={name}
        validate={validators}
        component={component}
        {...props}
    />
)