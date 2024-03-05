interface LocationData {
    id?: string;
    name?: string;
    city?: string;
    address?: string;
    modifiedBy?: string | undefined;
}

interface EditFormErrors {
    name: string;
    city: string;
    address: string;
}

export type { LocationData, EditFormErrors };
