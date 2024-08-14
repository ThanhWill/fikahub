import React from 'react';
import NcImage from '@/shared/NcImage/NcImage';
import slackImg from '@/images/slack.png';
import alegriaImg from '@/images/alegia.png';
import asanaImg from '@/images/asana.png';
import githubImg from '@/images/github.png';
import loomImg from '@/images/loom.png';
import makeImg from '@/images/make.png';
import gitlabImg from '@/images/gitlab.png';
import gubbinsImg from '@/images/gubbins.png';
import ignyImg from '@/images/igny.png';
import stripeImg from '@/images/stripe.png';
import combinatorImg from '@/images/combinator.png';

const imageList = [
  { img: slackImg, alt: 'Slack' },
  { img: alegriaImg, alt: 'Alegria Group' },
  { img: asanaImg, alt: 'Asana' },
  { img: githubImg, alt: 'GitHub' },
  { img: loomImg, alt: 'Loom' },
  { img: makeImg, alt: 'Make' },
  { img: gitlabImg, alt: 'GitLab' },
  { img: gubbinsImg, alt: 'Gubbins' },
  { img: ignyImg, alt: 'Ignyte' },
  { img: stripeImg, alt: 'Stripe' },
  { img: combinatorImg, alt: 'Y Combinator' }
];

const ListImg = () => {
  return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-center text-3xl md:text-4xl font-semibold'>
          Trusted by our customers & partners
        </h2>
        <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6'>
          {imageList.map((item, index) => (
            <div
              key={index}
              className='col-span-1 flex justify-center'>
              <NcImage
                containerClassName='mb-4 sm:mb-10 max-w-[320px] mx-auto'
                src={item.img}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
  );
};

export default ListImg;
