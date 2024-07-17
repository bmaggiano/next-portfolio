"use client";
import { useParams } from 'next/navigation';
import { blogContent } from '../../../app/blogContent';
import Image from 'next/image';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';



export default function BlogPost() {
    const params = useParams();
    const blog = blogContent.find(blog => blog.id === params?.blogId);

    if (!blog) {
        return <p className='text-white'>Blog post not found.</p>;
    }

    return (
        <main className="mt-8 text-white">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/"> &lt; Back</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h2 className="text-white text-3xl mb-12 font-medium sm:text-3xl md:text-6xl">{blog.title}</h2>
            </div>
            <div className="flex flex-col items-center">
                <Image height={100} width={200} src={blog.image} alt={blog.title} className="rounded-lg mb-8" />
                <article className="max-w-2xl text-center text-gray-400" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
        </main>
    );
};