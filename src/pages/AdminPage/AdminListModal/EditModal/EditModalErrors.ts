import { useState } from 'react';
import { EditFormErrors } from '../../AdminPage.static';

function useEditModalError() {
    const [formErrors, setFormErrors] = useState<EditFormErrors>({
        name: '',
        city: '',
        address: '',
    });

    function validateName(name: string): boolean {
        let isNameValid = true;

        if (name === '' && !name) {
            setFormErrors((errors) => ({ ...errors, name: 'Name is required' }));
            isNameValid = false;
        } else if (name.length < 3) {
            setFormErrors((errors) => ({ ...errors, name: 'Name must be at least 3 characters' }));
            isNameValid = false;
        } else {
            setFormErrors((errors) => ({ ...errors, name: '' }));
        }
        return isNameValid;
    }

    function validateCity(city: string): boolean {
        let isCityValid = true;

        if (city === '' && !city) {
            setFormErrors((errors) => ({ ...errors, city: 'City is required' }));
            isCityValid = false;
        } else if (city.length < 2) {
            setFormErrors((errors) => ({ ...errors, city: 'City must be at least 2 characters' }));
            isCityValid = false;
        } else {
            setFormErrors((errors) => ({ ...errors, city: '' }));
        }
        return isCityValid;
    }

    function validateAddress(address: string): boolean {
        let isAddressValid = true;

        if (address === '' && !address) {
            setFormErrors((errors) => ({ ...errors, address: 'Address is required' }));
            isAddressValid = false;
        } else if (address.length < 4) {
            setFormErrors((errors) => ({ ...errors, address: 'Address must be at least 4 characters' }));
            isAddressValid = false;
        } else {
            setFormErrors((errors) => ({ ...errors, address: '' }));
        }
        return isAddressValid;
    }

    return {
        formErrors,
        validateName,
        validateCity,
        validateAddress,
    };
}

export { useEditModalError };
