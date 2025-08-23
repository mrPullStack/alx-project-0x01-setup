export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// interfaces/index.ts
export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

// ✅ Props for the PostModal
export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}