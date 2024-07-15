import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowDownCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/hijjab.png'
import Resume from './Sagirah.pdf'

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [ isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Flutter Developer','UI/UX Designer','Graphics Designer','Web Developer'];
    const [text, setText] =  useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect( () =>{
        let ticker = setInterval(() =>{
          tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);


        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText){
           setIsDeleting(true);
           setDelta(period);
        } else if(isDeleting && updatedText ===""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
            
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={1} md={5} xl={6}>
                    <span className="tagline">Welcome To My Portfolio</span>
                    <h1>{` Hi! I Am `}</h1>
                    <h2>{'Fatima Abubakar Sadiq'}</h2>
                    <h6>A</h6>
                    <span className="wrap">{text}</span>
                    
                    <p>A passionate digital designer with over 2 years experience<br />in online content, design and development. Known for my
hardworking ethic and exceptional people skills.</p>
<a href={Resume} download>
<button onClick={() => console.log('connect')}>Download CV<ArrowDownCircle size={25}/></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}