import React from 'react'
import Rating from '../Rating/Rating';
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div>
        {/* Hero Section */}
        <section>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2020/03/02/04/47/network-4894813_1280.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-[90%]">
                <h1 className="mb-5 text-5xl max-sm:text-3xl font-bold">Secure Your Voice, Empower Your Community with Decentralized Voting</h1>
                <p className="mb-5 max-sm:text-xl">Revolutionize the way you make decisions with BlockProffer, the decentralized voting platform. Empower your community by creating and participating in secure, transparent, and tamper-proof voting processes. Say goodbye to intermediaries and make your voice heard with blockchain technology. Join the future of fair and democratic voting now.</p>
                <div className='flex items-center justify-center gap-[1rem]'>
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-primary">Documentation</button>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Features Section */}

        <section className="py-20">
            <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-[2rem]">
                <h1 className="text-4xl font-bold">Features</h1>
                <p className="text-center">BlockProffer is a decentralized voting platform that allows you to create and participate in secure, transparent, and tamper-proof voting processes. Say goodbye to intermediaries and make your voice heard with blockchain technology. Join the future of fair and democratic voting now.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-10">
                <div className="flex flex-col items-center justify-center gap-[1rem]">
                <div className="w-[10rem] h-[10rem] bg-primary rounded-full flex items-center justify-center">
                <i className="fa-solid fa-lock text-[5rem] text-[#fff]"></i>
                </div>
                <h1 className="text-2xl font-bold">Secure</h1>
                <p className="text-center">BlockProffer is a decentralized voting platform that allows you to create and participate in secure, transparent, and tamper-proof voting processes. Say goodbye to intermediaries and make your voice heard with blockchain technology. Join the future of fair and democratic voting now.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-[1rem]">
                <div className="w-[10rem] h-[10rem] bg-primary rounded-full flex items-center justify-center">
                <div className='text-[15rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 5H5v6h6V5zm2 0v6h6V5h-6zm6 8h-6v6h6v-6zm-8 6v-6H5v6h6zM3 3h18v18H3V3z" fill="rgba(255,255,255,1)"/></svg>
                </div>
                </div>
                <h1 className="text-2xl font-bold">Transparent</h1>
                <p className="text-center">BlockProffer is a decentralized voting platform that allows you to create and participate in secure, transparent, and tamper-proof voting processes. Say goodbye to intermediaries and make your voice heard with blockchain technology. Join the future of fair and democratic voting now.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-[1rem]">
                <div className="w-[10rem] h-[10rem] bg-primary rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-shield-halved text-[5rem] text-[#fff]"></i>
                </div>
                <h1 className="text-2xl font-bold">Tamper-proof</h1>
                <p className="text-center">BlockProffer is a decentralized voting platform that allows you to create and participate in secure, transparent, and tamper-proof voting processes. Say goodbye to intermediaries and make your voice heard with blockchain technology. Join the future of fair and democratic voting now.</p>
                </div>
            </div>
            </div>
        </section>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        {/* Live Poll Tally */}

        <section className='py-20 flex flex-col justify-center align-center flex-wrap gap-[2rem]'>

            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-center text-4xl font-bold'>
                    Live Poll Stats
                </h1>
                <p className='text-center text-2xl'>
                    These are the live stats of the current Public Poll.
                </p>
            </div>
            <div className='flex justify-center align-center flex-wrap gap-[2rem]'>
            <div className="stats bg-primary text-primary-content">
                <div className="stat text-center flex justify-center flex-col gap-[1rem] align-center">
                    <div className="stat-title">Live Poll</div>
                    <div className='text-3xl font-[700]'>Poll Title</div>
                    <div className=''>
                        <div className="radial-progress" style={{"--value":80}}>80%</div>
                    </div>
                    <div className="stat-actions">
                    <button className="btn btn-active font-[800]">Enter Poll</button>
                    </div>
                </div>
            </div>
            <div className="stats bg-primary text-primary-content">
                <div className="stat text-center flex justify-center flex-col gap-[1rem] align-center">
                    <div className="stat-title">Live Poll</div>
                    <div className='text-3xl font-[700]'>Poll Title</div>
                    <div className=''>
                        <div className="radial-progress" style={{"--value":75}}>75%</div>
                    </div>
                    <div className="stat-actions">
                    <button className="btn btn-active font-[800]">Enter Poll</button>
                    </div>
                </div>
            </div>
            <div className="stats bg-primary text-primary-content">
                <div className="stat text-center flex justify-center flex-col gap-[1rem] align-center">
                    <div className="stat-title">Live Poll</div>
                    <div className='text-3xl font-[700]'>Poll Title</div>
                    <div className=''>
                        <div className="radial-progress" style={{"--value":90}}>90%</div>
                    </div>
                    <div className="stat-actions">
                    <button className="btn btn-active font-[800]">Enter Poll</button>
                    </div>
                </div>
            </div>
            <div className="stats bg-primary text-primary-content">
                <div className="stat text-center flex justify-center flex-col gap-[1rem] align-center">
                    <div className="stat-title">Live Poll</div>
                    <div className='text-3xl font-[700]'>Poll Title</div>
                    <div className=''>
                        <div className="radial-progress" style={{"--value":30}}>30%</div>
                    </div>
                    <div className="stat-actions">
                    <button className="btn btn-active font-[800]">Enter Poll</button>
                    </div>
                </div>
            </div>
            <div className="stats bg-primary text-primary-content">
                <div className="stat text-center flex justify-center flex-col gap-[1rem] align-center">
                    <div className="stat-title">Live Poll</div>
                    <div className='text-3xl font-[700]'>Poll Title</div>
                    <div className=''>
                        <div className="radial-progress" style={{"--value":43}}>43%</div>
                    </div>
                    <div className="stat-actions">
                    <button className="btn btn-active font-[800]">Enter Poll</button>
                    </div>
                </div>
            </div>
            <div className="stats bg-primary text-primary-content">
                <div className="stat text-center flex justify-center flex-col gap-[1rem] align-center">
                    <div className="stat-title">Live Poll</div>
                    <div className='text-3xl font-[700]'>Poll Title</div>
                    <div className=''>
                        <div className="radial-progress" style={{"--value":55}}>55%</div>
                    </div>
                    <div className="stat-actions">
                    <button className="btn btn-active font-[800]">Enter Poll</button>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        {/* Integrations */}

        <section className='py-20 flex flex-col justify-center align-center flex-wrap gap-[2rem]'>
            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-center text-4xl font-bold'>
                    Integrations
                </h1>
                <p className='text-center text-2xl'>
                    These are the Wallets and Dapps that we have integrated with.
                </p>
            </div>
            <div className='flex justify-center align-center flex-wrap gap-[2rem]'>
                <div className='flex flex-col justify-center align-center bg-base-content pt-[1rem] pb-[1rem] pl-[2.5rem] pr-[2.5rem] rounded-xl gap-[1rem]'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg' alt='metamask'/>
                    <p className='text-center text-2xl font-bold text-base-200'>Metamask</p>
                </div>
                <div className='flex flex-col justify-center align-center bg-base-content pt-[1rem] pb-[1rem] pl-[2.5rem] pr-[2.5rem] rounded-xl gap-[1rem]'>
                    <img src='https://logosarchive.com/wp-content/uploads/2022/02/Fortmatic-icon.svg' alt='fortmatic'/>
                    <p className='text-center text-2xl font-bold text-base-200'>Fortmatic</p>
                </div>
                <div className='flex flex-col justify-center align-center bg-base-content pt-[1rem] pb-[1rem] pl-[2.5rem] pr-[2.5rem] rounded-xl gap-[1rem]'>
                    <img src='https://www.portis.io/static/logo-small.svg' alt='portis'/>
                    <p className='text-center text-2xl font-bold text-base-200'>Portis</p>
                </div>

                <div className='flex flex-col justify-center align-center bg-base-content pt-[1rem] pb-[1rem] pl-[2.5rem] pr-[2.5rem] rounded-xl gap-[1rem]'>
                    <div>
                    <svg viewBox="0 0 353 512" xmlns="http://www.w3.org/2000/svg"><path d="m176.478 0c-70.237 0-127.078 56.842-127.078 127.079v47.628c-24.665 4.465-49.4 10.418-49.4 18.143v248.56s0 6.874 7.725 10.135c27.996 11.34 138.135 50.32 163.438 59.251 3.26 1.205 4.181 1.205 5.032 1.205 1.205 0 1.772 0 5.032-1.205 25.302-8.93 135.725-47.911 163.721-59.251 7.158-2.977 7.442-9.852 7.442-9.852v-248.843c0-7.725-24.381-13.962-49.116-18.143v-47.628c.354-70.237-56.842-127.079-126.796-127.079zm0 60.74c41.391 0 66.41 25.019 66.41 66.41v41.39c-46.423-3.26-86.042-3.26-132.748 0v-41.39c0-41.462 25.018-66.41 66.338-66.41zm-.283 168.753c57.763 0 106.241 4.465 106.241 12.474v155.073c0 2.41-.283 2.693-2.41 3.544-2.055.921-98.515 35.72-98.515 35.72s-3.899 1.206-5.033 1.206c-1.204 0-5.032-1.489-5.032-1.489s-96.46-34.8-98.516-35.72c-2.055-.922-2.41-1.206-2.41-3.545v-155.073c-.567-8.009 47.912-12.19 105.675-12.19z"/></svg>
                    </div>
                    <p className='text-center text-2xl font-bold text-base-200'>Trezor</p>
                </div>

                <div className='flex flex-col justify-center align-center bg-base-content pt-[1rem] pb-[1rem] pl-[2.5rem] pr-[2.5rem] rounded-xl gap-[1rem]'>
                    <img src='https://walletconnect.com/_next/static/media/logo_mark.84dd8525.svg' alt='walletconnect'/>
                    <p className='text-center text-2xl font-bold text-base-200'>WalletConnect</p>
                </div>
                <div className='flex flex-col justify-center align-center bg-base-content pt-[1rem] pb-[1rem] pl-[2.5rem] pr-[2.5rem] rounded-xl gap-[1rem]'>
                    <img src='https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.svg' alt='coinbase'/>
                    <p className='text-center text-2xl font-bold text-base-200'>Coinbase</p>
                </div>
                <div className='flex flex-col justify-center align-center bg-base-content pt-[1rem] pb-[1rem] pl-[2.5rem] pr-[2.5rem] rounded-xl gap-[1rem]'>
                    <img src='https://developers.ledger.com/assets/img/logos/ledger-square.svg' alt='ledger'/>
                    <p className='text-center text-2xl font-bold text-base-200'>Ledger</p>
                </div>
            </div>
        </section>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        {/* CTA Section */}
        
        <section className="py-20">
            <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-[2rem]">
                <h1 className="text-4xl font-bold">Ready to get started?</h1>
                <p className="text-center">BlockProffer is a decentralized voting platform that allows you to create and participate in secure, transparent, and tamper-proof voting processes. Say goodbye to intermediaries and make your voice heard with blockchain technology. Join the future of fair and democratic voting now.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            </div>
        </section>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        {/* Frequently Asked Questions */}

        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-[2rem]">
                    <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                    <p className="text-center">BlockProffer is a decentralized voting platform that allows you to create and participate in secure, transparent, and tamper-proof voting processes. Say goodbye to intermediaries and make your voice heard with blockchain technology. Join the future of fair and democratic voting now.</p>
                </div>
                
                <div className="pt-[3rem] flex felx-wrap items-center justify-center gap-[2rem] border-solid rounded-2xl max-sm:flex-col">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">How do I create a new Poll? </h2>
                            <p>Just follow to the button and simply fill the form as directed.</p>
                            <div className="card-actions justify-end">
                            <Link to='/createpolls' className="btn btn-primary">Goto Create Poll</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">How do we take part in a Live Poll</h2>
                            {/* <p>Live Poll </p> */}
                            <div className="card-actions justify-end">
                            <Link to='/livepolls' className="btn btn-primary">Goto Live Poll</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">How does BlockProffer actually work?</h2>
                            <p>Please Follow our Documentation which will help you get started with BlockProffer.</p>
                            <div className="card-actions justify-end">
                            <Link className="btn btn-primary">Goto Documentation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}

        {/* Rating */}
        <Rating />
    </div>
  )
}

export default Home