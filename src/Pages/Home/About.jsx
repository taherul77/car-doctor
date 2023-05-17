/* eslint-disable react/no-unescaped-entities */
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-white border-8 rounded-lg shadow-2xl" />

    </div>
   
    <div className='lg:w-1/2'>
        <h3 className='text-3xl text-orange-700 py-6'>About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-2 pt-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <p className="py-2 pb-6">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-500">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;