"use client";
import { useParams } from 'next/navigation';
import { blogContent } from '../../../app/blogContent';
import Image from 'next/image';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';



export default function BlogPost() {
    const params = useParams();
    const blog = blogContent.find(blog => blog.id === params?.blogId);

    if (!blog) {
        return <p className='text-white'>Blog post not found.</p>;
    }

    return (
        <main className="max-w-3xl mx-auto px-4 mt-8 text-white">
            <div className=" flex w-full flex-col justify-center overflow-hidden rounded-lg">
                <Breadcrumb className='mb-0 sm:mb-4'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/"> &lt; Back</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className='flex flex-col space-y-4'>
                    <p><span className='text-gray-400'>Published on {blog.published}</span></p>
                    <h2 className="text-white text-3xl mb-4 font-medium sm:text-3xl md:text-4xl">{blog.title}</h2>
                    <div className='flex flex-row items-center space-x-4'>
                        <Avatar>
                            <AvatarImage src="/bmaggiano.jpeg" alt="bmaggiano avatar" />
                            <AvatarFallback>B</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='text-sm text-gray-400'>Brandon Maggiano</p>
                            <a href="https://twitter.com/brandonmaggiano" target="_blank" rel="noreferrer" className='text-xs text-gray-400 hover:underline'>@bmaggiano</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <Image layout='intrinsic' height={50} width={800} src={blog.blogImage} alt={blog.title} className="max-h-[200px] sm:max-h-[300px] object-cover object-bottom rounded-lg my-8" />
                <article className="text-gray-400 mb-8" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
        </main>
    );
};