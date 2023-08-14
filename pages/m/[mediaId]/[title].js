import React from 'react'
import ReactJWPlayer from 'react-jw-player';
import { createPlaylistLinkByMediaId } from '@/lib/playlist';
import Layout from '@/container/layout/layout';
import CustomSeo from '@/components/custom-seo/custom-seo';
// import { getWatchHistoryFromLocal, JWPLAYER_SCRIPT, saveHistoryInLocal, VideoProgressMinMax } from '../../../utils/ysOtt';
const JWPLAYER_SCRIPT = process.env.NEXT_PUBLIC_JW_PLAYER_SCRIPT;

// const useWatchHistoryListener = (saveItem) => {
//   React.useEffect(() => {
//     const visibilityListener = () => document.visibilityState === 'hidden' && saveItem();
//     window.addEventListener('beforeunload', saveItem);
//     window.addEventListener('visibilitychange', visibilityListener);

//     return () => {
//       saveItem();
//       window.removeEventListener('beforeunload', saveItem);
//       window.removeEventListener('visibilitychange', visibilityListener);
//     };
//   }, []);
// };

const JWPlayerOtt = ({ mediaData, mediaId }) => {
    // console.log(mediaId, 'is the oruter');
//   const playerRef = React.useRef(null); 
//   const seekToRef = React.useRef(-1);

  
//   const getProgress = React.useCallback(() => {
//     if (!playerRef.current) return null;
//     const progress = playerRef.current.getPosition() / playlist.duration;
//     return progress;
//   }, [playlist]);
  
  // useWatchHistoryListener(() => saveHistoryInLocal(playlist, getProgress()));

//   const handleBeforePlay = () => {
//     if (seekToRef.current > 0) {
//       playerRef.current?.seek(seekToRef.current);
//       seekToRef.current = -1;
//     }
//   };

//   const handleComplete = () => {
//     saveHistory && saveHistoryInLocal(playlist, getProgress());    
//   };
//   const handlePlay = () => {
//     saveHistory && saveHistoryInLocal(playlist, getProgress());
//   };
//   const handlePause = () => {
//     saveHistory && saveHistoryInLocal(playlist, getProgress());
//   };
  
//   const attachEvents = React.useCallback(() => {
//     playerRef.current?.on('beforePlay', handleBeforePlay);
//     playerRef.current?.on('complete', handleComplete);
//     playerRef.current?.on('play', handlePlay);
//     playerRef.current?.on('pause', handlePause);
//   }, [playerRef, handleComplete, handlePlay, handlePause, handleBeforePlay]);

//   const detachEvents = React.useCallback(() => {
//     playerRef.current?.off('complete');
//     playerRef.current?.off('play');
//     playerRef.current?.off('pause');
//   }, []);

//   React.useEffect(() => {
//     return () => {
//       if (playerRef.current) {
//         // Detaching events before component unmount
//         detachEvents();
//         // playerRef.current.remove();
//       }
//     };
//   }, [detachEvents]);

//   const calculateWatchHistoryProgress = () => {
//     const watchHistory = getWatchHistoryFromLocal();
//     const watchHistoryItem = watchHistory.find(({ mediaId }) => mediaId === playlist.mediaid);

//     if (
//       watchHistoryItem &&
//       watchHistoryItem.progress > VideoProgressMinMax.Min &&
//       watchHistoryItem.progress < VideoProgressMinMax.Max
//     ) {
//       seekToRef.current = watchHistoryItem.progress * watchHistoryItem.duration;
//     } else {
//       seekToRef.current = -1;
//     }
//   };
  
//   const initializePlayerSetup = () => {
//     // Initialize Player Ref 
//     if (!window.jwplayer || !playerId) return;
//     playerRef.current = window.jwplayer(playerId);
//     attachEvents();
//     calculateWatchHistoryProgress();
//   };
  return (
    <>
    <CustomSeo
      title={mediaData.title}
      description={mediaData.description}
      ogImage={mediaData.playlist?.[0]?.image}
    />
    <Layout>
        <ReactJWPlayer
          playerId={mediaId}
          playerScript={JWPLAYER_SCRIPT}
          playlist={mediaData}
          isMuted={false}
          isAutoPlay={false}
        //   onReady={initializePlayerSetup}
            aspectRatio="16:9"
        />
        <h1 className="container py-3 section__title">{mediaData.title}</h1>
    </Layout>
    </>
  )
}

export default JWPlayerOtt;

export async function getStaticProps({ params }) {
    const { mediaId } = params;
    const response = await fetch(createPlaylistLinkByMediaId(mediaId));
    const mediaData = await response.json();
    return {
        props: {
            mediaData,
            mediaId
        }
    }
}

export async function getStaticPaths() {
    return {
        paths:[],
        fallback: 'blocking'
    };
};