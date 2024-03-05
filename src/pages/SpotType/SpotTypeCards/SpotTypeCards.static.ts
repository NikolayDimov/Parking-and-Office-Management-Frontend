interface SpotType {
      id: string;
      name: string;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date | null;
      modifiedBy: string;
      occupancy?: number;
}
export type { SpotType };
