import React from 'react';

interface SuggestedPostProps {
  authorImage: string;
  authorName: string;
  title: string;
  postImage: string;
}

export const SuggestedPost: React.FC<SuggestedPostProps> = ({
  authorImage,
  authorName,
  title,
  postImage,
}) => {
  return (
    <div className="flex flex-col">
      <img
        loading="lazy"
        srcSet={postImage}
        className="aspect-[1] object-contain w-[100px] rounded-xl"
      />
      <div className="flex items-stretch gap-2.5 mt-2">
        <img
          loading="lazy"
          srcSet={authorImage}
          className="aspect-[1] object-contain w-8 shrink-0 rounded-[50%]"
        />
        <div className="my-auto text-base text-[rgba(21,21,21,1)] font-light tracking-[1px]">
          {authorName}
        </div>
      </div>
      <div className="font-medium leading-6 mt-2 text-base text-[rgba(21,21,21,1)] tracking-[1px]">
        {title}
      </div>
    </div>
  );
};