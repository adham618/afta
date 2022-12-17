import { useState } from 'react';
import * as React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

type GallerySectionProps = {
  photos: {
    src: string;
    width: number;
    height: number;
  }[];
  direction?: 'row' | 'column';
};
const GallerySection = ({ photos, direction = 'row' }: GallerySectionProps) => {
  const [index, setIndex] = useState(-1);

  const openLightbox = React.useCallback(
    // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-explicit-any
    (event: any, { photo, index }: any) => {
      setIndex(index);
    },
    []
  );
  const slides = photos.map(({ src, width, height }) => ({
    src: src,
    width,
    height,
  }));
  return (
    <div className='gallery-section'>
      <Gallery photos={photos} onClick={openLightbox} direction={direction} />

      <Lightbox
        styles={{ root: { '--yarl__color_backdrop': 'rgba(0, 0, 0, .8)' } }}
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
      />
    </div>
  );
};

export default GallerySection;
