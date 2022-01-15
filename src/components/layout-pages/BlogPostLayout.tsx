import { PropsWithChildren } from 'react';

import Link from 'next/link';

import { format } from 'date-fns';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineClock,
  HiOutlineEye,
} from 'react-icons/hi';

import Layout from '@/components/layout-main/Layout';

import { Post } from '.contentlayer/types';
import CloudinaryImage from '../CloudinaryImage';
import ViewCounter from '../ViewCounter';

export default function BlogPostLayout({
  children,
  post,
}: PropsWithChildren<{ post: Post }>) {
  const formattedDate = format(new Date(post.publishedAt), 'MMMM dd, yyyy');

  const customMetadata = {
    url: 'https://sergiobarria.com/blog',
    title: 'Blog | Sergio Barria',
  };

  return (
    <Layout customMetadata={customMetadata}>
      <div className='my-10 layout'>
        <Link href='/blog'>
          <a className='inline-block mb-4 text-gray-regular hover:text-gray-darker'>
            <span className='flex items-center'>
              <HiOutlineArrowNarrowLeft size={30} className='mr-2' />
              Back
            </span>
          </a>
        </Link>
        <CloudinaryImage
          publicId={`sergiobarria/banners/${post.banner}`}
          alt='blog post cover'
          width={1200}
          height={720}
        />
        <h1 className='mt-4'>{post.title}</h1>
        <div className='flex items-center gap-1 my-4 text-gray-regular'>
          <div>
            <span>Written on {formattedDate}</span>
            <span> by Sergio Barria</span>
            {/* <span className="mx-2 text-gray-lighter">|</span> */}
          </div>
        </div>
        <div className='flex items-center space-x-4 text-gray-regular dark:text-gray-lighter'>
          <div className='flex items-center gap-1'>
            <HiOutlineClock />
            <span>{post.readingTime.text}</span>
            {/* <span className='mx-2 text-gray-lighter'>|</span> */}
          </div>
          <div className='flex items-center gap-1'>
            <HiOutlineEye />
            <ViewCounter slug={post.slug} />
          </div>
        </div>

        {/* Summary */}
        <div className='py-6 my-10 italic border-dashed text-long dark:text-gray-lighter border-y'>
          {post.summary}
        </div>

        {/* Main Content */}
        <section className='section md:grid'>
          <article className='prose max-w-none dark:prose-invert prose-a:no-underline prose-li:marker:hidden'>
            {children}
          </article>
        </section>
      </div>
    </Layout>
  );
}
