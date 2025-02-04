import React from 'react';
import { SuggestedPost } from './SuggestedPost';

export const BlogSidebar = () => {
  return (
    <aside className="flex flex-col items-stretch mt-20 max-md:mt-10">
      <div className="flex items-stretch gap-8 text-xl font-normal tracking-[2px] max-md:mr-[7px]">
        <div className="bg-[rgba(21,21,21,1)] text-white grow w-fit px-16 py-[19px] rounded-[100px] max-md:px-5">
          Get started
        </div>
        <div className="text-[rgba(6,101,188,1)] my-auto">Sign In</div>
      </div>
      
      <div className="bg-neutral-100 flex items-stretch gap-1.5 text-base text-[rgba(146,146,146,1)] font-normal whitespace-nowrap tracking-[1px] leading-loose mt-10 px-3.5 py-[7px] rounded-xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e6542ae71efe1e0cd07cbb879b8000cc456e4d95db3e907c010deb58a2291db?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-7 shrink-0"
        />
        <input 
          type="search"
          placeholder="Search"
          className="grow shrink w-[300px] basis-auto bg-transparent outline-none"
        />
      </div>

      <div className="flex items-stretch gap-[18px] tracking-[1px] mt-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1b76b8d0051f51813bae676e7bbe71a52191b70f9c23d42ea1e9c97944f81d02?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b76b8d0051f51813bae676e7bbe71a52191b70f9c23d42ea1e9c97944f81d02?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b76b8d0051f51813bae676e7bbe71a52191b70f9c23d42ea1e9c97944f81d02?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b76b8d0051f51813bae676e7bbe71a52191b70f9c23d42ea1e9c97944f81d02?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b76b8d0051f51813bae676e7bbe71a52191b70f9c23d42ea1e9c97944f81d02?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b76b8d0051f51813bae676e7bbe71a52191b70f9c23d42ea1e9c97944f81d02?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b76b8d0051f51813bae676e7bbe71a52191b70f9c23d42ea1e9c97944f81d02?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b76b8d0051f51813bae676e7bbe71a52191b70f9c23d42ea1e9c97944f81d02?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[100px] shrink-0 max-w-full rounded-[50%]"
        />
        <div className="flex flex-col items-stretch my-auto">
          <div className="text-[rgba(21,21,21,1)] text-[22px] font-medium">
            Maria Lawrence
          </div>
          <div className="text-[rgba(117,117,117,1)] text-base font-normal mt-2">
            257K followers
          </div>
        </div>
      </div>

      <p className="text-[rgba(117,117,117,1)] text-base font-normal leading-6 tracking-[1px] mt-4">
        Lead UX Designer @ Slack. Loves travelling and lives for backstage action! Love to design user centric products and understanding consumer behaviour
      </p>

      <div className="flex w-[183px] max-w-full items-stretch gap-4 text-base text-white font-normal whitespace-nowrap tracking-[1px] mt-4">
        <button className="bg-[rgba(6,101,188,1)] gap-2.5 px-8 py-3.5 rounded-[100px] max-md:px-5">
          Follow
        </button>
        <div className="bg-[rgba(6,101,188,1)] flex w-[47px] shrink-0 h-[47px] rounded-[50%]" />
      </div>

      <h2 className="text-[rgba(21,21,21,1)] text-[22px] font-normal tracking-[1px] mt-12 max-md:mt-10">
        Suggested Reads
      </h2>

      <div className="mt-7 space-y-5">
        <SuggestedPost
          postImage="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9c3f95f179e8397e9c46ca3df0e5b85a4a4c5ddbb98a668062af0706f24f0?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9c3f95f179e8397e9c46ca3df0e5b85a4a4c5ddbb98a668062af0706f24f0?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9c3f95f179e8397e9c46ca3df0e5b85a4a4c5ddbb98a668062af0706f24f0?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9c3f95f179e8397e9c46ca3df0e5b85a4a4c5ddbb98a668062af0706f24f0?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9c3f95f179e8397e9c46ca3df0e5b85a4a4c5ddbb98a668062af0706f24f0?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9c3f95f179e8397e9c46ca3df0e5b85a4a4c5ddbb98a668062af0706f24f0?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9c3f95f179e8397e9c46ca3df0e5b85a4a4c5ddbb98a668062af0706f24f0?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9c3f95f179e8397e9c46ca3df0e5b85a4a4c5ddbb98a668062af0706f24f0?placeholderIfAbsent=true"
          authorImage="https://cdn.builder.io/api/v1/image/assets/TEMP/4ec73917b244b03d320535fe7fc15607607ebc11e0e4499ac8da75680adada00?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec73917b244b03d320535fe7fc15607607ebc11e0e4499ac8da75680adada00?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec73917b244b03d320535fe7fc15607607ebc11e0e4499ac8da75680adada00?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec73917b244b03d320535fe7fc15607607ebc11e0e4499ac8da75680adada00?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec73917b244b03d320535fe7fc15607607ebc11e0e4499ac8da75680adada00?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec73917b244b03d320535fe7fc15607607ebc11e0e4499ac8da75680adada00?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec73917b244b03d320535fe7fc15607607ebc11e0e4499ac8da75680adada00?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ec73917b244b03d320535fe7fc15607607ebc11e0e4499ac8da75680adada00?placeholderIfAbsent=true"
          authorName="Andrew Joe"
          title="As a Google Maps PM, how can you improve it?"
        />
        <SuggestedPost
          postImage="https://cdn.builder.io/api/v1/image/assets/TEMP/1da8f1ec8fe3c36ac766bacbdf371b19b068161fa3112aacaaae6e18fa652ad9?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da8f1ec8fe3c36ac766bacbdf371b19b068161fa3112aacaaae6e18fa652ad9?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da8f1ec8fe3c36ac766bacbdf371b19b068161fa3112aacaaae6e18fa652ad9?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da8f1ec8fe3c36ac766bacbdf371b19b068161fa3112aacaaae6e18fa652ad9?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da8f1ec8fe3c36ac766bacbdf371b19b068161fa3112aacaaae6e18fa652ad9?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da8f1ec8fe3c36ac766bacbdf371b19b068161fa3112aacaaae6e18fa652ad9?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da8f1ec8fe3c36ac766bacbdf371b19b068161fa3112aacaaae6e18fa652ad9?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1da8f1ec8fe3c36ac766bacbdf371b19b068161fa3112aacaaae6e18fa652ad9?placeholderIfAbsent=true"
          authorImage="https://cdn.builder.io/api/v1/image/assets/TEMP/832e038e1be6c9908a41debcc76228cbd075b5a52667c431ba22025b18342d26?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/832e038e1be6c9908a41debcc76228cbd075b5a52667c431ba22025b18342d26?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/832e038e1be6c9908a41debcc76228cbd075b5a52667c431ba22025b18342d26?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/832e038e1be6c9908a41debcc76228cbd075b5a52667c431ba22025b18342d26?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/832e038e1be6c9908a41debcc76228cbd075b5a52667c431ba22025b18342d26?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/832e038e1be6c9908a41debcc76228cbd075b5a52667c431ba22025b18342d26?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/832e038e1be6c9908a41debcc76228cbd075b5a52667c431ba22025b18342d26?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/832e038e1be6c9908a41debcc76228cbd075b5a52667c431ba22025b18342d26?placeholderIfAbsent=true"
          authorName="Andrea at UX Bootcamp"
          title="Tools I use as a lead UX Designer at Microsoft."
        />
        <SuggestedPost
          postImage="https://cdn.builder.io/api/v1/image/assets/TEMP/089213c410f86c9ee78577d61ccf1d8b6b05f78c36beac48039adc221f3b532c?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/089213c410f86c9ee78577d61ccf1d8b6b05f78c36beac48039adc221f3b532c?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/089213c410f86c9ee78577d61ccf1d8b6b05f78c36beac48039adc221f3b532c?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/089213c410f86c9ee78577d61ccf1d8b6b05f78c36beac48039adc221f3b532c?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/089213c410f86c9ee78577d61ccf1d8b6b05f78c36beac48039adc221f3b532c?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/089213c410f86c9ee78577d61ccf1d8b6b05f78c36beac48039adc221f3b532c?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/089213c410f86c9ee78577d61ccf1d8b6b05f78c36beac48039adc221f3b532c?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/089213c410f86c9ee78577d61ccf1d8b6b05f78c36beac48039adc221f3b532c?placeholderIfAbsent=true"
          authorImage="https://cdn.builder.io/api/v1/image/assets/TEMP/39e6db44c814e8d4595aa10478afb7bdeec0ee9d7a3af9002ce9d4ed1c1ade2a?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e6db44c814e8d4595aa10478afb7bdeec0ee9d7a3af9002ce9d4ed1c1ade2a?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e6db44c814e8d4595aa10478afb7bdeec0ee9d7a3af9002ce9d4ed1c1ade2a?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e6db44c814e8d4595aa10478afb7bdeec0ee9d7a3af9002ce9d4ed1c1ade2a?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e6db44c814e8d4595aa10478afb7bdeec0ee9d7a3af9002ce9d4ed1c1ade2a?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e6db44c814e8d4595aa10478afb7bdeec0ee9d7a3af9002ce9d4ed1c1ade2a?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e6db44c814e8d4595aa10478afb7bdeec0ee9d7a3af9002ce9d4ed1c1ade2a?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39e6db44c814e8d4595aa10478afb7bdeec0ee9d7a3af9002ce9d4ed1c1ade2a?placeholderIfAbsent=true"
          authorName="Product Dave"
          title="5 Types of Product Managers in High Demand Right Now"
        />
        <SuggestedPost
          postImage="https://cdn.builder.io/api/v1/image/assets/TEMP/f365f295a3e25d287864a911b92726f986264ff754f512a0c352fcbb844e5398?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f365f295a3e25d287864a911b92726f986264ff754f512a0c352fcbb844e5398?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f365f295a3e25d287864a911b92726f986264ff754f512a0c352fcbb844e5398?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f365f295a3e25d287864a911b92726f986264ff754f512a0c352fcbb844e5398?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f365f295a3e25d287864a911b92726f986264ff754f512a0c352fcbb844e5398?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f365f295a3e25d287864a911b92726f986264ff754f512a0c352fcbb844e5398?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f365f295a3e25d287864a911b92726f986264ff754f512a0c352fcbb844e5398?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f365f295a3e25d287864a911b92726f986264ff754f512a0c352fcbb844e5398?placeholderIfAbsent=true"
          authorImage="https://cdn.builder.io/api/v1/image/assets/TEMP/7652101ecc7dd4d98042349d17e0977e4e2f267ac457de504e8127ba4bd94aaf?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7652101ecc7dd4d98042349d17e0977e4e2f267ac457de504e8127ba4bd94aaf?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7652101ecc7dd4d98042349d17e0977e4e2f267ac457de504e8127ba4bd94aaf?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7652101ecc7dd4d98042349d17e0977e4e2f267ac457de504e8127ba4bd94aaf?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7652101ecc7dd4d98042349d17e0977e4e2f267ac457de504e8127ba4bd94aaf?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7652101ecc7dd4d98042349d17e0977e4e2f267ac457de504e8127ba4bd94aaf?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7652101ecc7dd4d98042349d17e0977e4e2f267ac457de504e8127ba4bd94aaf?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7652101ecc7dd4d98042349d17e0977e4e2f267ac457de504e8127ba4bd94aaf?placeholderIfAbsent=true"
          authorName="henry Anderson"
          title="How to overcome imposter syndrome at your firm"
        />
      </div>
    </aside>
  );
};