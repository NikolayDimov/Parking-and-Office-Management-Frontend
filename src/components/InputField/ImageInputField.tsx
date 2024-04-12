import { InputProps } from './InputField.static';
import ImageInputStyle from './ImageInputField.style';

function ImageInputField({ ...props }: InputProps) {
    const inputValue = typeof props.value === 'boolean' ? props.value.toString() : props.value;

    return (
        <ImageInputStyle>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type={props.type}
                id={props.label}
                value={inputValue}
                name={props.name}
                className={props.className}
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
            />
            {props.error && <p className="error">{props.errorMessage}</p>}
        </ImageInputStyle>
    );
}

export default ImageInputField;
