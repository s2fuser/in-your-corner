const VideoPlayer = () => {
    return (
        <div className="flex justify-center py-8 px-2">
            <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen className="rounded-[20px] lg:w-[900px] lg:h-[450px] h-[220px] w-[500px] md:h-[260px]"></iframe>
        </div>
    )
};

export default VideoPlayer;