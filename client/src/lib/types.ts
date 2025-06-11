// BlogPost type for frontend
export type BlogPost = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    imageUrl?: string | null;
    published: boolean;
    readTime: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
};

// Used when creating a new blog post (e.g. from admin panel form)
export type InsertBlogPost = Omit<
    BlogPost,
    "id" | "createdAt" | "updatedAt"
>;

// Contact message type for display (e.g. admin inbox)
export type ContactMessage = {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    read: boolean;
    createdAt: string; // ISO date string
};

// Used when submitting contact form (frontend)
export type InsertContactMessage = Omit<
    ContactMessage,
    "id" | "read" | "createdAt"
>;
