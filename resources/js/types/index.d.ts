export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export interface Workspace {
    id: number;
    name: string;
    status: string;
    repo: string;
    latestChange: string;
}

