export interface Series {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  category: string;
  series?: {
    id: string;
    name: string;
  };
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface NewsletterSubscription {
  email: string;
}