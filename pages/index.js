import React from 'react';
import { fetchPlaylistById } from '@/lib/playlist';
import Layout from '@/container/layout/layout';
import PlaylistData from '@/fixtures/playlist.json';
import GalleryView from '@/container/sections/gallery-view';
import BannerView from '@/container/sections/banner-view';
import CustomSeo from '@/components/custom-seo/custom-seo';
import { DEFAULT_META_DESC, DEFAULT_META_IMG, DEFAULT_META_TITLE } from '@/lib/assets';

const HomePage = (props) => {
  const { sectionFetchedData = {} } = props;
  return (
    <>
    <CustomSeo
      title={DEFAULT_META_TITLE}
      description={DEFAULT_META_DESC}
      ogImage={DEFAULT_META_IMG}
    />
    <Layout>
      {PlaylistData.content.map((section, index) => {
        if (section.featured) {
          return <BannerView mappingIndex={index} key={section.contentId} sectionData={sectionFetchedData[section.contentId]} section={section} />
        } else {
          return <GalleryView mappingIndex={index} key={section.contentId} sectionData={sectionFetchedData[section.contentId]} section={section} />
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
