export interface File {
    doctype?: string | null;
    fileContent?: Uint8Array | null;
}

export interface Reports {
    name?: string | null;
}

export interface Filter {
    name?: string | null;
    id?: number | null;
}
