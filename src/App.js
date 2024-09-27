import 'bulma/css/bulma.css';

import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Virtual Digital Assistants
                    </p>
                </div>
            </section>

            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={AlexaImage}
                                description="Alexa is made by Amazon."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                image={CortanaImage}
                                description="Cortana created by Microsoft was converted into different software integrations."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                image={SiriImage}
                                description="Siri is made by Apple."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;