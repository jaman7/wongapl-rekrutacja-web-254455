import React from 'react';
import { tinaField, useTina } from 'tinacms/dist/react';
import type { BlogQuery, BlogQueryVariables } from '../__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import FormattedDate from '../../src/components/react/FormattedDate.tsx';
import Icon from '../../src/components/react/icon.tsx';

type Props = {
  variables: BlogQueryVariables;
  data: BlogQuery;
  query: string;
};

export default function AdminBlogPost(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const blog = data.blog;

  return (
    <article className="max-w-3xl mx-auto py-10 prose prose-lg">
      <h1 className="text-lg mb-2" data-tina-field={tinaField(blog, 'title')}>
        {blog?.title}
      </h1>
      <p className="text-sm text-gray-500 m-0 flex gap-4">
        <span data-tina-field={tinaField(blog, 'author')} className="flex items-center gap-1">
          <Icon iconName="TbUser" size={20} /> {blog?.author}
        </span>
        <span data-tina-field={tinaField(blog, 'updatedDate')} className="flex items-center gap-1">
          <Icon iconName="TbCalendarMonth" size={20} /> <FormattedDate date={blog?.pubDate || ''} />
        </span>
        {blog?.category && (
          <span data-tina-field={tinaField(blog, 'category')} className="flex items-center gap-1">
            <Icon iconName="TbTag" size={20} /> {blog?.category}
          </span>
        )}
      </p>
      <div data-tina-field={tinaField(blog, 'heroImage')} className="block">
        {blog.heroImage && <img className="my-2 rounded-lg" src={blog.heroImage} alt="" />}
      </div>

      <div data-tina-field={tinaField(blog, 'body')}>
        <TinaMarkdown content={blog.body} />
      </div>
    </article>
  );
}
