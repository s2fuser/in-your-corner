import React, { useRef, useState, useEffect } from "react";
import videobg from "../../Assets/videoplayback (1).mp4";
import homebgimg from "../../Assets/Images/homepagebgimg.jpg";
const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};
// const mainVideo ="https://player.vimeo.com/video/944871624"
const Bgvideo = () => {
    const videoParentRef = useRef<HTMLDivElement>(null);
    const [shouldUseImage, setShouldUseImage] = useState<boolean>(false);
    useEffect(() => {
        if (isSafari() && videoParentRef.current) {
            const player = videoParentRef.current.children[0] as HTMLVideoElement;

            if (player) {
                player.controls = false;
                player.playsInline = true;
                player.muted = true;
                player.setAttribute("muted", "");
                player.autoplay = true;

                setTimeout(() => {
                    const promise = player.play();
                    if (promise && promise.then) {
                        promise
                            .then(() => { })
                            .catch(() => {
                                videoParentRef.current!.style.display = "none";
                                setShouldUseImage(true);
                            });
                    }
                }, 0);
            }
        }
    }, []);
    return shouldUseImage ? (
        <img src={homebgimg} alt="Muted Video" />
    ) : (
        <div>
        <div
          ref={videoParentRef}
          dangerouslySetInnerHTML={{
            __html: `  <video
            class="object-cover object-center w-full h-[350px] md:h-[482px] lg:h-[630px] xl:h-[883px]"
            loop
            muted
            autoplay
            playsinline
            preload="metadata"
          >
          <source src="${videobg}" type="video/mp4" />
          </video>`
          }}
        />
      </div>
    )
}

export default Bgvideo
