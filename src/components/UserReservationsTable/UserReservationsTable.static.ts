interface ReservationsTable {
    id: string;
    comment: string;
    spotName: string;
    spotDescription: string;
    spotLocation: string;
    spotTypeName: string;
    start: Date;
    end: Date;
}

export type { ReservationsTable };
