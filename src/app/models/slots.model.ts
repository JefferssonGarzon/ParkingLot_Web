export interface userSlot {
    id: number;
    email: string;
    name: string;
    cellphone: string;
    document: string;
    creation_date: Date;
    birthdate: string;
    gender: string;
    profile: string;
    number_plate: string;
    vehicle_type: string;
}

export interface reservationSlot {
    id: number;
    user: userSlot;
    initial_hour: Date;
    final_hour: Date;
    number_plate: string;
    vehicle_type: string;
    slot: number;
    document_number?: any;
    email?: any;
    status: string;
    is_cancelled: boolean;
}

export interface Datos {
    id: number;
    place_code: string;
    reservation: reservationSlot;
    status: string;
}

