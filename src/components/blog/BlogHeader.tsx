import React from 'react';
import { SocialShare } from './SocialShare';

export const BlogHeader = () => {
  return (
    <div className="flex items-stretch gap-5 flex-wrap">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6bb143d2b452c0fc598d2a793e1fa376a87b27c8b707e3759569fe4816f82206?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bb143d2b452c0fc598d2a793e1fa376a87b27c8b707e3759569fe4816f82206?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bb143d2b452c0fc598d2a793e1fa376a87b27c8b707e3759569fe4816f82206?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bb143d2b452c0fc598d2a793e1fa376a87b27c8b707e3759569fe4816f82206?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bb143d2b452c0fc598d2a793e1fa376a87b27c8b707e3759569fe4816f82206?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bb143d2b452c0fc598d2a793e1fa376a87b27c8b707e3759569fe4816f82206?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bb143d2b452c0fc598d2a793e1fa376a87b27c8b707e3759569fe4816f82206?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bb143d2b452c0fc598d2a793e1fa376a87b27c8b707e3759569fe4816f82206?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-16 shrink-0 rounded-[50%]"
      />
      <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="text-[rgba(21,21,21,1)] text-lg font-medium tracking-[1px]">
            Maria Lawrence
          </div>
          <SocialShare />
        </div>
        <div className="flex items-stretch gap-2 text-sm text-[rgba(170,170,170,1)] font-normal tracking-[1px]">
          <div className="grow">Jul 31, 2021</div>
          <div className="font-extrabold">.</div>
          <div>5 min read</div>
          <div className="bg-[rgba(6,101,188,1)] flex w-5 shrink-0 h-5 rounded-[50%]" />
          <div className="text-[rgba(6,101,188,1)]">Listen</div>
        </div>
      </div>
    </div>
  );
};