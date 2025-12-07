import { useState, useEffect } from "react";

export default function TimeBlock() {
  const [time, setTime] = useState({
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 41
  });

  const socIcons = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Path"
            d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
            fill="currentColor"
          />
        </svg>
      ),
      link: "https://www.facebook.com/"
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.36C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0Z"
            fill="currentColor"
          />
        </svg>
      ),
      link: "https://www.pinterest.com/"
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
            fill="currentColor"
          />
        </svg>
      ),
      link: "https://www.instagram.com/"
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-slate-800 bg-opacity-60 backdrop-blur-sm rounded-lg  min-w-[100px] shadow-xl">
        <div className="text-5xl font-bold text-pink-400">
          {String(value).padStart(2, "0")}
        </div>
      </div>
      <div className="text-slate-400 text-xs uppercase tracking-widest mt-3">
        {label}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-screen bg-linear-to-b from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`
            }}
          />
        ))}
      </div>

      {/* Mountain silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <svg
          viewBox="0 0 1200 300"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 L0,200 L200,100 L400,180 L600,80 L800,160 L1000,120 L1200,200 L1200,300 Z"
            fill="rgba(30, 27, 75, 0.8)"
          />
          <path
            d="M0,300 L0,220 L300,140 L500,200 L700,120 L900,180 L1200,160 L1200,300 Z"
            fill="rgba(20, 17, 50, 0.9)"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-sm uppercase tracking-[0.3em] mb-12">
          We're Launching Soon
        </h1>

        <div className="flex gap-6 justify-center mb-16">
          <TimeBox value={time.days} label="Days" />
          <TimeBox value={time.hours} label="Hours" />
          <TimeBox value={time.minutes} label="Minutes" />
          <TimeBox value={time.seconds} label="Seconds" />
        </div>

        {/* Social icons */}
        <div className="flex gap-8 justify-center mt-[252px]">
          {socIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              className="text-green-400 hover:text-pink-400 transition-all duration-300 cursor-pointer hover:scale-110"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
