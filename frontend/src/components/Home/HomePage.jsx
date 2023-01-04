import videoHomePage from '../../assets/video-homepage.mp4'

const HomePage = (props) => {
    return (  
        <>
            <video autoPlay muted loop>
                <source
                    src={videoHomePage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-container'>
                <div>
                    <h1 className='title'>There's a better way to ask</h1>
                </div>
                <div>
                    <p className='desc'>You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</p>
                </div>
                <div>
                    <button className='register'>Get started - it's free</button>
                </div>
            </div>
        </>
    );
}

export default HomePage;