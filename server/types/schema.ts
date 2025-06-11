import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});

export const blogPosts = pgTable("blog_posts", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    excerpt: text("excerpt").notNull(),
    content: text("content").notNull(),
    category: text("category").notNull(),
    tags: text("tags").array().notNull().default([]),
    imageUrl: text("image_url"),
    published: boolean("published").notNull().default(false),
    readTime: integer("read_time").notNull().default(5),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    subject: text("subject").notNull(),
    message: text("message").notNull(),
    read: boolean("read").notNull().default(false),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
    id: true,
    read: true,
    createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
