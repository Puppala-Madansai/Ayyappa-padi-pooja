import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShieldCheck, HandHeart } from "lucide-react";

export default function Home() {
  const values = [
    {
      title: "Devotion (Bhakti)",
      icon: <Heart className="w-10 h-10 text-pink-600 mx-auto" />,
      content:
        "Swamiye Saranam Ayyappa 🙏 Devotion is the soul of the Ayyappa Padi Pooja. Singing bhajans, chanting His holy name, and offering pooja with a pure heart brings peace, strength, and divine blessings.",
      bg: "https://tse4.mm.bing.net/th/id/OIP.8qOkFqw39JH8KXQDpk6LdQHaHS?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3", // Replace with better Ayyappa image
    },
    {
      title: "Discipline (Niyamam)",
      icon: <ShieldCheck className="w-10 h-10 text-green-600 mx-auto" />,
      content:
        "Discipline prepares the devotee to receive Lord Ayyappa’s grace. By following vratham, purity of thoughts, humility, and truth, one walks the path of spiritual strength and harmony.",
      bg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title: "Service (Seva)",
      icon: <HandHeart className="w-10 h-10 text-indigo-600 mx-auto" />,
      content:
        "Service is the highest offering to Lord Ayyappa. Helping fellow devotees, supporting poojas, and contributing selflessly reflects Ayyappa’s teaching of Tat Tvam Asi — You are Divine.",
      bg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
  ];

  return (
    <section className="text-center">
      {/* Hero Section with Ayyappa Background */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://www.wherevart.com/wp-content/uploads/2021/02/Sabarimala-Ayyappa-Temple-Tourist-Guide-min.jpg')`,
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-16 text-white">
          <h1 className="font-dev text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Swamiye Sharanam Ayyappa 🙏
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
            Join devotees worldwide. View upcoming Padi Poojas, add your event, and celebrate devotion together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/poojas"
              className="btn-primary bg-white text-ayyappa-orange hover:bg-gray-100"
            >
              View Poojas
            </Link>
            <Link
              to="/add"
              className="btn-gold bg-ayyappa-gold text-black hover:bg-yellow-400"
            >
              Add Your Pooja
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {values.map((item, i) => (
          <div
            key={i}
            className="relative rounded-2xl shadow-lg p-6 text-center border hover:shadow-2xl transition overflow-hidden"
            style={{
              backgroundImage: `url('${item.bg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4">{item.icon}</div>
              <div className="text-xl font-bold text-ayyappa-orange mb-2">
                {item.title}
              </div>
              <p className="text-sm text-gray-800">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
