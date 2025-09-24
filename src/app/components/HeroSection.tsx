import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { databases } from "@/models/server/config";
import { db, questionAttachmentBucket, questionCollection } from "@/models/name";
import { Query } from "node-appwrite";
import slugify from "@/utils/slugify";
import { storage } from "@/models/server/config";
import HeroSectionHeader from "./HeroSectionHeader";

export default async function HeroSection() {
    const questions = await databases.listDocuments(db, questionCollection, [
        Query.orderDesc("$createdAt"),
        Query.limit(15),
    ]);
    
    console.log("HeroSection - Questions fetched:", questions);

    return (
        <HeroParallax
            header={<HeroSectionHeader />}
            products={questions.documents.map(q => {
                // Default thumbnail for questions without attachments
                const defaultThumbnail = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwSDIwMFoiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjE3MCIgeT0iMTMwIiB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHRleHQgeD0iMjAwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzZCNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UXVlc3Rpb248L3RleHQ+Cjwvc3ZnPgo=';
                let thumbnail = defaultThumbnail;
                
                // Only get file preview if attachmentId exists
                if (q.attachmentId) {
                    try {
                        thumbnail = storage.getFilePreview(questionAttachmentBucket, q.attachmentId).href;
                    } catch (error) {
                        console.log('Error getting file preview:', error);
                        thumbnail = defaultThumbnail;
                    }
                }
                
                return {
                    title: q.title,
                    link: `/questions/${q.$id}/${slugify(q.title)}`,
                    thumbnail: thumbnail,
                };
            })}
        />
    );
}
