import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
    {
      id: 1,
      plan: 'Basic',
      price: '£49',
      features: ['Wireframing', 'Visual Design', '5 pages', 'Free Hosting', 'Support & Assistance'],
      link: 'https://www.google.com'
    },
    {
      id: 2,
      plan: 'Premium',
      price: '£149',
      features: ['Wireframing', 'Visual Design', '15 pages', 'Free Hosting', 'Support & Assistance'],
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      plan: 'Ultimate',
      price: '£349',
      features: ['Wireframing', 'Visual Design', 'Unlimited pages', 'Free Hosting', 'Support & Assistance'],
      link: 'https://www.twitter.com'
    }
  ]

export default function Pricing() {
    return(
        <section id='pricing' className='block pricing-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Pricing &amp; plans</h2>
                    <div className='subtitle'>check our pricing and plans</div>
                </div>
                <Row>
                    {
                        pricingData.map(prices => {
                            return(
                                <Col sm={4} key={prices.id}>
                                    <div className='heading'>
                                        <h3>{prices.plan}</h3>
                                        <span className='price'>{prices.price}</span>
                                    </div>
                                    <div className='content'>
                                        <ListGroup>
                                            {
                                                prices.features.map((feature, index) => {
                                                    return(
                                                        <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                                                    )
                                                    
                                                })
                                            }
                                        </ListGroup>
                                    </div>
                                    <div className='btn-holder'>
                                        <a href={prices.link} className='btn btn-primary'>Order now</a>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </Container>
        </section>
    )
}