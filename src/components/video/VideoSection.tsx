/* eslint-disable @next/next/no-img-element */
import React from 'react';

import VideoModal from '@/components/video/VideoModal';

const VideoSection = ({
  image,
  videoID,
}: {
  image: string;
  videoID: string;
}) => {
  const [ShowVideoModal, setShowVideoModal] = React.useState(false);
  return (
    <div className='video-section lg:p-4'>
      <button
        onClick={() => setShowVideoModal(true)}
        className='video-box tw-border-none'
      >
        <img src={image} alt='video-bg' />
        <span className='play-icon !tw-h-[50px] !tw-w-[50px] sm:!tw-h-[100px] sm:!tw-w-[100px]'>
          <img src='/images/icons/play-icon.png' alt='play' />
        </span>
      </button>
      {ShowVideoModal && (
        <VideoModal
          showModal={ShowVideoModal}
          setShowModal={setShowVideoModal}
          videoID={videoID}
        />
      )}
    </div>
  );
};

export default VideoSection;
