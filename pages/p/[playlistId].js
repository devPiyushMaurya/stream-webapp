import CustomSeo from '@/components/custom-seo/custom-seo';
import MovieCard from '@/components/movie-card/card';
import Layout from '@/container/layout/layout';
import { fetchPlaylistById } from '@/lib/playlist';
import React from 'react'

const Playlist = (props) => {
  const { playlistData } = props;
  return (
    <>
    <CustomSeo
      title={playlistData.title}
    />
    <Layout>
      <h1 className="container py-3 section__title">{playlistData.title}</h1>
      <div className="d-flex container flex-wrap gap__flex">
        {playlistData.playlist.map((item) => <MovieCard data={item} key={item.contentId} />)}
      </div>
    </Layout>
    </>
  )
}

export default Playlist;

export async function getStaticProps({ params }) {
    const { playlistId } = params;
    const playlistData = await fetchPlaylistById(playlistId);
    return {
      props: {
        playlistData
      }
    }
};

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
};