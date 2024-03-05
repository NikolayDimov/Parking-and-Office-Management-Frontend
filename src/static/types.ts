interface Reservation {
      id?: string;
      start: Date;
      end: Date;
      comment: string;
      spotId: string;
      userId: string;
      createdAt?: Date;
      updatedAt?: Date;
      deletedAt?: null;
      modifiedBy: string;
      error?:  string;
}

export type { Reservation };
