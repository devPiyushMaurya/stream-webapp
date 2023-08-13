import React from 'react';
import { fetchPlaylistById } from '@/lib/playlist';
import Layout from '@/container/layout/layout';
import PlaylistData from '@/fixtures/playlist.json';
import GalleryView from '@/container/sections/gallery-view';
import BannerView from '@/container/sections/banner-view';
import CustomSeo from '@/components/custom-seo/custom-seo';

const HomePage = (props) => {
  const { sectionFetchedData = {} } = props;
  return (
    <>
    <CustomSeo
      title="Explore the Ultimate World of Entertainment with Our OTT Web App"
      description="Immerse yourself in a world of limitless entertainment through our cutting-edge OTT web app. Stream movies, TV shows, and more, all in one place. Discover a new era of online entertainment today."
      ogImage="https://assets.gumlet.io/public/img/image-optimization/v2/responsive.png?w=640&q=75"
    />
    <Layout>
      {PlaylistData.content.map((section) => {
        if (section.featured) {
          return <BannerView key={section.contentId} sectionData={sectionFetchedData[section.contentId]} section={section} />
        } else {
          return <GalleryView key={section.contentId} sectionData={sectionFetchedData[section.contentId]} section={section} />
        }
        })}
    </Layout>
    </>
  )
}

export default HomePage;

export const getStaticProps = async () => {
  const staticFile = require('@/fixtures/playlist.json');
  const sectionData = await Promise.all(staticFile.content.map(content => fetchPlaylistById(content.contentId)));
  const sectionFetchedData = sectionData.reduce((acc, item) => {
    acc[item.feedid] = item;
    return acc;
  }, {});
  return {
    props: {
      sectionFetchedData
    }
  }
};
