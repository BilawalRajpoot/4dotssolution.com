export default function Video() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <video
                autoPlay
                loop
                muted
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                <source src="/assets/video/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
