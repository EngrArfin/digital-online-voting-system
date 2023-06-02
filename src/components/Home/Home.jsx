import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h2>
                 {user && <span>{user.displayName}</span>}
            </h2>
<div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/public/voting1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Online Voting System!</h1>
      <p className="py-6"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
       Modi officiis dolorum, nihil iure re <br />
       obcaecati inventore harum perspiciatis aspernatur, magnam et ipsam error. <br /> .</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

</div>

{/* Below Header */}
<div>
  <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="/public/voting12.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="/public/voting1.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="/public/voting12.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="/public/voting11.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>

</div>

{/* Election Comession photo */}

<div className='flex'>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/public/voting13.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Vote!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Press Vote</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/public/voting13.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Vote!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Press Vote</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/public/voting13.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Vote!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Press Vote</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/public/voting13.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Vote!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Press Vote</button>
    </div>
  </div>
</div>
</div>



{/* Footer Here */}
<div>
<footer className="footer p-10 bg-base-300 text-base-content">
  <div>
    <span className="text-primary footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
</div>
</div>
        
    );
};
export default Home;