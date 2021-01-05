import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import me from './images/myphoto.jpeg';
import ShowCasePage from './ShowCasePage';

export default function AboutMe(props) {

    return (
        <div className="full-container d-flex flex-column align-items-center" id={props.title}>
        <ShowCasePage image={me} previous="top" next="false">
        <h2 className="mb-4">About me</h2>
                <p>Recent Honours Graduate from the Bachelor of Commerce – Digital Business Management program at Humber College in Toronto. I am a passionate web developer looking to learn new technologies and apply them in both my personal projects and a professional setting. I’m into tech, noodles, and photography.</p>
        </ShowCasePage>
        </div>
    )
}