import InputStyle from './InputField.style';
import { InputProps } from './InputField.static';

function InputField({ ...props }: InputProps) {
    return (
        <InputStyle>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type={props.type}
                id={props.label}
                value={props.value}
                name={props.name}
                className={props.className}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onClick={props.onClick}
                disabled={props.disabled}
            />
            {props.error && <p className="error">{props.errorMessage}</p>}
        </InputStyle>
    );
}

export default InputField;
