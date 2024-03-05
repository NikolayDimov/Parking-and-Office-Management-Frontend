import { useState } from 'react';
import { EditFormErrors } from '../../FloorPlan.static';

function useEditModalError() {
    const [formErrors, setFormErrors] = useState<EditFormErrors>({
        name: '',
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

    return {
        formErrors,
        validateName,
    };
}

export { useEditModalError };
