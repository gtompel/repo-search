import { createEvent } from 'effector';

export const setSearchTerm = createEvent<string>();
export const setPage = createEvent<number>();
