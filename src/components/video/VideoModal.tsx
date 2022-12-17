import * as React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

type VideoModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  videoID: string;
};
export default function VideoModal({
  showModal,
  setShowModal,
  videoID,
}: VideoModalProps) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
      {showModal && (
        <>
          <div
            onClick={() => setShowModal(false)}
            className='top-[-200px] tw-fixed tw-inset-0 tw-z-[9999] tw-min-h-screen tw-cursor-pointer tw-bg-black/50 tw-transition-all tw-duration-300'
          ></div>
          <div className='tw-fixed tw-left-1/2 tw-top-1/2 tw-z-[99999] tw-h-[300px] tw-max-h-[90vh] tw-w-[1086px] tw-max-w-[90%] tw--translate-x-1/2  tw--translate-y-1/2 tw-transform sm:tw-h-[600px]'>
            <YouTube
              className='tw-h-full tw-w-full'
              videoId={videoID}
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        </>
      )}
    </>
  );
}
