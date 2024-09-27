import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

let testimonialsData = [
    {
      id: 1,
      name: 'John Wills',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat,quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
      designation: 'Manager'
    },
    {
      id: 2,
      name: 'Jasmine Perry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!',
      designation: 'Accountant'
    },
    {
      id: 3,
      name: 'Rocky Johnson',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
      designation: 'CEO'
    }
  ]
export default function Testimonials() {
    return(
        <section id='testimonials' className='testimonials-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Client Testimonials</h2>
                    <div className='subtitle'>what client says about us</div>
                </div>

            <Carousel controls={false}>
                {
                    testimonialsData.map(testimoni => {
                        return(
                            <Carousel.Item key={testimoni.id}>
                                <blockquote>
                                    <p>{testimoni.description}</p>
                                    <cite>
                                        <span className='name'>{testimoni.name}</span>
                                        <span className='designation'>{testimoni.designation}</span>
                                    </cite>
                                </blockquote>
                            </Carousel.Item>
                        )
                    })
                }
                
            </Carousel>
            </Container>
            
        </section>
    )
}