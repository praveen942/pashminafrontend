import { VscMute, VscUnmute } from 'react-icons/vsc'
import { useEffect, useRef, useState } from 'react'

import VisibilitySensor from 'react-visibility-sensor';

const Video = () => {
  const [mute, setMute] = useState(true)

  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
    } else {
      if (videoRef.current.play) {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div id="videoComp">
      <div>
        <h2 className="text-center font-Orpheu text-4xl md:text-{40} 2xl:text-5xl">
          Epitome of Luxury Fashion
        </h2>
        <div className="py-4 sm:mb-8">
          <div className="w-28 mx-auto border-2 border-red-900"></div>
        </div>
      </div>
      <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
        <div className="md:h-auto relative">
          <video
            ref={videoRef}
            preload
            playsInline
            loop
            muted={mute}
            width="auto"
            className="w-full h-[450px] lg:h-[80vh] object-cover"
          >
            <source src="/images/video/Pashmina the Incredible Art.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-0 left-0 p-3">
            {mute ? (
              <VscMute
                className="text-lg text-white"
                onClick={() => setMute(false)}
              />
            ) : (
              <VscUnmute
                className="text-lg text-white "
                onClick={() => setMute(true)}
              />
            )}
          </div>
        </div>
      </VisibilitySensor>
    </div>
  )
}

export default Video
